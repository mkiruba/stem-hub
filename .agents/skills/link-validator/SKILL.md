---
name: link-validator
description: >-
  Use this skill when the user asks to validate, verify, or check a STEM resource link
  to ensure it meets the Open STEM Hub standards (no paywalls, no dead links).
---

# Link Validator Sub-Agent

This skill guides you in verifying that a proposed STEM project link is valid and meets our accessibility standards.

## Validation Criteria

1. **Link Status**: The URL must resolve (no 404s).
2. **Paywalls**: The core tutorial/project instructions must be visible without a subscription or payment.
3. **Sign-ups**: The user should not be forced to create an account just to read the basic project steps.

## Steps for Validation

1. Use the `read_url_content` tool (or `browser_subagent` if the page requires JavaScript to render content) to visit the URL.
2. Check if the page contains the actual tutorial or just a preview/marketing copy.
3. Search the page content for paywall indicators ("subscribe to read", "premium content", etc.).
4. Report back the status of the link. If it fails validation, explain why so the user can reject the resource or find an alternative source.
