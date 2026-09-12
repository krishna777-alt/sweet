function HeroSection() {
  return (
    //    <!-- Modern Food Hero Section -->
    <div className="relative min-h-screen w-full bg-zinc-950 text-zinc-100 flex flex-col justify-between overflow-hidden">
      {/* <!-- Ambient Glowing Radial Backgrounds --> */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-amber-400/10 blur-[140px] pointer-events-none" />

      {/* <!-- Navbar --> */}
      {/* <header className="relative z-10 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold font-serif text-amber-400 tracking-wide">
            Sweet.
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-300">
          <a href="#menu" className="hover:text-amber-400 transition-colors">
            Menu
          </a>
          <a href="#about" className="hover:text-amber-400 transition-colors">
            About Us
          </a>
          <a href="#offers" className="hover:text-amber-400 transition-colors">
            Special Offers
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/10"
          >
            Sign Up
          </button>
        </div>
      </header> */}

      {/* <!-- Hero Content Grid --> */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* <!-- Left Column: Copy & Interactive Search --> */}
        <div className="lg:col-span-7 space-y-8">
          {/* <!-- Subtitle Tag --> */}
          <div className="inline-flex items-center space-x-2 rounded-full bg-zinc-900/90 border border-amber-400/30 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Gourmet Delivery Experience
            </span>
          </div>

          {/* <!-- Headline --> */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-serif tracking-tight text-zinc-100 leading-none">
            Crafted Dishes, <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent italic">
              Delivered Fresh.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-light leading-relaxed">
            Experience artisanal meals prepared by top-tier local chefs, served
            directly to your doorstep with speed and elegance.
          </p>

          {/* <!-- Glassmorphic Search / Discovery Console --> */}
          <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-2 sm:p-3 backdrop-blur-md shadow-2xl max-w-2xl">
            <form className="flex flex-col sm:flex-row items-center gap-2">
              {/* <!-- Delivery Address Input --> */}
              <div className="flex-1 flex items-center space-x-3 w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3">
                <svg
                  className="w-5 h-5 text-amber-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Enter your street or location..."
                  className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
                />
              </div>

              {/* <!-- Submit CTA Button --> */}
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-xl bg-amber-400 hover:bg-amber-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all shadow-lg shadow-amber-400/20 active:scale-95"
              >
                Find Food
              </button>
            </form>
          </div>

          {/* <!-- Quick Stats / Highlights --> */}
          <div className="pt-4 flex items-center space-x-8 border-t border-zinc-800/60">
            <div>
              <span className="text-2xl font-bold font-serif text-amber-400">
                30 min
              </span>
              <span className="block text-xs text-zinc-500 uppercase tracking-wider font-mono">
                Avg. Delivery
              </span>
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div>
              <span className="text-2xl font-bold font-serif text-amber-400">
                50+
              </span>
              <span className="block text-xs text-zinc-500 uppercase tracking-wider font-mono">
                Chef Partners
              </span>
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div>
              <span className="text-2xl font-bold font-serif text-amber-400">
                4.9 ★
              </span>
              <span className="block text-xs text-zinc-500 uppercase tracking-wider font-mono">
                User Rating
              </span>
            </div>
          </div>
        </div>

        {/* <!-- Right Column: Visual Showcase Card --> */}
        <div className="lg:col-span-5 relative">
          {/* <!-- Ambient Glow Behind Image Frame --> */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none" />

          <div className="relative rounded-3xl bg-zinc-900/80 border border-zinc-800 p-4 backdrop-blur-md shadow-2xl">
            {/* <!-- Main Food Showcase Banner --> */}
            <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80"
                alt="Signature Dish Showcase"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />

              <span className="absolute top-4 left-4 rounded-full bg-zinc-950/80 border border-amber-400/30 px-3 py-1 text-xs font-semibold text-amber-400 uppercase tracking-widest backdrop-blur-md">
                Trending Now
              </span>
            </div>

            {/* <!-- Floating Info Overlay Card --> */}
            <div className="mt-4 p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-zinc-100 text-base">
                  Gourmet Steak & Herbs
                </h3>
                <p className="text-xs text-zinc-400">
                  Freshly prepared by Chef Marcus
                </p>
              </div>
              <span className="text-xl font-serif font-bold text-amber-400">
                ₹450
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Footer Tag --> */}
      {/* <footer className="relative z-10 py-4 text-center text-xs text-zinc-600 border-t border-zinc-800/40">
        © 2026 Sweet. All rights reserved.
      </footer> */}
    </div>
  );
}

export default HeroSection;
