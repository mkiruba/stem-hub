# Open STEM Hub

**A curated, free-and-open collection of coding, electronics and robotics projects for ages 11–20+, built from parts you can actually buy.**

Every resource here is free to access. Every project maps to components stocked by [RS Components UK](https://uk.rs-online.com/web/), [The Pi Hut](https://thepihut.com/), [Adafruit](https://www.adafruit.com/), [Pimoroni](https://shop.pimoroni.com/) or [Kitronik](https://kitronik.co.uk/). No paywalled courses, no "sign up to see the tutorial", no dead links (we check weekly — see [link-check workflow](.github/workflows/link-check.yml)).

---

## Start here

**New to this?** Pick your entry point:

| If you are… | Go to |
|---|---|
| A parent or teacher, unsure what to buy | [Buying guide (UK)](docs/03-buying-guide-uk.md) |
| Looking for projects by age | [Age bands & learning tracks](docs/02-age-bands-and-tracks.md) |
| Looking for projects by hardware you own | [Platforms](platforms/) |
| Looking for projects by topic (robots, wearables, AI…) | [Themes](themes/) |
| Preparing for a competition | [Competitions](competitions/) |
| Coming from LEGO MINDSTORMS or SPIKE | ⚠️ [Read this first](docs/05-lego-2026-transition.md) |
| Wanting to contribute | [CONTRIBUTING.md](CONTRIBUTING.md) |

**No hardware yet and want to try anyway?** Both [Wokwi](https://wokwi.com/) and [Tinkercad Circuits](https://www.tinkercad.com/circuits) simulate Arduino, Pi Pico and ESP32 in the browser for free. Half the projects here can be prototyped before you spend anything.

---

## Platforms

Organised by what you plug in. Each page lists free tutorials, video series, blogs and GitHub repos, sorted by difficulty.

| Platform | Best for | Entry cost | Page |
|---|---|---|---|
| **BBC micro:bit v2** | Ages 11–14, classrooms, no soldering | ~£15 | [→](platforms/microbit.md) |
| **Raspberry Pi Pico / Pico 2** | Ages 13+, MicroPython, best value | ~£5–7 | [→](platforms/raspberry-pi-pico.md) |
| **Raspberry Pi (Zero 2 W / 4 / 5)** | Ages 14+, Linux, cameras, AI | ~£18–80 | [→](platforms/raspberry-pi.md) |
| **Arduino & Adafruit boards** | Ages 13+, CircuitPython, wearables | ~£10–25 | [→](platforms/arduino-adafruit.md) |
| **LEGO robotics (SPIKE / EV3 / Pybricks)** | Ages 11–16, no soldering, competitions | £££ (see note) | [→](platforms/lego-robotics.md) |
| **Discrete electronics** | Everyone — the foundation layer | ~£25 kit | [→](platforms/electronics-fundamentals.md) |

> ⚠️ **LEGO users read this.** LEGO Education ended sales of SPIKE Prime and SPIKE Essential on **30 June 2026**, following the retirement of MINDSTORMS in 2022. The app is supported until 2031, and the open-source [Pybricks](https://pybricks.com/) firmware keeps the hardware alive indefinitely. Full detail and migration options: [docs/05-lego-2026-transition.md](docs/05-lego-2026-transition.md).

---

## Themes

Same projects, sliced by what the kid actually wants to *make*. See [themes/](themes/README.md) for the full index.

🤖 Robots & rovers · 👕 Wearables & e-textiles · 🌱 Environment & sensing · 🎮 Games & retro computing · 🎵 Music & sound · 👁️ AI & computer vision · 🏠 Home automation & IoT · 🚀 Space, flight & high altitude

---

## Learning tracks

Three difficulty bands, each a sequence rather than a pile of links. Detail in [docs/02-age-bands-and-tracks.md](docs/02-age-bands-and-tracks.md).

- **Foundation (≈11–13)** — block coding, pre-made kits, crocodile clips. No soldering, no command line.
- **Intermediate (≈14–16)** — MicroPython/CircuitPython, breadboards, first soldering, GitHub basics.
- **Advanced (≈17–20+)** — Linux, C/C++, PCB design, ROS 2, on-device ML, version control as a habit.

Ages are a rough guide, not a gate. A motivated 12-year-old with support beats a disengaged 16-year-old every time.

---

## Resource libraries

Cross-platform collections, all free:

- 📺 [Video channels](resources/video-channels.md) — YouTube series worth following, with the good starting playlists flagged
- 📝 [Blogs & magazines](resources/blogs-and-magazines.md) — including free-PDF magazines with hundreds of back issues
- 💾 [GitHub repos & orgs](resources/github-repos.md) — libraries, example code, awesome-lists
- 🎓 [Free curricula](resources/free-curricula.md) — full schemes of work for teachers and club leaders

---

## Repository structure

```
.
├── docs/                    How to use this, age bands, buying, safety, LEGO transition
├── platforms/               Resources grouped by hardware family
├── themes/                  Resources grouped by project topic
├── competitions/            Robotics competitions and how to prepare
├── resources/               Cross-cutting: videos, blogs, GitHub, curricula
└── .github/                 Issue templates + automated link checking
```

---

## How entries are formatted

Every resource follows the same shape so it can be scanned quickly:

> **[Resource name](https://example.com)** — `Foundation` `Video`
> One line on what it actually teaches. Parts needed: micro:bit, 2× servo.

Difficulty tags: `Foundation` `Intermediate` `Advanced`
Type tags: `Video` `Tutorial` `Blog` `GitHub` `Curriculum` `Simulator`

---

## Licence

Repository content: [CC BY-SA 4.0](LICENSE.md). Linked resources retain their own licences — check before reusing. Where a source is unusually permissive (Adafruit and the Raspberry Pi Foundation both publish under Creative Commons), it is noted on the relevant page.

## Contributing

Additions welcome, especially from teachers and club leaders with tested projects. See [CONTRIBUTING.md](CONTRIBUTING.md) and use the [Add a resource](.github/ISSUE_TEMPLATE/add-resource.yml) issue template.
