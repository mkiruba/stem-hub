# GitHub repos & organisations

Open-source code worth reading, forking and contributing to. Reading real production code is a skill in its own right, and these are the friendliest places to start.

---

## Curriculum & teaching material (fork these)

**[raspberrypilearning](https://github.com/raspberrypilearning)** — `Curriculum`
Every Raspberry Pi Foundation project, open-sourced. You can fork the entire curriculum, translate it, adapt it to your club, and republish under the same licence. Very few educational organisations do this and it deserves to be better known.

**[adafruit/Adafruit_Learning_System_Guides](https://github.com/adafruit/Adafruit_Learning_System_Guides)** — `Curriculum`
Code for every guide on learn.adafruit.com, in one repo.

**[microbit-foundation](https://github.com/microbit-foundation)** — `Curriculum`
The editors, MicroPython port, DAPLink firmware, and teaching resources.

---

## Libraries & runtimes

**[micropython/micropython](https://github.com/micropython/micropython)** — `Advanced`
The whole implementation. Readable, actively maintained, and a realistic first open-source contribution for a strong sixth-former.

**[adafruit/circuitpython](https://github.com/adafruit/circuitpython)** — `Advanced`
A friendly fork of MicroPython with an unusually welcoming contribution process. Their documentation on *how to contribute* is a model.

**[gpiozero](https://github.com/gpiozero/gpiozero)** — `Intermediate`
Designed for education, and small enough to read end to end.

**[pimoroni/pimoroni-pico](https://github.com/pimoroni/pimoroni-pico)** — `Intermediate`
Drivers and examples for Pimoroni Pico add-ons.

**[raspberrypi/pico-examples](https://github.com/raspberrypi/pico-examples)** — `Advanced`
Official C SDK examples. The canonical reference for going below Python.

**[raspberrypi/picamera2](https://github.com/raspberrypi/picamera2)** — `Advanced`
Camera library with a large examples folder covering capture, video and OpenCV integration.

**[adafruit](https://github.com/adafruit)** — `Intermediate`
Hundreds of sensor driver repos. When you buy an obscure sensor, the driver is usually here.

---

## LEGO

**[pybricks/pybricks-projects](https://github.com/pybricks/pybricks-projects)** — `Intermediate`
Example programs and complete robot builds for every supported LEGO hub.

**[pybricks/pybricks-micropython](https://github.com/pybricks/pybricks-micropython)** — `Advanced`
The firmware source.

**[pybricks/support](https://github.com/pybricks/support)** — `Reference`
Issue tracker — check hardware compatibility here before buying.

**[ev3dev/ev3dev](https://github.com/ev3dev/ev3dev)** — `Advanced`
Debian Linux for the EV3 brick.

---

## Robotics & vision

**[ros2](https://github.com/ros2)** — `Advanced`
The professional robotics framework. Steep, but it's what the industry uses.

**[opencv/opencv](https://github.com/opencv/opencv)** — `Advanced`
Computer vision, with free [tutorials](https://docs.opencv.org/).

**[tensorflow/tflite-micro](https://github.com/tensorflow/tflite-micro)** — `Advanced`
Machine learning on microcontrollers.

**[XRobots](https://github.com/XRobots)** — `Advanced`
James Bruton's builds — CAD, code and wiring for quadrupeds, balancing robots and more.

**[ArduPilot/ardupilot](https://github.com/ArduPilot/ardupilot)** — `Advanced`
Autonomous vehicle firmware for planes, rovers, boats and copters.

---

## Awesome-lists (indexes, not code)

- **[mcauser/awesome-micropython](https://github.com/mcauser/awesome-micropython)** — libraries, drivers, tools
- **[thibmaek/awesome-raspberry-pi](https://github.com/thibmaek/awesome-raspberry-pi)** — projects, distros, tools
- **[Lembed/Awesome-arduino](https://github.com/Lembed/Awesome-arduino)**
- **[kitspace/awesome-electronics](https://github.com/kitspace/awesome-electronics)** — resources and tooling
- **[carlosperate/awesome-microbit](https://github.com/carlosperate/awesome-microbit)** — the micro:bit ecosystem

When a learner needs a driver for an unfamiliar sensor, checking the relevant awesome-list is usually faster than searching.

---

## Teaching Git alongside the projects

Version control is the skill most likely to transfer directly into employment, and it's easiest to teach when the stakes are low.

**Introduce it early, on something disposable.** Learning Git during a crisis — after losing work, under deadline — is miserable and sticks badly.

A workable sequence:

1. **`git init`, `add`, `commit`** on a single-file project. Nothing else. Just build the save habit.
2. **`git log` and `git diff`** — the moment they see their own history is the moment it makes sense.
3. **Push to GitHub.** A public portfolio starting at 14 is worth a great deal by 18.
4. **Branching** when they first want to try something risky without breaking what works.
5. **Pull requests** — ideally against a classmate's repo before attempting a real open-source contribution.

**Teach `.gitignore` and secrets handling from day one.** Committing WiFi passwords and API keys to a public repo is the single most common and most consequential beginner mistake. A `secrets.py` in `.gitignore`, established as a reflex before it matters, prevents it permanently.

**A realistic first contribution:** documentation fixes and typo corrections in the repos above. Both CircuitPython and MicroPython maintainers are welcoming to first-timers, and having a merged PR at 16 is genuinely notable on a university or apprenticeship application.
