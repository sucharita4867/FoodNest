"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const route = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;
    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    route.push(`?${newParams.toString()}`);

    //     console.log(value);
  };

  return (
    <div className="bg-zinc-900 p-3 rounded-2xl w-full md:w-[420px]">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="text"
          name="search"
          placeholder="Search foods..."
          className="
            flex-1 bg-transparent text-white placeholder-gray-400
            outline-none px-2
          "
        />

        <button
          type="submit"
          className="
            bg-[#fd4c00] text-white px-5 py-2 rounded-lg font-semibold
            transition-all duration-300
            hover:scale-105 active:scale-95
          "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
