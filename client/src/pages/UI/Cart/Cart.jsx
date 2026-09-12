import { useSelector } from "react-redux";
import CheckOut from "./CheckOut";
import ItemDetails from "./ItemDetails";
import EmptyCart from "./EmptyCart";

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-6">
      <div>
        <div className="flex items-center space-x-2">
          <span className="h-px w-6 bg-amber-400" />
          <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
            Your Order
          </span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-100 mt-1">
          Shopping Cart
        </h1>
      </div>
      <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-xl border border-zinc-800">
        2 Items
      </span>
    </div>
  );
}

function Cart() {
  const itemsCount = useSelector((state) => state.cart.items.length);
  console.log(itemsCount);

  return (
    <div className="bg-zinc-950 min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-zinc-100">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <Header />
        {/* Main Grid: Cart Items (Left) & Order Summary (Right) */}
        {!itemsCount ? <EmptyCart /> : <Main />}
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* LEFT COLUMN: Cart Items List */}
      <div className="lg:col-span-8 space-y-4">
        {/* Item 1 */}

        {/* Item Details */}
        <ItemDetails />

        {/* Item 2 */}

        {/* <ItemDetails /> */}
      </div>

      {/* RIGHT COLUMN: Order Summary & Checkout Card */}
      <CheckOut />
    </div>
  );
}

export default Cart;

{
  /* <div className="group relative rounded-2xl bg-zinc-900/80 p-4 sm:p-5 backdrop-blur-md border border-zinc-800/80 transition-all duration-300 hover:border-amber-400/30 flex flex-col sm:flex-row items-center gap-5">
          
          <div className="relative w-full sm:w-28 h-28 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
              alt="Malabar Parotta"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          
        </div> */
}
{
  /* <div className="group relative rounded-2xl bg-zinc-900/80 p-4 sm:p-5 backdrop-blur-md border border-zinc-800/80 transition-all duration-300 hover:border-amber-400/30 flex flex-col sm:flex-row items-center gap-5">
       
          <div className="relative w-full sm:w-28 h-28 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-950 border border-zinc-800">
            <img
              src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=1024x1024&w=is&k=20&c=bvTAMlq5A8Z5EhVjBn6D8eYOQS-rsuKmT9ToLkCc2Y4="
              alt="Chicken Biriyani"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div> */
}
