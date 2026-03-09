import React from "react";
import { Icons } from "./icons";

export default function Navigation() {
  return (
    <nav className=" max-w-7xl px-9 mx-auto flex items-center">
      <Icons.logo />
      <div className="ml-auto mr-13 xl:mr-20 flex gap-5 xl:gap-x-8 font-secondary text-sm xl:text-base font-medium text-primary">
        {["Home", "Pages", "Pricing", "Portfolio", "Blog", "Contact"].map(
          (name) => (
            <div key={name} className="relative group cursor-pointer">
              {name}
              <div className=" group-hover:w-full w-0 duration-200 absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-primary"></div>
            </div>
          ),
        )}
      </div>
      <button className=" grid place-items-center bg-button w-35 xl:px-5 h-10 xl:h-12.5 rounded-sm xl:rounded-lg text-white font-medium text-xs xl:text-base font-secondary min-w-max hover:shadow-[0px_0px_0px_4px_#3921f540] duration-200">
        Get Started Free
      </button>
    </nav>
  );
}
