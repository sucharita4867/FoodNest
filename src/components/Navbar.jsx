import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-stone-800">
      <div className="   py-2 w-11/12 mx-auto   ">
        <div className="flex justify-between items-center ">
          <Link href="/">
            {/* <img src="/logo.svg" alt="" /> */}
            <Image width={50} height={30} src="/logo.svg" alt=""></Image>
          </Link>

          <div className="space-x-5">
            <Link prefetch={false} className="btn-outline" href="/foods">
              Foods
            </Link>
            <Link className="btn" href="/reviews">
              Reviews
            </Link>
            <Link prefetch={false} className="btn-outline" href="/feedback">
              Feedbacks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
