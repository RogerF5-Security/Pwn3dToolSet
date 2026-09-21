const tools = [
  {
    id: "login", title: "Login Discover", type: "AUTENTICACIÓN / PYTHON",
    description: "Localiza paneles de login y permite estudiar peticiones HTTP de autenticación con límites de volumen, modos de payload y comparación de respuestas.",
    input: "Objetivos y petición HTTP de laboratorio", process: "Descubrimiento y pruebas limitadas de formularios", output: "Diferencias de respuesta y evidencia de controles",
    note: "Aplicación local. La captura muestra la salida real de la CLI; abre el README para preparar la GUI y la consola.",
    primary: "Ver instalación", primaryUrl: "https://github.com/RogerF5-Security/Login_Discover#instalación",
    source: "https://github.com/RogerF5-Security/Login_Discover", qr: "assets/qr/login.svg", qrLabel: "Repositorio y guía de instalación",
    command: "python main.py --self-test", image: "assets/login-discover.webp",
    slides: [{src: "assets/login-discover.webp", label: "CLI real · ayuda de Intruder"}]
  },
  {
    id: "flipper", title: "Flipper Zero Web", type: "SIMULACIÓN / WEB",
    description: "Explora menús, archivos y periféricos virtuales de Flipper Zero desde el navegador. Los laboratorios muestran conceptos sin depender de hardware físico.",
    input: "Controles virtuales y misiones guiadas", process: "Simulación local de estados y periféricos", output: "Aprendizaje interactivo en el navegador",
    note: "Demo web funcional. La radio, el USB y GPIO son virtuales; el sitio no opera sobre hardware físico.",
    primary: "Abrir simulador", primaryUrl: "https://rogerf5-security.github.io/Flipper-Zero-Emulador-Didactico-Web/",
    source: "https://github.com/RogerF5-Security/Flipper-Zero-Emulador-Didactico-Web", qr: "assets/qr/flipper.svg", qrLabel: "Simulador interactivo",
    image: "assets/flipper-web.webp",
    slides: [
      {src: "assets/flipper-web.webp", label: "Captura real · simulador"},
      {src: "assets/evidence/flipper-emulator.png", label: "Captura real · interfaz del emulador"},
      {src: "assets/evidence/flipper-gpio.mp4", poster: "assets/flipper-web.webp", type: "video", label: "Clip del proyecto · laboratorio GPIO"}
    ]
  },
  {
    id: "scan", title: "Scan Titan", type: "ESCÁNER / PYTHON",
    description: "Orquesta reconocimiento, pruebas web y herramientas externas para producir evidencias, matrices y reportes de auditoría desde una ejecución controlada.",
    input: "Alcance, objetivos y perfil de escaneo", process: "Módulos Python y motores especializados", output: "Hallazgos, observabilidad y reportes",
    note: "La web pública explica el proyecto. El motor de escaneo se instala y ejecuta localmente; esta página no inicia escaneos.",
    primary: "Abrir web técnica", primaryUrl: "https://rogerf5-security.github.io/Scan-Titan/",
    source: "https://github.com/RogerF5-Security/Scan-Titan", qr: "assets/qr/scan.svg", qrLabel: "Web técnica de Scan Titan",
    command: "python main.py --health-check", image: "assets/scan-titan.webp",
    slides: [
      {src: "assets/scan-titan.webp", label: "Web técnica · Scan Titan"},
      {src: "assets/evidence/scan-titan-terminal.png", label: "Captura real · salida de terminal"}
    ]
  },
  {
    id: "wireless", title: "Wireless Audit", type: "WI-FI / ESCRITORIO",
    description: "Centraliza inventario inalámbrico, radar, wardriving y validación de adaptadores. Separa la observación Wi-Fi de la disponibilidad real de monitor e inyección.",
    input: "Adaptador Wi-Fi y, opcionalmente, GPS", process: "Observación, clasificación y recorrido", output: "Inventario y exportaciones locales",
    note: "Aplicación local; las capacidades RF dependen del adaptador, controlador y sistema operativo presentes.",
    primary: "Ver instalación", primaryUrl: "https://github.com/RogerF5-Security/Wireless_Audit#instalación-y-requisitos",
    source: "https://github.com/RogerF5-Security/Wireless_Audit", qr: "assets/qr/wireless.svg", qrLabel: "Repositorio y guía de instalación",
    command: "python .\\WirelessAuditPro.py --self-test", image: "assets/wireless-audit.webp",
    slides: [
      {src: "assets/wireless-audit.webp", label: "Captura real · aplicación"},
      {src: "assets/evidence/wireless-radar.png", label: "Captura real · radar Wi-Fi"},
      {src: "assets/evidence/wireless-wardriving.png", label: "Captura real · wardriving"}
    ]
  },
  {
    id: "ip", title: "IP Total", type: "RECONOCIMIENTO / PYTHON",
    description: "Reúne resolución, DNS, WHOIS, puertos, web y TLS en una ficha de activo con reportes HTML y JSON, accesible desde CLI o interfaz gráfica.",
    input: "IP o dominio dentro del alcance", process: "Consultas y comprobaciones de red", output: "Perfil técnico y reportes HTML/JSON",
    note: "Aplicación local. La captura muestra la salida real de la CLI; el README incluye instalación y ejemplos.",
    primary: "Ver instalación", primaryUrl: "https://github.com/RogerF5-Security/IP_Total#instalación",
    source: "https://github.com/RogerF5-Security/IP_Total", qr: "assets/qr/ip.svg", qrLabel: "Repositorio y guía de instalación",
    command: "python IP_Total.py --self-test", image: "assets/ip-total.webp",
    slides: [{src: "assets/ip-total.webp", label: "CLI real · ayuda de IP Total"}]
  },
  {
    id: "ble", title: "BLE Scout", type: "BLUETOOTH LE / HARDWARE",
    description: "Firmware para LILYGO T-Dongle-S3 que observa anuncios BLE, registra dispositivos y sirve reportes desde un panel local tras guardar evidencia en microSD.",
    input: "Anuncios BLE próximos y microSD", process: "Inventario pasivo en ESP32-S3", output: "Radar, CSV y HTML en red local",
    note: "El dashboard requiere el dongle físico y su red local. No existe una demo pública remota de ese panel.",
    primary: "Ver instalación", primaryUrl: "https://github.com/RogerF5-Security/BLE-Scout#descarga-rápida",
    source: "https://github.com/RogerF5-Security/BLE-Scout", qr: "assets/qr/ble.svg", qrLabel: "Repositorio y firmware",
    image: "assets/ble-scout.webp",
    slides: [
      {src: "assets/ble-scout.webp", label: "Captura real · dashboard local"},
      {src: "assets/evidence/ble-dashboard.png", label: "Captura real · panel móvil"},
      {src: "assets/evidence/ble-radar.png", label: "Captura real · radar en el dispositivo"}
    ]
  }
];

const dialog = document.querySelector("#detail-dialog");
const cards = [...document.querySelectorAll(".tool-card")];
const filters = [...document.querySelectorAll(".filter")];
const search = document.querySelector("#search");
let activeFilter = "all";
let selected = 0;
let mapSelected = 0;

const stage = document.querySelector("#stage-dialog");
const stageMedia = document.querySelector("#stage-media");
const stageMediaNav = document.querySelector("#stage-media-nav");
let stageSelected = 0;
let mediaSelected = 0;
let mediaTimer;

function setMapTool(index) {
  mapSelected = index;
  const tool = tools[index];
  document.querySelectorAll(".map-node").forEach((node, nodeIndex) => {
    const active = nodeIndex === index;
    node.classList.toggle("active", active);
    node.setAttribute("aria-pressed", String(active));
  });
  document.querySelector("#map-name").textContent = tool.title;
  document.querySelector("#map-summary").textContent = tool.description;
  document.querySelector("#map-input").textContent = tool.input;
  document.querySelector("#map-process").textContent = tool.process;
  document.querySelector("#map-output").textContent = tool.output;
}

document.querySelectorAll(".map-node").forEach(node => node.addEventListener("click", () => setMapTool(Number(node.dataset.mapIndex))));
document.querySelector("#map-present").addEventListener("click", () => openStage(mapSelected));
setMapTool(0);

cards.forEach((card, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "stage-card-button";
  button.textContent = "▶ Presentar";
  button.setAttribute("aria-label", `Presentar ${tools[index].title} en modo escenario`);
  button.addEventListener("click", () => openStage(index));
  card.querySelector(".card-image").append(button);
});

function stopMediaTimer() {
  if (mediaTimer) window.clearInterval(mediaTimer);
  mediaTimer = undefined;
  stageMedia.querySelector("video")?.pause();
}

function showMedia(index) {
  stopMediaTimer();
  const slides = tools[stageSelected].slides;
  mediaSelected = index;
  const slide = slides[index];
  stageMedia.replaceChildren();
  const element = document.createElement(slide.type === "video" ? "video" : "img");
  element.className = "stage-evidence";
  element.src = slide.src;
  if (slide.type === "video") {
    element.poster = slide.poster;
    element.muted = true;
    element.loop = true;
    element.autoplay = true;
    element.playsInline = true;
    element.controls = true;
    element.setAttribute("aria-label", slide.label);
  } else {
    element.alt = `${tools[stageSelected].title}: ${slide.label}`;
  }
  stageMedia.append(element);
  document.querySelector("#stage-media-label").textContent = slide.label;
  stageMediaNav.replaceChildren();
  slides.forEach((item, slideIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = slideIndex === index ? "active" : "";
    button.setAttribute("aria-label", `Ver ${item.label}`);
    button.setAttribute("aria-pressed", String(slideIndex === index));
    button.addEventListener("click", () => showMedia(slideIndex));
    stageMediaNav.append(button);
  });
  if (slide.type === "video") element.play().catch(() => {});
  if (slides.length > 1 && slide.type !== "video" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    mediaTimer = window.setInterval(() => showMedia((mediaSelected + 1) % slides.length), 7000);
  }
}

function renderStage(index) {
  stopMediaTimer();
  stageSelected = (index + tools.length + 1) % (tools.length + 1);
  const finale = stageSelected === tools.length;
  document.querySelector("#stage-tool").hidden = finale;
  document.querySelector("#stage-finale").hidden = !finale;
  document.querySelector("#stage-counter").textContent = `${String(stageSelected + 1).padStart(2, "0")} / 07`;
  document.querySelector("#stage-progress-fill").style.width = `${((stageSelected + 1) / 7) * 100}%`;
  document.querySelector("#stage-previous").disabled = stageSelected === 0;
  document.querySelector("#stage-next").textContent = finale ? "Volver al inicio ↺" : stageSelected === tools.length - 1 ? "Ver código y QR →" : "Siguiente →";
  if (finale) return;

  const tool = tools[stageSelected];
  document.querySelector("#stage-type").textContent = `${String(stageSelected + 1).padStart(2, "0")} / ${tool.type}`;
  document.querySelector("#stage-title").textContent = tool.title;
  document.querySelector("#stage-description").textContent = tool.description;
  document.querySelector("#stage-input").textContent = tool.input;
  document.querySelector("#stage-process").textContent = tool.process;
  document.querySelector("#stage-output").textContent = tool.output;
  document.querySelector("#stage-note").textContent = tool.note;
  const primary = document.querySelector("#stage-primary");
  primary.href = tool.primaryUrl;
  primary.textContent = `${tool.primary} ↗`;
  document.querySelector("#stage-source").href = tool.source;
  const command = document.querySelector("#copy-command");
  command.hidden = !tool.command;
  command.dataset.command = tool.command || "";
  command.textContent = "Copiar verificación";
  const qr = document.querySelector("#stage-qr-image");
  qr.src = tool.qr;
  qr.alt = `Código QR para ${tool.qrLabel.toLowerCase()} de ${tool.title}`;
  document.querySelector("#stage-qr-label").textContent = tool.qrLabel;
  setMapTool(stageSelected);
  showMedia(0);
}

function openStage(index = 0) {
  if (dialog.open) dialog.close();
  if (!stage.open) {
    stage.setAttribute("tabindex", "-1");
    stage.showModal();
    stage.focus({preventScroll: true});
  }
  document.body.classList.add("stage-open");
  renderStage(index);
}

document.querySelector("#open-stage").addEventListener("click", () => openStage(0));
document.querySelector("#hero-stage").addEventListener("click", () => openStage(0));
document.querySelector("#close-stage").addEventListener("click", () => stage.close());
document.querySelector("#stage-previous").addEventListener("click", () => renderStage(stageSelected - 1));
document.querySelector("#stage-next").addEventListener("click", () => renderStage(stageSelected + 1));
stage.addEventListener("close", () => { stopMediaTimer(); document.body.classList.remove("stage-open"); });
document.querySelector("#copy-command").addEventListener("click", async event => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(button.dataset.command);
    button.textContent = "Verificación copiada ✓";
  } catch (error) {
    button.textContent = button.dataset.command;
  }
});

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
  if (stage.open) {
    if (event.key === "ArrowLeft" || event.key === "PageUp") { event.preventDefault(); renderStage(Math.max(0, stageSelected - 1)); }
    else if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") { event.preventDefault(); renderStage(stageSelected + 1); }
    else if (event.key === "Home") { event.preventDefault(); renderStage(0); }
    else if (event.key === "End") { event.preventDefault(); renderStage(tools.length); }
    else if (/^[1-6]$/.test(event.key)) { event.preventDefault(); renderStage(Number(event.key) - 1); }
    else if (event.key === "Escape") stage.close();
    return;
  }
  if (dialog.open && event.key === "ArrowLeft") { event.preventDefault(); showTool(selected - 1); }
  if (dialog.open && event.key === "ArrowRight") { event.preventDefault(); showTool(selected + 1); }
  if (dialog.open) return;
  if (/^[1-6]$/.test(event.key)) openStage(Number(event.key) - 1);
  if (event.key.toLowerCase() === "s") openStage(0);
});

document.querySelector("#fullscreen").addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch (error) { console.warn("Pantalla completa no disponible", error); }
});
