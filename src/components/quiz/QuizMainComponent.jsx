"use client";
import React from "react";
import data from "@/utils/data.json";
import { useSearchParams } from "next/navigation";
import QuizOptions from "@/components/quiz/QuizOptions";
import Button from "@/components/quiz/Button";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams().get("title");
  const quiz = data.quizzes.find((quiz) => quiz.title === searchParams);

  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [isUserAnswered, setIsUserAnswered] = React.useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(null);
  const [isQuizCompleted, setIsQuizCompleted] = React.useState(false);

  const [correctAnswersCount, setCorrectAnswersCount] = React.useState(0);

  if (!quiz) {
    return <div>Quiz not found.</div>;
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsUserAnswered(false);
      setIsAnswerCorrect(null);
    } else {
      setIsQuizCompleted(true);
    }
  };

  const onAnswerSubmit = () => {
    setIsUserAnswered(true);
    const correctAnswer = quiz.questions[currentQuestionIndex].answer;
    const isCorrect = selectedOption === correctAnswer;
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  };

  const handleSubmitQuiz = () => {
    const url = `/result?title=${quiz.title}&score=${correctAnswersCount}&totalQuestions=${quiz.questions.length}`;
    router.push(url);
  };

  const progress =
    quiz.questions.length > 0
      ? ((currentQuestionIndex + 1) / quiz.questions.length) * 100
      : 0;

  return (
    <section className={`w-full flex flex-col lg:flex-row gap-20 pb-20`}>
      {/* --------LEFT SIDE----------- */}
      <div className={`w-full lg:flex-1`}>
        <div className="inline-flex flex-col lg:h-[452px] items-center justify-between relative flex-[0_0_auto]">
          <div className="flex flex-col w-full items-start gap-[27px] relative flex-[0_0_auto]">
            <div className="relative italic self-stretch mt-[-1.00px] text-[20px]">
              Question {currentQuestionIndex + 1} of {quiz.questions.length}
            </div>
            <p className=" self-stretch font-heading-m font-[number:var(--heading-l-bold-font-weight)] text-[#313e51] text-[36px] tracking-[var(--heading-m-letter-spacing)] leading-[var(--heading-m-line-height)] [font-style:var(--heading-m-font-style)] ">
              {quiz.questions[currentQuestionIndex].question}
            </p>
          </div>
          <div className="flex flex-col w-full mt-6 lg:mt-0 h-4 items-start justify-center gap-2 p-1 relative bg-white rounded-[999px]">
            <div
              className="relative h-2 bg-[#a729f5] rounded-[104px]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* -----------RIGHT SIDE------------- */}
      <div className={`w-full lg:flex-1 flex flex-col gap-6 mb-12 lg:mb-0`}>
        {quiz.questions[currentQuestionIndex].options.map((option, index) => {
          return (
            <QuizOptions
              key={index}
              option={option}
              currentIndex={index}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              isUserAnswered={isUserAnswered}
              isAnswerCorrect={isAnswerCorrect}
              correctAnswer={quiz.questions[currentQuestionIndex].answer}
            />
          );
        })}

        <Button
          name={
            !isUserAnswered
              ? "Submit Answer"
              : isQuizCompleted
              ? "Submit Quiz"
              : "Next Question"
          }
          onClick={
            !isUserAnswered
              ? onAnswerSubmit
              : isQuizCompleted
              ? handleSubmitQuiz
              : handleNextQuestion
          }
          disabled={!selectedOption && !isUserAnswered}
        />
      </div>
    </section>
  );
}