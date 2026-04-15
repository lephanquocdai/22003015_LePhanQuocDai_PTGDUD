function Header({ onLoginClick, isLoggedIn = false, searchValue = '' }) {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center gap-4 px-6">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-pink-600 text-white">
            <span className="text-xs">★</span>
          </div>
          <span className="text-[34px] font-semibold leading-none text-pink-600">Chefify</span>
        </div>

        <div className="hidden max-w-xs flex-1 lg:block">
          <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5">
            <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-zinc-400" fill="none">
              <path
                d="M13.5 13.5L18 18M15.5 9.25a6.25 6.25 0 11-12.5 0 6.25 6.25 0 0112.5 0z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="What would you like to cook?"
              defaultValue={searchValue}
              className="w-full bg-transparent text-xs text-zinc-700 placeholder:text-zinc-400 focus:outline-none"
            />
          </div>
        </div>

        <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-600 md:flex">
          <a href="/" className="hover:text-zinc-900">
            What to cook
          </a>
          <a href="/" className="hover:text-zinc-900">
            Recipes
          </a>
          <a href="/" className="hover:text-zinc-900">
            Ingredients
          </a>
          <a href="/" className="hover:text-zinc-900">
            Occasions
          </a>
          <a href="/" className="hover:text-zinc-900">
            About Us
          </a>
        </nav>

        {isLoggedIn ? (
          <div className="ml-auto flex items-center gap-3">
            <button className="rounded-lg bg-pink-50 px-3 py-2 text-xs font-semibold text-pink-600">
              Your Recipe Box
            </button>
            <div className="h-9 w-9 overflow-hidden rounded-full border border-zinc-200 bg-amber-100">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="User avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={onLoginClick}
              className="rounded-full px-3 py-2 text-sm font-semibold text-pink-600 hover:bg-pink-50"
            >
              Login
            </button>
            <button className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-500">
              Subscribe
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
