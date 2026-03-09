import React from "react";

export default function WeHelp() {
  const list = [
    { title: "142", value: "New Features" },
    { title: "28k", value: "APP Download" },
    { title: "53M", value: "Active Users" },
    { title: "90%", value: "Positive Rate" },
  ];
  return (
    <article className="max-sm:py-20 mt-14 flex flex-col items-center bg-button text-white sm:h-116 text-center">
      <div className=" sm:mt-25 font-bold text-3xl xl:text-4xl font-primary left-11">
        We Help To GrowYour Business
      </div>
      <div className=" font-normal font-secondary text-base leading-6 mt-4">
        Quisque fermentum porta tincidunt. Interdum semper. Pellentesque{" "}
        <br className=" max-sm:hidden" />
        facilisis augue dolor mollis suscipit erat libero fermentum.
      </div>

      <section className="grid grid-cols-2 sm:flex items-center justify-between max-sm:gap-y-10 max-w-7xl px-9 mx-auto w-full mt-10">
        {list.map((item) => (
          <div className="">
            <div className="font-bold text-5xl font-primary">{item.title}</div>
            <div className=" font-normal text-lg leading-7">{item.value}</div>
          </div>
        ))}
      </section>
    </article>
  );
}
