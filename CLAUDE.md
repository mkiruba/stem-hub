# Claude Code Instructions for Open STEM Hub

Welcome to the Open STEM Hub repository! This project curates free, accessible STEM projects (coding, electronics, robotics) for students.

## Workflows and Sub-Agents

We use specific, standardized workflows to maintain the quality and consistency of this repository. If you are asked to perform tasks related to curating, formatting, or validating resources, please read and strictly follow the corresponding "Sub-Agent" instruction files before proceeding:

1. **Resource Researcher**
   - **Trigger**: When asked to find, research, or discover new STEM projects.
   - **Instructions**: Please read and follow `.agents/skills/resource-researcher/SKILL.md`

2. **Resource Formatter**
   - **Trigger**: When asked to format a resource link or text to be added to the repository.
   - **Instructions**: Please read and follow `.agents/skills/resource-formatter/SKILL.md`

3. **Link Validator**
   - **Trigger**: When asked to verify, check, or validate a resource to see if it meets our accessibility standards.
   - **Instructions**: Please read and follow `.agents/skills/link-validator/SKILL.md`

## General Project Constraints
- **Free Access**: Only accept resources that are completely free to access (no forced sign-ups or paywalls to read the core tutorial).
- **Target Audience**: Ensure projects are appropriate for ages 11-20+.
- **Hardware**: Projects should use hardware components readily available from UK suppliers (e.g., RS Components, The Pi Hut, Adafruit, Pimoroni, Kitronik).
