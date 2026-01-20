import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import type { Blog } from "./types"

export default function CreateBlogForm() {
  const queryClient = useQueryClient()

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    coverImage: "",
    content: "",
  })

  const mutation = useMutation({
    mutationFn: async (blog: Blog) => {
      const res = await fetch("http://localhost:3001/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      })
      if (!res.ok) throw new Error("Failed to create blog")
      return res.json()
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })
      setForm({
        title: "",
        category: "",
        description: "",
        coverImage: "",
        content: "",
      })
    },
  })

  const handleSubmit = () => {
    mutation.mutate({
      id: Date.now(),
      title: form.title,
      category: form.category.split(",").map((c) => c.trim()),
      description: form.description,
      coverImage: form.coverImage,
      content: form.content,
      date: new Date().toISOString(),
    })
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm p-6 mt-8">
      <h2 className="text-lg font-semibold mb-1">Create Blog</h2>
      <p className="text-sm text-gray-500 mb-4">
        Create and publish a new article
      </p>

      <div className="space-y-4">
        <input
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Blog title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Categories (comma separated)"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Cover image URL"
          value={form.coverImage}
          onChange={(e) =>
            setForm({ ...form, coverImage: e.target.value })
          }
        />

        <textarea
          className="w-full border rounded-lg px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Short description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <textarea
          className="w-full border rounded-lg px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Full blog content"
          value={form.content}
          onChange={(e) =>
            setForm({ ...form, content: e.target.value })
          }
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition"
        >
          {mutation.isPending ? "Publishing..." : "Publish Article"}
        </button>
      </div>
    </div>
  )
}
