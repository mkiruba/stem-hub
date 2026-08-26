# BBC micro:bit v2

**Best for:** ages 11–14, classrooms, first hardware, no soldering
**Cost:** ~£15 board, ~£35 with a starter kit
**Languages:** MakeCode blocks → JavaScript → MicroPython
**Buy:** [The Pi Hut](https://thepihut.com/collections/microbit) · [Kitronik](https://kitronik.co.uk/collections/microbit) · [RS](https://uk.rs-online.com/web/) · [Pimoroni](https://shop.pimoroni.com/)

The v2 board has an accelerometer, compass, temperature sensor, microphone, speaker, touch logo, 25-LED display, radio and Bluetooth built in. That matters enormously for beginners: your first ten projects need *no extra components at all*, which removes the entire category of wiring-error frustration from the learning curve.

Its other superpower is the MakeCode block↔Python toggle. The same program, viewed two ways, on demand. Nothing else bridges that gap as cleanly.

---

## Official & free

**[micro:bit Projects](https://microbit.org/projects/make-it-code-it/)** — `Foundation` `Tutorial`
The official project library. Filterable by difficulty and by what hardware you own. Step-by-step, with block and Python versions side by side. Start here.

**[MakeCode for micro:bit](https://makecode.microbit.org/)** — `Foundation` `Simulator`
Browser editor with a built-in simulator, so learners can write and test code before hardware arrives. Works offline once loaded.

**[micro:bit Python Editor](https://python.microbit.org/)** — `Foundation` `Intermediate`
The step up from blocks. Autocomplete, a reference sidebar, and a simulator.

**[micro:bit Classroom](https://classroom.microbit.org/)** — `Curriculum`
Free live classroom tool — the teacher sees every learner's code in real time, no accounts needed. Genuinely excellent and underused.

**[micro:bit teaching resources](https://microbit.org/teach/)** — `Curriculum`
Free schemes of work, lesson plans, and a full introductory computing course mapped to curricula in several countries.

**[MicroPython for micro:bit docs](https://microbit-micropython.readthedocs.io/)** — `Intermediate` `Reference`
The proper API reference. Worth introducing early — reading documentation is the skill that outlasts the platform.

---

## Video

**[micro:bit official YouTube](https://www.youtube.com/@microbit_edu)** — `Foundation` `Video`
Short, focused project videos and teacher CPD content.

**[Kitronik YouTube](https://www.youtube.com/@KitronikLtd)** — `Foundation` `Video`
UK-made, classroom-oriented, and matched to kits you can actually buy here.

**[Core Electronics](https://www.youtube.com/@Core-Electronics)** — `Foundation` `Intermediate` `Video`
Clear, well-produced tutorials across micro:bit, Pico and Pi. Strong on explaining *why*, not just *how*.

---

## Blogs & tutorial sites

**[Kitronik Learn](https://kitronik.co.uk/blogs/resources)** — `Foundation` `Tutorial`
Free project guides and downloadable lesson plans, mostly matched to Kitronik accessories but adaptable.

**[The Pi Hut micro:bit tutorials](https://thepihut.com/blogs/raspberry-pi-tutorials/tagged/micro-bit)** — `Foundation` `Tutorial`
UK-specific parts lists, which saves a lot of substitution guesswork.

**[Hackster micro:bit projects](https://www.hackster.io/microbit)** — `Foundation` `Intermediate` `Blog`
Community-submitted builds. Quality varies — treat as inspiration, verify the wiring.

---

## GitHub

**[microbit-foundation](https://github.com/microbit-foundation)** — `GitHub`
The editors, the MicroPython port, DAPLink firmware. Open source, and a good first place for a teenager to read real production code.

**[bbcmicrobit/micropython](https://github.com/bbcmicrobit/micropython)** — `Intermediate` `GitHub`
The MicroPython implementation itself.

**[microbit-foundation/microbit-v2-samples](https://github.com/microbit-foundation/microbit-v2-samples)** — `Advanced` `GitHub`
C/C++ development against the runtime, for learners who want to go below Python.

---

## Project ideas by track

**Foundation:** reaction timer · step counter · dice · radio message chat between two boards · sound-level meter · plant moisture alarm · rock-paper-scissors · compass navigation game

**Intermediate:** line-following buggy (Kitronik or Pi Hut motor driver) · data logger writing to flash and exported as CSV · radio-networked sensor mesh across a classroom · MIDI-over-USB controller · automated greenhouse

**Advanced:** the micro:bit is deliberately capped. By this stage, move to Pico or Pi — but the micro:bit remains excellent as a *sensor node* or handheld controller in a bigger system, talking over its radio to a Pi hub.

---

## Honest limitations

- Limited RAM and no filesystem to speak of. Data logging is possible but cramped.
- The edge connector needs a breakout board for anything beyond crocodile clips, which is an extra purchase and a small conceptual hurdle.
- Learners outgrow it, usually around 14. That's a feature, not a bug — it's designed as an on-ramp. Plan the [transition to Pico](raspberry-pi-pico.md) rather than trying to stretch the micro:bit past its useful range.
