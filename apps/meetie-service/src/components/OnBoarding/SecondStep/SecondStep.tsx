import TagButton from "@/components/common/TagButton/TagButton";
import { useState } from "react";

export default function SecondStep() {
  const PURPOSES = ["자기 개발", "툴 능력 향상", "해당 분야의 네트워킹 확장", "취미"];

  const [clickedPurpose, setClickedPurpose] = useState<string[]>([]);

  const handleClickPurpose = (newPurpose: string) => {
    clickedPurpose.includes(newPurpose)
      ? setClickedPurpose((prevs) => prevs.filter((prev) => prev !== newPurpose))
      : setClickedPurpose((prev) => [...prev, newPurpose]);
  };

  return (
    <div className="flex flex-col items-center w-full h-full px-4">
      <div className="w-full pt-[60px] flex flex-col gap-3 justify-center items-start text-regular-16">
        {PURPOSES.map((purpose, index) => (
          <TagButton
            key={`purpose${index}`}
            hasIcon
            variant={clickedPurpose.includes(purpose) ? "select" : "default"}
            onClick={() => handleClickPurpose(purpose)}
          >
            {purpose}
          </TagButton>
        ))}
        <TagButton variant="add" />
      </div>
    </div>
  );
}