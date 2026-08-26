# Contributing

Additions welcome, particularly from teachers and club leaders with projects they've actually run with young people. A resource that survived contact with thirty teenagers is worth more than one that looks good in a search result.

---

## Inclusion criteria

Every entry must be:

1. **Free to access.** No paywall, no mandatory account, no trial that expires. Freemium is acceptable only if the free tier is substantial enough to be useful alone (Random Nerd Tutorials qualifies; a site with three free articles does not).
2. **Buildable.** Maps to components stocked by [RS](https://uk.rs-online.com/web/), [The Pi Hut](https://thepihut.com/), [Adafruit](https://www.adafruit.com/), [Pimoroni](https://shop.pimoroni.com/) or [Kitronik](https://kitronik.co.uk/) — or runs in a free simulator.
3. **Currently live.** Checked weekly by CI, but please verify before submitting.
4. **Age-appropriate** for the stated band, including language, framing and safety practice.

We deliberately exclude paid courses even when they're excellent. There is more free material here than anyone can work through in a decade.

---

## Entry format

```markdown
**[Resource name](https://example.com)** — `Difficulty` `Type`
One line on what it actually teaches. Parts: what you need to own.
```

**Difficulty:** `Foundation` (≈11–13) · `Intermediate` (≈14–16) · `Advanced` (≈17+)
Tag where the resource *starts*, not where it ends.

**Type:** `Video` · `Tutorial` · `Blog` · `GitHub` · `Curriculum` · `Simulator` · `Reference` · `Tool`

---

## Writing style

- **Say what it teaches, not that it's good.** "Covers pull-up resistors and why floating inputs read noise" beats "great tutorial".
- **One line.** Two if the resource needs a caveat.
- **Flag caveats honestly.** If a channel has strong language, dangerous demonstrations, or a paywall behind the free tier, say so. Supervisors need this more than they need enthusiasm.
- **No affiliate links.** Ever. This gets rejected on sight.
- **British English**, since the buying guidance is UK-centred.

---

## How to submit

1. Open an issue using the [Add a resource](.github/ISSUE_TEMPLATE/add-resource.yml) template, or
2. Fork, add your entry to the right file, and open a pull request.

For a PR, please say in the description whether you've used the resource with learners, and roughly what ages.

---

## Reporting a broken or outdated link

Use the [Broken link](.github/ISSUE_TEMPLATE/broken-link.yml) template. Automated checking catches dead URLs but not pages that are still live and now wrong — a discontinued product, a retired competition, a tutorial for hardware you can no longer buy. Those need human eyes, and reports are very welcome.

**Time-sensitive pages** that need periodic review:
- [docs/05-lego-2026-transition.md](docs/05-lego-2026-transition.md) — a fast-moving situation
- [docs/03-buying-guide-uk.md](docs/03-buying-guide-uk.md) — prices drift
- [competitions/](competitions/README.md) — seasons and rules change annually

---

## What gets rejected

- Paid courses, and freemium with a thin free tier
- Affiliate or referral links
- Products rather than learning resources
- Anything requiring an account before you can see the content
- Tutorials with unsafe practice — mains wiring aimed at under-18s, unprotected lithium charging, missing current limiting
- AI-generated tutorial content that hasn't been verified against working hardware. Wiring diagrams that look plausible and aren't are actively harmful, and this is now a real problem in search results.

---

## Code of conduct

This resource is aimed at children and young people. Contributors are expected to keep discussion constructive and appropriate to that audience. Disagreements about technical merit are fine and useful; anything else isn't.

---

## Licence

Contributions are made under [CC BY-SA 4.0](LICENSE.md). Linked resources keep their own licences — please note in your entry if a resource is unusually permissive (Creative Commons, public domain), since that materially affects whether a teacher can adapt it.
