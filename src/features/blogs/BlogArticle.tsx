import type { Blog } from "./types"

export default function BlogArticle({ blog }: { blog: Blog | null }) {
  if (!blog) {
    return (
      <div className="bg-white rounded-xl border p-10 text-center text-gray-500">
        <h2 className="text-xl font-semibold mb-2">
          Select an article to read
        </h2>
        <p className="text-sm">
          Choose a blog from the left panel to view full content here.
        </p>
      </div>
    )
  }

  return (
    <article className="bg-white rounded-xl shadow p-6">
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-lg mb-6"
      />

      <div className="text-sm text-gray-500 mb-2">
        {blog.category.join(" • ")} •{" "}
        {new Date(blog.date).toDateString()}
      </div>

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>
    </article>
  )
}
