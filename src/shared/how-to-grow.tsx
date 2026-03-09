import React from "react";

export default function HowToGrow() {
  const list = [
    {
      image: "Icon",
      title: "Active User Analytics",
      description:
        "Class aptent taciti sociosqu litora torquen conubia nostram.",
    },
    {
      image: "Icon (1)",
      title: "Smart Coding Development",
      description: "Morbi eget aliquet finibus, best condimentum aliquet quam.",
    },
    {
      image: "Icon (2)",
      title: "User Friendly Interface",
      description: "Quisque magna, sollicitudin vitae, lobortis feugiat arcu.",
    },
  ];

  return (
    <section className="max-w-7xl px-9 mx-auto my-20 xl:my-30 flex flex-col items-center">
      <div className=" font-bold font-primary text-4xl text-primary">
        How To Grow Your Business
      </div>
      <div className="mt-4 xl:mt-5 font-secondary text-base font-normal text-center text-primary">
        Class aptent taciti sociosqu ad litora torquen conubia nostramase <br />
        inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
      </div>
      <main className="w-full mt-11 grid grid-cols-3 gap-4 xl:gap-7.5">
        {list.map((item) => (
          <section className="h-62 xl:h-81.5 w-full flex flex-col xl:justify-between items-center pt-10 xl:pt-16 p-7 xl:p-14 shadow-[0px_4.32px_64.87px_0px_#00000014]">
            <div>
              <img
                src={`/media/HowToGrow/${item.image}.png`}
                alt={item.title}
                className="h-14 w-14 xl:w-auto xl:h-auto object-cover"
              />
            </div>
            <div className="max-xl:mt-5 font-primary text-base whitespace-nowrap xl:text-xl font-bold text-primary">
              {item.title}
            </div>
            <div className=" font-secondary font-normal text-sm xl:text-lg text-secondary text-center">
              {item.description}
            </div>
          </section>
        ))}
      </main>
      <div className="mt-16 xl:mt-24 font-secondary font-normal text-sm xl:text-base text-secondary">
        Approx <span className=" text-button font-bold">875+</span> team members
        ready to online support for you
      </div>
    </section>
  );
}
