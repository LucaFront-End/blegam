import { useState } from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  XCircle, 
  CheckCircle2, 
  Clock, 
  Lock, 
  ScanFace, 
  FileX, 
  Database, 
  Zap, 
  ArrowRight, 
  Key, 
  ShieldAlert,
  SlidersHorizontal
} from 'lucide-react';
import './AccessComparisonInteractive.css';

export default function AccessComparisonInteractive() {
  return (
    <div className="comparison-interactive-container">
      {/* Section Header */}
      <div className="comparison-header text-center">
        <span className="badge badge-accent mb-3">
          <SlidersHorizontal size={14} className="mr-1 inline-block" />
          Evolución del Control de Accesos
        </span>
        <h2 className="comparison-title">
          Sistema Tradicional vs. <span className="accent-gradient">Ecosistema Inteligente BLEGAM</span>
        </h2>
        <p className="comparison-subtitle">
          Compara cómo la tecnología de BLEGAM elimina vulnerabilidades, automatiza bitácoras y agiliza el flujo de personas.
        </p>
      </div>

      {/* Main Dual Cards Grid */}
      <div className="comparison-cards-grid">
        {/* TRADITIONAL CARD */}
        <div className="comp-card card-traditional">
          <div className="comp-card-badge badge-danger">
            <AlertTriangle size={16} className="mr-1" />
            SISTEMA TRADICIONAL — RIESGO ELEVADO
          </div>

          <div className="comp-card-header">
            <div className="comp-icon-box box-danger">
              <Key size={32} />
            </div>
            <div>
              <h3 className="comp-card-title">Acceso Analógico / Convencional</h3>
              <span className="comp-card-sub">Llaves físicas, chapa metálica y bitácora en papel</span>
            </div>
          </div>

          <div className="comp-metrics-strip strip-danger">
            <div className="comp-metric-item">
              <span className="m-val text-danger">45 - 60s</span>
              <span className="m-lbl">TIEMPO POR ACCESO</span>
            </div>
            <div className="comp-metric-item">
              <span className="m-val text-danger">ALTA</span>
              <span className="m-lbl">VULNERABILIDAD</span>
            </div>
            <div className="comp-metric-item">
              <span className="m-val text-danger">NULA</span>
              <span className="m-lbl">TRAZABILIDAD</span>
            </div>
          </div>

          <ul className="comp-points-list">
            <li className="point-item item-negative">
              <XCircle size={20} className="icon-neg" />
              <div>
                <strong>Llaves físicas y tarjetas de uso común</strong>
                <p>Susceptibles a clonación, pérdida o duplicados no autorizados sin control central.</p>
              </div>
            </li>
            <li className="point-item item-negative">
              <XCircle size={20} className="icon-neg" />
              <div>
                <strong>Bitácoras manuales impresas</strong>
                <p>Lentas de llenar en recepción, propensas a pérdida, ilegibilidad o alteración de datos.</p>
              </div>
            </li>
            <li className="point-item item-negative">
              <XCircle size={20} className="icon-neg" />
              <div>
                <strong>Cuellos de botella en horas pico</strong>
                <p>Aglomeración de empleados y visitantes por lentitud en el proceso de registro verbal.</p>
              </div>
            </li>
            <li className="point-item item-negative">
              <XCircle size={20} className="icon-neg" />
              <div>
                <strong>Reacción tardía ante extravío o bajas</strong>
                <p>Requiere cambio de cerraduras o re-impresión masiva para revocar el paso a un exsello.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* BLEGAM INTELLIGENT CARD */}
        <div className="comp-card card-blegam">
          <div className="comp-card-badge badge-success">
            <Zap size={16} className="mr-1" />
            ECOSISTEMA BLEGAM — MÁXIMA SEGURIDAD
          </div>

          <div className="comp-card-header">
            <div className="comp-icon-box box-accent">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="comp-card-title">Control de Acceso Inteligente</h3>
              <span className="comp-card-sub">Biometría, credenciales RFID y gestión en tiempo real</span>
            </div>
          </div>

          <div className="comp-metrics-strip strip-accent">
            <div className="comp-metric-item">
              <span className="m-val text-accent font-mono">&lt; 0.2s</span>
              <span className="m-lbl">TIEMPO POR ACCESO</span>
            </div>
            <div className="comp-metric-item">
              <span className="m-val text-accent font-mono">100%</span>
              <span className="m-lbl">PROTECCIÓN ANTI-CLON</span>
            </div>
            <div className="comp-metric-item">
              <span className="m-val text-accent font-mono">EN VIVO</span>
              <span className="m-lbl">BITÁCORA EN NUBE</span>
            </div>
          </div>

          <ul className="comp-points-list">
            <li className="point-item item-positive">
              <CheckCircle2 size={20} className="icon-pos" />
              <div>
                <strong>Autenticación Biométrica & RFID Cifrado</strong>
                <p>Validación instantánea por huella, rostro o tarjeta RFID con sello de tiempo AES-256.</p>
              </div>
            </li>
            <li className="point-item item-positive">
              <CheckCircle2 size={20} className="icon-pos" />
              <div>
                <strong>Bitácora Digital Automatizada 24/7</strong>
                <p>Registro transparente en nube de entradas, salidas y alertas de intentos no autorizados.</p>
              </div>
            </li>
            <li className="point-item item-positive">
              <CheckCircle2 size={20} className="icon-pos" />
              <div>
                <strong>Integración con Torniquetes & CCTV</strong>
                <p>Paso fluido de cientos de personas por minuto con foto-verificación en vivo en cámaras.</p>
              </div>
            </li>
            <li className="point-item item-positive">
              <CheckCircle2 size={20} className="icon-pos" />
              <div>
                <strong>Revocado Instantáneo con 1 Clic</strong>
                <p>Desactivación inmediata de permisos por horario, área o baja del colaborador desde la plataforma.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Dynamic Interactive Gauge Comparison Bar Chart */}
      <div className="comparison-gauges-wrapper">
        <div className="gauges-header text-center">
          <span className="badge badge-accent mb-2">Métricas de Desempeño</span>
          <h3 className="gauges-title">Rendimiento Operativo Comparado</h3>
          <p className="gauges-subtitle">Evaluación cuantitativa entre métodos convencionales y la tecnología BLEGAM</p>
        </div>

        <div className="gauge-cards-grid">
          {/* Metric 1 */}
          <div className="metric-compare-card">
            <div className="metric-card-header">
              <div className="metric-icon-pill">
                <Clock size={18} />
              </div>
              <h4 className="metric-card-title">Velocidad & Agilidad de Ingreso</h4>
            </div>

            <div className="bars-comparison-stack">
              {/* Tradicional Bar */}
              <div className="bar-group">
                <div className="bar-header-info">
                  <span className="bar-label-name text-danger">Tradicional (Lento)</span>
                  <span className="bar-percentage-tag badge-danger">20%</span>
                </div>
                <div className="bar-track-bg">
                  <div className="bar-fill-inner fill-danger" style={{ width: '20%' }} />
                </div>
              </div>

              {/* BLEGAM Bar */}
              <div className="bar-group">
                <div className="bar-header-info">
                  <span className="bar-label-name text-accent font-bold">Ecosistema BLEGAM (&lt;0.2s)</span>
                  <span className="bar-percentage-tag badge-accent">98%</span>
                </div>
                <div className="bar-track-bg">
                  <div className="bar-fill-inner fill-accent" style={{ width: '98%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="metric-compare-card">
            <div className="metric-card-header">
              <div className="metric-icon-pill">
                <ShieldAlert size={18} />
              </div>
              <h4 className="metric-card-title">Protección Anti-Clonación & Suplantación</h4>
            </div>

            <div className="bars-comparison-stack">
              {/* Tradicional Bar */}
              <div className="bar-group">
                <div className="bar-header-info">
                  <span className="bar-label-name text-danger">Tradicional (Vulnerable)</span>
                  <span className="bar-percentage-tag badge-danger">25%</span>
                </div>
                <div className="bar-track-bg">
                  <div className="bar-fill-inner fill-danger" style={{ width: '25%' }} />
                </div>
              </div>

              {/* BLEGAM Bar */}
              <div className="bar-group">
                <div className="bar-header-info">
                  <span className="bar-label-name text-accent font-bold">Ecosistema BLEGAM (Biométrico Cifrado)</span>
                  <span className="bar-percentage-tag badge-accent">100%</span>
                </div>
                <div className="bar-track-bg">
                  <div className="bar-fill-inner fill-accent" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="metric-compare-card">
            <div className="metric-card-header">
              <div className="metric-icon-pill">
                <Database size={18} />
              </div>
              <h4 className="metric-card-title">Trazabilidad de Auditoría & Bitácora</h4>
            </div>

            <div className="bars-comparison-stack">
              {/* Tradicional Bar */}
              <div className="bar-group">
                <div className="bar-header-info">
                  <span className="bar-label-name text-danger">Tradicional (Manual / Papel)</span>
                  <span className="bar-percentage-tag badge-danger">10%</span>
                </div>
                <div className="bar-track-bg">
                  <div className="bar-fill-inner fill-danger" style={{ width: '10%' }} />
                </div>
              </div>

              {/* BLEGAM Bar */}
              <div className="bar-group">
                <div className="bar-header-info">
                  <span className="bar-label-name text-accent font-bold">Ecosistema BLEGAM (Nube en Tiempo Real)</span>
                  <span className="bar-percentage-tag badge-accent">100%</span>
                </div>
                <div className="bar-track-bg">
                  <div className="bar-fill-inner fill-accent" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
