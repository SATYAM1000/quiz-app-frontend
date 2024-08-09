import Image from "next/image";

export default function QuizOptions({
  option,
  currentIndex,
  selectedOption,
  setSelectedOption,
  isUserAnswered,
  correctAnswer,
}) {
  if (!option) return null;
  const letters = ["A", "B", "C", "D"];

  const isCorrect = option === correctAnswer;
  const isSelected = selectedOption === option;

  const borderColor = isSelected
    ? isUserAnswered
      ? isCorrect
        ? "border-green-500"
        : "border-red-500"
      : "border-vibrantPurple"
    : "border-transparent hover:border-vibrantPurple";

  const letterBgColor = isSelected
    ? isUserAnswered
      ? isCorrect
        ? "bg-green-500 text-white"
        : "bg-red-500 text-white"
      : "bg-vibrantPurple text-white"
    : "bg-veryLightBlue text-[#626c7f] group-hover:bg-[#F6E7FF] group-hover:text-vibrantPurple";

  return (
    <button
      onClick={() => !isUserAnswered && setSelectedOption(option)}
      className={`flex w-full items-center justify-between gap-8 p-4 lg:p-5 relative flex-[0_0_auto] bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-[0px_16px_40px_#8fa0c124] group transition-all duration-300 border-[3px] ${borderColor}`}
    >
      <div className="inline-flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-md shrink-0 font-medium text-[28px] flex items-center justify-center transition-all duration-300 ${letterBgColor}`}
        >
          {letters[currentIndex]}
        </div>
        <div
          className="relative w-fit text-[#313e51] whitespace-nowrap font-medium text-heading-body-m lg:text-heading-s text-wrap"
        >
          {option}
        </div>
      </div>

      {isUserAnswered && isCorrect && (
        <Image
          width={10}
          height={10}
          className="w-6 h-6"
          alt="correct-icon"
          src="/correct-icon.svg"
        />
      )}
      {isUserAnswered && !isCorrect && isSelected && (
        <Image
          width={10}
          height={10}
          className="w-6 h-6"
          alt="wrong-icon"
          src="/wrong-icon.svg"
        />
      )}
    </button>
  );
}
