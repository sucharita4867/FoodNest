import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-stone-800">
      <div className="   py-2 w-11/12 mx-auto   ">
        <div className="flex justify-between items-center ">
          <Link href="/">
            <img src="/logo.svg" alt="" />
          </Link>

          <div className="space-x-5">
            <Link className="btn" href="/foods">
              Foods
            </Link>
            <Link className="btn-outline" href="/reviews">
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
