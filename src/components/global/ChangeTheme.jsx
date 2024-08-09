import React from "react";
import Image from "next/image";

export default function ChangeTheme() {
  return (
    <div className="inline-flex items-center gap-4">
      <Image
        width={10}
        height={10}
        className="relative w-6 h-6"
        alt="Fluent weather sunny"
        src="/light.svg"
      />
      <div className="inline-flex items-start p-1 relative flex-[0_0_auto] bg-vibrantPurple rounded-[999px] cursor-pointer">
        <div className="bg-white relative w-5 h-5 rounded-[10px]" />
        <div className="relative w-5 h-5 rounded-[10px]" />
      </div>
      <Image
        width={10}
        height={10}
        className="relative w-6 h-6"
        alt="Fluent weather moon"
        src={"/dark.svg"}
      />
    </div>
  );
}
