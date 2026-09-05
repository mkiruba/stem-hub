---
name: resource-formatter
description: >-
  Use this skill when the user asks to format a STEM project, tutorial, or resource
  into the standard markdown format used by the Open STEM Hub repository.
---

# Resource Formatter Sub-Agent

This skill guides you in formatting STEM resources so they are consistent with the Open STEM Hub standards.

## Required Format

Every resource must follow this exact shape so it can be scanned quickly:

> **[Resource name](https://example.com)** — `Difficulty` `Type`
> One line on what it actually teaches. Parts needed: list of hardware.

### Difficulty Tags
Must be exactly one of: `Foundation`, `Intermediate`, `Advanced`.
- **Foundation**: Ages 11-13, block coding, no soldering.
- **Intermediate**: Ages 14-16, MicroPython, breadboards, first soldering.
- **Advanced**: Ages 17-20+, C/C++, Linux, ROS 2, ML.

### Type Tags
Can be one or more of: `Video`, `Tutorial`, `Blog`, `GitHub`, `Curriculum`, `Simulator`.

## Steps for Formatting

1. Extract the name, URL, and a one-sentence summary of the resource.
2. Identify the required parts.
3. Determine the correct difficulty tag based on the concepts used.
4. Determine the correct type tag.
5. Output the final formatted markdown block.
6. (Optional) Check with the `link-validator` skill if you are unsure if the link works.
