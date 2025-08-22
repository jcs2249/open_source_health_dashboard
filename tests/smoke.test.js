const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");

const mustHave = [
  'id="repo"',      // input
  'id="t"',         // results table
  'id="license"',   // cells
  'id="readme"',
  'id="gitignore"',
  'id="commit"',
  'id="actions"'
];

for (const needle of mustHave) {
  if (!html.includes(needle)) {
    console.error(` Missing ${needle} in index.html`);
    process.exit(1);
  }
}

console.log("Smoke test passed");

