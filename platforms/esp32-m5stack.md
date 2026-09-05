# ESP32 & M5Stack Ecosystem

**Best for:** ages 13+, IoT, wearables, screen-based physical computing, no-soldering options
**Cost:** ~£5 for bare ESP32, ~£15–40 for M5Stack devices
**Languages:** MicroPython · Arduino C++ · UIFlow (Blocks)
**Buy:** [The Pi Hut](https://thepihut.com/) · [Pimoroni](https://shop.pimoroni.com/) · [RS](https://uk.rs-online.com/web/)

The **ESP32** is the industry standard for low-cost Wi-Fi and Bluetooth microcontrollers. It powers countless commercial smart home devices. 

While bare ESP32 boards (like the NodeMCU or WROOM) are fantastic for intermediate learners on breadboards, **M5Stack** has revolutionized the ESP32 for education. They wrap the ESP32 in robust plastic cases, add built-in screens, batteries, and buttons, and use plug-and-play Grove connectors. This completely eliminates fragile wiring for younger learners while retaining the full power of the ESP32.

---

## M5Stack (Zero-Wiring ESP32)

> **[M5Stack Official Documentation](https://docs.m5stack.com/en/)** — `Foundation` `Intermediate` `Reference`
> The central hub for pinouts, tutorials, and quick-start guides for the M5Core, M5StickC Plus, and ATOM series. Parts needed: M5Stack device.

> **[UIFlow Web IDE](https://flow.m5stack.com/)** — `Foundation` `Simulator`
> M5Stack's browser-based block programming environment that can instantly push code over Wi-Fi to a device without USB cables. Parts needed: M5Stack device.

> **[Random Nerd Tutorials: M5Stack Guide](https://randomnerdtutorials.com/getting-started-with-m5stack/)** — `Intermediate` `Tutorial`
> Step-by-step guides for programming the M5Stack core using the Arduino IDE, covering Wi-Fi servers and sensor displays. Parts needed: M5Stack Core.

---

## Bare ESP32 (Breadboarding & IoT)

> **[Getting Started with ESP32 (Random Nerd Tutorials)](https://randomnerdtutorials.com/getting-started-with-esp32/)** — `Intermediate` `Tutorial`
> The internet's most comprehensive free guide to building Wi-Fi web servers, weather stations, and Bluetooth beacons with an ESP32. Parts needed: ESP32 board, breadboard, LEDs.

> **[MicroPython on ESP32 Docs](https://docs.micropython.org/en/latest/esp32/quickref.html)** — `Intermediate` `Advanced` `Reference`
> Official quick reference for writing MicroPython on the ESP32, covering networking, deep sleep, and hardware interrupts. Parts needed: ESP32 board.

---

## Project ideas by track

> **[ESP32 Web Server (Arduino IDE)](https://randomnerdtutorials.com/esp32-web-server-arduino-ide/)** — `Intermediate` `Tutorial`
> Build a standalone web server to control outputs (like LEDs or relays) from a smartphone browser over Wi-Fi. Parts needed: ESP32, breadboard, LED.

> **[M5StickC Plus Environment Monitor](https://docs.m5stack.com/en/quick_start/m5stickc_plus/uiflow)** — `Foundation` `Tutorial`
> Use UIFlow blocks to read an ENV III sensor unit and display real-time temperature and humidity on the built-in LCD screen. Parts needed: M5StickC Plus, ENV unit.

**Foundation ideas (M5Stack):** smart stopwatch · Wi-Fi message board · Pomodoro timer · tilt-controlled screen game

**Intermediate ideas (ESP32):** DHT11 weather station posting to a web dashboard · Bluetooth Low Energy (BLE) beacon · internet radio player · home automation relay controller

**Advanced ideas:** OTA (Over-The-Air) firmware updates · ESP-NOW mesh networking between multiple robots · camera streaming (ESP32-CAM)
