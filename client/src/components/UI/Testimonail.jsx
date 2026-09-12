function Testimonail() {
  return (
    //    <!-- Midnight Luxury Testimonial Card (Pure HTML + Tailwind CSS) -->
    <div className="bg-zinc-900 min-h-lh flex items-center justify-center p-6 text-zinc-100">
      {/* <!-- Glassmorphic Card Container --> */}
      <div className="group relative w-full max-w-md rounded-2xl bg-zinc-900/80 p-6 sm:p-8 backdrop-blur-md border border-zinc-800/80 shadow-2xl transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1">
        {/* <!-- Top Row: Quote Icon & Star Rating --> */}
        <div className="flex items-center justify-between mb-6">
          {/* <!-- Decorative Amber Quote Mark --> */}
          <span className="font-serif text-4xl font-bold text-amber-400/80 leading-none select-none">
            “
          </span>

          {/* <!-- 5-Star Rating --> */}
          <div className="flex items-center space-x-1 text-amber-400">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
        </div>

        {/* <!-- Testimonial Quote Text --> */}
        <p className="text-zinc-300 text-sm sm:text-base font-light leading-relaxed italic mb-6">
          "The authentic flavors of the dum biryani were absolute perfection!
          Delivery arrived hot within 20 minutes. This is hands down our
          favorite dining experience."
        </p>

        {/* <!-- Author Bio & Avatar --> */}
        <div className="flex items-center space-x-4 pt-4 border-t border-zinc-800/80">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-400/40 bg-zinc-950 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="Sophia Reynolds"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h4 className="font-serif font-bold text-sm text-zinc-100 group-hover:text-amber-400 transition-colors">
              Sophia Reynolds
            </h4>
            <p className="text-xs text-zinc-400 font-light">
              Verified Food Critic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonail;
