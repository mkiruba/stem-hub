# Themes

Same resources, sliced by what the learner actually wants to make. This is usually the better entry point — motivation picks the project, and the project picks the hardware.

---

## 🤖 Robots & rovers

The default STEM project, and for good reason: movement is immediately legible as success or failure.

- **[Kevin McAleer's robot builds](https://www.kevsrobots.com/)** — `Intermediate` `Tutorial` — free written courses plus [video](https://www.youtube.com/@kevinmcaleer28), all open-sourced. Pico-based. The best free robotics curriculum for this age range.
- **[Raspberry Pi Foundation — Build a robot buggy](https://projects.raspberrypi.org/en/projects/build-a-buggy)** — `Foundation` `Tutorial`
- **[Pybricks projects](https://github.com/pybricks/pybricks-projects)** — `Intermediate` `GitHub` — LEGO robots in real Python
- **[DroneBot Workshop — motors and drivers](https://dronebotworkshop.com/)** — `Intermediate` `Video` — the theory most robot tutorials skip
- **[James Bruton / XRobots](https://www.youtube.com/@jamesbruton)** — `Advanced` `Video` — self-balancing, quadrupeds, mechanum drives; everything on [GitHub](https://github.com/XRobots)
- **[ROS 2 tutorials](https://docs.ros.org/en/rolling/Tutorials.html)** — `Advanced` `Tutorial` — the professional robotics framework

**Progression:** line follower → obstacle avoidance → PID control → odometry → SLAM.
PID line-following is the sweet spot around 14–16: real control theory, visible results, achievable in a term.

**Not just wheels:** an underwater ROV — PVC-pipe frame, bilge-pump thrusters, a tethered control line — is the same electronics and control-theory skills applied to water instead of a floor, and it's the build behind the [MATE ROV competition](../competitions/README.md#robotics). Worth offering as an alternative when a group has done three wheeled robots and wants a genuinely different constraint.

---

## 👕 Wearables & e-textiles

Reaches learners who bounce off robots entirely. Also the theme with the best gender balance in most clubs, which is worth knowing when planning.

- **[Becky Stern](https://www.youtube.com/@beckystern)** — `Intermediate` `Video` — soft circuits, conductive thread, LED garments
- **[Adafruit wearables guides](https://learn.adafruit.com/category/wearables)** — `Foundation` `Intermediate` `Tutorial` — extensive, with sewing patterns
- **[Circuit Playground Express projects](https://learn.adafruit.com/category/circuit-playground)** — `Foundation` `Tutorial` — alligator-clip pads sew directly
- **[Kitronik e-textiles resources](https://kitronik.co.uk/blogs/resources)** — `Foundation` `Tutorial` — UK, classroom-tested

**Parts:** Circuit Playground Express or micro:bit, conductive thread, sewable LEDs, coin cell holders, LiPo (see [safety](../docs/04-safety.md)).

---

## 🌱 Environment & sensing

The theme that connects best to science curricula — data logging drops straight into a physics or geography scheme of work.

- **[Raspberry Pi Foundation — weather station projects](https://projects.raspberrypi.org/en/projects?search=weather)** — `Intermediate` `Tutorial`
- **[Pimoroni Enviro guides](https://learn.pimoroni.com/)** — `Intermediate` `Tutorial` — air quality, temperature, light
- **[Random Nerd Tutorials — sensors](https://randomnerdtutorials.com/)** — `Intermediate` `Tutorial` — huge library, ESP32 and Pico
- **[Adafruit STEMMA QT sensor guides](https://learn.adafruit.com/)** — `Intermediate` `Tutorial` — keyed connectors, no miswiring
- **[Sensor.Community](https://sensor.community/)** — `Intermediate` `Tutorial` — build an air quality sensor and join a global open-data network. Real data, real contribution.

**Progression:** read a sensor → log to a file → graph it → publish to a dashboard → compare with public data → notice something nobody told you to notice.

That last step is where it stops being an exercise.

---

## 🎮 Games & retro computing

- **[Pico-8 style handhelds — Pimoroni PicoSystem guides](https://learn.pimoroni.com/)** — `Intermediate` `Tutorial`
- **[RetroPie documentation](https://retropie.org.uk/docs/)** — `Intermediate` `Tutorial` — emulation on a Pi. Discuss ROM legality explicitly; it's a genuinely useful conversation about copyright.
- **[Raspberry Pi Foundation — game projects](https://projects.raspberrypi.org/en/projects?search=game)** — `Foundation` `Tutorial` — Scratch through Python
- **[Ben Eater — 6502 computer](https://eater.net/6502)** — `Advanced` `Video` — build the machine, then program it in assembly
- **[Bitluni](https://www.youtube.com/@bitluni)** — `Advanced` `Video` — VGA and audio from microcontrollers that shouldn't manage it

---

## 🎵 Music & sound

Underused, and a strong hook for learners who don't see themselves as "technical".

- **[Adafruit — MIDI and audio guides](https://learn.adafruit.com/category/sound)** — `Intermediate` `Tutorial`
- **[Sonic Pi](https://sonic-pi.net/)** — `Foundation` `Tutorial` — live-coded music, free, ships with Raspberry Pi OS, with excellent built-in tutorials. One of the fastest routes from zero to something a teenager wants to show a friend.
- **[micro:bit music projects](https://microbit.org/projects/make-it-code-it/?filters=music)** — `Foundation` `Tutorial` — v2 has a speaker onboard
- **[Mozzi audio library](https://sensorium.github.io/Mozzi/)** — `Advanced` `GitHub` — synthesis on Arduino

**Projects:** MIDI controller · theremin from an ultrasonic sensor · step sequencer with LEDs · drum machine · guitar pedal (battery-powered only)

---

## 👁️ AI & computer vision

Where the advanced track gets genuinely exciting — and where the honest conversation about what these systems are and aren't belongs.

- **[Picamera2 examples](https://github.com/raspberrypi/picamera2/tree/main/examples)** — `Advanced` `GitHub`
- **[OpenCV tutorials](https://docs.opencv.org/)** — `Advanced` `Tutorial` — free and thorough
- **[Edge Impulse](https://edgeimpulse.com/)** — `Advanced` `Tutorial` — train and deploy ML to microcontrollers; free developer tier
- **[Teachable Machine](https://teachablemachine.withgoogle.com/)** — `Foundation` `Tutorial` — train an image classifier in a browser in ten minutes, then export it. The best available demonstration of *why training data matters*, because learners immediately see their own bias in the results.
- **[TensorFlow Lite Micro](https://github.com/tensorflow/tflite-micro)** — `Advanced` `GitHub`

**Teaching note:** Teachable Machine at Foundation level, deliberately trained badly, is one of the most valuable half-hours you can spend with an 11-year-old. Show them a classifier that only recognises faces like theirs, and the concept of dataset bias lands permanently.

---

## 🏠 Home automation & IoT

- **[Random Nerd Tutorials — ESP32 IoT](https://randomnerdtutorials.com/)** — `Intermediate` `Tutorial` — the deepest free library here
- **[Home Assistant](https://www.home-assistant.io/)** — `Advanced` `Tutorial` — open-source hub, runs on a Pi, extensive free docs
- **[MQTT / Mosquitto](https://mosquitto.org/)** — `Advanced` `Reference` — the messaging pattern most IoT projects need
- **[Pi My Life Up](https://pimylifeup.com/)** — `Intermediate` `Tutorial` — Pi-hole, media servers, useful household things

⚠️ **Mains switching is off-limits for under-18s.** Use commercial smart plugs controlled over WiFi, never hand-built relay boards. See [safety](../docs/04-safety.md#mains-electricity).

---

## 🚀 Space, flight & high altitude

The highest-ceiling theme, and the one that most reliably produces a university personal statement.

- **[ESA CanSat](https://www.esa.int/Education/CanSat)** — `Advanced` `Curriculum` — build a satellite in a drinks can, launch it, recover data. Runs nationally across Europe including the UK.
- **[Raspberry Pi Foundation — Astro Pi](https://astro-pi.org/)** — `Intermediate` `Advanced` `Curriculum` — write code that runs on the ISS. Free, and genuinely open to school teams. Mission Zero is achievable in a single lesson.
- **[UKHAS wiki](https://ukhas.org.uk/)** — `Advanced` `Reference` — UK high-altitude ballooning. Note the CAA permissions and licensing requirements before planning anything.
- **[ArduPilot](https://ardupilot.org/)** — `Advanced` `GitHub` — autonomous vehicle firmware

⚠️ **UK drone rules** ([CAA](https://register-drones.caa.co.uk/)) apply from very low weights and require registration and a flyer ID. Balloon launches need CAA permission. Build this into the project plan from day one rather than discovering it later.

---

## Cross-theme note

The best projects usually sit at an intersection. A plant monitor that tweets is environment plus IoT. A robot that recognises colours is robotics plus vision. A light-up jacket that reacts to music is wearables plus sound.

When a learner stalls, moving sideways into an adjacent theme usually restarts them faster than pushing harder on the current one.
