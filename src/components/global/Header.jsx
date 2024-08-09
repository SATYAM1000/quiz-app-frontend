"use client";
import React from "react";
import ChangeTheme from "./ChangeTheme";
import { useSearchParams } from "next/navigation";
import { AVAILABLE_QUIZES } from "@/utils/constants";
import Image from "next/image";
export default function Header() {
  const searchParams = useSearchParams().get("title");
  const quiz = AVAILABLE_QUIZES.find((quiz) => quiz.title === searchParams);
  const bgStyle = {
    backgroundColor: quiz?.backgroundColor,
    borderRadius: "0.4rem",
  };

  return (
    <section
      className={`w-full h-auto flex items-center ${
        quiz ? "justify-between" : "justify-end"
      } py-[2.5rem] lg:py-[5.18rem]`}
    >
      {/* ---LEFT SIDE---- */}

      {quiz && (
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
      )}

      {/* -------RIGHT SIDE------ */}
      <ChangeTheme />
    </section>
  );
}
