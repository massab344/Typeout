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

**Typeout** reads a reference backup file and types it into your active editor character by character. Every keystroke is its own independent undo stop, so pressing `Ctrl+Z` (or `Cmd+Z`) smoothly un-types your code in reverse order, exactly as if it was written by hand.

---

## Features

- **Character-by-Character Insertion:** Each letter, tab, and newline is inserted sequentially with its own undo stop.
- **Zero Drift & Clean Formatting:** Automatically normalizes line endings (`\r\n` / `\n`) to prevent duplicate newlines and unwanted blank lines.
- **Smooth Viewport Follow:** The editor cursor and viewport automatically follow the typing head in real time.
- **Progress Tracking & Cancellation:** Shows a progress bar with percentage and character count, with instant cancellation support.
- **No External Dependencies:** Uses pure VS Code extension APIs—fast, lightweight, and reliable.

---

## How to Use

1. Prepare your source file (e.g. `main.cpp`).
2. Create a backup file in the same directory with `_backup` appended before the extension:
   ```
   my-project/
   ├── main.cpp
   └── main_backup.cpp
   ```
3. Open `main.cpp` in the editor.
4. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the Command Palette.
5. Search and run:
   ```
   Typeout: Type Current File Letter by Letter
   ```
6. Confirm the character count dialog and click **Start**.
7. Watch your code type itself out smoothly! Once done, you can press `Ctrl+Z` to step backward through the typing history letter by letter.

---

## Commands

| Command | Title | Description |
|---|---|---|
| `typeout.run` | **Typeout: Type Current File Letter by Letter** | Types content from `<filename>_backup.<ext>` into `<filename>.<ext>` |

---

## Requirements

- VS Code `^1.60.0` or compatible editors (Antigravity IDE, VSCodium, Cursor).

---

## License

MIT License. Feel free to use, modify, and distribute.
