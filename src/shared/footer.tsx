import React from "react";
import { Icons } from "./icons";

export default function Footer() {
  return (
    <footer className="h-126 w-full bg-dark-blue text-white">
      <main className="max-w-7xl px-9 pt-29 mx-auto">
        <div className="flex  justify-between">
          <section className=" w-90.5">
            <Icons.whiteLogo />
            <div className=" text-base font-normal font-secondary text-gray leading-6.5 mt-8 mb-6">
              Phasellus pulvinar porta turpis sit amet <br /> facilis sapien
              bibendum eu praesent massa.
            </div>
            <div className="flex items-center h-6.5 gap-1">
              <Icons.phone />
              <div className=" font-normal text-base font-secondary text-gray">
                (888) 1234-5678
              </div>
            </div>
            <div className="flex items-center h-6.5 gap-1">
              <Icons.email />
              <div className=" font-normal text-base font-secondary text-gray">
                info@example.com
              </div>
            </div>
            <div className="flex items-center gap-5 mt-6">
              <img
                src="public/media/footer/image 01 (2).png"
                alt=""
                className="w-auto h-auto"
              />
              <img
                src="public/media/footer/image 02 (2).png"
                alt=""
                className="w-auto h-auto"
              />
            </div>
          </section>

          <section className="mt-6.5 grid grid-cols-3  font-secondary font-normal text-base">
            {list.map((item) => (
              <div className=" h-44 flex flex-col justify-between">
                <div className="">{item.title}</div>
                {item.subtexts.map((page) => (
                  <div className=" text-gray hover:underline cursor-pointer w-max">
                    {page}
                  </div>
                ))}
              </div>
            ))}
          </section>
        </div>

        <section className=" flex items-center gap-6 mt-11">
          <div className=" font-normal text-sm text-gray font-secondary mr-auto">
            © All Right Reserved
          </div>
          <Icons.instagram />
          <Icons.twitter />
          <Icons.linkedin />
        </section>
      </main>
    </footer>
  );
}

const list = [
  { title: "Useful Links", subtexts: ["Features", "About", "Service", "Team"] },
  {
    title: "Help & Support",
    subtexts: ["FAQ", "Blog", "Contact Us", "Support"],
  },
  {
    title: "Resources",
    subtexts: ["Guides and resources", "Team", "Tools", "Support"],
  },
];
