import Button from "@/components/quiz/Button";
import Link from "next/link";
import React from "react";

export default function ResultPage() {
  return (
    <div className={`w-full flex flex-col lg:flex-row gap-20 pb-20`}>
      <div className={"w-full lg:flex-1"}>
        <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] text-[48px] heading-l-regular font-[number:var(--heading-l-regular-font-weight)] text-[#313e51] lg:text-[length:var(--heading-l-regular-font-size)] tracking-[var(--heading-l-regular-letter-spacing)] leading-[var(--heading-l-regular-line-height)] whitespace-nowrap [font-style:var(--heading-l-regular-font-style)]">
            Quiz Completed
          </div>
          <div className="relative w-fit heading-l-bold text-[48px] font-[number:var(--heading-l-bold-font-weight)] text-[#313e51] lg:text-[length:var(--heading-l-bold-font-size)] tracking-[var(--heading-l-bold-letter-spacing)] leading-[var(--heading-l-bold-line-height)] whitespace-nowrap [font-style:var(--heading-l-bold-font-style)]">
            Your Score...
          </div>
        </div>
      </div>

      <div
        className={
          "w-full h-auto lg:flex-1  flex items-center justify-center flex-col"
        }
      >
        <div className="w-full min-h-[250px] bg-white rounded-3xl flex flex-col items-center justify-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit heading-l-bold text-[48px] font-[number:var(--heading-l-bold-font-weight)] text-[#313e51] lg:text-[length:var(--heading-l-bold-font-size)] tracking-[var(--heading-l-bold-letter-spacing)] leading-[var(--heading-l-bold-line-height)] whitespace-nowrap [font-style:var(--heading-l-bold-font-style)]">
            7
          </div>
          <p>out of 5</p>
        </div>
        <Link href={"/"} className="w-full">
          <Button name={"Play Again"} />
        </Link>
      </div>
    </div>
  );
}
