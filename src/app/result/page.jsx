"use client";
import React, { Suspense } from "react";
import Button from "@/components/quiz/Button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AVAILABLE_QUIZES } from "@/utils/constants";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const quizParams = {
    score: searchParams.get("score"),
    totalQuestions: searchParams.get("totalQuestions"),
    title: searchParams.get("title"),
  };

  const quiz = AVAILABLE_QUIZES.find((quiz) => quiz.title === quizParams.title);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const bgStyle = {
    backgroundColor: quiz?.backgroundColor,
    borderRadius: "0.4rem",
  };

  return (
    <Suspense>
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
          <div className="w-full min-h-[250px] bg-white rounded-3xl flex flex-col items-center justify-center gap-8 relative flex-[0_0_auto]">
            <div className={` flex items-center justify-center gap-8`}>
              <div
                className={`relative w-10 h-10  bg-[100%_100%] flex items-center justify-center`}
                style={bgStyle}
              >
                <Image
                  width={10}
                  height={10}
                  className=" w-6 h-6"
                  alt="Fluent paint brush"
                  src={`${quiz.iconPath}`}
                />
              </div>
              <div
                className="relative w-fit  text-[#313e51] whitespace-nowrap font-medium
      text-heading-body-m lg:text-heading-s"
              >
                {quiz.title}
              </div>
            </div>
            <div className="relative w-fit heading-l-bold text-[64px] font-[number:var(--heading-l-bold-font-weight)] text-[#313e51] lg:text-[length:var(--heading-l-bold-font-size)] tracking-[var(--heading-l-bold-letter-spacing)] leading-[var(--heading-l-bold-line-height)] whitespace-nowrap [font-style:var(--heading-l-bold-font-style)]">
              {quizParams.score}
            </div>
            <p className="relative w-fit text-[24px] font-[number:var(--body-s-font-weight)] text-[#626c7f] lg:text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)] ">
              out of {quizParams.totalQuestions}{" "}
            </p>
          </div>
          <Link href={"/"} className="w-full">
            <Button name={"Play Again"} />
          </Link>
        </div>
      </div>
    </Suspense>
  );
}
