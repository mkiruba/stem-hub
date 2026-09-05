# Raspberry Pi (Zero 2 W / 4 / 5)

**Best for:** ages 14+, Linux, cameras, computer vision, anything needing a real operating system
**Cost:** ~£18 (Zero 2 W) to ~£80 (Pi 5, 4GB)
**Languages:** Python · C/C++ · JavaScript · anything Linux runs
**Buy:** [The Pi Hut](https://thepihut.com/) · [RS](https://uk.rs-online.com/web/) · [Pimoroni](https://shop.pimoroni.com/)

The crucial distinction from the Pico: this is a **computer**, not a microcontroller. It boots Linux, runs a browser, hosts a web server, and drives a camera at 4K. That opens up computer vision, machine learning, networking and web development — none of which a microcontroller can touch.

The trade-off is boot time, power draw, SD card corruption, and the need to shut down gracefully. For blinking an LED, use a Pico. For recognising a face, use a Pi.

---

## Official & free

> **[Raspberry Pi Foundation Projects](https://projects.raspberrypi.org/en/projects)** — `Foundation` `Intermediate` `Advanced` `Tutorial`
> Several hundred free, structured, step-by-step projects across coding, hardware and design. Published under Creative Commons, translated widely, and organised into paths. If you only bookmark one link from this repository, make it this one. Parts needed: See tutorial for details.

> **[Raspberry Pi documentation](https://www.raspberrypi.com/documentation/)** — `Reference`
> Setup, configuration, hardware, camera. CC BY-SA licensed. Parts needed: See tutorial for details.

> **[gpiozero](https://gpiozero.readthedocs.io/)** — `Intermediate` `Reference`
> The friendly GPIO library. Designed for education, and the recipes section is a project list in disguise. Parts needed: See tutorial for details.

> **[Picamera2 manual](https://datasheets.raspberrypi.com/camera/picamera2-manual.pdf)** — `Advanced` `Reference`
> Free PDF. The camera stack is powerful and under-documented elsewhere. Parts needed: See tutorial for details.

> **[Code Club projects](https://projects.raspberrypi.org/en/codeclub)** — `Foundation` `Curriculum`
> Free, club-ready, sequenced. Parts needed: See tutorial for details.

---

## Video

> **[ExplainingComputers](https://www.youtube.com/@ExplainingComputers)** — `Intermediate` `Video`
> Christopher Barnatt's Pi reviews and projects. Calm, precise, and unusually good at explaining what a board is actually *for*. Parts needed: See tutorial for details.

> **[Raspberry Pi Foundation YouTube](https://www.youtube.com/@RaspberryPiFoundation)** — `Foundation` `Video`
> Official educational content and teacher CPD. Parts needed: See tutorial for details.

> **[Kevin McAleer](https://www.youtube.com/@kevinmcaleer28)** — `Intermediate` `Video`
> Robotics-focused, covers Pi and Pico, everything open-sourced. Parts needed: See tutorial for details.

> **[Jeff Geerling](https://www.youtube.com/@JeffGeerling)** — `Advanced` `Video`
> Deep Pi hardware and Linux content — clustering, PCIe, networking, storage benchmarking. For learners who've outgrown "how to blink an LED". Parts needed: See tutorial for details.

> **[Core Electronics](https://www.youtube.com/@Core-Electronics)** — `Intermediate` `Video`
> Strong Pi-with-camera and Pi-with-AI content. Parts needed: See tutorial for details.

---

## Blogs & magazines

> **[Raspberry Pi Official Magazine](https://magazine.raspberrypi.com/)** — `Intermediate` `Blog`
> Free PDFs of every issue plus the *MagPi* and *HackSpace* archives. Free books too — the Foundation publishes full project books as free downloads. Parts needed: See tutorial for details.

> **[Tom's Hardware Raspberry Pi](https://www.tomshardware.com/raspberry-pi)** — `Intermediate` `Blog`
> Consistently good tutorials and honest reviews. Parts needed: See tutorial for details.

> **[Pi My Life Up](https://pimylifeup.com/)** — `Intermediate` `Tutorial`
> Practical server-and-service projects: Pi-hole, media servers, NAS, VPN. Good for learners who want a Pi that does something useful in the house. Parts needed: See tutorial for details.

> **[The Pi Hut blog](https://thepihut.com/blogs/raspberry-pi-tutorials)** — `Foundation` `Intermediate` `Tutorial`

---

## GitHub

> **[raspberrypilearning](https://github.com/raspberrypilearning)** — `GitHub` `Curriculum`
> Every Foundation project, open-sourced. You can fork the whole curriculum and adapt it for your own club — the licence permits it. Parts needed: See tutorial for details.

> **[raspberrypi/picamera2](https://github.com/raspberrypi/picamera2)** — `Advanced` `GitHub`
> Camera library with an extensive examples folder covering capture, video, and OpenCV integration. Parts needed: See tutorial for details.

> **[raspberrypi/rpi-imager](https://github.com/raspberrypi/rpi-imager)** — `Advanced` `GitHub`

> **[thibmaek/awesome-raspberry-pi](https://github.com/thibmaek/awesome-raspberry-pi)** — `GitHub`
> Curated index of projects, distributions and tools. Parts needed: See tutorial for details.

> **[opencv/opencv](https://github.com/opencv/opencv)** — `Advanced` `GitHub`
> Computer vision. The [official tutorials](https://docs.opencv.org/) are free and thorough. Parts needed: See tutorial for details.

---

## Project ideas by track

**Intermediate:** Pi-hole network ad blocker · retro games console with RetroPie · time-lapse camera · Minecraft Pi Edition with Python scripting · web server serving sensor data · Magic Mirror display · internet radio

**Advanced:** object detection with a camera and a pretrained model · autonomous rover with obstacle avoidance · SLAM mapping with a LiDAR module · [ROS 2](https://docs.ros.org/) robot with proper node architecture · Kubernetes cluster across several Pis · high-altitude balloon payload with GPS tracking · custom Linux image built with Yocto or pi-gen

---

## Which Pi to buy

| Board | Use it for | Avoid it for |
|---|---|---|
| **Zero 2 W** (~£18) | Embedded projects, wearables, robot brains where size matters | Desktop use, heavy vision work |
| **Pi 4** (~£45+) | The reliable middle. Plenty for most projects. | Nothing much — still excellent |
| **Pi 5** (~£60+) | Camera work, ML inference, anything CPU-heavy | Battery projects — it draws real power |
| **Pi 500 / 400** | Classroom desktops, a computer that lives in a keyboard | GPIO-heavy projects (awkward access) |

Add: a **good** power supply (most mysterious Pi problems are undervoltage), a decent A2-rated microSD card or an SSD for the Pi 5, and active cooling for the Pi 5.

---

## Things that will bite you

- **SD card corruption** from pulling the power. Teach `sudo shutdown now` as a ritual, and consider read-only root for kiosk projects.
- **Undervoltage.** A phone charger is not a Pi power supply. The rainbow square and inexplicable crashes are almost always this.
- **GPIO is 3.3 V, not 5 V.** Connecting a 5 V signal to a GPIO pin destroys it. Worth teaching level shifting before it costs someone a board.
- **No analogue inputs.** Unlike a Pico or Arduino, the Pi has no ADC. You need an external one (MCP3008) or a companion microcontroller.
