import fs from 'fs';
import path from 'path';

const csvHomePath = path.join(process.cwd(), 'Landing+principal+ciudades.csv');
const csvSalasPath = path.join(process.cwd(), 'Landing+de+Salas+de+Juicios+Orales.csv');
const jsonPath = path.join(process.cwd(), 'src', 'data', 'landings.json');

// Parse CSV line by line respecting quoted strings with commas and line breaks inside quotes
function parseCSV(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const next = text[i+1];
    if (c === '"') {
      if (inQuotes && next === '"') { // escaped quote
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (c === ',' && !inQuotes) {
      row.push('');
    } else if ((c === '\r' || c === '\n') && !inQuotes) {
      if (c === '\r' && next === '\n') {
        i++;
      }
      lines.push(row);
      row = [''];
    } else {
      row[row.length - 1] += c;
    }
  }
  if (row.length > 1 || row[0] !== '') {
    lines.push(row);
  }
  return lines;
}

function processCSVFile(filePath, type) {
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: CSV file not found at ${filePath}`);
    return [];
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const parsed = parseCSV(content);
  if (parsed.length === 0) return [];
  
  const headers = parsed[0].map(h => h.trim().replace(/^"|"$/g, ''));
  const rows = parsed.slice(1);
  const result = [];

  for (const r of rows) {
    if (r.length < headers.length) continue;
    
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = r[idx];
    });
    
    const getField = (obj, ...keys) => {
      for (const k of keys) {
        if (obj[k] !== undefined) return obj[k];
      }
      const entries = Object.entries(obj);
      for (const k of keys) {
        const match = entries.find(([key]) => key.toLowerCase().includes(k.toLowerCase()));
        if (match) return match[1];
      }
      return '';
    };

    const frase = getField(obj, 'Frase', 'frase', 'Title', 'title');
    const slug = getField(obj, 'slug');
    const titulo = getField(obj, 'Titulo de página', 'Titulo de p', 'titulo');
    const excerpt = getField(obj, 'Excerpt d', 'Excerpt');
    const seoTitle = getField(obj, 'Titulo de SEO', 'seoTitle', 'SEO');
    const seoDescription = getField(obj, 'Metadescripción', 'Metadescrip', 'desc');
    const whatsappUrl = getField(obj, 'whatsapp url', 'whatsapp');
    const ciudad = getField(obj, 'Ciudad', 'ciudad');
    const estado = getField(obj, 'Estado', 'estado');
    const palabra = getField(obj, 'Palabra', 'palabra');
    const id = getField(obj, 'ID', 'id');

    if (!slug) continue;

    result.push({
      type,
      frase,
      slug,
      titulo,
      excerpt,
      seoTitle,
      seoDescription,
      whatsappUrl,
      ciudad,
      estado,
      palabra,
      id
    });
  }
  return result;
}

console.log('Running auto-parser for CSV content databases...');
const homeLandings = processCSVFile(csvHomePath, 'home');
const salasLandings = processCSVFile(csvSalasPath, 'salas');
const combined = [...homeLandings, ...salasLandings];

// Ensure the directory exists
const dir = path.dirname(jsonPath);
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(jsonPath, JSON.stringify(combined, null, 2), 'utf8');
console.log(`Successfully parsed:
- ${homeLandings.length} home landings
- ${salasLandings.length} salas landings
Total: ${combined.length} landing rows into ${jsonPath}`);
