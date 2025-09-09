export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // markdown
  author: string;
  date: string; // ISO
  category: "Physics" | "Chemistry" | "Mathematics" | "Biology" | "Technology";
  tags: string[];
  heroImage: string;
  trendingScore: number; // 0–100
};

export type Category = "Physics" | "Chemistry" | "Mathematics" | "Biology" | "Technology";