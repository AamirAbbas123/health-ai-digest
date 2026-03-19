"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { CATEGORIES } from "@/lib/categories";
import CategoryBadge from "@/components/CategoryBadge";
import ContentSlider from "@/components/ContentSlider";
import { useContentLevel } from "@/context/ContentLevelContext";

interface Article {
  id: number;
  title: string;
  category: string;
  fullContent: string;
  mediumSummary: string;
  shortSummary: string;
  imageUrl: string | null;
  sourceUrl: string | null;
  authorName: string | null;
  publishedAt: string;
  isPublished: boolean;
}

function wordCount(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [autoSaveTime, setAutoSaveTime] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const { level } = useContentLevel();

  // Form state
  const [title, setTitle] = useState("");
  const [shortTitle, setShortTitle] = useState("");
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [customCategory, setCustomCategory] = useState("");
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [publishedAt, setPublishedAt] = useState(format(new Date(), "yyyy-MM-dd"));
  const [fullContent, setFullContent] = useState("");
  const [mediumSummary, setMediumSummary] = useState("");
  const [shortSummary, setShortSummary] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  // Check auth on mount
  useEffect(() => {
    fetch("/api/admin/articles")
      .then((r) => {
        if (r.ok) setIsLoggedIn(true);
      })
      .catch(() => {});
  }, []);

  // Auto-save to localStorage
  useEffect(() => {
    if (!isLoggedIn) return;
    const interval = setInterval(() => {
      const draft = { title, shortTitle, category, customCategory, isCustomCategory, subCategory, authorName, sourceUrl, publishedAt, fullContent, mediumSummary, shortSummary };
      localStorage.setItem("admin_draft", JSON.stringify(draft));
      setAutoSaveTime(format(new Date(), "HH:mm"));
    }, 30000);
    return () => clearInterval(interval);
  }, [isLoggedIn, title, shortTitle, category, customCategory, isCustomCategory, subCategory, authorName, sourceUrl, publishedAt, fullContent, mediumSummary, shortSummary]);

  // Restore draft on mount
  useEffect(() => {
    if (!isLoggedIn || editingId) return;
    const saved = localStorage.getItem("admin_draft");
    if (saved) {
      try {
        const draft = JSON.parse(saved);
        if (draft.title) setTitle(draft.title);
        if (draft.shortTitle) setShortTitle(draft.shortTitle);
        if (draft.category) setCategory(draft.category);
        if (draft.customCategory) setCustomCategory(draft.customCategory);
        if (draft.isCustomCategory) setIsCustomCategory(draft.isCustomCategory);
        if (draft.subCategory) setSubCategory(draft.subCategory);
        if (draft.authorName) setAuthorName(draft.authorName);
        if (draft.sourceUrl) setSourceUrl(draft.sourceUrl);
        if (draft.publishedAt) setPublishedAt(draft.publishedAt);
        if (draft.fullContent) setFullContent(draft.fullContent);
        if (draft.mediumSummary) setMediumSummary(draft.mediumSummary);
        if (draft.shortSummary) setShortSummary(draft.shortSummary);
      } catch {}
    }
  }, [isLoggedIn, editingId]);

  const fetchArticles = useCallback(async () => {
    const res = await fetch("/api/admin/articles");
    if (res.ok) {
      setArticles(await res.json());
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) fetchArticles();
  }, [isLoggedIn, fetchArticles]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsLoggedIn(true);
      setPassword("");
    } else {
      setLoginError("Invalid password");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsLoggedIn(false);
  };

  const resetForm = () => {
    setTitle("");
    setShortTitle("");
    setCategory(CATEGORIES[0]);
    setCustomCategory("");
    setIsCustomCategory(false);
    setSubCategory("");
    setAuthorName("");
    setSourceUrl("");
    setPublishedAt(format(new Date(), "yyyy-MM-dd"));
    setFullContent("");
    setMediumSummary("");
    setShortSummary("");
    setImageFile(null);
    setImagePreview(null);
    setEditingId(null);
    localStorage.removeItem("admin_draft");
  };

  const handleSubmit = async (publish: boolean) => {
    if (!title.trim() || !fullContent.trim()) {
      toast.error("Title and Detailed Summary are required");
      return;
    }

    const formData = new FormData();
    formData.set("title", title);
    formData.set("shortTitle", shortTitle);
    formData.set("category", isCustomCategory ? customCategory : category);
    formData.set("subCategory", subCategory);
    formData.set("fullContent", fullContent);
    formData.set("mediumSummary", mediumSummary);
    formData.set("shortSummary", shortSummary);
    formData.set("sourceUrl", sourceUrl);
    formData.set("authorName", authorName);
    formData.set("publishedAt", publishedAt);
    formData.set("isPublished", String(publish));
    if (imageFile) {
      formData.set("image", imageFile);
    }

    try {
      const url = editingId ? `/api/articles/${editingId}` : "/api/articles";
      const method = editingId ? "PUT" : "POST";
      const res = await fetch(url, { method, body: formData });

      if (!res.ok) throw new Error("Failed to save");

      toast.success(editingId ? "Article updated!" : publish ? "Article published!" : "Draft saved!");
      resetForm();
      fetchArticles();
    } catch {
      toast.error("Failed to save article");
    }
  };

  const handleEdit = (article: Article) => {
    setEditingId(article.id);
    setTitle(article.title);
    setShortTitle((article as unknown as { shortTitle?: string }).shortTitle || "");
    const isCat = (CATEGORIES as readonly string[]).includes(article.category);
    if (isCat) {
      setCategory(article.category);
      setIsCustomCategory(false);
    } else {
      setIsCustomCategory(true);
      setCustomCategory(article.category);
    }
    setSubCategory((article as unknown as { subCategory?: string }).subCategory || "");
    setAuthorName(article.authorName || "");
    setSourceUrl(article.sourceUrl || "");
    setPublishedAt(format(new Date(article.publishedAt), "yyyy-MM-dd"));
    setFullContent(article.fullContent);
    setMediumSummary(article.mediumSummary);
    setShortSummary(article.shortSummary);
    setImagePreview(article.imageUrl);
    setImageFile(null);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleTogglePublish = async (article: Article) => {
    const formData = new FormData();
    formData.set("title", article.title);
    formData.set("category", article.category);
    formData.set("fullContent", article.fullContent);
    formData.set("mediumSummary", article.mediumSummary);
    formData.set("shortSummary", article.shortSummary);
    formData.set("sourceUrl", article.sourceUrl || "");
    formData.set("authorName", article.authorName || "");
    formData.set("publishedAt", article.publishedAt);
    formData.set("isPublished", String(!article.isPublished));

    const res = await fetch(`/api/articles/${article.id}`, {
      method: "PUT",
      body: formData,
    });
    if (res.ok) {
      toast.success(article.isPublished ? "Article unpublished" : "Article published");
      fetchArticles();
    }
  };

  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/articles/${id}`, { method: "DELETE" });
    if (res.ok) {
      toast.success("Article deleted");
      fetchArticles();
      setDeleteConfirm(null);
    } else {
      toast.error("Failed to delete");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Login wall
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-gray-950 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-sm border border-gray-200 dark:border-gray-800"
        >
          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Enter the admin password to continue
            </p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-4 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
          {loginError && (
            <p className="text-red-500 text-sm mb-4">{loginError}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  const previewContent =
    level === 1 ? fullContent : level === 2 ? mediumSummary : shortSummary;

  return (
    <div className="min-h-screen bg-surface dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Article Manager
          </h1>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Form Section */}
        <div ref={formRef} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              {editingId ? "Edit Article" : "Add New Article"}
            </h2>
            {autoSaveTime && (
              <span className="text-xs text-gray-400">Draft auto-saved at {autoSaveTime}</span>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="Article title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Short Title <span className="text-xs text-gray-400 font-normal">(2-3 words, shown above title)</span></label>
              <input
                type="text"
                value={shortTitle}
                onChange={(e) => setShortTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="e.g. CKD Detection, MRI Enhancement"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Category</label>
              <select
                value={isCustomCategory ? "Custom..." : category}
                onChange={(e) => {
                  if (e.target.value === "Custom...") {
                    setIsCustomCategory(true);
                  } else {
                    setIsCustomCategory(false);
                    setCategory(e.target.value);
                  }
                }}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
                <option value="Custom...">Custom...</option>
              </select>
              {isCustomCategory && (
                <input
                  type="text"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  className="w-full mt-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                  placeholder="Enter custom category"
                />
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Sub-theme <span className="text-xs text-gray-400 font-normal">(topic within category)</span></label>
              <input
                type="text"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="e.g. Kidney Disease, Fracture Detection, Racial Bias"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Author Name</label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="Author name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Source URL (optional)</label>
              <input
                type="url"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Published Date</label>
              <input
                type="date"
                value={publishedAt}
                onChange={(e) => setPublishedAt(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image</label>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-50 dark:file:bg-primary-900/20 file:text-primary-600 dark:file:text-primary-400 hover:file:bg-primary-100"
              />
              {imagePreview && (
                <div className="mt-2 relative w-32 h-20 rounded overflow-hidden">
                  <Image src={imagePreview} alt="Preview" fill className="object-cover" unoptimized />
                </div>
              )}
            </div>
          </div>

          {/* Three content textareas */}
          <div className="space-y-6 mb-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <label className="block text-sm font-semibold text-blue-700 dark:text-blue-400 mb-1">
                Detailed Summary
              </label>
              <p className="text-xs text-gray-400 mb-2">Recommended: 400-800 words — a comprehensive summary covering key findings and context</p>
              <textarea
                value={fullContent}
                onChange={(e) => setFullContent(e.target.value)}
                rows={12}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-y"
                placeholder="Paste a detailed summary here (key findings, methodology, implications)..."
              />
              <p className="text-xs text-gray-400 mt-1">{wordCount(fullContent)} words</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <label className="block text-sm font-semibold text-yellow-700 dark:text-yellow-400 mb-1">
                Brief Summary
              </label>
              <p className="text-xs text-gray-400 mb-2">Recommended: 100-250 words — a concise overview of the main points</p>
              <textarea
                value={mediumSummary}
                onChange={(e) => setMediumSummary(e.target.value)}
                rows={6}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none resize-y"
                placeholder="Paste a 2-3 paragraph brief summary here..."
              />
              <p className="text-xs text-gray-400 mt-1">{wordCount(mediumSummary)} words</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <label className="block text-sm font-semibold text-green-700 dark:text-green-400 mb-1">
                Quick Read
              </label>
              <p className="text-xs text-gray-400 mb-2">Recommended: 30-60 words — a 1-2 sentence takeaway</p>
              <textarea
                value={shortSummary}
                onChange={(e) => setShortSummary(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none resize-y"
                placeholder="Paste a 1-2 sentence quick read here..."
              />
              <p className="text-xs text-gray-400 mt-1">{wordCount(shortSummary)} words</p>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="mb-6">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="text-sm font-medium text-primary-500 hover:text-primary-600 dark:text-primary-400 mb-3"
            >
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
            {showPreview && (
              <div className="bg-surface dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-4">
                  <ContentSlider />
                </div>
                <div className="max-w-sm mx-auto">
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                    {imagePreview && (
                      <div className="relative aspect-video">
                        <Image src={imagePreview} alt="Preview" fill className="object-cover" unoptimized />
                      </div>
                    )}
                    <div className="p-4">
                      <CategoryBadge category={isCustomCategory ? customCategory : category} />
                      <h3 className="text-lg font-semibold mt-2 text-gray-900 dark:text-white">
                        {title || "Article Title"}
                      </h3>
                      {authorName && (
                        <p className="text-sm text-gray-500 mt-1">By {authorName}</p>
                      )}
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 whitespace-pre-line">
                        {previewContent ? previewContent.slice(0, 200) + "..." : "Content preview..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => handleSubmit(true)}
              className="px-6 py-2.5 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              {editingId ? "Update & Publish" : "Publish"}
            </button>
            <button
              onClick={() => handleSubmit(false)}
              className="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Save as Draft
            </button>
            {editingId && (
              <button
                onClick={resetForm}
                className="px-6 py-2.5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </div>

        {/* Articles Table */}
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              All Articles ({articles.length})
            </h2>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-primary-500 outline-none w-64"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Image</th>
                  <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Title</th>
                  <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Category</th>
                  <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Author</th>
                  <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Date</th>
                  <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Status</th>
                  <th className="text-left py-3 px-2 text-gray-500 dark:text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredArticles.map((article) => (
                  <tr key={article.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-2">
                      <div className="relative w-16 h-10 rounded overflow-hidden bg-gray-100 dark:bg-gray-800">
                        {article.imageUrl ? (
                          <Image src={article.imageUrl} alt="" fill className="object-cover" unoptimized />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No img</div>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-2 font-medium text-gray-900 dark:text-white max-w-xs truncate">
                      {article.title}
                    </td>
                    <td className="py-3 px-2">
                      <CategoryBadge category={article.category} />
                    </td>
                    <td className="py-3 px-2 text-gray-500 dark:text-gray-400">
                      {article.authorName || "-"}
                    </td>
                    <td className="py-3 px-2 text-gray-500 dark:text-gray-400">
                      {format(new Date(article.publishedAt), "MMM d, yyyy")}
                    </td>
                    <td className="py-3 px-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        article.isPublished
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}>
                        {article.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(article)}
                          className="text-blue-500 hover:text-blue-700 text-xs font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleTogglePublish(article)}
                          className="text-primary-500 hover:text-primary-700 text-xs font-medium"
                        >
                          {article.isPublished ? "Unpublish" : "Publish"}
                        </button>
                        {deleteConfirm === article.id ? (
                          <span className="flex gap-1">
                            <button
                              onClick={() => handleDelete(article.id)}
                              className="text-red-600 text-xs font-bold"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="text-gray-400 text-xs"
                            >
                              Cancel
                            </button>
                          </span>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirm(article.id)}
                            className="text-red-500 hover:text-red-700 text-xs font-medium"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredArticles.length === 0 && (
            <p className="text-center py-8 text-gray-400">No articles found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
