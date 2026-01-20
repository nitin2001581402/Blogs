import { useState } from "react"
import BlogSidebar from "./BlogSidebar"
import BlogArticle from "./BlogArticle"
import CreateBlogForm from "./CreateBlogForm"
import type { Blog } from "./types"

export default function BlogLayout() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <div className="font-bold text-lg">FinEdge</div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-indigo-600">Tools</span>
            <span className="cursor-pointer hover:text-indigo-600">Practice</span>
            <span className="cursor-pointer hover:text-indigo-600">Events</span>
            <span className="cursor-pointer hover:text-indigo-600">Job Board</span>
            <span className="cursor-pointer hover:text-indigo-600">Points</span>
          </nav>

          {/* Profile */}
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
            Profile
          </button>
        </div>
      </header>

      {/* PAGE TITLE */}
      <div className="text-center py-10 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold">FinEdge Journal</h1>
        <p className="text-gray-600 mt-3">
          Latest insights and trends in finance, accounting, and professional careers.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 pb-16">
        <aside className="md:col-span-1">
          <BlogSidebar onSelect={setSelectedBlog} />
          <CreateBlogForm />
        </aside>

        <section className="md:col-span-3">
          <BlogArticle blog={selectedBlog} />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-2">FinEdge</h3>
            <p className="text-sm text-gray-400">
              Practical insights and knowledge for modern finance professionals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">Resources</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Webinars</a></li>
              <li><a href="#" className="hover:underline">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">Platform</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Job Board</a></li>
              <li><a href="#" className="hover:underline">Practice Tests</a></li>
              <li><a href="#" className="hover:underline">Mentorship</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-2">Connect</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 text-center text-sm py-4 text-gray-500">
          © 2024 FinEdge Journal. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
