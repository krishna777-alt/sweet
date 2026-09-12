import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  minusQuantity,
  removeFromCart,
} from "../../../fatures/cartSlice";

function ItemDetails() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart?.items);
  //   console.log(cartItems);
  return (
    <>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="group relative rounded-2xl bg-zinc-900/80 p-4 sm:p-5 backdrop-blur-md border border-zinc-800/80 transition-all duration-300 hover:border-amber-400/30 flex flex-col sm:flex-row items-center gap-5"
        >
          {/* Item Image */}
          <div className="relative w-full sm:w-28 h-28 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Item Details */}
          <div className="flex-1 w-full flex flex-col justify-between space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400/80 tracking-wider">
                  Item #{item.id}
                </span>
                <h3 className="font-serif text-lg font-semibold text-zinc-100 group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-400 font-light line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                type="button"
                aria-label="Remove item"
                className="text-zinc-500 hover:text-amber-400 p-1.5 rounded-lg hover:bg-zinc-950 transition-colors"
              >
                <svg
                  className="w-4 h-4 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
              </button>
            </div>

            {/* Quantity Controls & Price */}
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60">
              {/* Quantity Counter */}
              <div className="flex items-center space-x-2 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
                <button
                  onClick={() => dispatch(minusQuantity(item.id))}
                  type="button"
                  className="w-7 h-7 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-300 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                >
                  -
                </button>
                <span className="w-8 text-center text-xs font-mono font-semibold text-zinc-200">
                  {item.quantity}
                </span>
                <button
                  onClick={() => dispatch(addQuantity(item.id))}
                  type="button"
                  className="w-7 h-7 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-300 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Price Calculation */}
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono text-zinc-500 block">
                  Subtotal
                </span>
                <span className="text-lg font-semibold text-amber-400 font-mono">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemDetails;
