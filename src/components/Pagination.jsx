import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center border-2 fixed bottom-0 bg-white ">
      <div className="flex flex-row items-center justify-between w-11/12 max-w-[630px]  py-2">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="py-2 px-5  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Previous
            </button>
          )}

          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="py-2 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm">
          Pages {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
