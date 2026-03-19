/**
 * One-click Excel → Database sync
 *
 * Usage: npm run sync
 *
 * Reads article-upload-template.xlsx, clears the database,
 * and uploads all articles from the Excel sheet.
 */

const { execSync } = require("child_process");
const path = require("path");

const EXCEL_FILE = path.join(__dirname, "article-upload-template.xlsx");
const JSON_FILE = path.join(__dirname, "prisma", "excel-data.json");

console.log("\n📊 Health AI Digest — Excel → Database Sync\n");
console.log("─".repeat(45));

// Step 1: Extract Excel to JSON using Python
console.log("\n1️⃣  Reading Excel file...");
try {
  execSync(`python -c "
import openpyxl, json, sys

wb = openpyxl.load_workbook('${EXCEL_FILE.replace(/\\/g, "\\\\")}')
ws = wb['Articles']
headers = [cell.value for cell in ws[1]]
articles = []
for row in ws.iter_rows(min_row=2, values_only=True):
    if not row[0]:
        continue
    art = {}
    for i, h in enumerate(headers):
        val = row[i] if i < len(row) else None
        art[h] = str(val) if val else ''
    articles.append(art)

with open('${JSON_FILE.replace(/\\/g, "\\\\")}', 'w') as f:
    json.dump(articles, f, indent=2)
print(f'   Found {len(articles)} articles')
"`, { stdio: "inherit" });
} catch (e) {
  console.error("❌ Failed to read Excel. Is openpyxl installed? Run: pip install openpyxl");
  process.exit(1);
}

// Step 2: Clear database
console.log("\n2️⃣  Clearing existing articles...");
try {
  execSync("npx tsx prisma/clear.ts", { stdio: "inherit", cwd: __dirname });
} catch (e) {
  console.error("❌ Failed to clear database");
  process.exit(1);
}

// Step 3: Upload new data
console.log("\n3️⃣  Uploading articles to database...");
try {
  execSync("npx tsx prisma/upload-excel.ts", { stdio: "inherit", cwd: __dirname });
} catch (e) {
  console.error("❌ Failed to upload articles");
  process.exit(1);
}

console.log("\n─".repeat(45));
console.log("✅ Sync complete! Your site is now up to date.\n");
