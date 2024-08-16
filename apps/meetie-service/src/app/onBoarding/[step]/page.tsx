"use client";

import Button from "@/components/common/Button/Button";
import FirstStep from "@/components/OnBoarding/FirstStep/FirstStep";
import FourthStep from "@/components/OnBoarding/FourthStep/FourthStep";
import SecondStep from "@/components/OnBoarding/SecondStep/SecondStep";
import ThirdStep from "@/components/OnBoarding/ThirdStep/ThirdStep";
import { notFound, useParams, useRouter } from "next/navigation";

const QUESTION = [
  {
    TITLE: { FIRST: "김서희님이 관심있는", SECOND: "직무는 무엇인가요?" },
    SUBTEXT: "선택한 직무를 바탕으로 스터디를 추천해줄게요!",
  },
  {
    TITLE: { FIRST: "김서희님의", SECOND: "스터디 목적은 무엇인가요?" },
    SUBTEXT: "중복선택도 가능해요",
  },
  {
    TITLE: { FIRST: "김서희님은", SECOND: "어떤 스타일이신가요?" },
    SUBTEXT: "미티님과 비슷하다고 생각되는 키워드를 모두 선택해주세요",
  },
  {
    TITLE: { FIRST: "김서희님의", SECOND: "예상 스터디 기간은 얼마인가요?" },
    SUBTEXT: "나와 비슷한 유저들과 스터디할 수 있도록 도와드려요!",
  },
];

const STEPS = ["job", "purpose", "style", "period"];

export default function OnBoardingPage() {
  const navigate = useRouter();
  const params = useParams();
  const step = params.step as string;
  const currentStepIndex = STEPS.indexOf(step);

  const handlePrevStep = () => {
    currentStepIndex === 0 || navigate.push(`/onBoarding/${STEPS[currentStepIndex - 1]}`);
  };

  const handleNextStep = () => {
    currentStepIndex === 3 || navigate.push(`/onBoarding/${STEPS[currentStepIndex + 1]}`);
  };

  if (!STEPS.includes(step)) {
    return notFound();
  }

  return (
    <main className="flex flex-col h-full">
      <div className="p-[16px] flex justify-between items-center text-gray-200 text-medium-14">
        <p>
          <span className="text-black">{currentStepIndex + 1}</span>/4
        </p>
        <button>SKIP</button>
      </div>

      <article className="flex flex-col h-max">
        <div className="w-full pt-[54px] px-4">
          <span className="mb-[20px]">
            <h1 className="text-semibold-24">{QUESTION[currentStepIndex].TITLE.FIRST}</h1>
            <h1 className="text-semibold-24">{QUESTION[currentStepIndex].TITLE.SECOND}</h1>
          </span>
          <p className="text-gray-200 text-regular-14">{QUESTION[currentStepIndex].SUBTEXT}</p>
        </div>
        {currentStepIndex === 0 && <FirstStep />}
        {currentStepIndex === 1 && <SecondStep />}
        {currentStepIndex === 2 && <ThirdStep />}
        {currentStepIndex === 3 && <FourthStep />}
      </article>

      <div className="mt-auto px-4 pb-[42px]">
        <p className="text-center text-gray-200 text-medium-12 mb-[13px]">
          내용은 다시 수정할 수 있어요!
        </p>
        <div className="flex items-center gap-[14px]">
          <Button variant="outline" size="sm" onClick={() => handlePrevStep()}>
            <span className="text-gray-200 text-bold-16">이전</span>
          </Button>
          <Button onClick={() => handleNextStep()}>
            <span className="text-white text-bold-16">다음</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
