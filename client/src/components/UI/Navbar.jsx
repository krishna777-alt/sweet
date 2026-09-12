import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  // const foodItemCount = cart?.length || 0;
  const foodItemsCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flexshrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 font-serif font-bold text-xl shadow-md shadow-amber-400/20 group-hover:scale-105 transition-transform duration-300">
                S
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-amber-400 transition-colors">
                sweet
              </span>
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className="relative text-sm font-semibold text-amber-400 py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-amber-400 after:rounded-full"
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className="text-sm font-medium text-zinc-300 hover:text-amber-300 transition-colors duration-300 py-1"
            >
              Menu
            </NavLink>
            <NavLink
              to="/order"
              className="text-sm font-medium text-zinc-300 hover:text-amber-300 transition-colors duration-300 py-1"
            >
              Order
            </NavLink>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <NavLink
              to="/cart"
              aria-label="View Cart"
              className="relative p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-400/40 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-amber-400 text-zinc-950 text-[11px] font-bold flex items-center justify-center border-2 border-zinc-950">
                {foodItemsCount}
              </span>
            </NavLink>

            <div className="h-5 w-px bg-zinc-800"></div>

            {/* <!-- Sign In --> */}
            <NavLink
              to="/signup"
              className="flex items-center space-x-1.5 text-xs font-medium text-zinc-400 hover:text-amber-400 transition-colors px-2 py-1.5"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span>Sign In</span>
            </NavLink>

            {/* <!-- Login --> */}
            <NavLink
              to="/login"
              className="flex items-center space-x-1.5 text-xs font-medium text-zinc-300 hover:text-amber-400 transition-colors px-2 py-1.5"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Login</span>
            </NavLink>

            {/* <!-- Account --> */}
            <NavLink
              to="/account"
              className="flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs px-4 py-2 rounded-xl shadow-md shadow-amber-400/20 transition-all duration-300 active:scale-95"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" y1="8" x2="19" y2="14"></line>
                <line x1="22" y1="11" x2="16" y2="11"></line>
              </svg>
              <span>Account</span>
            </NavLink>
          </div>

          {/* <!-- MOBILE MENU BUTTON --> */}
          <div className="md:hidden flex items-center space-x-3">
            <NavLink
              href="/cart"
              className="relative p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              <svg
                className="w-5 h-5 fill-none stroke-current"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-400 text-zinc-950 text-[10px] font-bold flex items-center justify-center">
                2
              </span>
            </NavLink>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-none stroke-current"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
