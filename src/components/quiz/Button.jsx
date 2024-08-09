import React from "react";

export default function Button({ name, onClick, disabled }) {
  if (!name) return null;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer mt-4 flex items-center justify-center gap-2 p-6 relative self-stretch w-full flex-[0_0_auto] rounded-3xl overflow-hidden shadow-[0px_16px_40px_#8fa0c124] transition-all duration-300 ${
        disabled
          ? "bg-[#a729f5] cursor-not-allowed"
          : "bg-[#a729f5] hover:bg-purple-400"
      }`}
    >
      <div className="relative w-fit mt-[-1.00px] font-heading-s font-[number:var(--heading-s-font-weight)] text-white text-[length:var(--heading-s-font-size)] tracking-[var(--heading-s-letter-spacing)] leading-[var(--heading-s-line-height)] whitespace-nowrap [font-style:var(--heading-s-font-style)]">
        {name}
      </div>
    </button>
  );
}
