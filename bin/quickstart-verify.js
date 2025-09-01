#!/usr/bin/env node
const { spawnSync } = require('node:child_process');
const entry = require.resolve('@qsdoctor/cli/src/index.js');
const r = spawnSync(process.execPath, [entry, ...process.argv.slice(2)], { stdio: 'inherit' });
process.exit(r.status ?? 1);
