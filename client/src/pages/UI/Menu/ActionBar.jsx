function ActionBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 p-4 backdrop-blur-md shadow-xl">
      {/* <!-- Left: Small Search Section --> */}
      <div className="w-full md:w-80 relative flex items-center">
        <svg
          className="absolute left-3.5 h-4 w-4 text-amber-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search menu..."
          className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800/80 pl-10 pr-4 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
        />
      </div>

      {/* <!-- Right: Dual Sorting Feature (Price & Categories) --> */}
      <div className="w-full md:w-auto flex items-center justify-end gap-3">
        {/* <!-- Category Filter Dropdown --> */}
        <div className="relative">
          <select className="appearance-none rounded-xl bg-zinc-950/80 border border-zinc-800/80 pl-3.5 pr-8 py-2 text-xs font-medium text-zinc-300 focus:border-amber-400 focus:outline-none transition-colors cursor-pointer">
            <option value="all">Category: All</option>
            <option value="drinks">Drinks</option>
            <option value="pizza">Pizza</option>
            <option value="burgers">Burgers</option>
            <option value="salad">Salad</option>
            <option value="sweets">Sweets</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-[10px] pointer-events-none">
            ▼
          </span>
        </div>

        {/* <!-- Price Sorting Dropdown --> */}
        <div className="relative">
          <select className="appearance-none rounded-xl bg-zinc-950/80 border border-zinc-800/80 pl-3.5 pr-8 py-2 text-xs font-medium text-zinc-300 focus:border-amber-400 focus:outline-none transition-colors cursor-pointer">
            <option value="featured">Sort by: Featured</option>
            <option value="low-to-high">Price: Low to High</option>
            <option value="high-to-low">Price: High to Low</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 text-[10px] pointer-events-none">
            ▼
          </span>
        </div>
      </div>
    </div>
  );
}

export default ActionBar;
