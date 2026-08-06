import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  Building2, 
  Users, 
  ShieldAlert, 
  Sparkles,
  Server,
  Activity,
  Layers,
  PieChart,
  BarChart3,
  Flame
} from 'lucide-react';
import './AccessBenefitsROICalculator.css';

const STRATEGIC_BENEFITS = [
  {
    icon: Clock,
    title: "Control en Tiempo Real 24/7",
    desc: "Trazabilidad completa de quién entra, a qué hora y por qué acceso, desde cualquier dispositivo con bitácora Cloud.",
    tag: "Auditoría en Vivo"
  },
  {
    icon: ShieldAlert,
    title: "Alertas por Anomalías & Coacción",
    desc: "Notificaciones instantáneas por intentos no autorizados, accesos fuera de horario, tailgating o puertas forzadas.",
    tag: "Prevención Activa"
  },
  {
    icon: TrendingUp,
    title: "Analítica & Reportes de Nómina",
    desc: "Bitácora inalterable con exportación en 1 clic para recursos humanos, auditoría ISO y Protección Civil.",
    tag: "Cumplimiento ISO"
  },
  {
    icon: Building2,
    title: "Gestión Centralizada Multi-Sede",
    desc: "Administra múltiples corporativos, sucursales bancarias o plantas industriales desde un solo panel unificado.",
    tag: "Multi-Sucursal"
  },
  {
    icon: Lock,
    title: "Cero Riesgo de Llaves Perdidas",
    desc: "Elimina gastos de cerrajería, reemplazo de chapas y vulnerabilidades por llaves físicas extraviadas o clonadas.",
    tag: "Seguridad Digital"
  },
  {
    icon: Server,
    title: "Operatividad 24/7 Offline Resiliente",
    desc: "Controladores independientes con memoria local y batería de respaldo que garantizan servicio ante apagones o fallas de red.",
    tag: "Reserva de Energía"
  }
];

export default function AccessBenefitsROICalculator() {
  const [doorsCount, setDoorsCount] = useState(12);
  const [employeesCount, setEmployeesCount] = useState(450);
  const [guardsShift, setGuardsShift] = useState(2);

  // Quick Preset Presets
  const applyPreset = (doors, emps, guards) => {
    setDoorsCount(doors);
    setEmployeesCount(emps);
    setGuardsShift(guards);
  };

  // Dynamic Calculations (in MXN - Pesos Mexicanos)
  const keySavingsMXN = doorsCount * 5800; // Cerrajería y llaves
  const guardSavingsMXN = guardsShift * 168000; // Guardias e imprevistos
  const adminSavingsMXN = employeesCount * 280; // Gestión de horas de nómina

  const totalAnnualSavingsMXN = keySavingsMXN + guardSavingsMXN + adminSavingsMXN;
  const monthlySavingsMXN = Math.round(totalAnnualSavingsMXN / 12);

  const roiMonths = Math.max(3.2, (11.5 - (doorsCount * 0.11 + guardsShift * 1.05))).toFixed(1);
  const vulnerabilityReduction = Math.min(98.9, 93.5 + (doorsCount * 0.15)).toFixed(1);

  // Format currency MXN
  const formatMXN = (val) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="roi-calculator-wrapper">
      {/* Section Header */}
      <div className="section-header text-center">
        <span className="badge badge-accent mb-2">
          <Sparkles size={14} className="mr-1 inline-block" />
          Calculador Financiero & Inteligencia Operativa
        </span>
        <h2 className="section-title">
          Mucho más que <span className="accent-gradient">abrir una puerta</span>
        </h2>
        <p className="section-subtitle">
          Simula en tiempo real el ahorro en <strong>Pesos Mexicanos (MXN)</strong>, el retorno de inversión y la reducción de riesgos al automatizar tus accesos.
        </p>
      </div>

      {/* Cyber-Financial Command Suite */}
      <div className="cyber-calc-suite">
        {/* Top Quick Presets Bar */}
        <div className="preset-selector-bar">
          <span className="preset-lbl font-mono">PLANTILLAS RÁPIDAS:</span>
          <div className="preset-buttons">
            <button className="preset-btn" onClick={() => applyPreset(6, 120, 1)}>
              🏢 Pyme (6 Puertas / 120 Empleados)
            </button>
            <button className="preset-btn active" onClick={() => applyPreset(12, 450, 2)}>
              🏛️ Corporativo (12 Puertas / 450 Empleados)
            </button>
            <button className="preset-btn" onClick={() => applyPreset(28, 1500, 3)}>
              🏭 Campus Industrial (28 Puertas / 1,500 Empleados)
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="cyber-calc-grid">
          {/* Left Sliders Panel */}
          <div className="cyber-panel inputs-panel">
            <div className="panel-cyber-header">
              <Calculator size={20} className="text-accent mr-2" />
              <h3 className="panel-cyber-title">Configurador de Infraestructura</h3>
            </div>

            {/* Slider 1: Puertas */}
            <div className="cyber-input-block">
              <div className="input-head">
                <div className="input-head-left">
                  <Lock size={16} className="text-accent mr-1" />
                  <span className="input-title">Puntos de Acceso / Puertas</span>
                </div>
                <span className="input-value-badge font-mono">{doorsCount} accesos</span>
              </div>
              <input 
                type="range" 
                min="2" 
                max="50" 
                value={doorsCount} 
                onChange={(e) => setDoorsCount(parseInt(e.target.value))}
                className="cyber-slider"
              />
              <div className="slider-limits font-mono">
                <span>2 puertas</span>
                <span>50 puertas</span>
              </div>
            </div>

            {/* Slider 2: Empleados */}
            <div className="cyber-input-block">
              <div className="input-head">
                <div className="input-head-left">
                  <Users size={16} className="text-accent mr-1" />
                  <span className="input-title">Colaboradores / Usuarios Activos</span>
                </div>
                <span className="input-value-badge font-mono">{employeesCount.toLocaleString()} usuarios</span>
              </div>
              <input 
                type="range" 
                min="50" 
                max="5000" 
                step="50"
                value={employeesCount} 
                onChange={(e) => setEmployeesCount(parseInt(e.target.value))}
                className="cyber-slider"
              />
              <div className="slider-limits font-mono">
                <span>50 usuarios</span>
                <span>5,000 usuarios</span>
              </div>
            </div>

            {/* Selector 3: Turnos Guardias */}
            <div className="cyber-input-block">
              <div className="input-head">
                <div className="input-head-left">
                  <ShieldCheck size={16} className="text-accent mr-1" />
                  <span className="input-title">Turnos de Guardia Privada</span>
                </div>
                <span className="input-value-badge font-mono">{guardsShift} {guardsShift === 1 ? 'Turno' : 'Turnos'}</span>
              </div>
              <div className="shifts-grid">
                {[1, 2, 3, 4].map((s) => (
                  <button
                    key={s}
                    className={`shift-pill-btn ${guardsShift === s ? 'active' : ''}`}
                    onClick={() => setGuardsShift(s)}
                  >
                    {s} {s === 1 ? 'Turno' : 'Turnos'}
                  </button>
                ))}
              </div>
            </div>

            {/* Financial Breakdown Mini List */}
            <div className="breakdown-mini-box font-mono">
              <span className="breakdown-title">DESGLOSE ESTIMADO DE DESAHOGO EN MXN:</span>
              <div className="breakdown-row">
                <span>• Cerrajería & Llaves:</span>
                <span className="text-accent">{formatMXN(keySavingsMXN)}/año</span>
              </div>
              <div className="breakdown-row">
                <span>• Eficiencia en Guardias:</span>
                <span className="text-accent">{formatMXN(guardSavingsMXN)}/año</span>
              </div>
              <div className="breakdown-row">
                <span>• Horas Administración RRHH:</span>
                <span className="text-accent">{formatMXN(adminSavingsMXN)}/año</span>
              </div>
            </div>
          </div>

          {/* Right Live Results Dashboard Panel */}
          <div className="cyber-panel results-panel">
            <div className="panel-cyber-header">
              <TrendingUp size={20} className="text-accent mr-2" />
              <h3 className="panel-cyber-title">Panel de Retorno de Inversión (ROI)</h3>
            </div>

            {/* Giant Hero Savings Box */}
            <div className="giant-savings-display">
              <div className="savings-badge-tag font-mono">
                <Flame size={14} className="mr-1 text-accent inline-block" />
                AHORRO ANUAL ESTIMADO (PESOS MEXICANOS)
              </div>
              <div className="main-amount-text font-mono accent-gradient">
                {formatMXN(totalAnnualSavingsMXN)}
                <span className="mxn-suffix"> MXN / año</span>
              </div>
              <div className="monthly-savings-sub font-mono">
                Equivalente a <strong>{formatMXN(monthlySavingsMXN)} MXN / mes</strong> de ahorro directo en flujo operativo.
              </div>
            </div>

            {/* KPI Cards Grid */}
            <div className="cyber-kpi-grid">
              <div className="cyber-kpi-card">
                <div className="kpi-icon-wrap">
                  <BarChart3 size={18} />
                </div>
                <div>
                  <span className="cyber-kpi-title">RETORNO INVERSIÓN</span>
                  <span className="cyber-kpi-val font-mono text-accent">{roiMonths} Meses</span>
                  <span className="cyber-kpi-desc">Amortización de equipo</span>
                </div>
              </div>

              <div className="cyber-kpi-card">
                <div className="kpi-icon-wrap">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <span className="cyber-kpi-title">REDUCCIÓN RIESGOS</span>
                  <span className="cyber-kpi-val font-mono text-accent">{vulnerabilityReduction}%</span>
                  <span className="cyber-kpi-desc">Control perimetral auditado</span>
                </div>
              </div>

              <div className="cyber-kpi-card">
                <div className="kpi-icon-wrap">
                  <Zap size={18} />
                </div>
                <div>
                  <span className="cyber-kpi-title">TIEMPO AUDITORÍA</span>
                  <span className="cyber-kpi-val font-mono text-accent">&lt; 1 Segundo</span>
                  <span className="cyber-kpi-desc">Trazabilidad instantánea</span>
                </div>
              </div>

              <div className="cyber-kpi-card">
                <div className="kpi-icon-wrap">
                  <Activity size={18} />
                </div>
                <div>
                  <span className="cyber-kpi-title">CONTINUIDAD</span>
                  <span className="cyber-kpi-val font-mono text-accent">100% 24/7</span>
                  <span className="cyber-kpi-desc">Respuesta local offline</span>
                </div>
              </div>
            </div>

            {/* Action CTA Row */}
            <div className="panel-cta-row">
              <a href="https://wa.link/nf8gq3" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full justify-center text-lg py-4">
                Solicitar Dictamen de ROI en MXN <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Strategic Benefits Grid Underneath */}
      <div className="strategic-benefits-grid">
        {STRATEGIC_BENEFITS.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="strat-benefit-card">
              <div className="strat-card-top">
                <div className="strat-icon-box">
                  <IconComp size={24} />
                </div>
                <span className="strat-tag-badge">{item.tag}</span>
              </div>
              <h3 className="strat-title">{item.title}</h3>
              <p className="strat-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
