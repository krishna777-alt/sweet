function CheckOut() {
  return (
    <div className="lg:col-span-4 sticky top-24">
      <div className="rounded-2xl bg-zinc-900/80 p-6 backdrop-blur-md border border-zinc-800/80 shadow-2xl space-y-6">
        <h2 className="font-serif text-xl font-semibold text-zinc-100 border-b border-zinc-800 pb-4">
          Order Summary
        </h2>

        {/* Pricing Breakdown */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-zinc-400">
            <span>Items Total (3)</span>
            <span className="font-mono text-zinc-200">₹600.00</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Delivery Fee</span>
            <span className="font-mono text-amber-400">₹40.00</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Taxes & Service</span>
            <span className="font-mono text-zinc-200">₹30.00</span>
          </div>

          <div className="pt-3 border-t border-zinc-800 flex justify-between items-baseline">
            <span className="font-semibold text-zinc-100">Total Amount</span>
            <span className="text-2xl font-bold font-mono text-amber-400">
              ₹670.00
            </span>
          </div>
        </div>

        {/* Promo Code Input */}
        <div className="pt-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="PROMO CODE"
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs font-mono text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-400/50"
            />
            <button
              type="button"
              className="bg-zinc-950 border border-zinc-800 hover:border-amber-400/40 text-amber-400 text-xs px-4 py-2 rounded-xl font-medium transition-colors"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Checkout CTA */}
        <button
          type="button"
          className="w-full flex items-center justify-center space-x-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold py-3.5 text-sm transition-all duration-300 shadow-lg shadow-amber-400/20 active:scale-95"
        >
          <span>Proceed to Checkout</span>
          <svg
            className="w-4 h-4 fill-none stroke-current"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        {/* Guarantee Note */}
        <p className="text-[11px] text-center text-zinc-500 font-mono">
          Safe & Secure Checkout • Fast Delivery
        </p>
      </div>
    </div>
  );
}

export default CheckOut;
