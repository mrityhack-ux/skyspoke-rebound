# SkySpoke Rebound

> **A vibrant 3D toybox bicycle obstacle course ("obby") built in vanilla Three.js for the Haven Game Jam by Hack Club, Lucknow.**

**One-line pitch:** Carve across a floating sky-high stunt bike obby where every crash snaps a glowing elastic tether—whipping you backward to your checkpoint for timed **Rebound Boosts**.

---

## How It Embodies "Bounce Back"
1. **Elastic Checkpoint Tether:** Wipeouts (lava traps, spinning sweepers, bad landings, or falling into the sky) never end in a frustrating Game Over screen. Instead, a glowing energy cord latches onto your bike and zips you backward along a high Bezier arc directly onto your active checkpoint pad.
2. **Rebound Boost (Skill Ceiling):** Pressing `Space` right as the shrinking golden timing ring closes on your return arc triggers a **Rebound Boost**—delivering a hit-stop impact punch, golden sparks, and a turbo super-hop to conquer the obstacle immediately.
3. **Tactical Anchor Drop:** Press `E` or `Shift` on any solid block to plant a temporary holographic checkpoint beacon right before risky jumps.

---

## Controls
| Action | Keyboard | Touch |
| :--- | :--- | :--- |
| Pedal / Tuck (Air) | `W` / `Up Arrow` | `GO` |
| Brake / Reverse / Wheelie (Air) | `S` / `Down Arrow` | `BRAKE` |
| Steer / Air Bank | `A` / `D` or `Left` / `Right` | `◀` / `▶` |
| Bunny-Hop & **Rebound Boost** | `Space` | `HOP` |
| Drop Custom Anchor Beacon | `E` or `Shift` | `E` |
| Instant Manual Bounce-Back | `R` | `R` |
| Pause / Mute Audio | `Esc` or `P` / `M` | HUD Buttons |

---

## Tech Stack
- **100% Zero-Build Vanilla Stack:** Self-contained `skyspoke-rebound.html` using HTML5, CSS3, Vanilla JS, and Three.js (`0.160.0`) via ES Module Import Map.
- **Custom 3D Physics:** Hand-written OBB collision, slope gravity, moving platform velocity inheritance, mid-air pitch/lean balance, and Bezier tether trajectories.
- **Procedural Everything:** Toybox studded plastic textures, spoked 3D bike + blocky rider, pooled particles, `RoomEnvironment` PBR reflections, `UnrealBloomPass` glow (with an `FX` performance toggle), and full Web Audio API synth sound effects + music groove.

---

## Local Setup & Running
Download `skyspoke-rebound.html` directly from the in-game menu (or use `public/skyspoke-rebound.html`), rename it to `index.html` if desired, and serve via any static server:

```bash
python3 -m http.server 8080
# Then open http://localhost:8080
```

---

## Deployment

### GitHub Pages
1. Push `index.html` (from `public/skyspoke-rebound.html`) and `README.md` to a GitHub repository.
2. Go to **Settings → Pages → Build and deployment**.
3. Set Source to **Deploy from a branch**, pick `main` / `/ (root)`, and click **Save**.

### itch.io
1. Rename `skyspoke-rebound.html` to `index.html` and zip it into `skyspoke-rebound.zip` (with `index.html` at the zip root).
2. Create a new HTML project on itch.io, upload the zip, and check **"This file will be played in the browser"**.
3. Recommended viewport: `1280 × 720` with **Fullscreen button** enabled.
