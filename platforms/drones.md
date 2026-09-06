# Programmable Drones & Flight

**Best for:** ages 13+, robotics in 3D space, Python scripting, aerospace enthusiasts
**Cost:** ~£100 (DJI Tello EDU)
**Languages:** Python · Scratch (Blocks)
**Buy:** [DJI Store](https://store.dji.com/) · [The Pi Hut](https://thepihut.com/)

Moving from wheeled rovers to flying robots introduces students to aerodynamics, 3D coordinates, and real-world control systems. 

While building a custom drone from scratch requires advanced soldering and PID tuning (often reserved for university students), the **DJI Tello EDU** has become the standard for school drone programming. It allows students to write Python scripts to control a pre-built drone autonomously.

---

## Tello EDU (Python Drone Programming)

> **[DJITelloPy Library](https://github.com/damiafuentes/DJITelloPy)** — `Intermediate` `Advanced` `GitHub`
> The open-source Python library for controlling the Tello. Includes easy-to-read examples for taking off, flipping, and capturing video streams. Parts needed: Tello EDU drone, Wi-Fi enabled computer.

> **[Tello EDU Official Blocks](https://www.ryzerobotics.com/tello-edu/downloads)** — `Foundation` `Simulator`
> Software to program the drone using Scratch-style blocks. Parts needed: Tello EDU drone.

> **[DroneBlocks](https://learn.droneblocks.io/)** — `Foundation` `Intermediate` `Curriculum`
> An extensive curriculum dedicated to programming drones in education, featuring both block coding and Python courses. Parts needed: Tello EDU drone.

---

## High-Altitude & Space Projects

> **[ESA CanSat Student Training Academy](https://cansat.esa.int/)** — `Intermediate` `Advanced` `Curriculum`
> European Space Agency guides for designing, coding, and launching a soda-can-sized satellite payload with atmospheric telemetry. Parts needed: Arduino/microcontroller, sensors, radio transceiver.
>
> **A concrete starting parts list:** an Arduino Nano or Pico, a BMP280 (pressure/altitude) and MPU6050 (accelerometer/gyro) breakout, and a radio telemetry link — an [RFM95 LoRa module](https://thepihut.com/) or a simple 433 MHz transmitter/receiver pair are the usual entry points, both stocked via The Pi Hut or RS. Add a parachute and a 3D-printed or foam airframe. This is the same sensor set used throughout the [environment & sensing theme](../themes/README.md#environment-sensing), just flown rather than left on a desk.

---

## Project ideas by track

> **[Tello Swarm (Python)](https://github.com/damiafuentes/DJITelloPy/tree/master/examples)** — `Advanced` `Tutorial`
> Use Python threading and multiple Wi-Fi adapters to command a synchronized swarm of drones. Parts needed: Multiple Tello EDU drones.

**Foundation ideas (Blocks):** simple take-off and land · fly in a square · flip over obstacles

**Intermediate ideas (Python):** fly autonomously through a physical hoop course using pre-programmed coordinates · trigger drone commands using keyboard inputs on a laptop

**Advanced ideas (Python + OpenCV):** stream live video from the drone to a computer · program the drone to recognize and follow a human face autonomously
