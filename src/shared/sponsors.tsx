import React from "react";

export default function Sponsors() {
  return (
    <section className="max-w-7xl h-25 px-4 sm:px-9 max-sm:mt-52 mx-auto grid grid-cols-2 sm:grid-cols-4 items-center justify-between">
      {["image 01.png", "image 02.png", "image 03.png", "image 04.png"].map(
        (name) => (
          <img
            src={`/media/sponsors/${name}`}
            alt=""
            className="h-6 xl:h-9.5 w-26 object-contain max-sm:mx-auto"
          />
        ),
      )}
    </section>
  );
}
