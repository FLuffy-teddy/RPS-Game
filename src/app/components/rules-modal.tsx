import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
import Image from "next/image";

export default function RulesModal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Rules</button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
        transition
      >
        <DialogBackdrop className="fixed inset-o bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
              <div className="flex justify-between">
                <DialogTitle className="font-bold text-center text-4xl h1">
                  Rules
                </DialogTitle>
                <button onClick={() => setIsOpen(false)}>
                  <Image
                    src={`/icon-close.svg`}
                    alt="Close"
                    width={25}
                    height={25}
                  />
                </button>
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
                    <div className="rounded-full w-[125px] h-[125px] flex justify-center items-center shadow-inner shadow-slate-500">
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
                    <div className="rounded-full w-[125px] h-[125px] flex justify-center items-center shadow-inner shadow-slate-500">
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
                    <div className="rounded-full w-[125px] h-[125px] flex justify-center items-center shadow-inner shadow-slate-500">
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
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
