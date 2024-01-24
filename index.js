#!/usr/bin/env node

var child_process = require("child_process");

console.log("downloading from rustup.rs");

child_process.spawnSync("bash", [
  "-c",
  "curl -sSf https://sh.rustup.rs | sh",
], { stdio: "inherit" });
