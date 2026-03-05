# Ion One Dark Theme

Ion One Dark Theme is a One Dark-inspired dark theme for **Visual Studio Code** and **Cursor**, built for readability, consistent syntax coloring, and comfortable long coding sessions.

If you are looking for a clean **One Dark theme for VS Code and Cursor** with practical contrast tuning, this extension is designed for that exact workflow.

## Why Ion One Dark Theme

- One Dark-inspired color system adapted for modern editor and workbench surfaces.
- Balanced contrast for daily coding, reviewing diffs, and navigating large projects.
- Cursor-compatible through the standard VS Code extension ecosystem.
- Clear token differentiation without overly saturated or distracting highlights.

## Features

- Cohesive dark UI styling for editor + workbench surfaces.
- Readable syntax highlighting across common languages and file types.
- Reliable visual hierarchy in sidebars, tabs, command surfaces, and terminal views.
- Comfortable theme profile for long development sessions.

## Install

### Visual Studio Code

1. Open **Extensions** (`Cmd/Ctrl+Shift+X`)
2. Search for `Ion One Dark Theme`
3. Click **Install**

### Cursor IDE

1. Open **Extensions** (`Cmd/Ctrl+Shift+X`)
2. Search for `Ion One Dark Theme`
3. Install and activate the theme

### Manual `.vsix` packaging

```bash
npm install
npm run package
code --install-extension ion-one-dark-<version>.vsix
```

## Activate the Theme

1. Open Command Palette (`Cmd/Ctrl+Shift+P`)
2. Run `Preferences: Color Theme`
3. Select `Ion One Dark Theme`

## Recommended Settings

These optional settings pair well with the theme for readability:

```json
{
  "editor.fontFamily": "JetBrains Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.minimap.enabled": false
}
```

Theme color customization docs:
<https://code.visualstudio.com/docs/getstarted/theme-color-reference>

## Compatibility

- VS Code engine target: `^1.60.0`
- Extension category: `Themes`
- Theme kind: `vs-dark`
- Cursor support: yes (via VS Code extension compatibility)

## Issues and Feedback

If you find token or UI inconsistencies, open an issue and include:

- language or file type
- minimal reproducible snippet
- screenshot of the affected UI/token color

Issue tracker:
<https://github.com/brunocechet/ion-one-dark/issues>

## Acknowledgments

Ion One Dark Theme is inspired by:

- Atom One Dark: <https://github.com/atom/one-dark-syntax>
- VS Code One Dark port by akamud: <https://github.com/akamud/vscode-theme-onedark>

## Changelog

See:
[`CHANGELOG.md`](./CHANGELOG.md)

## License

Mozilla Public License 2.0 (`MPL-2.0`). See:
[`LICENSE`](./LICENSE)
