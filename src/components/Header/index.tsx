export default function Header() {
  return (
    <header className="flex items-end justify-center w-full h-24 bg-gray-100">
      {/* works, blog and contact */}
      <a
        href="#works"
        className="px-4 py-2 mx-2 text-lg font-bold text-gray-800 rounded hover:bg-gray-200"
      >
        Works
      </a>
      <a
        href="#blog"
        className="px-4 py-2 mx-2 text-lg font-bold text-gray-800 rounded hover:bg-gray-200"
      >
        Blog
      </a>
      <a
        href="#contact"
        className="px-4 py-2 mx-2 text-lg font-bold text-gray-800 rounded hover:bg-gray-200"
      >
        Contact
      </a>
    </header>
  )
}
