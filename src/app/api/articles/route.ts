import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import { uploadImage } from "@/lib/upload";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");

  const articles = await prisma.article.findMany({
    where: {
      isPublished: true,
      ...(category ? { category } : {}),
    },
    orderBy: { publishedAt: "desc" },
    ...(limit ? { take: parseInt(limit) } : {}),
    ...(offset ? { skip: parseInt(offset) } : {}),
  });

  return NextResponse.json(articles);
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();

    let imageUrl: string | null = null;
    const imageFile = formData.get("image") as File | null;

    if (imageFile && imageFile.size > 0) {
      imageUrl = await uploadImage(imageFile, formData.get("title") as string);
    }

    const article = await prisma.article.create({
      data: {
        title: formData.get("title") as string,
        category: formData.get("category") as string,
        fullContent: formData.get("fullContent") as string,
        mediumSummary: formData.get("mediumSummary") as string,
        shortSummary: formData.get("shortSummary") as string,
        imageUrl,
        sourceUrl: (formData.get("sourceUrl") as string) || null,
        authorName: (formData.get("authorName") as string) || null,
        publishedAt: formData.get("publishedAt")
          ? new Date(formData.get("publishedAt") as string)
          : new Date(),
        isPublished: formData.get("isPublished") === "true",
      },
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error("Error creating article:", error);
    return NextResponse.json({ error: "Failed to create article" }, { status: 500 });
  }
}
