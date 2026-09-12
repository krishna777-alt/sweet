import { useState } from "react";
import ActionBar from "./ActionBar";
import { foodItems } from "./foodData";
import MenuFoodCard from "./MenuFoodCard";
import Pagination from "./Pagination";

function Header() {
  return (
    <div className="relative py-16 px-6 border-b border-zinc-800/80 bg-zinc-950 text-center overflow-hidden">
      {/* <!-- Background Image with Reduced Opacity and Blur --> */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 blur-xs scale-105 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />

      {/* <!-- Dark Gradient Overlay for Readability --> */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950/90 pointer-events-none" />

      {/* <!-- Ambient Light Glow --> */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-32 w-64 rounded-full bg-amber-500/10 blur-[80px] pointer-events-none" />

      {/* <!-- Foreground Content --> */}
      <div className="relative z-10 max-w-xl mx-auto space-y-2">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-zinc-100">
          Menu Style 3
        </h1>
        <div className="inline-flex items-center space-x-2 text-xs font-medium text-zinc-400">
          <span className="hover:text-zinc-200 transition-colors">Home</span>
          <span className="text-amber-400">›</span>
          <span className="text-amber-400 font-semibold">Menu Style 3</span>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;
  const totalItems = foodItems.length;
  const totalPages = Math.ceil(totalItems / productPerPage);
  const startIndex = (currentPage - 1) * productPerPage;
  const endIndex = Math.min(startIndex + productPerPage, totalItems);

  const currentItems = foodItems.slice(startIndex, endIndex);

  return (
    // <!-- Modern Menu Page Skeleton (Sweet Food App - Midnight Luxury Theme) -->
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100 flex flex-col justify-between">
      <Header />

      {/* <!-- Main Content Container --> */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full flex-1 space-y-8">
        {/* <!-- Search & Sorting Toolbar (Justify-Between Bar) --> */}
        <ActionBar />

        {/* <!-- Product Grid Structure (3 Columns Layout like image) --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((food) => (
            <MenuFoodCard key={food.id} food={food} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          productPerPage={productPerPage}
        />
      </main>

      {/* <!-- Footer Section (Matching Image Layout Structure) --> */}
    </div>
  );
}

export default Menu;

{
  /* <!-- Header Banner / Breadcrumb Hero --> */
}
{
  /* <div className="relative py-12 px-6 border-b border-zinc-800/80 bg-zinc-900/40 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <h1 className="text-3xl sm:text-5xl font-extrabold font-serif tracking-tight text-zinc-100 mb-2">
          Menu Style 3
        </h1>
        <div className="inline-flex items-center space-x-2 text-xs font-medium text-zinc-400">
          <span>Home</span>
          <span className="text-amber-400">›</span>
          <span className="text-amber-400">Menu Style 3</span>
        </div>
      </div> */
}
