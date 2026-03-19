import { writeFile, unlink, mkdir } from "fs/promises";
import path from "path";

const isVercel = !!process.env.VERCEL;

export async function uploadImage(file: File, title: string): Promise<string> {
  const ext = file.name.split(".").pop() || "jpg";
  const slug = (title || "article")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .slice(0, 50);
  const filename = `${Date.now()}-${slug}.${ext}`;

  if (isVercel) {
    // Use Vercel Blob if token is available
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const { put } = await import("@vercel/blob");
      const blob = await put(`uploads/${filename}`, file, { access: "public" });
      return blob.url;
    }
    // Fallback: store as base64 data URL (for small images) or skip
    // For production without blob, just return a placeholder
    return `https://placehold.co/800x450?text=${encodeURIComponent(title || "Article")}`;
  } else {
    const uploadsDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadsDir, { recursive: true });
    const filepath = path.join(uploadsDir, filename);
    const buffer = Buffer.from(await file.arrayBuffer());
    await writeFile(filepath, buffer);
    return `/uploads/${filename}`;
  }
}

export async function deleteImage(imageUrl: string): Promise<void> {
  if (!imageUrl) return;

  try {
    if (imageUrl.startsWith("http") && process.env.BLOB_READ_WRITE_TOKEN) {
      const { del } = await import("@vercel/blob");
      await del(imageUrl);
    } else if (imageUrl.startsWith("/uploads/")) {
      const filepath = path.join(process.cwd(), "public", imageUrl);
      await unlink(filepath);
    }
  } catch {
    // Ignore deletion errors
  }
}
