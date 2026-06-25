# Color System Usage

This document explains how to apply the core palette across different UI contexts to maintain the loud, functional, cyberpunk-neobrutalist aesthetic.

## Backgrounds

*   **Primary Backgrounds:** Use `var(--off-white)` or complex gradients (e.g., mixing `var(--ink)` with faint neon highlights like `var(--cyan)` or `var(--pink)`).
*   **Dark Sections:** Use `var(--ink)` for deep contrast, especially for technical or 'infrastructure' sections like the blueprint card or terminal block.
*   **Launch/CTA Panels:** Use vibrant gradients (e.g., `var(--yellow)` to `var(--lime)` to `var(--cyan)`) to draw maximum attention.

## Surfaces

*   **Cards and Panels:** Use `var(--paper)` (`#FFFDF3`) for default cards. Use `var(--off-white)` for alternating row colors or subtle contrast.
*   **Accent Cards:** Use solid `var(--lime)`, `var(--cyan)`, or `var(--pink)` for cards that need to stand out within a grid.

## CTAs (Call to Actions)

*   **Primary Buttons:** `var(--lime)` background with `var(--ink)` text and borders. High contrast, impossible to miss.
*   **Secondary Buttons:** `var(--cyan)` background with `var(--ink)` text.
*   **Ghost/Tertiary:** `var(--off-white)` background with `var(--ink)` text and borders.

## Warnings and Safety

*   **Caution/Stop:** Use `var(--pink)` (Cyber Pink). Represents danger, "keep human in the loop", or highly sensitive areas. Note: We use pink instead of traditional red for the cyberpunk feel.
*   **Warning/Cleanup:** Use `var(--yellow)` (Hazard Yellow). Represents "clean up first", warning boards, or areas requiring caution.
*   **Pilot/Draft:** Use `var(--cyan)` (Electric Cyan). Represents "draft-only mode" or careful piloting.
*   **Success/Ready:** Use `var(--lime)` (Acid Lime). Represents "ready for automation", "safe", or positive outcomes.

## Scorecard States

*   **0-10 (Danger):** `var(--pink)`
*   **11-20 (Warning):** `var(--yellow)`
*   **21-26 (Pilot):** `var(--cyan)`
*   **27-30 (Ready):** `var(--lime)`

## Matrix Labels

*   **Automate Now:** `var(--lime)`
*   **Clean Up First:** `var(--yellow)`
*   **Keep Human:** `var(--pink)`
*   **Revisit Later:** `var(--cyan)`
