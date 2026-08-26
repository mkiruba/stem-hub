# Age bands & learning tracks

Ages 11 to 20+ is an enormous span — it covers a child who has never written a line of code and an undergraduate building a ROS 2 robot. Sorting purely by age fails, because readiness varies wildly. Sorting purely by difficulty fails too, because a 12-year-old and a 19-year-old need different *framing* for the same technical content.

So: three tracks, defined by **what the learner can already do**, with typical ages attached as a hint.

---

## Foundation — typically 11–13

**Entry condition:** can use a computer, has maybe done Scratch at school.

**Exit condition:** can write a 30-line MicroPython program, wire a sensor with crocodile clips, and debug by reading an error message.

**Constraints that matter at this level:**
- No soldering. Use crocodile clips, Grove/STEMMA QT connectors, or edge connectors.
- Immediate visible feedback. LEDs, sound, movement — something happens within 5 minutes.
- Block coding first, text second. MakeCode's block↔Python toggle is the single best bridge that exists.
- Projects finish in one sitting (45–90 min).

**Best platforms:** micro:bit v2, LEGO SPIKE Prime, Circuit Playground Express.

**Start with:**
1. [micro:bit projects](https://microbit.org/projects/) — official, free, filterable by difficulty
2. [MakeCode for micro:bit](https://makecode.microbit.org/) — blocks with a JavaScript/Python toggle
3. [Raspberry Pi Foundation Projects](https://projects.raspberrypi.org/en/projects) — filter to "Explore"
4. [Adafruit Circuit Playground Express guides](https://learn.adafruit.com/category/circuit-playground)

**Typical first five projects:** step counter, reaction timer game, plant moisture alarm, micro:bit radio messaging between two boards, line-following buggy.

---

## Intermediate — typically 14–16

**Entry condition:** comfortable with variables, loops and functions. Willing to read documentation.

**Exit condition:** can breadboard a circuit from a schematic, solder a header, use I²C sensors, push code to GitHub, and Google an error productively.

**What changes:**
- Text coding becomes the default (MicroPython / CircuitPython / Arduino C++).
- Breadboards and jumper wires replace crocodile clips. First soldering happens here — see [safety](04-safety.md).
- Projects span multiple sessions and need version control.
- Datasheets enter the picture. Reading a sensor datasheet is a real skill.
- Failure becomes normal and productive. This is the stage where debugging is genuinely learned.

**Best platforms:** Raspberry Pi Pico 2 / Pico 2 W, Adafruit Feather & QT Py, Arduino Uno/Nano, Raspberry Pi Zero 2 W.

**Start with:**
1. [Raspberry Pi Pico Get Started guide](https://projects.raspberrypi.org/en/projects/getting-started-with-the-pico) — free, official
2. [Adafruit Learning System — CircuitPython](https://learn.adafruit.com/welcome-to-circuitpython) — the single best free electronics library on the internet
3. [Paul McWhorter's Arduino series](https://www.youtube.com/@paulmcwhorter) — genuinely structured lesson-by-lesson, homework included
4. [Random Nerd Tutorials](https://randomnerdtutorials.com/) — enormous free ESP32/Pico project base

**Typical projects:** WiFi weather station logging to a dashboard, RC robot over Bluetooth, MIDI controller, e-ink dashboard, home security sensor, retro handheld game.

---

## Advanced — typically 17–20+

**Entry condition:** fluent in at least one language, comfortable on a command line, understands basic electronics (Ohm's law, pull-ups, current limiting).

**Exit condition:** portfolio-grade projects. University applications, apprenticeships, or genuinely useful hardware.

**What changes:**
- Linux, SSH, systemd, cross-compilation.
- C/C++ alongside Python — and understanding *why* you'd choose each.
- PCB design (KiCad), 3D printing, CAD (Fusion, FreeCAD, OnShape).
- ROS 2, computer vision, on-device machine learning.
- Reading source code, contributing to open source, writing documentation.

**Best platforms:** Raspberry Pi 4/5, Pi Camera Module 3, ESP32, custom PCBs, LEGO hardware driven by Pybricks or ev3dev.

**Start with:**
1. [Ben Eater](https://eater.net/) — build a CPU from logic gates. Nothing else on the internet teaches computer architecture this well, and it's free.
2. [ROS 2 official tutorials](https://docs.ros.org/en/rolling/Tutorials.html)
3. [Picamera2 manual & examples](https://github.com/raspberrypi/picamera2)
4. [KiCad official docs](https://docs.kicad.org/) + [Contextual Electronics](https://contextualelectronics.com/) free content
5. [James Bruton / XRobots](https://www.youtube.com/@jamesbruton) — advanced mechanical + electronics builds, fully open-sourced on GitHub

**Typical projects:** self-balancing robot, autonomous rover with SLAM, high-altitude balloon payload, custom PCB synthesiser, ML-based sorting machine, quadruped.

---

## Moving between tracks

The bridges matter more than the tracks themselves. Three specific transitions cause the most dropout:

**Blocks → text.** Don't jump. Use MakeCode's toggle to show the *same program* in both forms, repeatedly, for weeks. The realisation that they're the same thing is the whole point.

**Crocodile clips → breadboard.** The failure mode is invisible wiring errors. Teach a systematic check (power rails first, then ground, then signal) before it's needed, not after three hours of frustration.

**One file → a project.** Introduce Git *before* it's strictly necessary, on a project small enough that losing it wouldn't matter. Learning Git during a crisis is miserable.

---

## A note on "ages"

The bands above are guides. Two things override them:

1. **Prior exposure.** A 13-year-old with two years of Code Club is intermediate. A 17-year-old starting cold is foundation — and will move through it in a fortnight rather than a year, which is fine.
2. **Support available.** Foundation-level projects assume an adult nearby. Advanced projects assume the learner can unblock themselves. A well-supported 12-year-old can do intermediate work; an unsupported 16-year-old often can't.

Pitch to competence, not birthday.
