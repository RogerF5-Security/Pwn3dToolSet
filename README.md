# RF5 Tools — portafolio de demostraciones

Sitio estático y responsivo que reúne seis herramientas abiertas de Roger F5. Sirve como punto de entrada para una explicación técnica en vivo: muestra qué recibe cada herramienta, qué procesa, qué evidencia produce y dónde abrir su demo o instalarla. Incluye un mapa interactivo, modo escenario y códigos QR para compartir los recursos.

**Sitio público:** https://rogerf5-security.github.io/Pwn3dToolSet/

## Herramientas

| Proyecto | Tipo | Acceso |
| --- | --- | --- |
| [Login Discover](https://github.com/RogerF5-Security/Login_Discover) | Python, GUI/CLI | Instalación local |
| [Flipper Zero Web](https://github.com/RogerF5-Security/Flipper-Zero-Emulador-Didactico-Web) | HTML, CSS, JavaScript | [Demo web](https://rogerf5-security.github.io/Flipper-Zero-Emulador-Didactico-Web/) |
| [Scan Titan](https://github.com/RogerF5-Security/Scan-Titan) | Python, CLI | [Web explicativa](https://rogerf5-security.github.io/Scan-Titan/) y motor local |
| [Wireless Audit](https://github.com/RogerF5-Security/Wireless_Audit) | Python, GUI | Instalación local |
| [IP Total](https://github.com/RogerF5-Security/IP_Total) | Python, GUI/CLI | Instalación local |
| [BLE Scout](https://github.com/RogerF5-Security/BLE-Scout) | C++, ESP32-S3 | Firmware y dashboard en la red del dispositivo |

## Ejecutar localmente

No hay dependencias de npm, compilación ni API. Desde la raíz:

```powershell
python -m http.server 4173
```

Abre `http://127.0.0.1:4173/`. Los filtros, fichas de detalle, búsqueda, mapa interactivo, modo escenario y pantalla completa funcionan en el navegador. Las imágenes y el clip del proyecto Flipper están en `assets/`; los enlaces externos se abren en otra pestaña.

## Modo escenario

- Pulsa **Iniciar presentación** o `S` para mostrar la primera herramienta.
- Usa `1` a `6` para ir a una herramienta, `←`/`→` o los botones para avanzar, `Home` para empezar, `End` para mostrar el QR final y `Esc` para salir.
- Cada módulo incluye captura auténtica, flujo entrada → proceso → evidencia, acceso a demo o guía, repositorio y un QR del recurso principal.
- Los comandos copiables son autopruebas o comprobaciones locales documentadas en cada repositorio; no ejecutan escaneos desde esta web.
- La pantalla final y la sección **Código abierto** incluyen un QR para [github.com/RogerF5-Security](https://github.com/RogerF5-Security).

La guía [PRESENTACION.md](PRESENTACION.md) contiene la preparación de los recursos y el recorrido sugerido. El contador de la portada distingue la demo interactiva de Flipper Zero de la web explicativa de Scan Titan.

## Procedencia de los recursos visuales

El logo de Roger F5 se copió sin modificar desde el portafolio `whoami`. Las capturas adicionales proceden de `Flipper-Zero-Emulador-Didactico-Web/assets/emulator-screenshot.png`, `Scan-Titan/docs/web/media/terminal.png`, `Wireless_Audit/data/ui_radar_final.png`, `Wireless_Audit/data/ui_wardriving_final.png`, `BLE-Scout/docs/images/dashboard-mobile.png` y `BLE-Scout/docs/images/device-radar.png`. El clip GPIO procede de `Flipper-Zero-Emulador-Didactico-Web/assets/presentacion/gpio-lab/esp32-cam-demo.mp4`. Las capturas de portada ya existentes se conservan.

Los SVG en `assets/qr/` son estáticos y no necesitan una API externa. Para regenerarlos tras cambiar un enlace: `python -m pip install segno` y `python scripts/generate_qr.py`.

## Despliegue

GitHub Pages sirve la rama `main` desde `/`. El archivo `.nojekyll` evita procesamiento adicional de Jekyll. La web usa rutas relativas para sus recursos y no depende de fuentes o librerías remotas.

## Uso

Este sitio presenta herramientas para entornos controlados y auditorías autorizadas. Las demos web son públicas; los escáneres, interfaces de escritorio y firmware requieren instalación y condiciones de operación descritas en cada repositorio.
