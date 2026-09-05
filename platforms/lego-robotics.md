# LEGO robotics (SPIKE / MINDSTORMS / Pybricks)

**Best for:** ages 11–16, no soldering, competitions, learners who build before they code
**Cost:** high, and now complicated — **[read the transition page first](../docs/05-lego-2026-transition.md)**
**Languages:** LEGO block editors · Python (via SPIKE app or Pybricks) · MicroPython (Pybricks)

> ⚠️ **Status, August 2026.** MINDSTORMS was discontinued in 2022. LEGO Education ended SPIKE Prime and SPIKE Essential sales on 30 June 2026, with app support continuing to 2031. The successor is LEGO Education Computer Science & AI (shipping since April 2026). FIRST LEGO League runs its final season in 2026–2027. Full detail: [docs/05-lego-2026-transition.md](../docs/05-lego-2026-transition.md).

Despite all that, existing LEGO hardware remains genuinely excellent for teaching, and the open-source community has made it independent of LEGO's roadmap. If you already own a set, this page is for you.

---

## Pybricks — the open-source route

[**Pybricks**](https://pybricks.com/) is free MicroPython firmware for LEGO hubs: SPIKE Prime, SPIKE Essential, MINDSTORMS Robot Inventor, EV3, and the Powered Up range. It replaces the official app with a browser IDE at [code.pybricks.com](https://code.pybricks.com/) that works offline once loaded.

Why it matters: it's real Python with precise motor control and third-party sensor support, it's developed independently of LEGO, and it keeps hardware useful long after official support ends. Flashing is reversible via the DFU bootloader.

> **[Pybricks documentation](https://pybricks.com/learn/)** — `Intermediate` `Tutorial`
> Getting started, tutorials, full API reference. Parts needed: See tutorial for details.

> **[pybricks/pybricks-projects](https://github.com/pybricks/pybricks-projects)** — `Intermediate` `GitHub`
> Example programs and complete robot builds across every supported hub. Parts needed: See tutorial for details.

> **[pybricks/pybricks-micropython](https://github.com/pybricks/pybricks-micropython)** — `Advanced` `GitHub`
> The firmware source. Well-structured, actively maintained, and a plausible first contribution target. Parts needed: See tutorial for details.

> **[Pybricks support tracker](https://github.com/pybricks/support)** — `Reference`
> Check here before buying new hardware — SPIKE Prime hubs made in 2026 use different internals and firmware support is still in development. Parts needed: See tutorial for details.

---

## ev3dev — Linux on the EV3

> **[ev3dev.org](https://www.ev3dev.org/)** — `Advanced` `Tutorial`
> A Debian-based OS that boots on the EV3 brick from an SD card. Python, C++, Node.js, and a real Linux environment on a robot. For a sixth-former with a hand-me-down EV3, this is a superb and very cheap route into embedded Linux. Parts needed: See tutorial for details.

> **[ev3dev/ev3dev](https://github.com/ev3dev/ev3dev)** — `Advanced` `GitHub`

---

## Official LEGO resources (still live and free)

> **[LEGO Education lesson plans](https://education.lego.com/en-gb/lessons/)** — `Foundation` `Curriculum`
> Free, curriculum-mapped lessons. Still hosted for retired kits. Parts needed: See tutorial for details.

> **[SPIKE App knowledge base](https://spike.legoeducation.com/)** — `Foundation` `Reference`
> Supported to June 2031. Parts needed: See tutorial for details.

> **[LEGO Education Computer Science & AI](https://education.lego.com/en-gb/products/lego-education-computer-science-and-ai/)** — `Foundation` `Curriculum`
> The current line. Classroom-oriented, groups of four, browser-based Coding Canvas with a Python package for advanced learners. Runs locally with no student login. Parts needed: See tutorial for details.

---

## Simulators & virtual robotics

> **[GearsBot (Aposteriori)](https://gears.aposteriori.com.sg/)** — `Foundation` `Intermediate` `Simulator`
> Free 3D browser-based robotics simulator supporting Python and block code without requiring physical hardware. Parts needed: None (runs in browser).

> **[Open Roberta Lab](https://lab.open-roberta.org/)** — `Foundation` `Simulator`
> Free web-based block coding and 2D simulation platform for EV3, NXT, and micro:bit. Parts needed: None (runs in browser).

---

## Community curricula & building guides

> **[PrimeLessons](https://primelessons.org/)** — `Foundation` `Intermediate` `Curriculum`
> Structured lessons for SPIKE Prime covering motors, sensors, line following, and Python programming by Droid Robotics. Parts needed: SPIKE Prime set.

> **[EV3Lessons](https://ev3lessons.com/)** — `Foundation` `Intermediate` `Curriculum`
> Extensive community lesson archive for MINDSTORMS EV3 covering mechanics, sensor calibration, and tournament tactics. Parts needed: LEGO EV3 set.

> **[FLL Tutorials](https://flltutorials.com/)** — `Foundation` `Intermediate` `Tutorial`
> Step-by-step guides on core mechanical attachments, gear trains, and robot reliability for competition teams. Parts needed: LEGO robotics kit.

---

## Hardware bridging & upcycling

> **[Raspberry Pi Build HAT](https://www.raspberrypi.com/documentation/accessories/build-hat.html)** — `Intermediate` `Tutorial`
> Control LEGO Technic motors and sensors directly from a Raspberry Pi using Python, bridging cheap Linux boards with LEGO hardware. Parts needed: Raspberry Pi, Build HAT, LEGO Technic motor/sensor.

---

## Independent blogs & video

> **[Anton's Mindstorms](https://www.antonsmindstorms.com/)** — `Intermediate` `Blog`
> The best independent LEGO robotics site. Python-first, technically deep, still publishing through 2026. Excellent on Pybricks specifics. Parts needed: See tutorial for details.

> **[Anton's Mindstorms YouTube](https://www.youtube.com/@antonsmindstorms)** — `Intermediate` `Video`
> In-depth tutorials and code walkthroughs for advanced Pybricks and LEGO robotics mechanisms. Parts needed: LEGO SPIKE or Robot Inventor hub.

> **[Builderdude35](https://www.youtube.com/@builderdude35)** — `Foundation` `Video`
> Clear tutorials for EV3 and SPIKE, aimed squarely at FLL teams. Parts needed: See tutorial for details.

> **[FLLCasts](https://www.fllcasts.com/)** — `Foundation` `Intermediate` `Tutorial`
> Competition-focused tutorials and building instructions. Free tier is substantial. Parts needed: See tutorial for details.

---

## Competition resources

> **[FIRST LEGO League season materials](https://firstlegoleague.org/season)** — `Curriculum`
> Rubrics, scoresheets, judging flowcharts and twelve sessions of support slides — all free to download. Parts needed: See tutorial for details.

> **[FIRST LEGO League](https://firstlegoleague.org/)** — `Reference`
> The 2026–2027 BIOGLOW season is the final one, running in Founders Edition (SPIKE) and Future Edition (CS & AI kits) in parallel. Parts needed: See tutorial for details.

See [competitions/](../competitions/README.md) for the wider landscape and what comes after FLL.

---

## Project ideas by track

> **[Pybricks DriveBase Rover & Line Follower](https://docs.pybricks.com/en/latest/robotics.html)** — `Foundation` `Intermediate` `Tutorial`
> Step-by-step guide to programming a two-motor differential drive rover with line-following and obstacle avoidance using MicroPython. Parts needed: SPIKE Prime or Robot Inventor hub, 2× motor, 1× color sensor.

> **[PID Line Follower in Python](https://primelessons.org/)** — `Intermediate` `Tutorial`
> The premier hands-on introduction to proportional-integral-derivative control theory using a color sensor for smooth high-speed line tracking. Parts needed: SPIKE Prime or EV3, 2× motor, color sensor.

> **[Bluetooth Gamepad Controller for LEGO Hubs](https://github.com/pybricks/pybricks-projects)** — `Intermediate` `Tutorial`
> Drive your robot remotely using a wireless Bluetooth game controller or browser virtual joystick with Pybricks. Parts needed: SPIKE Prime or MINDSTORMS hub, wireless gamepad or smartphone.

> **[Pybricks Gyro Straight Drive & Precise Turns](https://pybricks.com/learn/)** — `Intermediate` `Tutorial`
> Use the hub's built-in 6-axis IMU gyro sensor to ensure drift-free driving and pinpoint competition turns. Parts needed: SPIKE Prime or Robot Inventor hub, 2× drive motors.

**Foundation ideas:** line follower · colour-sorting machine · obstacle-avoiding rover · robotic arm with a gripper · automatic door · reaction game with the hub display

**Intermediate ideas (Pybricks):** PID line following · gyro-based precise turning · multi-robot coordination over Bluetooth · odometry and dead reckoning · maze solver

**Advanced ideas (Pybricks / ev3dev):** SLAM-ish mapping with distance sensors · hybrid builds mixing LEGO structure with a Raspberry Pi brain and Pi Camera · inverse kinematics for a multi-jointed arm · reading the LEGO LUMP protocol directly

---

## The honest assessment

LEGO's strength is that the building is genuinely excellent and the barrier to a working robot is close to zero — no soldering, no wiring errors, no burned-out components. For an 11–13-year-old, that's exactly right, and the block-to-Python path through Pybricks is well-trodden.

Its weakness is cost and closure. A SPIKE Prime set costs roughly ten times a Pico-based robot with comparable capability, and the platform's lifespan is decided by a toy company. That has now ended twice in four years.

**Practical recommendation:** if you own it, keep it and learn Pybricks. If you're starting from nothing with a budget, put the money into [Pico](raspberry-pi-pico.md) or [micro:bit](microbit.md) robotics and spend the difference on more learners.
