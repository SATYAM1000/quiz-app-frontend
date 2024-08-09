import Image from "next/image";

export default function BackgroundPattern() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden  ">
      <Image
        src="/desktop-pattern.svg"
        alt="background-pattern"
        fill
        className="hidden lg:block object-cover"
      />

      <Image
        src="/phone-pattern.svg"
        alt="background-pattern"
        fill
        className="block lg:hidden object-cover"
      />
    </div>
  );
}
