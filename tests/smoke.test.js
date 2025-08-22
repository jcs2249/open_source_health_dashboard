const fs = require("fs");
const html = fs.readFileSync("index.html", "utf8");

// Check for repo input table
if (!html.includes('id="repoInput"')) {
  console.error("Couldn't find repo input table in index.html");
  process.exit(1);
}

// Check that results table exists
if (!html.includes('id="results"')) {
  console.error("Couldn't find results table in index.html");
  process.exit(1);
}

console.log("Test passed");
