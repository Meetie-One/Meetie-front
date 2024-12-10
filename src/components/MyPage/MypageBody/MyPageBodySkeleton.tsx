import Skeleton from "@/components/common/Skeleton/Skeleton";

const MyPageBodySkeleton = () => {
  return (
    <div className="px-4">
      <Skeleton className="w-full h-[60px] mt-14" />
      <Skeleton className="w-full h-8 mt-9" />
      <Skeleton className="w-full h-[150px] mt-3" />
      <Skeleton className="w-full h-8 mt-8" />
      <Skeleton className="w-full h-[134px] mt-7" />
      <Skeleton className="w-full h-8 mt-20" />
      <Skeleton className="w-full h-[104px] mt-6" />
    </div>
  );
};

export default MyPageBodySkeleton;
