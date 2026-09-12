import { NavLink } from "react-router-dom";

function Signup() {
  return (
    // <!-- Modern Food App Sign Up Page (Sweet - Midnight Luxury Theme) -->
    <div className="relative min-h-screen w-full bg-zinc-950 text-zinc-100 flex items-center justify-center p-4 overflow-hidden">
      {/* <!-- Background Food Image with Soft Blur & Low Opacity --> */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 blur-sm scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      {/* <!-- Dark Gradient Overlay for Contrast --> */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950/90 pointer-events-none" />

      {/* <!-- Ambient Glowing Radial Highlights --> */}
      <div className="absolute top-1/4 right-1/3 h-80 w-80 rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-amber-400/10 blur-[120px] pointer-events-none" />

      {/* <!-- Main Sign Up Glass Card Box --> */}
      <div className="relative z-10 w-full max-w-md rounded-3xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-black/80 space-y-6">
        {/* <!-- Header Logo & Subtitle --> */}
        <div className="text-center space-y-2">
          <span className="text-3xl font-extrabold font-serif text-amber-400 tracking-wide inline-block">
            Sweet.
          </span>
          <h1 className="text-2xl font-bold font-serif text-zinc-100">
            Create Account
          </h1>
          <p className="text-xs text-zinc-400 font-light">
            Join Sweet to order gourmet meals, track deliveries, and earn
            exclusive rewards.
          </p>
        </div>

        {/* <!-- Sign Up Form Controls --> */}
        <form className="space-y-4">
          {/* <!-- Full Name Input Field --> */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-xl bg-zinc-950/90 border border-zinc-800/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
            />
          </div>

          {/* <!-- Email Input Field --> */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl bg-zinc-950/90 border border-zinc-800/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
            />
          </div>

          {/* <!-- Phone Number Input Field --> */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-1234"
              className="w-full rounded-xl bg-zinc-950/90 border border-zinc-800/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
            />
          </div>

          {/* <!-- Password Input Field --> */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl bg-zinc-950/90 border border-zinc-800/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-amber-400 focus:outline-none transition-colors"
            />
          </div>

          {/* <!-- Submit CTA Button --> */}
          <button
            type="submit"
            className="w-full rounded-xl bg-amber-400 hover:bg-amber-300 py-3 text-sm font-semibold text-zinc-950 transition-all duration-200 shadow-lg shadow-amber-400/20 active:scale-95 mt-2"
          >
            Create Account
          </button>
        </form>

        {/* <!-- Terms & Sign-In Redirect Link --> */}
        <div className="space-y-3 text-center">
          <p className="text-[11px] text-zinc-500 font-light leading-relaxed">
            By signing up, you agree to Sweet's{" "}
            <a href="#terms" className="text-zinc-400 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#privacy" className="text-zinc-400 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <p className="text-xs text-zinc-500 font-light pt-1">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-amber-400 font-medium hover:underline"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
