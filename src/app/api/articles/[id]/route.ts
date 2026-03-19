import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAuthenticated } from "@/lib/auth";
import { uploadImage, deleteImage } from "@/lib/upload";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const article = await prisma.article.findUnique({
      where: { id: parseInt(id) },
    });

    if (!article) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const formData = await request.formData();
    const existing = await prisma.article.findUnique({
      where: { id: parseInt(id) },
    });

    if (!existing) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    let imageUrl = existing.imageUrl;
    const imageFile = formData.get("image") as File | null;

    if (imageFile && imageFile.size > 0) {
      await deleteImage(existing.imageUrl || "");
      imageUrl = await uploadImage(imageFile, formData.get("title") as string);
    }

    const article = await prisma.article.update({
      where: { id: parseInt(id) },
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
          : undefined,
        isPublished: formData.get("isPublished") === "true",
      },
    });

    return NextResponse.json(article);
  } catch (error) {
    console.error("Error updating article:", error);
    return NextResponse.json({ error: "Failed to update article" }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const article = await prisma.article.findUnique({
      where: { id: parseInt(id) },
    });

    if (!article) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    await deleteImage(article.imageUrl || "");

    await prisma.article.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting article:", error);
    return NextResponse.json({ error: "Failed to delete article" }, { status: 500 });
  }
}
