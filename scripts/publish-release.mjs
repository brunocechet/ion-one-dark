#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const [, , vsixArg] = process.argv;

if (!vsixArg) {
    console.error("Usage: node scripts/publish-release.mjs <vsix-path>");
    process.exit(1);
}

const vsixPath = resolve(process.cwd(), vsixArg);

if (!existsSync(vsixPath)) {
    console.error(`VSIX package not found at path: ${vsixPath}`);
    process.exit(1);
}

const { VSCE_PAT = "", OVSX_PAT = "" } = process.env;
const missingTokens = [];

if (!VSCE_PAT) {
    missingTokens.push("VSCE_PAT");
}

if (!OVSX_PAT) {
    missingTokens.push("OVSX_PAT");
}

if (missingTokens.length > 0) {
    console.error(`Missing required release token(s): ${missingTokens.join(", ")}`);
    process.exit(1);
}

const runCommand = (label, command, args) => {
    try {
        execFileSync(command, args, { stdio: "inherit" });
    } catch (error) {
        const originalMessage = error instanceof Error ? error.message : String(error);
        throw new Error(`Failed while ${label}: ${originalMessage}`, { cause: error });
    }
};

console.log(`Publishing VSIX package from: ${vsixPath}`);

console.log("Publishing to VS Code Marketplace...");
runCommand("publishing to VS Code Marketplace", "npx", [
    "@vscode/vsce",
    "publish",
    "--packagePath",
    vsixPath,
    "--pat",
    VSCE_PAT,
]);

console.log("Publishing to Open VSX...");
runCommand("publishing to Open VSX", "npx", ["ovsx", "publish", vsixPath, "--pat", OVSX_PAT]);

console.log("Release publish completed successfully on both registries.");
