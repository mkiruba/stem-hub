---
name: resource-researcher
description: >-
  Use this skill when the user asks to find, search for, or research new STEM projects
  for school students (e.g., coding, electronics, robotics). This agent will use search
  tools to find free, accessible projects that match the Open STEM Hub criteria.
---

# Resource Researcher Sub-Agent

This skill guides you in researching and discovering new STEM projects suitable for the Open STEM Hub repository.

## Criteria for a Valid Project

1. **Free to access**: No paywalls, no forced sign-ups to view the tutorial content.
2. **Age appropriate**: Target audience should roughly fall into 11-20+ age ranges.
3. **Hardware availability**: The components needed should ideally be available from UK suppliers like RS Components, The Pi Hut, Adafruit, Pimoroni, or Kitronik.
4. **Actionable**: It should be a tangible project to build, not just a theoretical concept.

## Steps for Research

1. Use your `search_web` tool to find projects.
2. Try searching for specific platforms (e.g., "micro:bit v2 projects for schools", "Raspberry Pi Pico beginner tutorial").
3. Filter out results that are clearly paid courses or require proprietary kits (unless it's an accepted platform like LEGO Spike, which is explicitly noted in the project).
4. Summarize your findings, providing a list of URLs and a brief description of what the project entails and what hardware it requires.
5. If the user asks you to add them, pass the findings to the `resource-formatter` skill or format them manually according to the project's markdown standards.
