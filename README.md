# Typeout

<p align="center">
  <img src="https://raw.githubusercontent.com/massab344/Typeout/main/icon.png" width="128" height="128" alt="Typeout Icon" />
</p>

<p align="center">
  <b>Replay file content character by character to create realistic undo history in VS Code, Antigravity IDE, and Cursor.</b>
</p>

<p align="center">
  <a href="vscode:extension/massab344.typeoutt">
    <img src="https://img.shields.io/badge/VS%20Code-Marketplace-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code Marketplace" />
  </a>
  &nbsp;
  <a href="https://open-vsx.org/extension/massab344/typeout">
    <img src="https://img.shields.io/badge/Open%20VSX-Registry-7952B3?style=for-the-badge&logo=eclipseche&logoColor=white" alt="Open VSX" />
  </a>
  &nbsp;
  <a href="vscode:extension/massab344.typeout">
    <img src="https://img.shields.io/badge/1--Click%20Install-In%20Editor-2ea44f?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="Install in Editor" />
  </a>
  &nbsp;
  <a href="https://github.com/massab344/Typeout">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</p>

---

## ⚡ Direct Installation Links

You can install or view Typeout across any editor or registry:

- 🚀 **[Open & Install Directly in Editor (VS Code / Antigravity)](vscode:extension/massab344.typeout)**
- 🛒 **[View on VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=massab344.typeout)**
- 🟣 **[View on Open VSX Registry](https://open-vsx.org/extension/massab344/typeout)**
- 📦 **[Download VSIX from GitHub Releases](https://github.com/massab344/Typeout/releases)**

---

## Why Typeout?

When presenting code demos, submitting assignments, or recording screencasts, having realistic editor typing history is essential. Manually pasting code creates a single giant edit, leaving zero typing history. 

**Typeout** replays your code character by character. Every keystroke is its own independent undo stop, so pressing `Ctrl+Z` (or `Cmd+Z`) smoothly un-types your code in reverse order, exactly as if it was written by hand.

---

## Features

- ⌨️ **Instant 1-Click Buttons:** Click the **`⌨️ Typeout`** button in the bottom status bar, or the **`⌨️`** button in the top-right of your editor tab. No need to memorize `Ctrl+Shift+P`!
- 🛡️ **Zero Backup Compulsion:** Open any file with code, click Typeout, and it automatically replays with a safety backup created so your work is never lost.
- 📁 **File Picker Support:** Replaying into a blank file? Typeout prompts you with a clean file picker to choose any file from disk.
- 🎬 **Realistic Undo History:** Every character, tab, and newline is typed sequentially with its own undo stop.
- 🎯 **Viewport Follow:** Automatically tracks the cursor position and keeps the typing head in view in real time.

---

## How to Use

1. Open your code file in the editor (e.g. `main.cpp`).
2. Click the **"⌨️ Typeout"** button on the bottom status bar, OR click the **`⌨️`** button in the top-right editor toolbar.
3. Click **Start** in the confirmation dialog.
4. Watch your code type itself out smoothly! Once done, press `Ctrl+Z` to step backward through the typing history letter by letter.

---

## Requirements

- VS Code `^1.60.0` or compatible editors (Antigravity IDE, VSCodium, Cursor).

---

## License

MIT License.
