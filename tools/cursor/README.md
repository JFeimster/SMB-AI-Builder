# Cursor Tool-Ops Layer

## Purpose
This directory (`tools/cursor/`) and the `.cursor/rules/` directory create a dedicated Cursor-specific tool-ops layer for the SMB AI Workflow & Agent Builder project.

The goal of this layer is to provide structured guidelines and context for:
- Fast repository edits
- Page generation
- Code refactoring
- Component cleanup
- QA passes
- Static-to-Next.js migration support

## Rules Location
- `.cursor/rules/*.mdc` files define globs-based rules for Cursor agents to automatically follow.
- `tools/cursor/*.md` files provide human-readable references, prompts, QA checklists, and rules.

## Core Rules Recap
- Never invent facts, testimonials, or claims.
- Maintain a neobrutalist + futurist fintech + cyberpunk design style.
- Use direct, practical, SMB-friendly language.
- Ensure accessibility and semantic HTML.
