import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

// We'll parse the xlsx using a simple approach via python-generated JSON
const prisma = new PrismaClient();

interface ArticleRow {
  category: string;
  subCategory: string;
  shortTitle: string;
  title: string;
  authorName: string;
  sourceUrl: string;
  publishedAt: string;
  fullContent: string;
  mediumSummary: string;
  shortSummary: string;
  imageUrl: string;
  isPublished: string;
}

async function main() {
  const jsonPath = path.join(__dirname, "excel-data.json");

  if (!fs.existsSync(jsonPath)) {
    console.error("excel-data.json not found. Run the Python extraction first.");
    process.exit(1);
  }

  const articles: ArticleRow[] = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

  console.log(`Found ${articles.length} articles to upload.\n`);

  let inserted = 0;
  for (const art of articles) {
    await prisma.article.create({
      data: {
        category: art.category,
        subCategory: art.subCategory || null,
        shortTitle: art.shortTitle || null,
        title: art.title,
        authorName: art.authorName || null,
        sourceUrl: art.sourceUrl || null,
        publishedAt: art.publishedAt ? new Date(art.publishedAt) : new Date(),
        fullContent: art.fullContent,
        mediumSummary: art.mediumSummary,
        shortSummary: art.shortSummary,
        imageUrl: art.imageUrl || null,
        isPublished: art.isPublished !== "FALSE",
      },
    });
    inserted++;
    if (inserted % 5 === 0) console.log(`  Inserted ${inserted}/${articles.length}...`);
  }

  console.log(`\nDone. Inserted ${inserted} articles.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
