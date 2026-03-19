import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import { uploadImage } from "@/lib/upload";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const subCategory = searchParams.get("subCategory");
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    const groupBy = searchParams.get("groupBy");

    // Return distinct sub-categories for a given category
    if (groupBy === "subCategory" && category) {
      const articles = await prisma.article.findMany({
        where: { isPublished: true, category },
        select: { subCategory: true },
        distinct: ["subCategory"],
        orderBy: { subCategory: "asc" },
      });
      const subCategories = articles
        .map((a) => a.subCategory)
        .filter((s): s is string => !!s);
      return NextResponse.json(subCategories);
    }

    // Return article counts per category
    if (groupBy === "category") {
      const counts = await prisma.article.groupBy({
        by: ["category"],
        where: { isPublished: true },
        _count: { id: true },
      });
      return NextResponse.json(counts);
    }

    const articles = await prisma.article.findMany({
      where: {
        isPublished: true,
        ...(category ? { category } : {}),
        ...(subCategory ? { subCategory } : {}),
      },
      orderBy: { publishedAt: "desc" },
      ...(limit ? { take: parseInt(limit) } : {}),
      ...(offset ? { skip: parseInt(offset) } : {}),
    });

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
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
        shortTitle: (formData.get("shortTitle") as string) || null,
        category: formData.get("category") as string,
        subCategory: (formData.get("subCategory") as string) || null,
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
