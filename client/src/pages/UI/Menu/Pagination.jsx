function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
  totalItems,
  productPerPage,
}) {
  const startItem =
    totalItems === 0 ? 0 : (currentPage - 1) * productPerPage + 1;
  const endItem = Math.min(currentPage * productPerPage, totalItems);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  {
    (setCurrentPage, totalPages);
  }

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 p-4 backdrop-blur-md shadow-xl my-8">
      <div className="text-xs text-zinc-400 font-light">
        Showing{" "}
        <span className="font-semibold text-zinc-100 font-mono">
          {startItem}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-zinc-100 font-mono">{endItem}</span>{" "}
        of{" "}
        <span className="font-semibold text-amber-400 font-mono">
          {totalItems}
        </span>{" "}
        dishes
      </div>

      <nav
        className="flex items-center space-x-1 sm:space-x-2"
        aria-label="Pagination"
      >
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 transition-all duration-200 hover:border-amber-400/50 hover:text-amber-400 disabled:opacity-40 disabled:hover:border-zinc-800 disabled:hover:text-zinc-400 cursor-pointer"
          aria-label="Previous Page"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => {
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                type="button"
                className={`flex h-9 min-w-9 px-3 items-center justify-center rounded-xl text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? "bg-amber-400 text-zinc-950 font-bold shadow-lg shadow-amber-400/20"
                    : "bg-zinc-950 border border-zinc-800 text-zinc-300 font-medium hover:border-amber-400/50 hover:text-amber-400"
                }`}
              >
                {page}
              </button>
            );
          },
        )}

        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 transition-all duration-200 hover:border-amber-400/50 hover:text-amber-400 disabled:opacity-40 disabled:hover:border-zinc-800 disabled:hover:text-zinc-400 cursor-pointer"
          aria-label="Next Page"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export default Pagination;
