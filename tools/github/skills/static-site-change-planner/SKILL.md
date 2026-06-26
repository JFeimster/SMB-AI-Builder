# Skill: Static Site Change Planner

## Purpose
Plans updates, feature additions, or structural changes to a static HTML/CSS/JS site.

## Use When
When a user needs to modify a static site hosted on GitHub (e.g., adding a new page, updating styles).

## Inputs Needed
- Current site structure
- Desired changes or new features
- Existing CSS/JS architecture

## Outputs
- A step-by-step implementation plan
- Required file modifications (HTML, CSS, JS)
- Asset management recommendations

## Procedure
1. Understand the goal of the change.
2. Identify all files that need to be created or updated.
3. Plan the changes, ensuring relative paths and asset links remain intact.
4. Detail the CSS or JS modifications required, respecting the existing design system.
5. Review against static site rules (no server-side logic).

## Safety / Human Review
- Ensure all planned changes are strictly client-side.
- Do not plan changes that require a build step if the site is purely static.

## Quality Checklist
- [ ] Plan only uses HTML/CSS/JS?
- [ ] Relative paths are accounted for?
- [ ] Existing styles are respected?

## Example Prompt
```
I want to add a new 'About Us' page to my static website and link it from the navbar. I also need to add a team photo gallery. Can you give me a plan on what files to create and how to link everything properly?
```

## Related Tool Docs
- [GitHub Tool Docs](../../README.md)

## Related Site Pages
- [GitHub Pages](../../../../pages/tools/github)
