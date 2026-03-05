#!/usr/bin/env node

import { execFileSync } from "node:child_process";

const [, , beforeArg, afterArg] = process.argv;

if (!afterArg) {
    console.error("Usage: node scripts/determine-bump.mjs <before-sha> <after-sha>");
    process.exit(1);
}

const before = beforeArg ?? "";
const after = afterArg;
const isZeroSha = /^0+$/;

const readCommitMessages = () => {
    const args = ["log", "--format=%B"];
    const hasBeforeRange = Boolean(before) && !isZeroSha.test(before);

    if (hasBeforeRange) {
        args.push(`${before}..${after}`);
    } else {
        args.push("-n", "1", after);
    }

    try {
        return execFileSync("git", args, { encoding: "utf8" });
    } catch (error) {
        const originalMessage = error instanceof Error ? error.message : String(error);
        const rangeDescription = hasBeforeRange ? `${before}..${after}` : `-n 1 ${after}`;

        throw new Error(
            `Failed to read commit messages in readCommitMessages (before="${before}", after="${after}", range="${rangeDescription}"): ${originalMessage}`,
            { cause: error },
        );
    }
};

const commitMessages = readCommitMessages();
const hasBreakingChange =
    /BREAKING[ -]CHANGE:/i.test(commitMessages) ||
    /^[a-z]+(?:\([^)]+\))?!:/gim.test(commitMessages);
const hasFeature = /^feat(?:\([^)]+\))?:/gim.test(commitMessages);

const bump = hasBreakingChange ? "major" : hasFeature ? "minor" : "patch";
process.stdout.write(`${bump}\n`);
