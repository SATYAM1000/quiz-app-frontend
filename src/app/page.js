import AvailableQuizTopic from "@/components/home/AvailableQuizTopic";
import { AVAILABLE_QUIZES } from "@/utils/constants";
export default function Home() {
  return (
    <main className={"w-full h-auto flex flex-col lg:flex-row gap-20 "}>
      {/* ------LEFT SIDE----------- */}
      <div className={"w-full lg:flex-1  "}>
        <div className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] text-[48px] heading-l-regular font-[number:var(--heading-l-regular-font-weight)] text-[#313e51] lg:text-[length:var(--heading-l-regular-font-size)] tracking-[var(--heading-l-regular-letter-spacing)] leading-[var(--heading-l-regular-line-height)] whitespace-nowrap [font-style:var(--heading-l-regular-font-style)]">
              Welcome to the
            </div>
            <div className="relative w-fit heading-l-bold text-[48px] font-[number:var(--heading-l-bold-font-weight)] text-[#313e51] lg:text-[length:var(--heading-l-bold-font-size)] tracking-[var(--heading-l-bold-letter-spacing)] leading-[var(--heading-l-bold-line-height)] whitespace-nowrap [font-style:var(--heading-l-bold-font-style)]">
              Frontend Quiz!
            </div>
          </div>
          <p className="relative w-[465px] italic font-body-s font-[number:var(--body-s-font-weight)] text-[#626c7f] text-[length:var(--body-s-font-size)] tracking-[var(--body-s-letter-spacing)] leading-[var(--body-s-line-height)] ">
            Pick a subject to get started.
          </p>
        </div>
      </div>

      {/* ------------RIGHT SIDE------------- */}
      <div className={"w-full lg:flex-1 flex flex-col gap-6"}>
        {AVAILABLE_QUIZES.map((quiz) => {
          return <AvailableQuizTopic key={quiz.id} {...quiz} />;
        })}
      </div>
    </main>
  );
}
