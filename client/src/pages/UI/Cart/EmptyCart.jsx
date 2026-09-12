import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    //    <!-- Modern Empty Cart Page (Sweet Food App) -->
    <div className="bg-zinc-950 min-h-lh w-full flex items-center justify-center p-6 text-zinc-100 relative overflow-hidden">
      {/* <!-- Ambient Background Glows --> */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-amber-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-amber-400/5 blur-[100px] pointer-events-none" />

      {/* <!-- Main Card Glass Container --> */}
      <div className="relative z-10 w-full max-w-lg rounded-3xl bg-zinc-900/80 border border-zinc-800/80 p-8 sm:p-12 text-center backdrop-blur-md shadow-2xl shadow-black/80 space-y-8">
        {/* <!-- Empty Cart Icon Art --> */}
        <div className="relative mx-auto h-28 w-28 flex items-center justify-center">
          {/* Outer Pulse Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-amber-400/10 animate-ping opacity-25" />

          {/* <!-- Center Glass Circle --> */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-zinc-950/80 border border-amber-400/30 shadow-inner">
            <svg
              className="h-10 w-10 text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.25 10.5a.75.75 0 100-1.5.75.75 0 000 1.5zm7.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
              />
            </svg>
          </div>
        </div>

        {/* <!-- Empty State Content --> */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 rounded-full bg-amber-400/10 border border-amber-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
            Your Plate is Empty
          </div>
          <h1 className="text-3xl font-bold font-serif tracking-tight text-zinc-100">
            No Cravings in Sight
          </h1>
          <p className="text-sm text-zinc-400 font-light max-w-sm mx-auto leading-relaxed">
            Your cart is currently empty. Explore our curated menu of gourmet
            dishes and satisfy your hunger.
          </p>
        </div>

        {/* <!-- Quick Suggestions / Feature Highlights --> */}
        <div className="grid grid-cols-2 gap-3 pt-2 text-left">
          <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
              Fast Delivery
            </span>
            <span className="text-xs font-medium text-zinc-300">
              Under 30 mins
            </span>
          </div>
          <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
            <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
              Chef Special
            </span>
            <span className="text-xs font-medium text-amber-400">
              Freshly Made
            </span>
          </div>
        </div>

        {/* <!-- Primary Call to Action Button --> */}
        <div className="pt-2">
          <Link
            to="/menu"
            className="w-full inline-flex items-center justify-center space-x-2 rounded-xl bg-amber-400 hover:bg-amber-300 px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-300 shadow-lg shadow-amber-400/20 active:scale-95"
          >
            <span>Explore Menu</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
