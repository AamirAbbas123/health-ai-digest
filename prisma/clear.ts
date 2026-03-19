import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.article.deleteMany();
  console.log(`Deleted ${result.count} articles.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
