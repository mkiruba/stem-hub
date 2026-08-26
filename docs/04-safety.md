# Safety

Written for adults supervising young people. None of this is meant to be alarming — electronics at this level is a low-risk hobby. But a few specific things do cause real injuries, and they're worth knowing before rather than after.

---

## Soldering

**Age:** Typically from 12–13 with one-to-one supervision, and independently from around 14–15 depending on the individual.

- Temperature-controlled iron, set around 350 °C. Cheap fixed-temperature irons run too hot and encourage bad technique.
- Ventilation. Solder flux fumes are the actual respiratory hazard, not the metal. A window and a small fan pointing *away* from the work is enough. A fume extractor is better.
- Lead-free solder for young people. It's slightly harder to work with. Do it anyway.
- Wash hands after sessions, always, whichever solder you use. No food at the bench.
- Iron goes back in the stand *every single time*. This is the habit that prevents burns, and it needs enforcing until it's automatic.
- Safety glasses when trimming component legs. Snipped wire ends travel surprisingly fast.
- Have burn first aid to hand: cool running water for 20 minutes. Know where the nearest tap is.

---

## Batteries

**LiPo and lithium-ion cells are the highest-risk items** most STEM clubs will handle. They store a lot of energy and fail energetically.

- Never puncture, crush, or short a lithium cell.
- Charge with a proper balance charger, on a non-flammable surface, while someone is present. Not overnight, not unattended.
- A swollen, hot, or damaged cell is finished. Isolate it outdoors, away from anything flammable, and dispose of it at a proper recycling point.
- For under-16s, prefer AA/AAA packs or USB power. The performance difference rarely matters for these projects and the risk difference is substantial.
- Never connect batteries directly across a motor or LED without appropriate current limiting.

---

## Mains electricity

**Simple rule for under-18s: nothing above 24 V, and nothing that plugs into a wall socket without a qualified adult doing the mains-side work.**

That means no opening PSUs, no mains-powered relay projects, no rewiring lamps, no salvaging parts from mains appliances (capacitors in switch-mode supplies hold a dangerous charge long after unplugging). Home automation projects should switch mains loads via commercial smart plugs, never via a hand-built relay board on a breadboard.

Battery and USB-powered projects cover essentially everything in this repository.

---

## Tools

- **Side cutters:** point the offcut downward and away, or hold it. Safety glasses.
- **Drills and rotary tools:** eye protection mandatory, tie back long hair, clamp the workpiece — never hold it in your other hand.
- **Hot glue:** genuinely causes bad burns, and is often the least-supervised tool in the room. It's around 190 °C.
- **3D printers:** hot end and heated bed burn. Some filaments produce ultrafine particles — ventilate, and prefer PLA for enclosed classroom spaces.
- **Laser cutters:** never operate unsupervised, never leave running unattended, and check the material is laser-safe (PVC releases chlorine gas — it is never acceptable to cut).

---

## Eyes and lasers

Any laser module above class 2 needs proper eye protection and adult control of the hardware. Laser diodes salvaged from DVD drives are a common project idea online and a genuinely bad one — they're high-power, uncollimated and invisible in the IR case. Don't.

Bright LEDs, particularly high-power white and UV, also warrant care. Don't stare into them, and don't point them at others.

---

## Online safety for IoT projects

Once a project connects to the internet, a new category of risk appears — and it's worth teaching explicitly, because it's the part that generalises to the rest of their life.

- Never hard-code WiFi passwords or API keys into a file that gets pushed to GitHub. Teach `.gitignore` and a `secrets.py` pattern from day one. This is the single most common mistake and it's easy to prevent.
- Don't port-forward a home router to expose a hobby project. Use a proper tunnelling service or keep it on the LAN.
- Cameras: agree in advance where they point and who can see the feed. A camera project in a shared home needs a conversation with everyone in the house.
- Anything publishing to a public dashboard should be assumed public forever.

---

## Supervision ratios

Rough guidance for clubs:

| Activity | Suggested ratio |
|---|---|
| Block coding, no hardware | 1:15 |
| Crocodile clips, battery power | 1:12 |
| Breadboarding | 1:10 |
| Soldering | 1:6, or 1:1 for first attempts |
| LiPo charging, power tools | 1:1, adult-operated |

---

## Risk assessment

UK schools and registered clubs will usually need a written risk assessment. [STEM Learning](https://www.stem.org.uk/) and [CLEAPSS](https://www.cleapss.org.uk/) publish templates and guidance for exactly this — CLEAPSS in particular is the standard reference for D&T and science practical safety in England and Wales, and member schools have free access.
