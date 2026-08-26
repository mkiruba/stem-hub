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

**[Pybricks documentation](https://pybricks.com/learn/)** — `Intermediate` `Tutorial`
Getting started, tutorials, full API reference.

**[pybricks/pybricks-projects](https://github.com/pybricks/pybricks-projects)** — `Intermediate` `GitHub`
Example programs and complete robot builds across every supported hub.

**[pybricks/pybricks-micropython](https://github.com/pybricks/pybricks-micropython)** — `Advanced` `GitHub`
The firmware source. Well-structured, actively maintained, and a plausible first contribution target.

**[Pybricks support tracker](https://github.com/pybricks/support)** — `Reference`
Check here before buying new hardware — SPIKE Prime hubs made in 2026 use different internals and firmware support is still in development.

---

## ev3dev — Linux on the EV3

**[ev3dev.org](https://www.ev3dev.org/)** — `Advanced` `Tutorial`
A Debian-based OS that boots on the EV3 brick from an SD card. Python, C++, Node.js, and a real Linux environment on a robot. For a sixth-former with a hand-me-down EV3, this is a superb and very cheap route into embedded Linux.

**[ev3dev/ev3dev](https://github.com/ev3dev/ev3dev)** — `Advanced` `GitHub`

---

## Official LEGO resources (still live and free)

**[LEGO Education lesson plans](https://education.lego.com/en-gb/lessons/)** — `Foundation` `Curriculum`
Free, curriculum-mapped lessons. Still hosted for retired kits.

**[SPIKE App knowledge base](https://spike.legoeducation.com/)** — `Foundation` `Reference`
Supported to June 2031.

**[LEGO Education Computer Science & AI](https://education.lego.com/en-gb/products/lego-education-computer-science-and-ai/)** — `Foundation` `Curriculum`
The current line. Classroom-oriented, groups of four, browser-based Coding Canvas with a Python package for advanced learners. Runs locally with no student login.

---

## Independent blogs & video

**[Anton's Mindstorms](https://www.antonsmindstorms.com/)** — `Intermediate` `Advanced` `Blog`
The best independent LEGO robotics site. Python-first, technically deep, still publishing through 2026. Excellent on Pybricks specifics.

**[Anton's Mindstorms YouTube](https://www.youtube.com/@antonsmindstorms)** — `Intermediate` `Video`

**[Builderdude35](https://www.youtube.com/@builderdude35)** — `Foundation` `Video`
Clear tutorials for EV3 and SPIKE, aimed squarely at FLL teams.

**[FLLCasts](https://www.fllcasts.com/)** — `Foundation` `Intermediate` `Tutorial`
Competition-focused tutorials and building instructions. Free tier is substantial.

---

## Competition resources

**[FIRST LEGO League season materials](https://firstlegoleague.org/season)** — `Curriculum`
Rubrics, scoresheets, judging flowcharts and twelve sessions of support slides — all free to download.

**[FIRST LEGO League](https://firstlegoleague.org/)** — `Reference`
The 2026–2027 BIOGLOW season is the final one, running in Founders Edition (SPIKE) and Future Edition (CS & AI kits) in parallel.

See [competitions/](../competitions/README.md) for the wider landscape and what comes after FLL.

---

## Project ideas by track

**Foundation:** line follower · colour-sorting machine · obstacle-avoiding rover · robotic arm with a gripper · automatic door · reaction game with the hub display

**Intermediate (Pybricks):** PID line following (the single best introduction to control theory available to a 14-year-old) · gyro-based precise turning · multi-robot coordination over Bluetooth · odometry and dead reckoning · maze solver

**Advanced (Pybricks / ev3dev):** SLAM-ish mapping with distance sensors · hybrid builds mixing LEGO structure with a Raspberry Pi brain and Pi Camera · inverse kinematics for a multi-jointed arm · reading the LEGO LUMP protocol directly

---

## The honest assessment

LEGO's strength is that the building is genuinely excellent and the barrier to a working robot is close to zero — no soldering, no wiring errors, no burned-out components. For an 11–13-year-old, that's exactly right, and the block-to-Python path through Pybricks is well-trodden.

Its weakness is cost and closure. A SPIKE Prime set costs roughly ten times a Pico-based robot with comparable capability, and the platform's lifespan is decided by a toy company. That has now ended twice in four years.

**Practical recommendation:** if you own it, keep it and learn Pybricks. If you're starting from nothing with a budget, put the money into [Pico](raspberry-pi-pico.md) or [micro:bit](microbit.md) robotics and spend the difference on more learners.
