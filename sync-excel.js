/**
 * One-click Excel → Database sync
 *
 * Usage: npm run sync
 *
 * Reads article-upload-template.xlsx, clears the database,
 * and uploads all articles from the Excel sheet.
 * Automatically loads DATABASE_URL from .env.local
 */

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// Auto-load DATABASE_URL from .env.local
const envFile = path.join(__dirname, ".env.local");
if (fs.existsSync(envFile)) {
  const lines = fs.readFileSync(envFile, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("#")) {
      const eqIndex = trimmed.indexOf("=");
      if (eqIndex > 0) {
        const key = trimmed.slice(0, eqIndex);
        const val = trimmed.slice(eqIndex + 1);
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL not found. Make sure .env.local exists with your database connection string.");
  process.exit(1);
}

const EXCEL_FILE = path.join(__dirname, "article-upload-template.xlsx");
const JSON_FILE = path.join(__dirname, "prisma", "excel-data.json");

console.log("\n  Health AI Digest — Excel to Database Sync\n");
console.log("─".repeat(45));

// Step 1: Extract Excel to JSON using Python
console.log("\n  Step 1: Reading Excel file...");
try {
  execSync("python extract-excel.py", { stdio: "inherit", cwd: __dirname });
} catch (e) {
  console.error("❌ Failed to read Excel. Is openpyxl installed? Run: pip install openpyxl");
  process.exit(1);
}

// Step 2: Clear database
console.log("\n  Step 2: Clearing existing articles...");
try {
  execSync("npx tsx prisma/clear.ts", { stdio: "inherit", cwd: __dirname, env: process.env });
} catch (e) {
  console.error("❌ Failed to clear database");
  process.exit(1);
}

// Step 3: Upload new data
console.log("\n  Step 3: Uploading articles to database...");
try {
  execSync("npx tsx prisma/upload-excel.ts", { stdio: "inherit", cwd: __dirname, env: process.env });
} catch (e) {
  console.error("❌ Failed to upload articles");
  process.exit(1);
}

console.log("\n" + "─".repeat(45));
console.log("  Done! Your site is now up to date.\n");
