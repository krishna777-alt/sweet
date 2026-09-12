import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../../fatures/cartSlice";
import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";

function FoodCard() {
  const dispatch = useDispatch();
  const { foods } = useContext(ClientContext);
  return (
    <div className="bg-zinc-950 min-h-screen p-6 text-zinc-100">
      {/* Grid Container for Symmetric Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
        {foods.map((food) => (
          <div className="group relative rounded-2xl bg-zinc-900/80 p-5 backdrop-blur-md border border-zinc-800/80 shadow-2xl transition-all duration-300 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-500/5 flex flex-col h-full">
            {/* Product Image Wrapper */}
            <NavLink
              to={`foodDetails/${food.id}`}
              key={food.id}
              className="cursor-pointer relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-950/80 border border-zinc-800/50 flex items-center justify-center p-4"
            >
              <img
                src={food.imageUrl}
                alt={food.name}
                className="h-full w-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft Ambient Radial Glow on Hover */}
              <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </NavLink>

            {/* Product Details Section */}
            <div className="mt-5 space-y-3 flex-1 flex flex-col">
              {/* Item Name */}
              <h3 className="font-serif text-lg font-semibold tracking-wide text-zinc-100 group-hover:text-amber-400 transition-colors line-clamp-1">
                {food.name}
              </h3>

              {/* Item Description */}
              <p className="text-sm font-light leading-relaxed text-zinc-300 line-clamp-10 flex-grow">
                {food.description}
              </p>

              {/* Pricing & CTA Action */}
              <div className="pt-3 flex items-center justify-between border-t border-zinc-800/80 mt-auto">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 block font-mono"></span>
                  <p className="text-2xl font-semibold text-amber-400 font-mono">
                    ₹{food.price}
                  </p>
                </div>

                {/* Cart Action Button */}
                <button
                  onClick={() => dispatch(addToCart(food))}
                  type="button"
                  className="flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/20 active:scale-95 whitespace-nowrap"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FoodCard;
