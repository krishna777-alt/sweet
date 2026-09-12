import { useDispatch } from "react-redux";
import { addToCart } from "../../../fatures/cartSlice";
import { Link } from "react-router-dom";

function MenuFoodCard({ food }) {
  const dispatch = useDispatch();
  return (
    <div className="group rounded-2xl bg-zinc-900/80 border border-zinc-800 p-4 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-amber-400/40 hover:-translate-y-1">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-zinc-950">
        <Link to={`/foodDetails/${food.id}`}>
          <img
            src={food.imageUrl}
            alt="Double Patty Veg Burger"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <span className="absolute top-3 left-3 rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-bold text-zinc-950 uppercase tracking-wider">
          20% OFF
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 px-2 py-1 text-[11px] font-medium text-amber-400 flex items-center space-x-1">
          <span>★</span> <span>{food.rating}</span>
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="font-serif font-bold text-lg text-zinc-100 group-hover:text-amber-400 transition-colors">
          {food.name}
        </h3>
        <p className="text-xs text-zinc-400 line-clamp-2 font-light">
          {food.description}
        </p>

        <div className="pt-2 flex items-center justify-between border-t border-zinc-800/60">
          <span className="text-xl font-bold font-serif text-amber-400">
            ₹{food.price}
          </span>
          <button
            onClick={() => dispatch(addToCart(food))}
            className="rounded-xl bg-amber-400 hover:bg-amber-300 px-4 py-2 text-xs font-semibold text-zinc-950 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuFoodCard;
