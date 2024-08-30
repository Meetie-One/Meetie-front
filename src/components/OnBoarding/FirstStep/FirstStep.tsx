import Image from "next/image";

import { POSITIONS_DATA, POSITIONS_KR_DATA } from "@/constants/onBoarding";

import type { OnboardingStepProps } from "@/types/onboarding";

const FirstStep = ({ clicked: clickedPosition, handleClick }: OnboardingStepProps) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex justify-center items-center w-full gap-[8px] pt-[60px]">
        {POSITIONS_DATA.map((position, index) => (
          <button
            key={`positions${index}`}
            value={position}
            onClick={handleClick}
            className={`w-[109px] h-[120px] rounded-lg flex flex-col items-center justify-center gap-[20px] ${
              clickedPosition === position
                ? "bg-primary-200 text-primary-500 border border-primary-500 text-medium-16"
                : "bg-gray-50 text-regular-16"
            }`}
          >
            <Image
              src={`/svg/ic-onboarding-${position}.svg`}
              width={24}
              height={24}
              alt={position}
            />
            <p>{POSITIONS_KR_DATA[index]}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FirstStep;
