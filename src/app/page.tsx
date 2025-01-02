"use client";

import Image from "next/image";
import RulesModal from "./components/rules-modal";
import { useState } from "react";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow/600.css";

export default function Home() {
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-evenly flex-col ">
      <div className="border-2 border-[hsl(217, 16%, 45%)] rounded-xl p-4 flex space-between w-1/2 justify-between">
        <div>
          <h2>ROCK</h2>
          <h2>PAPER</h2>
          <h2>SCISSORS</h2>
        </div>
        <div className="border bg-white rounded-xl text-center py-2 px-6">
          <h3 className="text-[hsl(229, 64%, 46%)]">SCORE</h3>
          <h1 className="text-[hsl(229, 25%, 31%)] text-5xl font-bold">
            {score}
          </h1>
        </div>
      </div>
      <div className="relative">
        <Image
          className="absolute mx-auto left-0 right-0 text-center z-0 bottom-12"
          src={`/bg-triangle.svg`}
          width={400}
          height={300}
          alt={"Triangle"}
        />
        <div className="grid grid-cols-12 grid-rows-3 z-10 relative">
          <button className="col-span-4 rounded-full paper p-4 flex items-center shadow-inner">
            <div className="bg-white rounded-full w-[125px] h-[125px] flex justify-center items-center shadow-inner shadow-slate-500">
              <Image
                className="rounded-full"
                src={`/icon-paper.svg`}
                alt="Paper"
                width={60}
                height={100}
              />
            </div>
          </button>
          <div className="col-span-4 flex justify-center items-center invisible">
            Beats
          </div>
          <button className="col-span-4 rounded-full scissors p-4 flex items-center shadow-inner">
            <div className="bg-white rounded-full w-[125px] h-[125px] flex justify-center items-center shadow-inner shadow-slate-500">
              <Image
                className="rounded-full p-6"
                src={`/icon-scissors.svg`}
                alt="Scissors"
                width={100}
                height={100}
              />
            </div>
          </button>
          <div className="col-span-3 col-start-3 flex justify-center items-center invisible">
            Beats
          </div>
          <div className="col-span-3 col-start-9 flex justify-center items-center invisible">
            Beats
          </div>
          <button className="col-span-4 col-start-5 rounded-full rock p-4 flex items-center shadow-inner">
            <div className="bg-white rounded-full w-[125px] h-[125px] flex justify-center items-center shadow-inner shadow-slate-500">
              <Image
                className="rounded-full p-6"
                src={`/icon-rock.svg`}
                alt="Rock"
                width={100}
                height={100}
              />
            </div>
          </button>
        </div>
      </div>

      <RulesModal />
    </div>
  );
}
