import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../fatures/cartSlice";

function FoodDisplay() {
  const { id } = useParams();
  console.log("id", id);
  const [selectedFood, setSelectedFood] = useState([]);
  useEffect(() => {
    async function fetchFoodData() {
      try {
        const res = await fetch(`http://127.0.0.1:8080/api/foods/${id}`);
        const data = await res.json();

        console.log("data:", data.name);
        setSelectedFood(data);
      } catch (err) {
        console.log("ERROR:", err.message);
      }
    }

    fetchFoodData();
  }, [id]);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-zinc-950 min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-12 text-zinc-100">
        {/* Main Food Card Layout */}
        <div className="w-full max-w-5xl rounded-3xl bg-zinc-900/80 p-6 sm:p-8 lg:p-10 backdrop-blur-md border border-zinc-800/80 shadow-2xl shadow-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN: Food Image */}
            <div className="lg:col-span-5 relative group">
              {/* Soft Ambient Radial Glow behind image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 via-amber-400/5 to-transparent rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-inner">
                <img
                  src={selectedFood.imageUrl}
                  alt="Chicken Biriyani"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle Dark Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge */}
                <span className="absolute top-4 left-4 rounded-full bg-zinc-950/80 backdrop-blur-md border border-amber-400/30 px-3 py-1 text-xs font-semibold text-amber-400 uppercase tracking-widest shadow-lg">
                  Signature Dish
                </span>
              </div>
            </div>

            {/* RIGHT COLUMN: Food Features & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              {/* Header Section */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="h-px w-6 bg-amber-400" />
                  <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                    Item #{1}
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100 leading-tight">
                  {selectedFood.name}
                </h1>

                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                  {selectedFood.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="grid grid-cols-2 gap-3 py-2 border-y border-zinc-800/80">
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                    Cuisine
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">
                    Authentic Kerala
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                    Preparation
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">
                    Slow Dum Cooked
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                    Portion
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-zinc-200">
                    Serves 1-2
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                    Delivery
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-amber-400">
                    Fresh & Hot
                  </span>
                </div>
              </div>

              {/* Pricing Display */}
              <div className="flex items-baseline space-x-2">
                <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono">
                  Price:
                </span>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">
                  ₹{selectedFood.price}
                </span>
              </div>

              {/* BOTTOM ACTIONS: Add to Cart & Order Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                {/* Add To Cart Button */}
                <button
                  onClick={() => dispatch(addToCart(selectedFood))}
                  type="button"
                  className="w-full sm:w-1/2 flex items-center justify-center space-x-2 rounded-xl bg-zinc-950 hover:bg-zinc-900 border border-zinc-700/80 hover:border-amber-400/50 text-zinc-200 font-medium px-6 py-3.5 text-sm transition-all duration-300 active:scale-95 shadow-md"
                >
                  <svg
                    className="w-4 h-4 text-amber-400 fill-none stroke-current"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span>Add to Cart</span>
                </button>

                {/* Order Now Button */}
                <button
                  type="button"
                  className="w-full sm:w-1/2 flex items-center justify-center space-x-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold px-6 py-3.5 text-sm transition-all duration-300 shadow-lg shadow-amber-400/20 active:scale-95"
                >
                  <span>Order Now</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodDisplay;
