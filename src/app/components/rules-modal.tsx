import {
  Description,
  Dialog,
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
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">Rules</DialogTitle>
            <div className="grid grid-cols-12 grid-rows-3">
              <div className="col-span-4">
                <Image
                  src={`/icon-paper.svg`}
                  alt="Paper"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-span-4">Beats</div>
              <div className="col-span-4">
                <Image
                  src={`/icon-scissors.svg`}
                  alt="Scissors"
                  width={100}
                  height={100}
                />
              </div>
              <div className="col-span-3 col-start-3">Beats</div>
              <div className="col-span-3 col-start-9">Beats</div>
              <div className="col-span-4 col-start-5">
                <Image
                  src={`/icon-rock.svg`}
                  alt="Rock"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="flex gap-4 p-4 border ">
              <button onClick={() => setIsOpen(false)}>
                <Image
                  src={`/icon-close.svg`}
                  alt="Close"
                  width={50}
                  height={50}
                />
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
