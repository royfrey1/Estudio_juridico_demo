import { useState, useEffect, useRef } from 'react';
import image1 from './assets/bgabogado.jpg';
import image2 from './assets/bgcontable.avif';

export default function EstudioGamarraImpactante() {
  const [area, setArea] = useState('juridico');
  const [esSticky, setEsSticky] = useState(false);
  const triggerRef = useRef(null);
  
  const esJuridico = area === 'juridico';

  // ==========================================
  // DETECTOR DE SCROLL ULTRA-OPTIMIZADO
  // ==========================================
  useEffect(() => {
    const selector = triggerRef.current;
    if (!selector) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el switch del Hero deja de verse, se activa el modo sticky en el Navbar
        setEsSticky(!entry.isIntersecting);
      },
      { 
        threshold: 0,
        rootMargin: '-76px 0px 0px 0px' // Se activa justo antes de colisionar con el Navbar
      }
    );

    observer.observe(selector);
    return () => observer.disconnect();
  }, []);

  // ==========================================
  // CONFIGURACIÓN DE ATMÓSFERA COMPLETA (THEMING DRÁSTICO)
  // ==========================================
  
  // Fondo de la aplicación entera
  const bgCuerpo = esJuridico ? 'bg-slate-50 text-slate-800' : 'bg-slate-950 text-slate-100';
  
  // Navbar dinámico
  const bgNavbar = esJuridico ? 'bg-white/90 border-slate-200/60 text-slate-800' : 'bg-slate-900/90 border-slate-800 text-slate-100';
  const textMarca = esJuridico ? 'text-amber-600' : 'text-emerald-400 font-sans tracking-tight';

  // Hero y Degradados de Fondo
  const imgHeroJuridico = image1; 
  const imgHeroContable = image2;
  
  const textTituloHero = esJuridico ? 'text-slate-900 font-serif' : 'text-white font-sans font-black tracking-tight';
  const textSubtituloHero = esJuridico ? 'text-amber-600' : 'text-emerald-400';

  // Contenedor del Switch (Botones)
  const bgSwitchContainer = esJuridico ? 'bg-slate-200/80 border-slate-300/40' : 'bg-slate-900 border-slate-800';
  const btnActive = esJuridico ? 'bg-amber-600 text-white shadow-md' : 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20';
  const btnInactive = esJuridico ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white';

  // Tarjetas de Servicios (Inversión Completa de Colores)
  const bgCard = esJuridico ? 'bg-white border-slate-200/80 shadow-xs' : 'bg-slate-900/60 border-slate-800/80 shadow-lg';
  const borderCardHover = esJuridico ? 'hover:border-amber-500 hover:shadow-md' : 'hover:border-emerald-500 hover:shadow-emerald-500/5';
  const iconColor = esJuridico ? 'text-amber-600' : 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]';

  // Formulario y selectores
  const colorBotonSubmit = esJuridico 
    ? 'bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold' 
    : 'bg-linear-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-slate-950 font-black tracking-wide';

  // COMPONENTE RENDERIZADOR DEL CONTROLLER INTERCAMBIABLE
  const renderSwitch = (esVersionNavbar = false) => (
    <div className={`flex justify-center gap-2 ${bgSwitchContainer} border transition-all duration-500 ${
      esVersionNavbar 
        ? 'p-2 rounded-xl max-w-[240px] md:max-w-[280px] w-full shadow-xs' 
        : 'p-2 rounded-2xl max-w-xs sm:max-w-sm w-full mx-auto shadow-xl mt-6'
    }`}>
      <button 
        onClick={() => setArea('juridico')}
        className={`flex-1 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
          esVersionNavbar ? 'py-1.5 text-[10px]' : 'py-3.5'
        } ${esJuridico ? btnActive : btnInactive}`}
      >
        ⚖️ {esVersionNavbar ? 'Legal' : 'Área Jurídica'}
      </button>
      <button 
        onClick={() => setArea('contable')}
        className={`flex-1 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
          esVersionNavbar ? 'py-1.5 text-[10px]' : 'py-3.5'
        } ${!esJuridico ? btnActive : btnInactive}`}
      >
        📊 {esVersionNavbar ? 'Contable' : 'Área Contable'}
      </button>
    </div>
  );

  return (
    <div className={`min-h-screen ${bgCuerpo} font-sans antialiased scroll-smooth transition-colors duration-700`}>
      
      {/* 1. NAVBAR QUE CAMBIA DE COLOR Y SOPORTA EL SWITCH EN SCROLL */}
      <nav className={`border-b ${bgNavbar} backdrop-blur sticky top-0 z-50 px-4 sm:px-8 py-3.5 flex justify-between items-center transition-all duration-700 shadow-xs`}>
        <div className="flex flex-col">
          <span className={`text-lg md:text-2xl sm:text-xs font-bold tracking-wide transition-all duration-500 ${textMarca}`}>
            Gamarra & Asociados
          </span>
          <span className={`text-sm md:text-sm sm:text-xs font-medium tracking-widest uppercase mt-0.5 ${esJuridico ? 'text-slate-500' : 'text-slate-400'}`}>
            Estudio Jurídico Contable
          </span>
        </div>
        
        {/* SWITCH EN NAVBAR (ESCRITORIO): Aparece suavemente al bajar */}
        <div className={`hidden md:block flex-1 max-w-xs mx-auto px-4 transition-all duration-500 transform ${
          esSticky ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'
        }`}>
          {renderSwitch(true)}
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#sobre-nosotros" className={`transition-colors ${esJuridico ? 'hover:text-amber-600 text-slate-600' : 'hover:text-emerald-400 text-slate-300'}`}>Sobre Nosotros</a>
          <a href="#servicios" className={`transition-colors ${esJuridico ? 'hover:text-amber-600 text-slate-600' : 'hover:text-emerald-400 text-slate-300'}`}>Servicios</a>
          <a href="#ubicacion" className={`transition-colors ${esJuridico ? 'hover:text-amber-600 text-slate-600' : 'hover:text-emerald-400 text-slate-300'}`}>Ubicación</a>
          <a href="#contacto" className={`transition-colors ${esJuridico ? 'hover:text-amber-600 text-slate-600' : 'hover:text-emerald-400 text-slate-300'}`}>Contacto</a>
        </div>
      </nav>

      {/* SWITCH INTEGRADO PARA MÓVILES (FLOTANTE SUPERIOR COHESIVO) */}
      <div className={`md:hidden fixed top-18 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm transition-all duration-300 transform ${
        esSticky ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        {renderSwitch(true)}
      </div>


      {/* 2. HERO CON DOS IMÁGENES DE FONDO EN TRANSICIÓN */}
      <section className="py-24 px-4 text-center overflow-hidden relative min-h-[450px] flex items-center justify-center">
        
        {/* Imagen de Fondo Jurídica */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            esJuridico ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${imgHeroJuridico})` }}
        />
        
        {/* Imagen de Fondo Contable */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            !esJuridico ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${imgHeroContable})` }}
        />

        {/* Capa de superposición (Overlay) para asegurar que el texto sea legible */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${
          esJuridico 
            ? 'bg-slate-50/60 backdrop-blur-xs' 
            : 'bg-slate-950/80 backdrop-blur-xs'
        }`} />

        {/* Glow extra que ya tenías para el modo contable */}
        {!esJuridico && (
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-10 animate-pulse"></div>
        )}

        {/* Contenido del Hero (Asegurado con z-20 para quedar arriba de los fondos) */}
        <div className="max-w-3xl mx-auto flex flex-col gap-6 relative z-20 w-full">
          <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-700 ${textSubtituloHero}`}>
            {esJuridico ? '✨ Respaldo Legal Profesional' : '⚡ Inteligencia Fiscal & Financiera'}
          </span>
          <h1 className={`text-3xl sm:text-5xl font-bold leading-tight transition-all duration-700 ${textTituloHero}`}>
            {esJuridico 
              ? 'Soluciones jurídicas estratégicas para proteger sus derechos e intereses' 
              : 'Estructuración contable y optimización impositiva de alta precisión'}
          </h1>
          <p className={`text-sm sm:text-base max-w-xl mx-auto transition-colors duration-700 ${esJuridico ? 'text-slate-800' : 'text-slate-400'}`}>
            Unimos la rigurosidad del derecho con la agilidad de las finanzas. Altere el enfoque del estudio presionando el selector inferior.
          </p>

          <div ref={triggerRef} className={`transition-all duration-300 ${
            esSticky ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
          }`}>
            {renderSwitch(false)}
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN SOBRE NOSOTROS */}
      <section id="sobre-nosotros" className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span className={`text-xs font-bold uppercase tracking-widest ${textSubtituloHero}`}>Sinergia Profesional</span>
            <h2 className={`text-2xl sm:text-3xl font-bold ${esJuridico ? 'font-serif text-slate-900' : 'font-sans text-white font-extrabold text-slate-100'}`}>
              Una firma, dos pilares estratégicos
            </h2>
            <p className={`text-sm leading-relaxed transition-colors duration-500 ${esJuridico ? 'text-slate-500' : 'text-slate-400'}`}>
              En <strong>Gamarra & Asociados</strong> eliminamos la fricción entre los contadores externos y el equipo legal. Al consolidar ambas operaciones, cada balance, liquidación o estrategia de negocio se analiza bajo la lupa tributaria y regulatoria de forma simultánea.
            </p>
          </div>
          <div className={`p-8 rounded-2xl border shadow-2xl transition-all duration-700 ${esJuridico ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-slate-900/40 border-slate-800 text-slate-400'}`}>
            <h4 className="text-white font-bold mb-3 text-lg">Enfoque Centralizado</h4>
            <p className="text-xs sm:text-sm mb-4 leading-relaxed">
              Mientras los estudios tradicionales trabajan de forma aislada, nuestro sistema integrado previene contingencias legales antes de que impacten en los libros contables de su firma o empresa.
            </p>
            <div className={`text-xs font-bold uppercase tracking-widest ${esJuridico ? 'text-amber-400' : 'text-emerald-400'}`}>
              • Máxima Eficiencia Fiscal Corporativa •
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-12 flex flex-col gap-2">
          <h2 className={`text-2xl sm:text-3xl font-bold ${esJuridico ? 'font-serif text-slate-900' : 'font-sans text-white font-extrabold'}`}>
            Especialidades del Área
          </h2>
          <p className={`text-xs sm:text-sm ${esJuridico ? 'text-slate-500' : 'text-slate-400'}`}>
            Mostrando el catálogo técnico de especialidades disponibles en el sector activo.
          </p>
        </div>

        {esJuridico ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            <div className={`${bgCard} ${borderCardHover} p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-3 group`}>
              <div className={`${iconColor} text-2xl transition-transform group-hover:scale-110`}>📄</div>
              <h3 className="font-serif font-bold text-slate-900 text-base">Derecho Civil y Contratos</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Estructuración, revisión y auditoría de contratos comerciales, alquileres complejos, transacciones de inmuebles y reclamos civiles de daños.</p>
            </div>
            <div className={`${bgCard} ${borderCardHover} p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-3 group`}>
              <div className={`${iconColor} text-2xl transition-transform group-hover:scale-110`}>💼</div>
              <h3 className="font-serif font-bold text-slate-900 text-base">Derecho Laboral Empresario</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Políticas de contratación, defensa ante litigios de despidos indemnizatorios, gestión de empleo registrado y auditoría de riesgos de planta.</p>
            </div>
            <div className={`${bgCard} ${borderCardHover} p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-3 group`}>
              <div className={`${iconColor} text-2xl transition-transform group-hover:scale-110`}>🏛️</div>
              <h3 className="font-serif font-bold text-slate-900 text-base">Sucesiones y Sociedades</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">Constitución de sociedades (S.R.L, S.A.), planificación sucesoria patrimonial familiar y reorganización societaria integral.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${bgCard} ${borderCardHover} p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-3 group`}>
              <div className={`${iconColor} text-2xl transition-transform group-hover:scale-110`}>📊</div>
              <h3 className="font-sans font-black text-white text-base tracking-tight">Tax Planning & Impuestos</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Liquidaciones complejas mensuales/anuales. Optimización legal de la carga tributaria para grandes contribuyentes y PYMES ante AFIP.</p>
            </div>
            <div className={`${bgCard} ${borderCardHover} p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-3 group`}>
              <div className={`${iconColor} text-2xl transition-transform group-hover:scale-110`}>📈</div>
              <h3 className="font-sans font-black text-white text-base tracking-tight">Balances y Auditorías Anuales</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Emisión y certificación formal de Estados Contables. Informes de auditoría de gestión financiera requeridos por bancos y entidades de crédito.</p>
            </div>
            <div className={`${bgCard} ${borderCardHover} p-6 rounded-2xl border transition-all duration-500 flex flex-col gap-3 group`}>
              <div className={`${iconColor} text-2xl transition-transform group-hover:scale-110`}>⚙️</div>
              <h3 className="font-sans font-black text-white text-base tracking-tight">Payroll & Outsourcing Laboral</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Liquidaciones masivas de sueldos bajo múltiples convenios colectivos. Emisión de recibos digitales, libro de sueldos digital y cargas sociales.</p>
            </div>
          </div>
        )}
      </section>

      {/* 5. SECCIÓN UBICACIÓN ESTRATÉGICA (INTEGRADA CON THEMING DINÁMICO) */}
      <section id="ubicacion" className="py-20 px-4 max-w-5xl mx-auto border-t border-slate-200/40 dark:border-slate-900/60">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Datos y Horarios (Izquierda) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <span className={`text-xs font-bold uppercase tracking-widest ${textSubtituloHero}`}>Atención Presencial</span>
            <h2 className={`text-2xl sm:text-3xl font-bold ${esJuridico ? 'font-serif text-slate-900' : 'font-sans text-white font-extrabold'}`}>
              Nuestras Oficinas
            </h2>
            <p className={`text-sm leading-relaxed transition-colors duration-500 ${esJuridico ? 'text-slate-500' : 'text-slate-400'}`}>
              Disponemos de salas de reunión preparadas para garantizar la máxima confidencialidad en el tratamiento de auditorías complejas o litigios societarios.
            </p>
            
            <div className="mt-2 flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">📍</span>
                <div>
                  <p className="font-bold">Dirección Central</p>
                  <p className={`text-xs mt-0.5 ${esJuridico ? 'text-slate-500' : 'text-slate-400'}`}>Av. Córdoba 245, Puerto Iguazú, Misiones</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-base mt-0.5">🕒</span>
                <div>
                  <p className="font-bold">Horarios de Atención</p>
                  <p className={`text-xs mt-0.5 ${esJuridico ? 'text-slate-500' : 'text-slate-400'}`}>Lunes a Viernes — 08:00 a 12:00 y 16:00 a 20:00 hs</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=-25.5946,-54.5684" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`mt-2 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-xl border transition-all max-w-xs cursor-pointer ${
                esJuridico 
                  ? 'border-amber-500/40 text-amber-700 hover:bg-amber-500/10' 
                  : 'border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10'
              }`}
            >
              🗺️ Ver en Google Maps
            </a>
          </div>

          {/* Contenedor Iframe Interactivo con Filtro de Color (Derecha) */}
          <div className="md:col-span-7 w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden border shadow-2xl relative transition-all duration-700 bg-slate-900 border-slate-800">
          <iframe 
            title="Mapa de Ubicación de Gamarra & Asociados"
            src="https://maps.google.com/maps?q=9CXF%2BR2%20Puerto%20Iguaz%C3%BA,%20Misiones&t=&z=17&ie=UTF8&iwloc=&output=embed"
            className={`w-full h-full border-0 transition-all duration-700 ${
              !esJuridico ? 'invert-[90%] hue-rotate-180 contrast-[105%]' : 'opacity-95'
            }`}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>

        </div>
      </section>

      {/* 6. SECCIÓN CONTACTO */}
      <section id="contacto" className="py-20 px-4 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${textSubtituloHero}`}>Canal de Consultas</span>
            <h2 className="text-3xl font-serif font-bold text-white">Central de Atención Integral</h2>
          </div>

          <form className="bg-slate-950/60 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col gap-5 shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Nombre Completo</label>
                <input type="text" required placeholder="Ej: Juan Pérez" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-slate-700" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Teléfono Corporativo</label>
                <input type="tel" required placeholder="Ej: 3757 123456" className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-slate-700" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Asunto Principal</label>
              <div className="relative">
                <select 
                  key={area} 
                  defaultValue={esJuridico ? "legal" : "contable"}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-hidden focus:border-slate-700 cursor-pointer"
                >
                  <option value="legal">⚖️ Asesoramiento Jurídico / Legal</option>
                  <option value="contable">📊 Asesoramiento Contable / Impositivo</option>
                  <option value="ambos">💼 Auditoría Integral Especial (Ambos Sectores)</option>
                </select>
                <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 font-bold ${iconColor}`}>
                  ▼
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Descripción del caso o requerimiento</label>
              <textarea rows="4" required placeholder="Describa el marco de su consulta para asignarlo al profesional correspondiente..." className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden focus:border-slate-700 resize-none" />
            </div>

            <button type="submit" className={`w-full ${colorBotonSubmit} py-4 text-sm rounded-xl md:text-sm sm:text-xs lg:text-md transition-all shadow-md uppercase tracking-wider cursor-pointer mt-2`}>
              {esJuridico ? 'Solicitar Dictamen / Evaluación' : 'Iniciar Planificación / Auditoría'}
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}