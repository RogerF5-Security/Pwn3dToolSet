"""Regenera los QR estáticos del portafolio (requiere: pip install segno)."""

from pathlib import Path

import segno


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "qr"
LINKS = {
    "github": "https://github.com/RogerF5-Security",
    "login": "https://github.com/RogerF5-Security/Login_Discover",
    "flipper": "https://rogerf5-security.github.io/Flipper-Zero-Emulador-Didactico-Web/",
    "scan": "https://rogerf5-security.github.io/Scan-Titan/",
    "wireless": "https://github.com/RogerF5-Security/Wireless_Audit",
    "ip": "https://github.com/RogerF5-Security/IP_Total",
    "ble": "https://github.com/RogerF5-Security/BLE-Scout",
}


def main() -> None:
    OUTPUT.mkdir(parents=True, exist_ok=True)
    for name, url in LINKS.items():
        code = segno.make(url, error="h")
        code.save(OUTPUT / f"{name}.svg", scale=8, border=4, dark="#111111", light="#ffffff")
        print(f"{name}: {url}")


if __name__ == "__main__":
    main()
