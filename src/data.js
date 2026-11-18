export const WHATSAPP = "50557344053";
export const CORREO = "marvingonzalez234aviles@gmail.com";
export const MENSAJE_COTIZAR =
  "Hola Quark Studio, quiero cotizar una página web o sistema para mi negocio.";
export const MENSAJE_PROPUESTA =
  "Hola Quark Studio, quiero una propuesta para mi negocio.";

export const PAQUETES = [
  {
    nombre: "Órbita",
    precio: 200,
    entrega: "3 a 5 días",
    ideal: "negocios que arrancan y necesitan presencia ya",
    incluye: [
      "Landing de 1 página",
      "Diseño a medida",
      "Botón de WhatsApp, mapa y redes",
      "Adaptada a celular",
    ],
  },
  {
    nombre: "Galaxia",
    precio: 400,
    entrega: "1 a 2 semanas",
    ideal: "negocios que quieren mostrar todo lo que ofrecen",
    incluye: [
      "4 a 6 secciones",
      "Galería y formulario de contacto",
      "SEO básico",
      "Dominio y hosting el primer año",
    ],
  },
  {
    nombre: "Nebulosa",
    precio: 700,
    entrega: "3 a 5 semanas",
    ideal: "negocios con citas, pedidos o catálogo",
    recomendado: true,
    incluye: [
      "Tienda en línea o reserva de citas",
      "Panel para administrar todo",
      "Pedidos por WhatsApp o pago en línea",
      "Capacitación incluida",
      "Todo lo de Galaxia",
    ],
  },
  {
    nombre: "Universo",
    precio: 1500,
    desde: true,
    entrega: "1 a 3 meses",
    ideal: "empresas que necesitan un sistema propio",
    incluye: [
      "Sistema a la medida",
      "Usuarios, roles y reportes",
      "Integraciones",
      "Acompañamiento continuo",
      "Todo lo de Nebulosa",
    ],
  },
];

export const EXTRAS = [
  { nombre: "Logo e identidad", precio: 100 },
  { nombre: "Google Business y SEO local", precio: 100 },
  { nombre: "Panel de administración", precio: 150, soloPaquetes: [0, 1] },
  { nombre: "Mantenimiento mensual", precio: 40, mensual: true },
];

export const SECTORES = [
  "Barberías y salones",
  "Clínicas",
  "Restaurantes",
  "Tiendas",
  "Eventos",
  "Empresas",
];

export const SERVICIOS = [
  [
    "Páginas web",
    "Sitios rápidos y adaptados a celular, con botón de WhatsApp, mapa y redes, para que tus clientes te encuentren y te escriban.",
  ],
  [
    "Tiendas en línea",
    "Catálogo, carrito y pedidos por WhatsApp o pago en línea, con un panel para subir tus productos tú mismo.",
  ],
  [
    "Sistemas a la medida",
    "Inventario, facturación, citas y control interno, con usuarios, roles y reportes hechos para cómo trabaja tu empresa.",
  ],
  [
    "Mantenimiento y soporte",
    "Hosting, respaldos, cambios de contenido y mejoras mensuales, con una persona real que responde.",
  ],
];

export const PROYECTOS = [
  "Web con citas para barbería",
  "Landing para clínica dental",
  "Sistema de inventario",
];

export const PASOS = [
  ["Conversamos", "Entendemos tu negocio y qué necesitas resolver."],
  ["Diseñamos", "Te mostramos el diseño y lo ajustamos contigo."],
  ["Construimos", "Desarrollamos y probamos en celular y computadora."],
  ["Lanzamos y acompañamos", "Publicamos tu proyecto y seguimos disponibles."],
];

export const POR_QUE = [
  [
    "Diseño a medida",
    "Nada de plantillas genéricas. Cada proyecto se diseña para la marca y los clientes de tu negocio.",
  ],
  [
    "Tecnología moderna",
    "Usamos las herramientas de las empresas grandes, para que tu página sea rápida y segura.",
  ],
  [
    "Trato directo",
    "Hablas con quien construye tu proyecto, sin intermediarios ni procesos eternos.",
  ],
  [
    "Acompañamiento",
    "Después del lanzamiento seguimos contigo con soporte, cambios y mejoras.",
  ],
];

export const TECNOLOGIAS = [
  "React",
  "Vite",
  "Node.js",
  "Express",
  "JavaScript",
  "HTML y CSS",
];

export const TEXTO_NOSOTROS =
  "Creemos que cada negocio merece una presencia digital que se sienta propia. Por eso diseñamos a medida, hablamos claro y entregamos con tecnología moderna, directo contigo y sin intermediarios.";

export const PREGUNTAS = [
  [
    "¿Cuánto tarda mi proyecto?",
    "Una landing puede estar lista en 3 a 5 días. Una web con citas o tienda, entre 3 y 5 semanas. Un sistema a la medida, entre 1 y 3 meses.",
  ],
  [
    "¿Cómo se paga?",
    "50% de adelanto y 50% al entregar. En sistemas grandes se divide en tres pagos.",
  ],
  [
    "¿El dominio y el hosting quedan a mi nombre?",
    "Sí. Tu dominio y tu cuenta son tuyos. El mantenimiento es un servicio aparte que puedes contratar cuando quieras.",
  ],
  [
    "¿Podré editar mi página yo mismo?",
    "Sí. Con los paquetes que incluyen panel de administración puedes cambiar textos, fotos y productos sin tocar código.",
  ],
  [
    "¿Trabajan con negocios fuera de Managua?",
    "Sí. Trabajamos con negocios de todo el país y también a distancia.",
  ],
];
