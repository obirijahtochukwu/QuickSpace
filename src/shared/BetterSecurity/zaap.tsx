import React from "react";

export default function Zaap() {
  return (
    <section className="h-122 xl:h-[728px] w-56.5 xl:w-84  rounded-[11px] xl:rounded-2xl bg-white shadow-[0px_4.32px_64.87px_0px_#00000014] flex flex-col items-center px-5 xl:px-7.5 pt-9.5 xl:pt-14">
      <img
        src="/media/BetterSecurity/image 1 (1).png"
        alt=""
        className="h-6 xl:h-9 w-auto"
      />
      <img
        src="/media/BetterSecurity/Cards.png"
        alt=""
        className="h-48 xl:h-72 w-full mt-12.5 xl:mt-19"
      />
      <section className="flex-1 w-full relative -top-16 xl:-top-24 pt-8 xl:pt-12 bg-white text-center">
        <div className=" font-bold text-primary font-secondary text-xs xl:text-base">
          Maximixe Your Savings
        </div>
        <div className="mt-1.5 xl:mt-2 text-[9.38px] xl:text-sm font-secondary text-primary">
          Maximize Your Savings with Multiple Accounts for Different Occasions"
        </div>
        <button className="bg-button w-full mt-8 xl:mt-12 grid place-items-center h-6.5 xl:h-10 rounded-md text-white font-semibold font-secondary text-[9.38px] xl:text-sm">
          Log In
        </button>
        <button className=" mt-2.5 xl:mt-4 bg-white w-full grid place-items-center border border-button h-6.5 xl:h-10 rounded-md text-button font-semibold font-secondary text-[9.38px] xl:text-sm">
          Create Account
        </button>
      </section>
    </section>
  );
}
