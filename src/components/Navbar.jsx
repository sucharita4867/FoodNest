import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" w-11/12 mx-auto border mt-6 py-2">
      <div className="flex justify-between items-center ">
        <figure>
          <img src="/logo.svg" alt="" />
        </figure>
        <div className="space-x-5">
          <Link className="btn" href="/food">
            Food
          </Link>
          <Link className="btn-outline" href="/reviews">
            Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
