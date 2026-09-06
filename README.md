# Typeout

<p align="center">
  <img src="icon.png" width="128" height="128" alt="Typeout Icon" />
</p>

<p align="center">
  <b>Replay file content character by character to create realistic undo history in VS Code & Antigravity IDE.</b>
</p>

---

## Why Typeout?

When presenting code demos, submitting assignments, or recording screencasts, having realistic editor typing history is essential. Manually copying and pasting drops an entire block into the editor as a single event, leaving zero typing history. 

**Typeout** replays your code character by character. Every keystroke is its own independent undo stop, so pressing `Ctrl+Z` (or `Cmd+Z`) smoothly un-types your code in reverse order, exactly as if it was written by hand.

---

## What's New in v1.1.0

- 🖱️ **Instant 1-Click Buttons:** No need to remember `Ctrl+Shift+P`! Click the **"⌨️ Typeout"** button in the bottom status bar, or the **"▶"** button in the top-right of your editor tab.
- 🛡️ **Zero Backup Compulsion:** No need to manually create `_backup` files! Open any file with code, press Typeout, and it automatically saves a safety copy and replays it seamlessly.
- 📁 **File Picker Support:** If starting from a blank file, Typeout lets you select any source file to type out into your active editor.

---

## How to Use

1. Open your code file in the editor (e.g. `main.cpp`).
2. Click the **"⌨️ Typeout"** button on the bottom status bar, OR click the **"▶"** button at the top-right of the editor.
3. Click **Start** in the confirmation dialog.
4. Watch your code type itself out smoothly! Once done, you can press `Ctrl+Z` to step backward through the typing history letter by letter.

---

## Requirements

- VS Code `^1.60.0` or compatible editors (Antigravity IDE, VSCodium, Cursor).

---

## License

MIT License.
