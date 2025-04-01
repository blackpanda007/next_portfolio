"use client";

import CountUp from "react-countup";
import { caveat, inter, jetbrains, vt } from "./fonts";

const stats = [
  {
    num: 10,
    text: "Repositories",
  },
  {
    num: 8,
    text: "Frameworks",
  },
  {
    num: 4,
    text: "Coding Languages",
  },
  {
    num: 200,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="conatainer mx-auto backdrop-blur-md">
        <div className="flex flex-wrap gap-4 max-w-[80vw] mx-auto xl:max-w-none ">
          {stats.map((item, index) => {
            return (
              <div
                className={`${jetbrains.className} flex-1 flex gap-4 items-center justify-center font-bold text-green-500`}
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className={`${jetbrains.className} text-4xl xl:text-6xl`}
                />
                <p
                  className={`${
                    item.text.length > 10 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
