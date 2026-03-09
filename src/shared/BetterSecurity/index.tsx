import React from "react";
import Zaap from "./zaap";
import Deals from "./deals";

export default function BetterSecurity() {
  return (
    <article className="max-w-7xl px-9 mx-auto flex items-center">
      <section>
        <div className=" font-bold font-primary text-primary text-2xl xl:text-4xl leading-8 xl:leading-12 mb-1.5 xl:mb-2">
          Better Security To Better <br /> Protection An Experience <br /> Of
          Strength.
        </div>
        <div className=" font-normal text-sm xl:text-base font-secondary text-secondary xl:leading-6.5">
          Class aptent taciti sociosqu ad litora torquent conubia <br />
          nostrama inceptos himenaeos. Donec tristique nibh ipsum <br />{" "}
          dignissim.
        </div>
        <div className="w-full h-px bg-muted my-6.5 xl:my-10" />
        <div className=" font-bold text-base xl:text-xl leading-8 xl:leading-11 font-primary text-primary">
          Well Organised User Interface
        </div>
        <div className=" font-normal font-secondary text-sm xl:text-lg text-secondary">
          Etiam id euismod odio. Ut euismod sem a lacus fringilla.
        </div>
        <div className=" mt-6.5 xl:mt-10 font-bold text-base xl:text-xl leading-8 xl:leading-11 font-primary text-primary">
          Completely Bug Free{" "}
        </div>
        <div className=" font-normal font-secondary text-sm xl:text-lg text-secondary">
          Etiam id euismod odio. Ut euismod sem a lacus fringilla.
        </div>
      </section>

      <section className="w-110.5 xl:w-2xl ml-auto flex items-center">
        <div className=" w-47 xl:w-70 h-36 xl:h-54 relative -right-4.5 xl:-right-7 z-1 bg-white shadow-[0px_2.52px_37.8px_0px_#00000014]">
          <section className="">
            <div className="flex items-center h-5.5 xl:h-8.5 px-2 xl:px-2.5 justify-between border-b !border-muted">
              <div className=" font-secondary font-medium text-[8px] xl:text-xs text-primary">
                Deals
              </div>
              <div>
                <div className=" font-secondary font-normal text-[5.36px] xl:text-[8px] text-secondary">
                  Show:
                </div>
                <div className=" font-secondary font-normal text-[5.36px] xl:text-[8px] text-button">
                  Monthly
                </div>
              </div>
            </div>
            <div className=" p-2 xl:p-2.5 flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full border border-button"></div>
              <div className=" font-normal font-secondary text-[5.36px] xl:text-[8px] text-primary">
                Closed deals
              </div>
            </div>
            <div className="px-2 xl:px-2.5">
              <img
                src="/media/BetterSecurity/deals_graphic (1).png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </section>

          <section className=" absolute -bottom-2 xl:-bottom-3 -left-8 xl:-left-12 bg-[#fff] w-21.5 xl:w-32 h-16 xl:h-24 rounded-sm xl:rounded-md p-2 xl:p-2.5 shadow-[0px_2.21px_33.15px_0px_#00000014]">
            <img
              src="/media/BetterSecurity/Group 2393.png"
              alt=""
              className="w-full h-full"
            />
          </section>
        </div>

        <Zaap />
      </section>
    </article>
  );
}
