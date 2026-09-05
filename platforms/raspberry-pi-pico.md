# Raspberry Pi Pico / Pico 2

**Best for:** ages 13+, the best price-to-capability ratio in this entire collection
**Cost:** ~£4 (Pico 2) to ~£7 (Pico 2 W with WiFi)
**Languages:** MicroPython · CircuitPython · C/C++ · Rust
**Buy:** [The Pi Hut](https://thepihut.com/collections/raspberry-pi-pico) · [Pimoroni](https://shop.pimoroni.com/) · [RS](https://uk.rs-online.com/web/)

Two generations exist. The original Pico uses the RP2040; **Pico 2** uses the RP2350, with faster cores, double the SRAM and flash, and a genuinely unusual party trick — you can choose between dual Arm Cortex-M33 cores or dual open-hardware Hazard3 RISC-V cores on the same chip. The W variants add WiFi and Bluetooth 5.2.

For a learner moving off blocks, this is the board to buy. Seven pounds for a WiFi-capable dual-core microcontroller with first-class documentation is not a deal that existed a decade ago.

---

## Official & free

> **[Get started with the Pico](https://projects.raspberrypi.org/en/projects/getting-started-with-the-pico)** — `Intermediate` `Tutorial`
> The Foundation's own walkthrough. Thonny setup, first program, first circuit. Parts needed: See tutorial for details.

> **[Raspberry Pi Pico documentation](https://www.raspberrypi.com/documentation/microcontrollers/)** — `Reference`
> Datasheets, pinouts, SDK docs. Licensed CC BY-SA, so you can legally reuse it in your own teaching material. Parts needed: See tutorial for details.

> **[Pico Python SDK (free PDF)](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-python-sdk.pdf)** — `Intermediate` `Reference`
> **[Pico C/C++ SDK (free PDF)](https://datasheets.raspberrypi.com/pico/raspberry-pi-pico-c-sdk.pdf)** — `Advanced` `Reference` Parts needed: See tutorial for details.

> **[Raspberry Pi Foundation Projects](https://projects.raspberrypi.org/en/projects?hardware%5B%5D=pico)** — `Intermediate` `Tutorial`
> Free, translated into dozens of languages, published under Creative Commons. Parts needed: See tutorial for details.

> **[Wokwi Pico simulator](https://wokwi.com/)** — `Intermediate` `Simulator`
> Full browser simulation of the Pico plus sensors, displays and wiring. Free. Lets a class debug logic before hardware exists. Parts needed: See tutorial for details.

---

## Video

> **[Kevin McAleer — kevsrobots](https://www.youtube.com/@kevinmcaleer28)** — `Intermediate` `Video`
> The best single channel for Pico robotics. Prolific, UK-based, well-structured, and everything is open-sourced. His site [kevsrobots.com](https://www.kevsrobots.com/) hosts free written courses alongside the videos. Parts needed: See tutorial for details.

> **[Core Electronics](https://www.youtube.com/@Core-Electronics)** — `Intermediate` `Video`
> Reliable, clear, project-focused. Parts needed: See tutorial for details.

> **[DroneBot Workshop](https://www.youtube.com/@Dronebotworkshop)** — `Intermediate` `Advanced` `Video`
> Long-form and genuinely thorough. Superb on motors, drivers and sensor theory. Written versions of every video on [dronebotworkshop.com](https://dronebotworkshop.com/). Parts needed: See tutorial for details.

> **[Bitluni](https://www.youtube.com/@bitluni)** — `Advanced` `Video`
> Creative abuse of microcontroller peripherals — VGA output, audio, unexpected tricks. Inspiring for learners who ask "but what else can it do?" Parts needed: See tutorial for details.

---

## Blogs & tutorial sites

> **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** — `Intermediate` `Tutorial`
> Enormous free library covering Pico, ESP32 and IoT. Some content is upsold to paid ebooks, but the free tier alone runs to hundreds of complete projects. Parts needed: See tutorial for details.

> **[Pimoroni Learn](https://learn.pimoroni.com/)** — `Intermediate` `Tutorial`
> UK-based, matched to Pimoroni's Pico add-on boards (Galactic Unicorn, Pico Display, Enviro). Well-written. Parts needed: See tutorial for details.

> **[The Pi Hut tutorials](https://thepihut.com/blogs/raspberry-pi-tutorials)** — `Foundation` `Intermediate` `Tutorial`
> UK parts lists, no substitution guesswork. Parts needed: See tutorial for details.

> **[Raspberry Pi Official Magazine](https://magazine.raspberrypi.com/)** — `Intermediate` `Blog`
> Free PDF downloads of every issue, including the archives of *The MagPi* and *HackSpace*. Hundreds of issues, thousands of projects, entirely free. One of the most undervalued resources on this list. Parts needed: See tutorial for details.

---

## GitHub

> **[raspberrypi/pico-examples](https://github.com/raspberrypi/pico-examples)** — `Advanced` `GitHub`
> Official C SDK examples. The canonical reference for going below Python. Parts needed: See tutorial for details.

> **[raspberrypi/pico-micropython-examples](https://github.com/raspberrypi/pico-micropython-examples)** — `Intermediate` `GitHub`

> **[pimoroni/pimoroni-pico](https://github.com/pimoroni/pimoroni-pico)** — `Intermediate` `GitHub`
> Libraries and examples for Pimoroni's add-ons, plus a custom MicroPython build worth using. Parts needed: See tutorial for details.

> **[micropython/micropython](https://github.com/micropython/micropython)** — `Advanced` `GitHub`
> The whole implementation. Readable, well-maintained, and a realistic first open-source contribution target for a strong sixth-former. Parts needed: See tutorial for details.

> **[mcauser/awesome-micropython](https://github.com/mcauser/awesome-micropython)** — `Intermediate` `GitHub`
> Curated index of libraries, drivers and tools. When you need a driver for an obscure sensor, look here first. Parts needed: See tutorial for details.

---

## Project ideas by track

> **[Raspberry Pi Pico W Weather Station](https://www.explainingcomputers.com/pi_pico_w_weather.html)** — `Intermediate` `Tutorial`
> Connect a BME280 sensor to serve temperature and humidity to a web browser. Parts needed: Pico W, BME280 sensor, jumper wires.

**Intermediate:** Bluetooth RC robot · e-ink desk display showing bus times · MIDI controller · LED matrix animations · reaction-time game with scoring · soil moisture + auto-watering · air quality monitor

**Advanced:** PIO-driven custom protocols (the RP2040/RP2350 programmable I/O is genuinely unusual and worth teaching) · dual-core task splitting · self-balancing robot with a PID loop · USB HID device masquerading as a keyboard · RISC-V core experiments on the Pico 2 · custom PCB with an RP2350 designed in KiCad

---

## Pico vs micro:bit vs Arduino

| | micro:bit | Pico 2 | Arduino Uno |
|---|---|---|---|
| Cost | £15 | £5 | £20+ |
| Sensors onboard | Many | None | None |
| Soldering needed | No | Headers | No |
| Blocks available | Yes | No | Limited |
| Ceiling | Low | Very high | Medium |
| WiFi | v2: BLE only | Pico 2 W: yes | Needs shield |

Short version: micro:bit to start, Pico to grow into, Arduino if a specific tutorial or shield demands it.
