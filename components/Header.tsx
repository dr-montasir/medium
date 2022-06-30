import Link from "next/link"

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img className="w-44 object-contain cursor-pointer" src="/img/logo.png" alt="medium" />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h1>About</h1>
          <h1>Contact</h1>
          <h1 className="bg-green-600 text-white px-4 py-1 rounded-full">Follow</h1>
        </div>
      </div>
      <div></div>
    </header>
  )
}

export default Header
