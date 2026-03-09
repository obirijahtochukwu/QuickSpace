import React, { JSX } from "react";
import { Icons } from "./icons";

export default function WhyWillYouChoose() {
  const list = [
    {
      img: "/media/WhyWillYouChoose/image 19 (2).png",
      title: "Creative Ideas",
      description: "Class aptent taciti sociq u litora torquen conub.",
    },
    {
      img: "/media/WhyWillYouChoose/image 23 (3).png",
      title: "Awesome Design",
      description: "Integer a elit pellentesqu e semper sem ultricies.",
    },
    {
      img: "/media/WhyWillYouChoose/image 24.png",
      title: "Best Features",
      description: "Fusce risus lorem pulvin ar eu posuere vitae.",
    },
    {
      img: "/media/WhyWillYouChoose/image 26.png",
      title: "Easy Solutions",
      description: "Aenean eget nulla eu dui malesuad convallis vel.",
    },
  ];
  return (
    <article className="max-w-7xl px-4 sm:px-9 mx-auto mt-30 flex flex-col sm:items-center">
      <div className=" sm:text-center font-bold font-primary text-primary text-3xl sm:text-4xl left-11">
        Why Will You Choose <br className=" sm:hidden" /> Our{" "}
        <br className=" max-sm:hidden" /> Application
      </div>
      <div className="mt-2 font-normal font-secondary text-base text-primary leading-6 sm:text-center">
        Class aptent taciti sociosqu ad litora torquen conubia nostramase <br />
        inceptos himenaeo. Phasellus metus nisl euismod eget lorem.
      </div>

      <section className=" mt-9 max-sm:hidden">
        <div className=" h-[515px] w-[515px] border border-dashed rounded-full border-secondary/30 p-15 relative">
          <Comment
            description="Karen change project info on Project Homepage"
            date="Aug 10"
            Icon={<Icons.greenQuote />}
            className="-right-6 top-5"
          />
          <div className=" h-full w-full border border-dashed rounded-full border-secondary/30 p-15 relative">
            <img
              src="/media/WhyWillYouChoose/Image 01 (1).png"
              className=" absolute -left-10 -top-12 h-auto w-auto object-cover rounded-full"
            />
            <div className=" h-full w-full p-15 flex flex-col items-center justify-center relative">
              <div className=" font-bold font-primary text-4xl left-11.5 text-button">
                5M+
              </div>
              <div className=" text-base font-normal font-secondary text-primary">
                Active Members
              </div>
              <Icons.circleProgress className=" absolute scale-105 top-0 left-0 w-full h-full" />
            </div>
          </div>
          <img
            src="/media/WhyWillYouChoose/Image 02 (1).png"
            className=" absolute -right-26 top-24 h-auto w-auto object-cover scale-100 rounded-full"
          />
          <img
            src="/media/WhyWillYouChoose/Image 03 (1).png"
            className=" absolute left-8 top-96 h-auto w-auto object-cover rounded-full "
          />
          <Comment
            description="Andrea change the due date of Project Homepage"
            date="June 05"
            Icon={<Icons.yellowQuote />}
            className="right-3 top-110"
          />
          <Comment
            description="Karen leave some comments on Ilustrasi"
            date="June 25"
            Icon={<Icons.redQuote />}
            className="-left-30 top-70"
          />
        </div>
      </section>

      <section className="mt-10 sm:mt-24 grid grid-cols-1 sm:flex justify-between gap-4 xl:gap-7.5">
        {list.map((item, index) => (
          <div className="h-54 sm:h-60 xl:h-81.5 w-full sm:w-56 xl:w-67.5 bg-white shadow-[0px_4.32px_64.87px_0px_#00000014] flex flex-col items-center justify-center text-center p-4 max-lg:last:hidden">
            <img
              src={item.img}
              alt=""
              className="w-14 xl:w-auto h-14 xl:h-auto"
            />
            <h3 className="font-bold text-lg xl:text-xl font-primary text-primary leading-11 mt-2">
              {item.title}
            </h3>
            <p className="font-normal text-sm xl:text-lg font-secondary xl:leading-8 text-secondary">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </article>
  );
}

const Comment = ({
  description,
  Icon,
  date,
  className,
}: {
  description: string;
  Icon: JSX.Element;
  className: string;
  date: string;
}) => (
  <section
    className={`absolute rounded-lg bg-white h-20 w-52 shadow-[0px_4.26px_63.87px_0px_#00000014] z-10 p-4 flex gap-3 ${className}`}
  >
    <div>{Icon}</div>
    <div>
      <div className=" font-normal font-secondary text-xs text-primary line-clamp-2">
        {description}
      </div>
      <div className=" font-bold text-secondary font-secondary text-xs mt-1">
        {date}
      </div>
    </div>
  </section>
);
