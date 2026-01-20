import type { Blog } from "./types"

export async function fetchBlogs(): Promise<Blog[]> {
  const res = await fetch("http://localhost:3001/blogs")

  if (!res.ok) {
    throw new Error("Failed to fetch blogs")
  }

  return res.json()
}
