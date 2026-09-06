# Electronics fundamentals

**Best for:** everyone, at every stage
**Cost:** ~£25 for a decent component kit, ~£15 for a multimeter
**Buy:** [RS](https://uk.rs-online.com/web/) for components in bulk · [The Pi Hut](https://thepihut.com/) for starter kits

This is the layer underneath every other page. A learner who understands why a resistor goes in series with an LED will debug their own problems for the next decade. One who doesn't will keep destroying components and not know why.

It's also the layer most often skipped, because blinking an LED via a library feels like progress and Ohm's law feels like homework. Worth resisting.

---

## The concepts that actually matter

In rough order of how often not knowing them causes a project to fail:

1. **Voltage, current, resistance** and how they relate. Ohm's law, genuinely used, not memorised.
2. **Current limiting.** Why an LED needs a resistor, and how to pick the value.
3. **Pull-up and pull-down resistors.** Why a floating input reads garbage.
4. **Logic levels.** 3.3 V vs 5 V, and why mixing them destroys boards.
5. **Current capacity.** Why a GPIO pin can't drive a motor, and what a transistor or driver IC is for.
6. **Decoupling capacitors.** Why circuits work on a bench and fail with a motor attached.
7. **Common ground.** The single most common wiring error in multi-board projects.

---

## Free courses & tutorials

> **[SparkFun Learn — Concepts](https://learn.sparkfun.com/tutorials/tags/concepts)** — `Foundation` `Intermediate` `Tutorial`
> The best free written explanations of fundamentals, with genuinely good diagrams. Their voltage/current/resistance, pull-up resistor, and logic level tutorials are worth using directly as lesson material. Parts needed: See tutorial for details.

> **[All About Circuits — Textbooks](https://www.allaboutcircuits.com/textbook/)** — `Intermediate` `Advanced` `Reference`
> A complete, free, multi-volume electronics textbook. Dense but authoritative — the reference for when a question goes deeper than a tutorial covers. Parts needed: See tutorial for details.

> **[Khan Academy — Electrical Engineering](https://www.khanacademy.org/science/electrical-engineering)** — `Intermediate` `Curriculum`
> Free, structured, with exercises. Good for the maths-adjacent learner. Parts needed: See tutorial for details.

> **[Adafruit Learn — Electronics basics](https://learn.adafruit.com/category/learn-electronics)** — `Foundation` `Tutorial`

> **[CircuitLab / Falstad circuit simulator](https://www.falstad.com/circuit/)** — `Intermediate` `Simulator`
> Falstad's free browser simulator animates current flow through a circuit. Seeing charge move makes several concepts click that text never does. Parts needed: See tutorial for details.

---

## Video

> **[Ben Eater](https://www.youtube.com/@BenEater)** — `Advanced` `Video`
> Builds a working 8-bit computer on breadboards from logic gates, then a 6502 machine, explaining every step. There is nothing else like it at any price. Also covers networking from first principles. Companion kits and free written material at [eater.net](https://eater.net/). Parts needed: See tutorial for details.

> **[GreatScott!](https://www.youtube.com/@greatscottlab)** — `Intermediate` `Video`
> Short, dense component explainers. Excellent on transistors, MOSFETs, boost converters. Parts needed: See tutorial for details.

> **[ElectroBOOM](https://www.youtube.com/@ElectroBOOM)** — `Intermediate` `Video`
> Mehdi Sadaghdar teaches real electronics theory through deliberately painful demonstrations. Very effective and very memorable. **Note for supervisors:** he intentionally does dangerous things with mains and high voltage for comedy, which he flags but which younger viewers may not parse. Pair with an explicit conversation about [what not to copy](../docs/04-safety.md). Parts needed: See tutorial for details.

> **[Afrotechmods](https://www.youtube.com/@Afrotechmods)** — `Intermediate` `Video`
> Short, clear, no-nonsense component tutorials. Parts needed: See tutorial for details.

> **[EEVblog](https://www.youtube.com/@EEVblog)** — `Advanced` `Video`
> Dave Jones on test equipment, teardowns and design. The multimeter tutorials are the standard reference. Parts needed: See tutorial for details.

---

## Tools & design software (all free)

> **[KiCad](https://www.kicad.org/)** — `Advanced` `Tool`
> Full open-source PCB design. Schematic capture through to Gerber output. [Official docs](https://docs.kicad.org/) are thorough, and [Contextual Electronics](https://contextualelectronics.com/) publishes free tutorial series. Parts needed: See tutorial for details.

> **[Fritzing](https://fritzing.org/)** — `Foundation` `Tool`
> Breadboard-style diagrams. Source is free; binaries carry a small fee. Best for *documenting* wiring for others rather than for real design. Parts needed: See tutorial for details.

> **[Falstad Circuit Simulator](https://www.falstad.com/circuit/)** — `Intermediate` `Simulator`

> **[Wokwi](https://wokwi.com/)** — `Intermediate` `Simulator`
> Simulates microcontrollers *with* their circuits — the bridge between electronics theory and embedded code. Parts needed: See tutorial for details.

> **[FreeCAD](https://www.freecad.org/)** / **[OnShape free tier](https://www.onshape.com/)** — `Advanced` `Tool`
> For enclosures, brackets and mechanical parts. Parts needed: See tutorial for details.

---

## GitHub

> **[kitspace/awesome-electronics](https://github.com/kitspace/awesome-electronics)** — `GitHub`
> Curated index of resources, tools, and reference material. Parts needed: See tutorial for details.

> **[Digital Electronics / nand2tetris](https://www.nand2tetris.org/)** — `Advanced` `Curriculum`
> Build a computer from NAND gates up to an operating system. Free course materials, and the first half runs entirely in simulation — no hardware needed. Parts needed: See tutorial for details.

---

## An even gentler start

For a learner younger than the usual Foundation entry point, or anyone who finds a breadboard intimidating on day one, **[Snap Circuits](https://www.elenco.com/)** (Elenco) removes wiring entirely — colour-coded blocks snap onto a base grid to build real circuits, no soldering and no crocodile clips. It doesn't replace a breadboard kit, but it buys a week or two of "circuits are fun" before the first wiring error shows up. Available via RS and general UK retailers.

---

## A minimum viable component kit

For a learner or small club, roughly £30 at RS:

- Resistor assortment (E12 values, ¼ W) — you will use 220 Ω, 1 kΩ and 10 kΩ constantly
- LEDs, assorted colours, 5 mm
- Tactile push buttons
- 2N2222 and BC547 transistors, a few logic-level MOSFETs
- 1N4148 and 1N4007 diodes
- Ceramic capacitors (100 nF especially) and a few electrolytics
- Potentiometers, 10 kΩ
- LDR, thermistor, piezo buzzer
- Half-size breadboards ×2 and jumper wires
- **A multimeter** — the highest-value item on the list

---

## Teaching sequence that works

1. **LED and resistor.** Calculate the resistor rather than being given it. Get it wrong deliberately once (too large — dim, not destroyed) to see the relationship.
2. **Button with a pull-up.** Then remove the pull-up and watch the input read noise. The failure teaches more than the success.
3. **Transistor switching an LED,** then a motor. Introduces "the microcontroller can't do this directly".
4. **Voltage divider** with an LDR. Connects to analogue reading.
5. **Motor with a driver IC and a flyback diode.** Introduces inductive kickback and why circuits fail intermittently.
6. **Measure everything with the multimeter at every step.** The habit of measuring rather than guessing is the actual lesson.
