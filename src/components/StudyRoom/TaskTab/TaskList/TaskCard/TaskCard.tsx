import Image from "next/image";

import Button from "@/components/common/Button/Button";
import Timer from "@/components/StudyRoom/TaskTab/TaskList/TaskCard/Timer/Timer";

import type { TaskListType } from "@/types/task";

interface TaskCardProps {
  task: TaskListType;
  isDeadline?: boolean;
}

const TaskCard = ({ task, isDeadline }: TaskCardProps) => {
  return (
    <div className="relative rounded-lg border border-[#E0DDF1] px-4 py-5 mt-3 mb-4">
      <h4 className="text-medium-16">{task.title}</h4>
      <p className="text-medium-12 text-[#82829B]">
        <span className="text-[#4C4CC7]">3명의 팀원</span>이 수행했어요 👍
      </p>
      <div className="absolute top-4 right-4 flex items-center justify-center w-[50px] h-[50px] bg-[conic-gradient(var(--tw-gradient-stops))] from-primary-500 from-90% to-[#EDF1FF] to-90% rounded-full">
        <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full">
          <p className="text-bold-12 text-center text-primary-500">90%</p>
        </div>
      </div>

      {isDeadline && (
        <div className="w-fit flex items-center gap-1 bg-[#FF2C84]/10 px-2 py-1 rounded-[4px] mt-3">
          <Image src="/svg/ic-calendar-clock.svg" alt="icon" width={11} height={12} />
          <Timer endDate={task.endDate} />
        </div>
      )}

      <Button className="w-full py-[10px] mt-3" variant="secondary">
        <span className="text-white text-semibold-16">인증하기</span>
      </Button>
    </div>
  );
};

export default TaskCard;
