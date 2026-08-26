# The LEGO robotics transition (2022–2028)

**Status as of August 2026.** If you own LEGO robotics hardware, are about to buy some, or run a FIRST LEGO League team, the ground has shifted twice in four years. This page lays out what happened, what still works, and what to do.

---

## What happened

**October 2022 — MINDSTORMS discontinued.** LEGO retired the MINDSTORMS Robot Inventor set (51515) after 24 years of the MINDSTORMS line, redirecting the team elsewhere. LEGO Education SPIKE became the de facto successor.

**June 2021 — MINDSTORMS Education EV3 retired**, with the EV3 app and related support ending after 31 July 2026.

**January 2026 — LEGO Education Computer Science & AI announced.** A new K–8 (Years 1–9) classroom line, shipping from April 2026, starting around $339.95 per kit (roughly $85 per student across a group of four). It integrates motors and sensors into LEGO elements and introduces a browser-based "Coding Canvas" plus a Python package. Notably, it runs locally with no student login and no data collection.

**30 June 2026 — SPIKE Prime and SPIKE Essential sales ended.** The SPIKE App remains supported until **30 June 2031**.

**2026–2027 — FIRST LEGO League's final season.** LEGO Education has not renewed its partnership with FIRST. The BIOGLOW season (kickoff 4 August 2026) is the last, running in two parallel editions: *Founders Edition* on SPIKE hardware, and *Future Edition* on the new Computer Science & AI kits. LEGO Education plans its own separate competition season from 2027–2028.

---

## What this means in practice

### If you already own SPIKE Prime, Robot Inventor or EV3

**Your hardware is fine.** Nothing stops working. The official app runs until 2031 for SPIKE, and the open-source community has you covered well beyond that.

The important move is to learn **[Pybricks](https://pybricks.com/)** — free, open-source MicroPython firmware that runs on SPIKE Prime, SPIKE Essential, MINDSTORMS Robot Inventor, EV3 and the Powered Up hubs. It replaces LEGO's app entirely with a browser-based Python environment at [code.pybricks.com](https://code.pybricks.com/), works offline once loaded, and is developed independently of LEGO's support timeline.

Pybricks is genuinely better than the official software for anyone past block coding: proper Python, precise motor control, and support for third-party sensors. Flashing is reversible — you can restore LEGO firmware via the DFU bootloader.

> **Caveat:** SPIKE Prime hubs manufactured in 2026 have different internal electronics and require different firmware. Pybricks support for those is in development, not yet shipped. Check the [Pybricks support tracker](https://github.com/pybricks/support) before buying a brand-new hub secondhand.

### If you're buying now

Don't buy SPIKE Prime new at inflated prices. Discontinued kits tend to climb well above original retail, replacement parts are hard to source, and you're buying into a platform with a fixed end date.

Realistic options:

| Option | Why | Cost |
|---|---|---|
| **Secondhand SPIKE Prime + Pybricks** | Best LEGO experience, open-source software future, still FLL-legal for Founders Edition through 2027–28 | Variable, watch for inflation |
| **Secondhand EV3 + Pybricks** | Cheap, robust, huge community, now flashable over USB in seconds | Low |
| **LEGO Education Computer Science & AI** | The supported path forward, and the basis of FLL Future Edition | ~$340/kit, classroom-oriented |
| **Move off LEGO entirely** | micro:bit or Pi Pico robotics gives more transferable skills for less money | £15–60 |

### If you run an FLL team

Founders Edition (SPIKE-based) runs through the 2027–2028 season, so existing hardware has at least two more seasons. Future Edition needs the new CS & AI kits. Regional availability varies — check with your local partner before committing budget. After 2027–28, LEGO Education runs its own competition and FIRST teams are pointed toward FIRST Tech Challenge and FIRST Robotics Competition.

---

## The honest assessment

LEGO robotics has always traded openness for polish. You get an excellent building system and a friendly app, in exchange for a closed ecosystem whose lifespan is decided by a toy company's strategy. That trade just came due for the second time in four years.

For an 11–13-year-old who loves building, SPIKE Prime with Pybricks is still a superb experience and the block-to-Python path is well-trodden. For a 14+ learner, the money goes considerably further on a Pi Pico, a motor driver and a chassis — and the skills transfer to everything else in this repository.

---

## Free LEGO robotics resources that remain live

- **[Pybricks documentation](https://pybricks.com/learn/)** — getting started, API reference, tutorials. `Intermediate`
- **[pybricks/pybricks-projects](https://github.com/pybricks/pybricks-projects)** — a broad collection of example programs and robot builds. `Intermediate` `GitHub`
- **[Anton's Mindstorms](https://www.antonsmindstorms.com/)** — the best independent LEGO robotics blog; Python-first, active through 2026. `Intermediate` `Advanced`
- **[ev3dev](https://www.ev3dev.org/)** — Debian Linux on the EV3 brick, with Python, C++ and more. `Advanced` `GitHub`
- **[FIRST LEGO League season materials](https://firstlegoleague.org/season)** — rubrics, scoresheets and session slides, free to download. `Curriculum`
- **[LEGO Education lesson plans](https://education.lego.com/en-gb/lessons/)** — free, still hosted, still useful even for retired kits. `Curriculum`

See also: [platforms/lego-robotics.md](../platforms/lego-robotics.md).

---

*This page is time-sensitive. If you're reading it well after August 2026, verify against [education.lego.com](https://education.lego.com/) and [firstlegoleague.org](https://firstlegoleague.org/) — and please open an issue if it's out of date.*
