# Guía rápida para presentar RF5 Tools

La web es el panel de control de la demostración. No necesita diapositivas, servidor de aplicaciones ni dependencias de JavaScript externas.

## Preparación

1. Abre la [web pública](https://rogerf5-security.github.io/Pwn3dToolSet/) y pulsa **Iniciar presentación**. Comprueba que las seis capturas y la pantalla final con QR carguen.
2. Abre en pestañas el [simulador Flipper Zero](https://rogerf5-security.github.io/Flipper-Zero-Emulador-Didactico-Web/) y la [web técnica de Scan Titan](https://rogerf5-security.github.io/Scan-Titan/). La segunda explica el motor; el escáner corre localmente.
3. Prepara en sus directorios locales Login Discover, Scan Titan, Wireless Audit e IP Total. Sus fichas enlazan los README y ofrecen comandos de autoprueba o comprobación para copiar.
4. Para BLE Scout, comprueba físicamente el dongle, la microSD y el acceso a su panel en la red local. Su captura pública sirve para explicar el flujo si el dispositivo no está conectado.
5. Si la conexión a Internet falla, ejecuta `python -m http.server 4173` desde este repositorio y abre `http://127.0.0.1:4173/`. El mapa, las capturas y el modo escenario son locales; los enlaces y QR a GitHub requieren Internet.

## Recorrido en vivo

| Módulo | Pregunta de apertura | Evidencia que mostrar | Acceso |
| --- | --- | --- | --- |
| Login Discover | ¿Dónde aparecen las superficies de autenticación? | Ayuda real de Intruder y límites de petición | README y repositorio |
| Flipper Zero Web | ¿Cómo explicar periféricos sin depender del hardware? | Simulador y clip del laboratorio GPIO | Demo web |
| Scan Titan | ¿Cómo se enlazan reconocimiento y reportes? | Web técnica y salida de terminal | Web técnica y motor local |
| Wireless Audit | ¿Qué señales Wi-Fi se pueden observar? | Radar y wardriving | Aplicación local |
| IP Total | ¿Cómo convertir una IP en una ficha técnica? | CLI y reportes HTML/JSON | Aplicación local |
| BLE Scout | ¿Qué registra un inventario BLE pasivo? | Dashboard y radar del dongle | Firmware y panel local |

Pulsa `S` para entrar en modo escenario, `1` a `6` para saltar a un módulo, `←`/`→` para avanzar, `End` para la pantalla final de GitHub y `Esc` para salir. Cada pantalla contiene el enlace y el QR del recurso principal. El botón **Código fuente** abre el repositorio correspondiente.

## Límites visibles en la web

El simulador Flipper Zero es la demo interactiva pública. La página de Scan Titan es explicativa. Login Discover, Scan Titan, Wireless Audit e IP Total requieren ejecución local. BLE Scout requiere el LILYGO T-Dongle-S3 y su red local. Las capturas son evidencia visual de los proyectos y no simulan un escaneo en tiempo real.
