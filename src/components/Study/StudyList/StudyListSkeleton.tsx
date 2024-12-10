import Skeleton from "@/components/common/Skeleton/Skeleton";
import StudyCardSkeleton from "@/components/Study/StudyRoomList/StudyCardSkeleton";

const StudyListSkeleton = () => {
  return (
    <div className="mx-4 pb-[80px] mt-[66px]">
      <Skeleton className="w-full h-[110px]" />
      <Skeleton className="w-full h-[128px] mt-8" />
      <Skeleton className="w-full h-[100px] mt-3" />
      <Skeleton className="w-full h-[50px] mt-10" />
      <Skeleton className="w-full h-[24px] mt-5 mb-[27px]" />
      <StudyCardSkeleton />
    </div>
  );
};

export default StudyListSkeleton;
