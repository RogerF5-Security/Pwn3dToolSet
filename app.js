const tools = [
  {id:"login", title:"Login Discover", type:"AUTENTICACIÓN / PYTHON", description:"Localiza paneles de login y permite estudiar peticiones HTTP de autenticación con límites de volumen, modos de payload y comparación de respuestas.", input:"Objetivos y petición HTTP de laboratorio", process:"Descubrimiento y pruebas limitadas de formularios", output:"Diferencias de respuesta y evidencia de controles", note:"Aplicación local. La imagen muestra la salida real de --help; abre el README para preparar la GUI y la CLI.", primary:"Ver instalación", primaryUrl:"https://github.com/RogerF5-Security/Login_Discover#instalación", source:"https://github.com/RogerF5-Security/Login_Discover", image:"assets/login-discover.webp"},
  {id:"flipper", title:"Flipper Zero Web", type:"SIMULACIÓN / WEB", description:"Explora menús, archivos y periféricos virtuales de Flipper Zero desde el navegador. Los laboratorios muestran conceptos sin depender de hardware físico.", input:"Controles virtuales y misiones guiadas", process:"Simulación local de estados y periféricos", output:"Aprendizaje interactivo en el navegador", note:"Demo web funcional. La radio, el USB y GPIO son virtuales; el sitio no opera sobre hardware físico.", primary:"Abrir simulador", primaryUrl:"https://rogerf5-security.github.io/Flipper-Zero-Emulador-Didactico-Web/", source:"https://github.com/RogerF5-Security/Flipper-Zero-Emulador-Didactico-Web", image:"assets/flipper-web.webp"},
  {id:"scan", title:"Scan Titan", type:"ESCÁNER / PYTHON", description:"Orquesta reconocimiento, pruebas web y herramientas externas para producir evidencias, matrices y reportes de auditoría desde una ejecución controlada.", input:"Alcance, objetivos y perfil de escaneo", process:"Módulos Python y motores especializados", output:"Hallazgos, observabilidad y reportes", note:"La web pública explica el proyecto. El motor de escaneo se instala y ejecuta localmente; la página no inicia escaneos.", primary:"Abrir web", primaryUrl:"https://rogerf5-security.github.io/Scan-Titan/", source:"https://github.com/RogerF5-Security/Scan-Titan", image:"assets/scan-titan.webp"},
  {id:"wireless", title:"Wireless Audit", type:"WI-FI / ESCRITORIO", description:"Centraliza inventario inalámbrico, radar, wardriving y validación de adaptadores. Separa la observación Wi-Fi de la disponibilidad real de monitor e inyección.", input:"Adaptador Wi-Fi y, opcionalmente, GPS", process:"Observación, clasificación y recorrido", output:"Inventario y exportaciones locales", note:"Aplicación local; las capacidades RF dependen del adaptador, controlador y sistema operativo presentes.", primary:"Ver instalación", primaryUrl:"https://github.com/RogerF5-Security/Wireless_Audit#instalación-y-requisitos", source:"https://github.com/RogerF5-Security/Wireless_Audit", image:"assets/wireless-audit.webp"},
  {id:"ip", title:"IP Total", type:"RECONOCIMIENTO / PYTHON", description:"Reúne resolución, DNS, WHOIS, puertos, web y TLS en una ficha de activo con reportes HTML y JSON, accesible desde CLI o interfaz gráfica.", input:"IP o dominio dentro del alcance", process:"Consultas y comprobaciones de red", output:"Perfil técnico y reportes HTML/JSON", note:"Aplicación local. La imagen muestra la salida real de --help; el README incluye instalación y ejemplo de consola.", primary:"Ver instalación", primaryUrl:"https://github.com/RogerF5-Security/IP_Total#instalación", source:"https://github.com/RogerF5-Security/IP_Total", image:"assets/ip-total.webp"},
  {id:"ble", title:"BLE Scout", type:"BLUETOOTH LE / HARDWARE", description:"Firmware para LILYGO T-Dongle-S3 que observa anuncios BLE, registra dispositivos y sirve reportes desde un panel local tras guardar evidencia en microSD.", input:"Anuncios BLE próximos y microSD", process:"Inventario pasivo en ESP32-S3", output:"Radar, CSV y HTML en red local", note:"El dashboard requiere el dongle físico y su red local. No existe una demo pública remota de ese panel.", primary:"Ver instalación", primaryUrl:"https://github.com/RogerF5-Security/BLE-Scout#descarga-rápida", source:"https://github.com/RogerF5-Security/BLE-Scout", image:"assets/ble-scout.webp"}
];

const dialog = document.querySelector("#detail-dialog");
const cards = [...document.querySelectorAll(".tool-card")];
const filters = [...document.querySelectorAll(".filter")];
const search = document.querySelector("#search");
let activeFilter = "all";
let selected = 0;

function filterCards() {
  const query = search.value.trim().toLocaleLowerCase("es");
  let visible = 0;
  cards.forEach(card => {
    const match = (activeFilter === "all" || card.dataset.category === activeFilter) && (!query || card.dataset.search.includes(query));
    card.hidden = !match;
    if (match) visible++;
  });
  document.querySelector("#result-count").textContent = `Mostrando ${visible} ${visible === 1 ? "herramienta" : "herramientas"}`;
  document.querySelector("#empty-state").hidden = visible !== 0;
}

filters.forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  filters.forEach(item => { item.classList.toggle("active", item === button); item.setAttribute("aria-pressed", item === button ? "true" : "false"); });
  filterCards();
}));
search.addEventListener("input", filterCards);

function showTool(index) {
  selected = (index + tools.length) % tools.length;
  const tool = tools[selected];
  document.querySelector("#detail-number").textContent = `${String(selected + 1).padStart(2,"0")} / 06`;
  document.querySelector("#detail-type").textContent = tool.type;
  document.querySelector("#detail-title").textContent = tool.title;
  document.querySelector("#detail-description").textContent = tool.description;
  document.querySelector("#detail-input").textContent = tool.input;
  document.querySelector("#detail-process").textContent = tool.process;
  document.querySelector("#detail-output").textContent = tool.output;
  document.querySelector("#detail-note").textContent = tool.note;
  const image = document.querySelector("#detail-image");
  image.src = tool.image;
  image.alt = `Vista de ${tool.title}`;
  const primary = document.querySelector("#detail-primary");
  primary.href = tool.primaryUrl;
  primary.textContent = `${tool.primary} ↗`;
  document.querySelector("#detail-source").href = tool.source;
  if (!dialog.open) dialog.showModal();
}

cards.forEach((card, index) => card.querySelector(".details")?.addEventListener("click", () => showTool(index)));
document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
document.querySelector("#previous-tool").addEventListener("click", () => showTool(selected - 1));
document.querySelector("#next-tool").addEventListener("click", () => showTool(selected + 1));
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", event => {
  if (event.target instanceof HTMLInputElement || event.altKey || event.ctrlKey || event.metaKey) return;
  if (dialog.open && event.key === "ArrowLeft") { event.preventDefault(); showTool(selected - 1); }
  if (dialog.open && event.key === "ArrowRight") { event.preventDefault(); showTool(selected + 1); }
  if (!dialog.open && /^[1-6]$/.test(event.key)) showTool(Number(event.key) - 1);
});

document.querySelector("#fullscreen").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (error) { console.warn("Pantalla completa no disponible", error); }
});
