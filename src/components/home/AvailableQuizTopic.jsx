import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AvailableQuizTopic({ ...quiz }) {
  const bgStyle = {
    backgroundColor: quiz.backgroundColor,
    borderRadius: "0.4rem",
  };
  return (
    <Link
      href={`/quiz` + `?title=${quiz.title}`}
      className="flex w-full items-center gap-8 p-5  relative flex-[0_0_auto] bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0px_16px_40px_#8fa0c124]"
    >
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
    </Link>
  );
}
