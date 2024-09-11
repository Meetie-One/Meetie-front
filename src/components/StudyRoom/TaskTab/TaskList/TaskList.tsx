import TaskCard from "@/components/StudyRoom/TaskTab/TaskList/TaskCard/TaskCard";

import { useTaskListQuery } from "@/hooks/api/task/useTaskListQuery";

interface TaskListProps {
  studyRoomId: string;
  isDeadline?: boolean;
}

const TaskList = ({ studyRoomId, isDeadline }: TaskListProps) => {
  const { data } = useTaskListQuery(studyRoomId);

  return (
    <div className="pt-[40px]">
      <div className="flex justify-between">
        <h2 className="text-bold-18">
          📝 과제 목록 <span className="text-[#E12C78]">{data.data.length}</span>
        </h2>
      </div>

      {data.data.map((task) => (
        <TaskCard key={task.title} task={task} isDeadline={isDeadline} />
      ))}
    </div>
  );
};

export default TaskList;
