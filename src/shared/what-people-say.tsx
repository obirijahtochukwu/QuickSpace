import React from "react";

export default function WhatPeopleSay() {
  const list = [
    {
      img: "/media/WhatPeopleSay/Image.png",
      text: "“I just simply love tools that make my life easier! I have everything that I need in one place, and that allows our team to be more organized and user-oriented.”",
      name: "Jenny Wilson",
      title: "Project Manager at Microsoft",
    },
    {
      img: "/media/WhatPeopleSay/Image (1).png",
      text: "“I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content”",
      name: "Robert Fox",
      title: "Founder at Brain.co",
    },
    {
      img: "/media/WhatPeopleSay/Image (2).png",
      text: "“Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.”",
      name: "Kristin Watson",
      title: "UX Designer at Google",
    },
  ];

  return (
    <article className="flex flex-col items-center text-center max-w-7xl px-9 py-20 xl:py-30 mx-auto bg-white/60">
      <div className=" font-bold font-primary text-3xl xl:text-4xl text-primary leading-11">
        What People Say
      </div>
      <div className=" font-normal font-secondary text-sm xl:text-base text-secondary leading-6">
        Quisque fermentum porta tincidunt. Interdum semper. <br /> Pellentesque
        facilisis augue mollis suscipit.
      </div>

      <section className="mt-12 xl:mt-24 flex justify-between gap-4 xl:gap-11.5">
        {list.map((item) => (
          <div className=" w-full xl:w-93 h-72 xl:h-111 bg-white odd:hover:shadow-[0px_34px_104px_0px_#12161C1A] duration-300 even:shadow-[0px_34px_104px_0px_#12161C1A] flex flex-col justify-between items-center text-center px-4 py-7 xl:p-8.5">
            <img
              src={item.img}
              className="h-14 w-14 xl:h-22.5 xl:w-22.5 rounded-full bg-muted"
            />
            <div className=" font-normal text-xs xl:text-lg font-secondary text-secondary">
              {item.text}
            </div>
            <div>
              <div className="font-semibold font-secondary text-xs text-primary leading-7">
                {item.name}
              </div>
              <div className=" text-xs font-normal font-secondary text-secondary leading-6.5">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}
