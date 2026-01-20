import { useQuery } from "@tanstack/react-query"
import type { Blog } from "./types"


const fetchBlogs = async (): Promise<Blog[]> => {
  const res = await fetch("http://localhost:3001/blogs")
  if (!res.ok) throw new Error("Error fetching blogs")
  return res.json()
}

export default function BlogSidebar({
  onSelect,
}: {
  onSelect: (blog: Blog) => void
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  })

  if (isLoading) return <p className="text-sm">Loading...</p>
  if (error) return <p className="text-sm text-red-500">Error loading blogs</p>

  return (
    <div>
      <h2 className="font-semibold text-lg mb-4">Latest Articles</h2>

      <div className="space-y-4">
        {data?.map((blog) => (
          <div
            key={blog.id}
            onClick={() => onSelect(blog)}
            className="bg-white p-4 rounded-lg border cursor-pointer hover:shadow-md"
          >
            <div className="flex gap-2 mb-2">
              {blog.category.map((c) => (
                <span
                  key={c}
                  className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded"
                >
                  {c}
                </span>
              ))}
            </div>

            <h3 className="font-semibold text-sm">{blog.title}</h3>
            <p className="text-xs text-gray-500">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
