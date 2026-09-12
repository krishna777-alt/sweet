function Footer() {
  return (
    // <!-- Modern Luxury Footer (Sweet Food App - Midnight Theme) -->
    <footer className="relative bg-zinc-950 text-zinc-100 border-t border-zinc-800/80 overflow-hidden">
      {/* <!-- Ambient Light Glow Accents --> */}
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-amber-400/5 blur-[120px] pointer-events-none" />

      {/* <!-- Top Newsletter Section --> */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-12 border-b border-zinc-800/60">
        <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800/80 p-8 md:p-12 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* <!-- Newsletter Text --> */}
          <div className="space-y-2 text-center lg:text-left max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-mono">
              Join the Sweet Club
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-zinc-100">
              Get Secret Offers & Chef Specials
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              Subscribe to receive weekly gourmet discounts, new menu updates,
              and free delivery perks directly in your inbox.
            </p>
          </div>

          {/* <!-- Input Form --> */}
          <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-3 min-w-[320px] sm:min-w-[420px]">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full rounded-xl bg-zinc-950/80 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-amber-400 hover:bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all shadow-lg shadow-amber-400/20 active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* <!-- Main Footer Links Grid --> */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-sm">
        {/* <!-- Brand Info Column --> */}
        <div className="lg:col-span-2 space-y-4">
          <span className="text-3xl font-bold font-serif text-amber-400 tracking-wide block">
            Sweet.
          </span>
          <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
            Crafting artisanal culinary experiences delivered right to your
            sanctuary. Fresh, sustainable ingredients prepared by top-tier local
            master chefs.
          </p>

          {/* <!-- Social Icons --> */}
          <div className="pt-2 flex items-center space-x-3">
            <a
              href="#twitter"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-amber-400/50 hover:text-amber-400 transition-all"
            >
              <span className="text-xs font-bold font-mono">X</span>
            </a>
            <a
              href="#instagram"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-amber-400/50 hover:text-amber-400 transition-all"
            >
              <span className="text-xs font-bold font-mono">IG</span>
            </a>
            <a
              href="#facebook"
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-amber-400/50 hover:text-amber-400 transition-all"
            >
              <span className="text-xs font-bold font-mono">FB</span>
            </a>
          </div>
        </div>

        {/* <!-- Column 1: Quick Links --> */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100 font-mono">
            Quick Navigation
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
            <li>
              <a
                href="#menu"
                className="hover:text-amber-400 transition-colors"
              >
                Our Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-amber-400 transition-colors"
              >
                About Story
              </a>
            </li>
            <li>
              <a
                href="#chefs"
                className="hover:text-amber-400 transition-colors"
              >
                Master Chefs
              </a>
            </li>
            <li>
              <a
                href="#offers"
                className="hover:text-amber-400 transition-colors"
              >
                Special Offers
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Column 2: Legal & Support --> */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100 font-mono">
            Help & Legal
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-400 font-light">
            <li>
              <a href="#faq" className="hover:text-amber-400 transition-colors">
                Customer FAQs
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-amber-400 transition-colors"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#privacy"
                className="hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-amber-400 transition-colors"
              >
                Support Center
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Column 3: Contact Details --> */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-100 font-mono">
            Get in Touch
          </h4>
          <div className="space-y-2.5 text-xs text-zinc-400 font-light leading-relaxed">
            <p className="flex items-start space-x-2">
              <span className="text-amber-400">📍</span>
              <span>1247 Kukatpally Phase 15, Hyderabad, India</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-amber-400">📞</span>
              <span>+91 887-654-3210</span>
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-amber-400">✉️</span>
              <span>concierge@sweetfoodapp.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Bottom Copyright & Credit Bar --> */}
      <div className="relative z-10 border-t border-zinc-800/60 bg-zinc-950/90 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-light">
          {/* <p>© 2026 Sweet Inc. All rights reserved.</p> */}
          <div className="flex items-center space-x-6">
            <a
              href="#privacy"
              className="hover:text-zinc-300 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-zinc-300 transition-colors">
              Terms
            </a>
            <a
              href="#cookies"
              className="hover:text-zinc-300 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
