# RF5 Tools — portafolio de demostraciones

Sitio estático y responsivo que reúne seis herramientas abiertas de Roger F5. Sirve como punto de entrada para una explicación técnica en vivo: muestra qué recibe cada herramienta, qué procesa, qué evidencia produce y dónde abrir su demo o instalarla.

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

Abre `http://127.0.0.1:4173/`. Los filtros, fichas de detalle, búsqueda, atajos `1` a `6` y pantalla completa funcionan en el navegador. Las imágenes optimizadas están en `assets/` y los enlaces externos se abren en otra pestaña.

## Despliegue

GitHub Pages sirve la rama `main` desde `/`. El archivo `.nojekyll` evita procesamiento adicional de Jekyll. La web usa rutas relativas para sus recursos y no depende de fuentes o librerías remotas.

## Uso

Este sitio presenta herramientas para entornos controlados y auditorías autorizadas. Las demos web son públicas; los escáneres, interfaces de escritorio y firmware requieren instalación y condiciones de operación descritas en cada repositorio.
