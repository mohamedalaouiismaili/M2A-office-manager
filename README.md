# M2A Office Manager — Final Corrected

Static HTML/CSS/JavaScript application.

## Files
- `index.html` — structure only; loads the external assets.
- `assets/style.css` — all visual styles.
- `assets/app.js` — data, workflow logic, events and rendering.

## Final corrections
- Dashboard automation section removed.
- Workflow completion is done by clicking the numbered circle; the number becomes ✓.
- Client Status and Responsable filters work together and remain independent of the search field.
- Échéances search updates only its result list, preserving input focus.
- Client and Task searches similarly update result containers without rebuilding the input.
- Light/dark switch has a visible sliding knob.
- A new storage key (`m2a-office-manager-v3`) prevents old demo/local state from masking the final build.
- No inline JavaScript remains in `index.html`.

Open `index.html` directly or upload the folder to a static host.
