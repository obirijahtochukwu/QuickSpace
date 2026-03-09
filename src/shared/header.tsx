import React from "react";
import { Icons } from "./icons";

export default function Header() {
  return (
    <article className="mt-10 sm:mt-16 mb-13 xl:my-20 max-w-7xl px-4 xl:px-9 mx-auto flex max-sm:flex-col max-xl:justify-center gap-6 xl:gap-18">
      <section className="sm:w-sm lg:w-lg sm:h-92.5 xl:h-[551px] flex flex-col justify-center">
        <div className="max-sm:text-center text-3xl sm:text-[40px] sm:leading-12 xl:text-6xl font-bold font-primary text-primary whitespace-nowrap">
          Smart-Thinking & <br />
          Innovative Solution.
        </div>
        <div className="max-sm:text-center mb-4 sm:my-4 lg:my-6 font-normal font-secondary text-xs lg:text-lg text-secondary">
          Class aptent taciti sociosqu ad litora torquent conubia nostrama
          inceptos himenaeos. Donec tristique nibh ipsum dignissim.
        </div>
        <section className="flex items-center max-sm:justify-center gap-3.5 xl:gap-5 mb-4 xl:mb-6">
          <button className=" grid place-items-center bg-button w-35 xl:w-52 h-10 xl:h-15 rounded-sm xl:rounded-lg text-white font-medium text-xs xl:text-base font-secondary hover:shadow-[0px_0px_0px_6px_#3921f540] duration-200">
            Discover More
          </button>
          <button className="flex items-center gap-2 text-primary font-semibold text-xs xl:text-base font-secondary hover:underline">
            Explore Service <Icons.arrow className="h-3 w-3" />
          </button>
        </section>
        <section className=" hidden sm:flex items-center gap-2 xl:gap-3">
          {[
            "Get 15 days free trial",
            "No credit card is required ",
            "Cancel anytime",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-2">
              <Icons.check className="max-xl:h-3.5 max-xl:w-3.5" />
              <span className="text-xs xl:text-base font-normal text-primary whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </section>
      </section>

      <section className="h-53.5 xl:h-80 w-88 xl:flex-1 relative z-10 flex flex-wrap gap-x-3 xl:gap-x-5">
        <div className="bg-white rounded-lg w-34 xl:w-59 h-32 xl:h-55.5 p-2.5 xl:p-7">
          <section className="flex items-center gap-2 xl:gap-3">
            <div className=" grid place-items-center w-7.5 xl:w-11.5 h-8 xl:h-14 bg-button rounded-sm xl:rounded-lg">
              <Icons.user className=" max-xl:h-3.5 max-xl:w-3.5" />
            </div>
            <div>
              <div className="text-[8px] xl:text-xs font-light text-secondary">
                User Active Possibility
              </div>
              <div className=" font-bold font-secondary text-base xl:text-2xl">
                $44.3578
              </div>
            </div>
          </section>
          <img
            src="/media/Graph.png"
            alt=""
            className="w-full h-15 xl:h-22 object-contain mt-5"
          />
        </div>

        <div className=" bg-white rounded-xl shadow-xl h-48 xl:h-72 w-49.5 xl:w-74 p-3 xl:p-7 flex flex-col">
          <div className="">
            <span className=" font-bold text-base xl:text-2xl font-secondary text-primary">
              $4.8k
            </span>
            <span className="text-[8px] text-xs font-light text-secondary">
              / Daily
            </span>
          </div>
          <section className=" grid grid-cols-11 gap-2.5 xl:gap-4 my-auto">
            {Array(11)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="h-21.5 xl:h-32 w-2 xl:w-3 bg-muted rounded-2xl flex flex-col justify-end"
                >
                  <div
                    style={{
                      height:
                        index == 5
                          ? 70
                          : index == 7
                            ? 40
                            : index == 8
                              ? 90
                              : index == 9
                                ? 128
                                : index == 10
                                  ? 75
                                  : 0,
                    }}
                    className=" bg-button w-full rounded-2xl"
                  ></div>
                </div>
              ))}
          </section>
          <section className=" text-secondary font-normal text-[8px] xl:text-xs flex justify-between">
            {["Facilisis", "Sed", "Molestie", "Cursus", "Elit"].map(
              (name, idx) => (
                <div
                  key={name}
                  className={`${idx === 2 ? "text-danger font-normal" : ""}`}
                >
                  {name}
                </div>
              ),
            )}
          </section>
        </div>

        <div className="relative -top-13 xl:-top-12 -z-1 bg-white rounded-lg xl:rounded-xl shadow-lg h-59 xl:h-[353px] w-59 xl:w-[353px] p-3 xl:p-7 flex flex-col mx-auto">
          <div className=" text-primary font-semibold font-secondary text-[10px] xl:text-base">
            Data Analysis
          </div>
          <div className=" font-normal text-primary text-[8px] xl:text-xs">
            Viverra tristique
          </div>
          <section className=" flex items-center gap-3 xl:gap-5 font-secondary my-3 xl:my-5">
            <div className=" flex items-center gap-1 xl:gap-2">
              <div className="h-1.5 w-1.5 xl:h-2.5 xl:w-2.5 bg-button rounded-full" />
              <div className="text-[8px] xl:text-xs font-normal text-button">
                Aliquam
              </div>
            </div>
            <div className=" flex items-center gap-1 xl:gap-2">
              <div className="h-1.5 w-1.5 xl:h-2.5 xl:w-2.5 bg-danger rounded-full" />
              <div className="text-[8px] xl:text-xs font-normal text-danger">
                Morbi
              </div>
            </div>{" "}
            <div className=" flex items-center gap-1 xl:gap-2">
              <div className="h-1.5 w-1.5 xl:h-2.5 xl:w-2.5 bg-success rounded-full" />
              <div className="text-[8px] xl:text-xs font-normal text-success">
                Molestie
              </div>
            </div>
          </section>

          <section className=" relative">
            <img
              src="/media/Intersect.png"
              alt=""
              className=" w-full h-18.5 xl:h-28 absolute top-4.5 xl:top-7"
            />
            {Array(7)
              .fill("")
              .map(() => (
                <div className="h-4.5 xl:h-7 border-b border-dashed border-secondary/30"></div>
              ))}
          </section>
        </div>
        <div className="absolute w-64 xl:w-[381px] h-full -bottom-27 xl:-bottom-40 left-0 bg-[#15BEE3] opacity-40 blur-[150px] -z-2"></div>
      </section>
    </article>
  );
}
