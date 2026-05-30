import { useState } from "react";

const brandData = {
  name: "VÓRTEX",
  tagline: "Poder en Movimiento",
  subbrand: "WOMEN'S PERFORMANCE ATELIER",
};

const palette = [
  { name: "Obsidian", hex: "#0A0A0A", role: "Base principal" },
  { name: "Bone", hex: "#E8E2D9", role: "Neutro premium" },
  { name: "Champagne", hex: "#C9A96E", role: "Acento lujo" },
  { name: "Ash Rose", hex: "#C4A8A0", role: "Femineidad moderna" },
  { name: "Slate", hex: "#3D3D3D", role: "Profundidad visual" },
  { name: "Pearl", hex: "#F5F2EE", role: "Fondo aspiracional" },
];

const collection = [
  {
    id: 1,
    code: "VX-01",
    name: "Legging Sculpt Premium",
    subtitle: "SILUETA ARQUITECTÓNICA",
    concept: "Ingeniería corporal invisible. La prenda no se ve, se siente como una segunda piel que reconstruye la silueta.",
    psychology: "Activa el 'efecto espejo': la usuaria se ve diferente desde el primer uso. Dispara confianza inmediata y deseo de mostrarse.",
    effects: ["Cintura reducida visualmente -3 a 5 cm", "Glúteo elevado y redondeado", "Piernas estilizadas", "Abdomen contenido", "Efecto reloj de arena completo"],
    compression: "Compresión graduada: alta en cintura (80D), media en muslos (60D), suave en pantorrilla (40D)",
    silhouette: "Tiro alto arquitectónico con panel moldeador de cintura doble capa. Costuras estratégicas en diagonal para efecto óptico elongante.",
    seams: "Costuras planas 4 agujas + panel posterior fruncido interno (hidden scrunch). Sin costuras laterales visibles.",
    fabric: "Jersey sculpt 78% Poliamida / 22% Elastano, gramaje 280-300 g/m². Acabado mate premium. Cara interna micro-fleece.",
    premium: "Interior contiene forro de compresión independiente en zona abdominal. Pretina de 8-10 cm con refuerzo óseo invisible.",
    diff: "El mercado colombiano no tiene un legging con compresión graduada real + hidden scrunch + pretina arquitectónica en segmento premium.",
    price: "$180.000 – $240.000 COP",
    icon: "▲",
  },
  {
    id: 2,
    code: "VX-02",
    name: "Short Sculpt Premium",
    subtitle: "EFECTO PIERNA INFINITA",
    concept: "Corte que crea la ilusión de piernas más largas y un glúteo más alto. Diseñado para máximo impacto visual en redes sociales.",
    psychology: "El corte alto en la ingle activa percepción de estatura. El scrunch posterior genera la foto perfecta para Instagram y TikTok sin filtros.",
    effects: ["Pierna visualmente más larga", "Glúteo elevado y pronunciado", "Cadera marcada", "Muslos contenidos y definidos", "Visual 'body goals'"],
    compression: "Compresión alta en glúteo y muslo interior. Panel anti-celulitis en zona posterior.",
    silhouette: "Corte en V profundo frontal para marcar cadera. Tiro alto 28-30 cm. Largo estratégico de 18-20 cm.",
    seams: "Costura posterior con fruncido externo visible (scrunch) + panel moldeador interno. Doble capa en zona glútea.",
    fabric: "Jersey compresión 82% Poliamida / 18% Elastano, 260-280 g/m². Cero transparencia certificado. 4-way stretch.",
    premium: "Banda interna anti-deslizamiento en borde inferior. Logotipo tonal bordado en tono nude.",
    diff: "El short premium con scrunch real, sin parecer económico, no existe en Colombia en este segmento de precio y calidad.",
    price: "$120.000 – $160.000 COP",
    icon: "◆",
  },
  {
    id: 3,
    code: "VX-03",
    name: "Top Espalda Abierta",
    subtitle: "ARQUITECTURA DE ESPALDA",
    concept: "La espalda como zona de poder visual. Diseño que enmarca la espalda como una obra de arte en movimiento.",
    psychology: "La espalda expuesta activa el 'efecto volteo': genera que otras la miren. Fortalece presencia social y percepción de estatus fitness.",
    effects: ["Espalda como foco visual dominante", "Hombros definidos y amplios", "Cintura visualmente reducida", "Postura erguida automática", "Presencia magnética"],
    compression: "Sujeción frontal estructurada con copa removible. Sin aro. Soporte medio-alto para A/B/C.",
    silhouette: "Escote frontal moderado. Espalda con cruce de tirantes tipo 'X' o corte abierto en rombos geométricos. Bajo el top con banda elástica visible.",
    seams: "Construcción sin costuras laterales visibles. Tirantes reforzados con elástico forrado premium.",
    fabric: "Jersey liso 80% Poliamida / 20% Elastano, 200-220 g/m². Tacto mantequilla. Secado rápido 15 minutos.",
    premium: "Aro invisible interno. Copa moldeadora extraíble. Acabado interior micro-suede en zona de contacto.",
    diff: "Top con arquitectura de espalda real que combina sujeción deportiva + estética de lujo silencioso. No existe en Colombia.",
    price: "$90.000 – $130.000 COP",
    icon: "●",
  },
  {
    id: 4,
    code: "VX-04",
    name: "Jacket Fitted Athleisure",
    subtitle: "PODER EN TRANSICIÓN",
    concept: "La prenda que convierte el gym en pasarela. Transición perfecta entre entrenamiento y calle sin perder identidad premium.",
    psychology: "Activa el 'efecto poder social': la usuaria se siente 'en control' fuera del gym. Proyecta disciplina, éxito y estatus silencioso.",
    effects: ["Silueta definida con estructura en hombros", "Cintura marcada con costura estructural", "Alargamiento visual del torso", "Proyección de status premium"],
    compression: "Sin compresión. Fit arquitectónico: no ceñido, no holgado. Talle perfectamente definido.",
    silhouette: "Corte cropped o midi según versión. Cierre frontal oculto (hidden zip). Hombros ligeramente estructurados. Puños elásticos premium.",
    seams: "Costura princess en panel frontal y posterior para marcar cintura. Bolsillos internos invisibles.",
    fabric: "Scuba premium 88% Poliéster reciclado / 12% Elastano, 320-350 g/m². Superficie lisa mate. Peso medio para cuerpo.",
    premium: "Forro interior satinado en tono contrastante. Branding tonal en manga. Zipper metálico color champagne.",
    diff: "Jacket athleisure que realmente siluetea. No es holgada ni básica. Tiene arquitectura de moda premium con función deportiva.",
    price: "$220.000 – $300.000 COP",
    icon: "■",
  },
];

const fabrics = [
  { name: "Jersey Sculpt 280D", comp: "78% PA / 22% EA", use: "Legging premium", gram: "280-300 g/m²", feel: "Tacto mantequilla, cero transparencia, compresión media-alta" },
  { name: "Jersey Compresión 260D", comp: "82% PA / 18% EA", use: "Short + legging activo", gram: "260-280 g/m²", feel: "Alta recuperación, anti-pilling, secado ultra rápido" },
  { name: "Jersey Liso 200D", comp: "80% PA / 20% EA", use: "Tops y brassieres", gram: "200-220 g/m²", feel: "Segunda piel, micro-suave, drapeo femenino" },
  { name: "Scuba Premium 320D", comp: "88% PES / 12% EA", use: "Jackets + outerwear", gram: "320-350 g/m²", feel: "Cuerpo estructurado, mate premium, resistente" },
];

const roadmap = [
  { month: "MES 1-2", phase: "FUNDACIÓN", tasks: ["Definir nombre y registro de marca", "Desarrollo de identidad visual completa", "Seleccionar proveedor textil (Lafayette Colombia)", "Confeccionar muestras físicas (fit samples)", "Crear look book digital inicial"] },
  { month: "MES 3", phase: "MUESTRAS Y AJUSTES", tasks: ["Fitting con modelos reales", "Ajuste de patrones por feedback visual", "Fotografía de producto premium", "Construcción de perfil Instagram/TikTok", "Estrategia de pre-lanzamiento (waitlist)"] },
  { month: "MES 4", phase: "PRE-LANZAMIENTO", tasks: ["Contenido aspiracional semana a semana", "Colaboración con 3-5 microinfluencers clave", "Comunidad privada de fundadoras", "Preventa exclusiva fundadoras (-15%)", "Press kit digital premium"] },
  { month: "MES 5", phase: "LANZAMIENTO", tasks: ["Drop oficial colección 01", "Campaña visual Instagram + TikTok", "Reels de transformación corporal", "Stories de behind-the-scenes premium", "PR digital y digital influencer seeding"] },
  { month: "MES 6+", phase: "ESCALA", tasks: ["Análisis de héroe products (top sellers)", "Drop colección 02 (capsule)", "Expansión a Shopify internacional", "Estrategia de recompra y comunidad", "Colaboraciones estratégicas de marca"] },
];

const contentPillars = [
  { icon: "◈", title: "TRANSFORMACIÓN VISUAL", desc: "Before/after de silueta con la prenda. Reels de 'efecto espejo'. Videos de cómo cambia la percepción corporal." },
  { icon: "◉", title: "LIFESTYLE ASPIRACIONAL", desc: "Mañanas premium. Rutinas de élite. Espacios minimalistas. Mujer en movimiento con presencia." },
  { icon: "◊", title: "DETRÁS DEL DISEÑO", desc: "Proceso de creación. Selección de telas. Detalle de costuras. Obsesión por el detalle premium." },
  { icon: "◈", title: "COMUNIDAD DE PODER", desc: "Mujeres reales con resultados reales. User Generated Content de calidad. 'Club Vórtex'." },
  { icon: "◉", title: "EDUCACIÓN DE PRODUCTO", desc: "Qué hace diferente cada prenda. Cómo usar los efectos visuales. Tips de styling premium." },
];

export default function BrandBook() {
  const [activeSection, setActiveSection] = useState("dna");
  const [activeProduct, setActiveProduct] = useState(0);

  const sections = [
    { id: "dna", label: "ADN" },
    { id: "palette", label: "PALETA" },
    { id: "collection", label: "COLECCIÓN" },
    { id: "fabrics", label: "TEXTILES" },
    { id: "content", label: "CONTENIDO" },
    { id: "roadmap", label: "ROADMAP" },
  ];

  return (
    <div style={{
      background: "#0A0A0A",
      minHeight: "100vh",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#E8E2D9",
      overflowX: "hidden",
    }}>
      {/* Hero Header */}
      <div style={{
        borderBottom: "1px solid #2A2A2A",
        padding: "48px 40px 40px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: "40%", height: "100%",
          background: "radial-gradient(ellipse at top right, rgba(201,169,110,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ fontSize: "10px", letterSpacing: "6px", color: "#C9A96E", marginBottom: "16px", fontFamily: "sans-serif" }}>
          BRAND BOOK — DOCUMENTO CONFIDENCIAL 2026
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <h1 style={{
              fontSize: "clamp(56px, 10vw, 96px)", fontWeight: "300", letterSpacing: "12px",
              margin: 0, lineHeight: 1, color: "#E8E2D9",
            }}>
              {brandData.name}
            </h1>
            <div style={{ fontSize: "11px", letterSpacing: "8px", color: "#C4A8A0", marginTop: "8px", fontFamily: "sans-serif" }}>
              {brandData.subbrand}
            </div>
          </div>
          <div style={{
            marginLeft: "auto", textAlign: "right",
            borderLeft: "1px solid #2A2A2A", paddingLeft: "24px",
          }}>
            <div style={{ fontSize: "13px", color: "#C9A96E", letterSpacing: "3px", fontStyle: "italic" }}>
              "{brandData.tagline}"
            </div>
            <div style={{ fontSize: "10px", color: "#666", letterSpacing: "4px", marginTop: "6px", fontFamily: "sans-serif" }}>
              PRIMERA COLECCIÓN — FW 2026
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div style={{
        display: "flex", gap: 0,
        borderBottom: "1px solid #1E1E1E",
        overflowX: "auto",
      }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => setActiveSection(s.id)} style={{
            background: "none", border: "none",
            borderBottom: activeSection === s.id ? "2px solid #C9A96E" : "2px solid transparent",
            color: activeSection === s.id ? "#C9A96E" : "#666",
            padding: "16px 24px",
            fontSize: "9px", letterSpacing: "5px",
            cursor: "pointer", fontFamily: "sans-serif",
            transition: "all 0.3s", whiteSpace: "nowrap",
          }}>{s.label}</button>
        ))}
      </div>

      <div style={{ padding: "40px", maxWidth: "1100px", margin: "0 auto" }}>

        {/* DNA SECTION */}
        {activeSection === "dna" && (
          <div>
            <SectionTitle number="01" title="ADN VISUAL Y EMOCIONAL DE MARCA" />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", marginBottom: "40px" }}>
              {[
                { label: "ESENCIA", value: "Lujo silencioso en movimiento. La marca que no necesita gritar para ser admirada." },
                { label: "PROMESA", value: "Cada prenda redefine cómo te ves, cómo te sientes y cómo te perciben." },
                { label: "ARQUETIPO", value: "La Reina Atlética. Disciplinada, segura, estética, poderosa. No se esfuerza — llega." },
                { label: "ENEMIGO", value: "Lo genérico. Lo económico visual. Lo masivo. Lo que todas usan." },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#111", border: "1px solid #1E1E1E",
                  padding: "28px",
                }}>
                  <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "12px", fontFamily: "sans-serif" }}>{item.label}</div>
                  <div style={{ fontSize: "14px", lineHeight: 1.7, color: "#C4A8A0" }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px", marginBottom: "40px" }}>
              <div style={{ gridColumn: "1 / -1", background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px" }}>
                <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "20px", fontFamily: "sans-serif" }}>SISTEMA DE VALORES DE MARCA</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px" }}>
                  {[
                    ["PODER", "Presencia que domina sin decirlo"],
                    ["PRECISIÓN", "Cada detalle es intencional"],
                    ["FEMINEIDAD", "Moderna, no decorativa"],
                    ["DISCIPLINA", "Estética que se gana"],
                    ["ASPIRACIÓN", "Eleva a quien la usa"],
                    ["EXCLUSIVIDAD", "No es para todas — y eso la hace deseable"],
                  ].map(([v, d], i) => (
                    <div key={i}>
                      <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#E8E2D9", marginBottom: "6px", fontFamily: "sans-serif" }}>{v}</div>
                      <div style={{ fontSize: "11px", color: "#555", lineHeight: 1.5 }}>{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
              <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px" }}>
                <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "20px", fontFamily: "sans-serif" }}>LA MARCA ES</div>
                {["Minimalista con poder", "Premium sin ostentación", "Femenina sin debilidad", "Atlética sin sacrificar estética", "Seria sin ser aburrida", "Exclusiva sin ser inalcanzable"].map((v, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <div style={{ width: "4px", height: "4px", background: "#C9A96E", borderRadius: "50%", flexShrink: 0 }} />
                    <div style={{ fontSize: "13px", color: "#C4A8A0" }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px" }}>
                <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C4A8A0", marginBottom: "20px", fontFamily: "sans-serif" }}>LA MARCA NUNCA ES</div>
                {["Colorida sin dirección", "Llamativa sin propósito", "Genérica o masiva", "Barata en percepción", "Chistosa o informal", "Obvia o predecible"].map((v, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                    <div style={{ width: "4px", height: "1px", background: "#333", flexShrink: 0, width: "16px" }} />
                    <div style={{ fontSize: "13px", color: "#444" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "40px", background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "32px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "20px", fontFamily: "sans-serif" }}>POSICIONAMIENTO EN EL MERCADO COLOMBIANO</div>
              <div style={{ position: "relative", height: "140px" }}>
                {/* Axis labels */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: "#C9A96E", letterSpacing: "3px", fontFamily: "sans-serif" }}>PREMIUM</div>
                <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", fontSize: "9px", color: "#444", letterSpacing: "3px", fontFamily: "sans-serif" }}>ECONÓMICO</div>
                <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", fontSize: "9px", color: "#444", letterSpacing: "3px", fontFamily: "sans-serif" }}>BÁSICO</div>
                <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontSize: "9px", color: "#C9A96E", letterSpacing: "3px", fontFamily: "sans-serif" }}>ASPIRACIONAL</div>
                {/* Cross */}
                <div style={{ position: "absolute", top: "50%", left: "10%", right: "10%", height: "1px", background: "#1E1E1E" }} />
                <div style={{ position: "absolute", left: "50%", top: "10%", bottom: "10%", width: "1px", background: "#1E1E1E" }} />
                {/* Brands */}
                {[
                  { name: "VÓRTEX", x: "70%", y: "15%", color: "#C9A96E", size: 11 },
                  { name: "ALO YOGA", x: "75%", y: "12%", color: "#666", size: 9 },
                  { name: "MARCA LOCAL A", x: "40%", y: "65%", color: "#333", size: 9 },
                  { name: "LULULEMON", x: "80%", y: "20%", color: "#555", size: 9 },
                  { name: "MARCA LOCAL B", x: "25%", y: "70%", color: "#333", size: 9 },
                ].map((b, i) => (
                  <div key={i} style={{ position: "absolute", left: b.x, top: b.y, transform: "translate(-50%, -50%)" }}>
                    <div style={{ fontSize: b.size, letterSpacing: "2px", color: b.color, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>
                      {b.name === "VÓRTEX" ? "◈ " : "· "}{b.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PALETTE SECTION */}
        {activeSection === "palette" && (
          <div>
            <SectionTitle number="02" title="SISTEMA DE COLOR PREMIUM" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", marginBottom: "40px" }}>
              {palette.map((c, i) => (
                <div key={i} style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", overflow: "hidden" }}>
                  <div style={{ height: "100px", background: c.hex }} />
                  <div style={{ padding: "20px" }}>
                    <div style={{ fontSize: "12px", letterSpacing: "4px", color: "#E8E2D9", marginBottom: "4px", fontFamily: "sans-serif" }}>{c.name.toUpperCase()}</div>
                    <div style={{ fontSize: "10px", color: "#C9A96E", letterSpacing: "2px", marginBottom: "8px", fontFamily: "sans-serif" }}>{c.hex}</div>
                    <div style={{ fontSize: "11px", color: "#666" }}>{c.role}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
              <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px" }}>
                <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "20px", fontFamily: "sans-serif" }}>APLICACIÓN VISUAL</div>
                {[
                  ["Fondo digital / empaque premium", "#0A0A0A Obsidian"],
                  ["Tipografía principal y logos", "#E8E2D9 Bone"],
                  ["Acentos, precios, CTA premium", "#C9A96E Champagne"],
                  ["Detalles femeninos sutiles", "#C4A8A0 Ash Rose"],
                  ["Fondos secundarios en fotos", "#F5F2EE Pearl"],
                  ["Sombras y profundidad", "#3D3D3D Slate"],
                ].map(([uso, color], i) => (
                  <div key={i} style={{ marginBottom: "12px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #1A1A1A", paddingBottom: "12px" }}>
                    <div style={{ fontSize: "12px", color: "#C4A8A0" }}>{uso}</div>
                    <div style={{ fontSize: "10px", color: "#555", letterSpacing: "2px", fontFamily: "sans-serif" }}>{color}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px" }}>
                <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "20px", fontFamily: "sans-serif" }}>PRIMERA COLECCIÓN — COLORWAYS</div>
                {[
                  { name: "MIDNIGHT", colors: ["#0A0A0A", "#1A1A1A", "#2A2A2A"], desc: "Negro total. Power principal." },
                  { name: "STONE DUST", colors: ["#C4B8B0", "#B8A8A0", "#A09090"], desc: "Nude premium. Aspiracional." },
                  { name: "CHAMPAGNE", colors: ["#C9A96E", "#BF9A60", "#D4B882"], desc: "Lujo silencioso. Edición limitada." },
                  { name: "SLATE GREY", colors: ["#5A5A5A", "#4A4A4A", "#6A6A6A"], desc: "Sofisticado. Versátil." },
                ].map((cw, i) => (
                  <div key={i} style={{ marginBottom: "20px" }}>
                    <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#E8E2D9", marginBottom: "8px", fontFamily: "sans-serif" }}>{cw.name}</div>
                    <div style={{ display: "flex", gap: "4px", marginBottom: "6px" }}>
                      {cw.colors.map((c, j) => (
                        <div key={j} style={{ width: "32px", height: "32px", background: c, border: "1px solid #2A2A2A" }} />
                      ))}
                    </div>
                    <div style={{ fontSize: "11px", color: "#555" }}>{cw.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* COLLECTION SECTION */}
        {activeSection === "collection" && (
          <div>
            <SectionTitle number="03" title="PRIMERA COLECCIÓN — FICHAS TÉCNICAS" />
            <div style={{ display: "flex", gap: "2px", marginBottom: "24px", flexWrap: "wrap" }}>
              {collection.map((p, i) => (
                <button key={i} onClick={() => setActiveProduct(i)} style={{
                  background: activeProduct === i ? "#C9A96E" : "#111",
                  border: "1px solid " + (activeProduct === i ? "#C9A96E" : "#2A2A2A"),
                  color: activeProduct === i ? "#0A0A0A" : "#666",
                  padding: "10px 20px", cursor: "pointer",
                  fontSize: "9px", letterSpacing: "4px", fontFamily: "sans-serif",
                  transition: "all 0.3s",
                }}>
                  {p.code} — {p.name.split(" ").slice(0, 2).join(" ").toUpperCase()}
                </button>
              ))}
            </div>

            {(() => {
              const p = collection[activeProduct];
              return (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                  <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: "48px", color: "#C9A96E", marginBottom: "16px" }}>{p.icon}</div>
                      <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "8px", fontFamily: "sans-serif" }}>{p.code}</div>
                      <h2 style={{ fontSize: "24px", fontWeight: 300, margin: "0 0 4px", letterSpacing: "2px" }}>{p.name}</h2>
                      <div style={{ fontSize: "10px", letterSpacing: "5px", color: "#C4A8A0", marginBottom: "24px", fontFamily: "sans-serif" }}>{p.subtitle}</div>
                      <div style={{ fontSize: "13px", lineHeight: 1.8, color: "#C4A8A0", marginBottom: "24px" }}>{p.concept}</div>
                    </div>
                    <div style={{ borderTop: "1px solid #1E1E1E", paddingTop: "20px" }}>
                      <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#666", marginBottom: "8px", fontFamily: "sans-serif" }}>PRECIO OBJETIVO</div>
                      <div style={{ fontSize: "18px", color: "#C9A96E", letterSpacing: "2px" }}>{p.price}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {[
                      ["FUNCIÓN PSICOLÓGICA", p.psychology],
                      ["TIPO DE COMPRESIÓN", p.compression],
                      ["SILUETA Y CORTE", p.silhouette],
                      ["COSTURAS", p.seams],
                    ].map(([label, val], i) => (
                      <div key={i} style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "20px", flex: 1 }}>
                        <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#C9A96E", marginBottom: "8px", fontFamily: "sans-serif" }}>{label}</div>
                        <div style={{ fontSize: "12px", lineHeight: 1.7, color: "#888" }}>{val}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "24px" }}>
                    <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#C9A96E", marginBottom: "16px", fontFamily: "sans-serif" }}>EFECTOS CORPORALES BUSCADOS</div>
                    {p.effects.map((e, i) => (
                      <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "8px" }}>
                        <div style={{ color: "#C9A96E", fontSize: "8px", marginTop: "4px", flexShrink: 0 }}>◈</div>
                        <div style={{ fontSize: "12px", color: "#C4A8A0" }}>{e}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "20px", flex: 1 }}>
                      <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#C9A96E", marginBottom: "8px", fontFamily: "sans-serif" }}>PROPUESTA TEXTIL</div>
                      <div style={{ fontSize: "12px", lineHeight: 1.7, color: "#888" }}>{p.fabric}</div>
                    </div>
                    <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "20px", flex: 1 }}>
                      <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#C4A8A0", marginBottom: "8px", fontFamily: "sans-serif" }}>DIFERENCIACIÓN EN MERCADO</div>
                      <div style={{ fontSize: "12px", lineHeight: 1.7, color: "#888" }}>{p.diff}</div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* FABRICS SECTION */}
        {activeSection === "fabrics" && (
          <div>
            <SectionTitle number="04" title="ESTRATEGIA TEXTIL — LAFAYETTE COLOMBIA" />

            <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px", marginBottom: "24px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "16px", fontFamily: "sans-serif" }}>CRITERIOS DE SELECCIÓN TEXTIL NO NEGOCIABLES</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
                {[
                  ["Tacto mantequilla", "Suavidad extrema al contacto"],
                  ["Cero transparencia", "Certificado bajo tensión"],
                  ["Alta recuperación", "Retorno elástico > 95%"],
                  ["Acabado mate", "Sin brillo sintético barato"],
                  ["4-way stretch", "Elasticidad multidireccional"],
                  ["Secado rápido", "< 20 min en uso activo"],
                  ["Anti-pilling", "Resistencia a bolitas > 1000 ciclos"],
                  ["Compresión uniforme", "Sin deformación en uso prolongado"],
                ].map(([t, d], i) => (
                  <div key={i} style={{ borderLeft: "2px solid #C9A96E", paddingLeft: "12px" }}>
                    <div style={{ fontSize: "11px", color: "#E8E2D9", letterSpacing: "2px", marginBottom: "4px", fontFamily: "sans-serif" }}>{t}</div>
                    <div style={{ fontSize: "11px", color: "#555" }}>{d}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2px", marginBottom: "24px" }}>
              {fabrics.map((f, i) => (
                <div key={i} style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "24px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 3fr", gap: "20px", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#C9A96E", marginBottom: "6px", fontFamily: "sans-serif" }}>REFERENCIA</div>
                    <div style={{ fontSize: "13px", color: "#E8E2D9" }}>{f.name}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#666", marginBottom: "6px", fontFamily: "sans-serif" }}>COMPOSICIÓN</div>
                    <div style={{ fontSize: "11px", color: "#C4A8A0" }}>{f.comp}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#666", marginBottom: "6px", fontFamily: "sans-serif" }}>GRAMAJE</div>
                    <div style={{ fontSize: "11px", color: "#C4A8A0" }}>{f.gram}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#666", marginBottom: "6px", fontFamily: "sans-serif" }}>USO</div>
                    <div style={{ fontSize: "11px", color: "#C4A8A0" }}>{f.use}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#666", marginBottom: "6px", fontFamily: "sans-serif" }}>HAND FEEL</div>
                    <div style={{ fontSize: "11px", color: "#888" }}>{f.feel}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
              <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px" }}>
                <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "20px", fontFamily: "sans-serif" }}>PREGUNTAS CLAVE PARA LAFAYETTE</div>
                {[
                  "¿Tienen jersey sculpt con compresión graduada disponible en stock?",
                  "¿Cuál es el MOQ por referencia y colorway?",
                  "¿Tienen telas certificadas cero transparencia bajo tensión?",
                  "¿Ofrecen servicio de teñido personalizado para colores exclusivos?",
                  "¿Tienen muestra física de gramajes 260D, 280D y 300D para comparar?",
                  "¿Cuál es el tiempo de entrega para pedidos de desarrollo?",
                ].map((q, i) => (
                  <div key={i} style={{ marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid #1A1A1A", display: "flex", gap: "12px" }}>
                    <div style={{ color: "#C9A96E", fontSize: "10px", flexShrink: 0, fontFamily: "sans-serif" }}>0{i + 1}</div>
                    <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.6 }}>{q}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px" }}>
                <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "20px", fontFamily: "sans-serif" }}>PROCESO DE VALIDACIÓN TEXTIL</div>
                {[
                  ["PASO 1", "Solicitar swatches físicos de 5 referencias"],
                  ["PASO 2", "Test de transparencia: estirar 100% y fotografiar contra luz"],
                  ["PASO 3", "Test de tacto: comparar con referencia premium (Lululemon)"],
                  ["PASO 4", "Test de recuperación: estirar 500 veces y verificar retorno"],
                  ["PASO 5", "Lavado x5 y verificar estabilidad de color y forma"],
                  ["PASO 6", "Prueba de costura: confección de muestra y evaluación visual"],
                ].map(([paso, desc], i) => (
                  <div key={i} style={{ marginBottom: "16px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#C9A96E", fontFamily: "sans-serif", flexShrink: 0, paddingTop: "2px" }}>{paso}</div>
                    <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CONTENT SECTION */}
        {activeSection === "content" && (
          <div>
            <SectionTitle number="05" title="ESTRATEGIA DE CONTENIDO ASPIRACIONAL" />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", marginBottom: "24px" }}>
              <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px" }}>
                <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "20px", fontFamily: "sans-serif" }}>PERFIL DE LA MUJER VÓRTEX</div>
                {[
                  ["Edad", "22-35 años"],
                  ["Mentalidad", "Disciplinada, estética, ambiciosa, moderna"],
                  ["Dolor", "Ropa que no la hace sentir 'esa versión' de ella"],
                  ["Deseo", "Sentirse diferente, poderosa, admirable"],
                  ["Red social principal", "Instagram + TikTok"],
                  ["Compra por", "Cómo se ve, cómo la hacen sentir, cómo la perciben"],
                  ["Enemigo interno", "Verse igual que todas"],
                  ["Aspiración", "Ser 'la de la ropa premium que va al gym'"],
                ].map(([k, v], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", paddingBottom: "12px", borderBottom: "1px solid #1A1A1A" }}>
                    <div style={{ fontSize: "11px", color: "#555", letterSpacing: "2px", fontFamily: "sans-serif" }}>{k.toUpperCase()}</div>
                    <div style={{ fontSize: "12px", color: "#C4A8A0", textAlign: "right", maxWidth: "55%" }}>{v}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "24px", flex: 1 }}>
                  <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "16px", fontFamily: "sans-serif" }}>ESTÉTICA VISUAL INSTAGRAM</div>
                  <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.8 }}>
                    Grid oscuro-neutro. Fondos en tonos <span style={{ color: "#C4A8A0" }}>Pearl, Stone o Midnight</span>. Nunca fondo blanco puro ni colorido. Iluminación suave lateral que defina músculos sin parecer forzada. <span style={{ color: "#C9A96E" }}>Una mujer, una prenda, una emoción.</span> Sin texto en foto. Sin emojis en copy de publicación premium.
                  </div>
                </div>
                <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "24px", flex: 1 }}>
                  <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "16px", fontFamily: "sans-serif" }}>VOZ DE MARCA EN COPY</div>
                  <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.8 }}>
                    Directa. Segura. Sin interrogantes. Sin explicar demasiado. Frases cortas. Presente. <span style={{ color: "#C4A8A0" }}>"No es ropa. Es arquitectura corporal." "Diseñado para ser visto." "Tu silueta, redefinida."</span> Nunca usar: "increíble", "hermosa", "súper". Lenguaje de editorial de lujo.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2px", marginBottom: "24px" }}>
              {contentPillars.map((p, i) => (
                <div key={i} style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "24px" }}>
                  <div style={{ fontSize: "20px", color: "#C9A96E", marginBottom: "12px" }}>{p.icon}</div>
                  <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#E8E2D9", marginBottom: "12px", fontFamily: "sans-serif" }}>{p.title}</div>
                  <div style={{ fontSize: "11px", color: "#666", lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "28px" }}>
              <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C9A96E", marginBottom: "20px", fontFamily: "sans-serif" }}>TIPOS DE CONTENIDO PRIORITARIOS — TIKTOK + INSTAGRAM REELS</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[
                  { format: "REEL DE EFECTO ESPEJO", desc: "POV: te pones el legging VÓRTEX. 15 segundos de transformación de silueta frente al espejo. Sin hablar. Solo música y resultado.", perf: "Alto potencial viral" },
                  { format: "UNBOXING PREMIUM", desc: "Apertura del empaque VÓRTEX. Papelería negra. Cinta champagne. Olor a lujo. Detalle de prenda sobre seda. ASMR de empaque premium.", perf: "Genera deseo de producto" },
                  { format: "ANTES / DESPUÉS SILUETA", desc: "Misma mujer, mismo cuerpo, diferente legging. VÓRTEX vs básico. Resultado visual objetivo sin filtros.", perf: "Mayor conversión directa" },
                  { format: "OUTFIT TRANSITION GYM→CALLE", desc: "La jacket + legging VÓRTEX en transición gym-calle. Misma prenda, diferente contexto. Athleisure premium en acción.", perf: "Alta identificación" },
                ].map((c, i) => (
                  <div key={i} style={{ borderLeft: "2px solid #1E1E1E", paddingLeft: "16px" }}>
                    <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#E8E2D9", marginBottom: "8px", fontFamily: "sans-serif" }}>{c.format}</div>
                    <div style={{ fontSize: "11px", color: "#666", lineHeight: 1.6, marginBottom: "8px" }}>{c.desc}</div>
                    <div style={{ fontSize: "9px", color: "#C9A96E", letterSpacing: "2px", fontFamily: "sans-serif" }}>↗ {c.perf}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ROADMAP SECTION */}
        {activeSection === "roadmap" && (
          <div>
            <SectionTitle number="06" title="ROADMAP DE LANZAMIENTO — 6 MESES" />
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: "88px", top: 0, bottom: 0, width: "1px", background: "#1E1E1E" }} />
              {roadmap.map((r, i) => (
                <div key={i} style={{ display: "flex", gap: "32px", marginBottom: "2px" }}>
                  <div style={{ width: "72px", flexShrink: 0, paddingTop: "24px" }}>
                    <div style={{ fontSize: "8px", letterSpacing: "3px", color: "#C9A96E", fontFamily: "sans-serif", textAlign: "right" }}>{r.month}</div>
                  </div>
                  <div style={{ width: "16px", flexShrink: 0, paddingTop: "32px", position: "relative", zIndex: 1 }}>
                    <div style={{ width: "8px", height: "8px", background: "#C9A96E", borderRadius: "50%", marginLeft: "4px" }} />
                  </div>
                  <div style={{ flex: 1, background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "20px 24px", marginLeft: "8px" }}>
                    <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#C4A8A0", marginBottom: "16px", fontFamily: "sans-serif" }}>{r.phase}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px" }}>
                      {r.tasks.map((t, j) => (
                        <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <div style={{ color: "#C9A96E", fontSize: "8px", flexShrink: 0, marginTop: "4px" }}>◈</div>
                          <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.5 }}>{t}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px" }}>
              {[
                { kpi: "Mes 1-2", metric: "Identidad completa + 3 muestras físicas aprobadas" },
                { kpi: "Mes 3-4", metric: "500+ followers orgánicos + waitlist de 100 personas" },
                { kpi: "Mes 5", metric: "Lanzamiento oficial. Meta: 30 ventas en primera semana" },
              ].map((k, i) => (
                <div key={i} style={{ background: "#0D0D0D", border: "1px solid #1E1E1E", padding: "24px" }}>
                  <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#C9A96E", marginBottom: "12px", fontFamily: "sans-serif" }}>META {k.kpi.toUpperCase()}</div>
                  <div style={{ fontSize: "13px", color: "#C4A8A0", lineHeight: 1.7 }}>{k.metric}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1A1A1A", padding: "24px 40px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#333", fontFamily: "sans-serif" }}>
          {brandData.name} — BRAND BOOK V1.0 — CONFIDENCIAL
        </div>
        <div style={{ fontSize: "10px", color: "#C9A96E", letterSpacing: "3px", fontStyle: "italic" }}>
          "{brandData.tagline}"
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ number, title }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "16px", borderBottom: "1px solid #1E1E1E", paddingBottom: "16px" }}>
        <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#C9A96E", fontFamily: "sans-serif" }}>{number}</div>
        <h2 style={{ fontSize: "11px", letterSpacing: "6px", color: "#E8E2D9", margin: 0, fontFamily: "sans-serif", fontWeight: 400 }}>{title}</h2>
      </div>
    </div>
  );
}
