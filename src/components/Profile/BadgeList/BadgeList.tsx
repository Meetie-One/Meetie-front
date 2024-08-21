import HighlightBadge from "@/components/MyPage/Profile/HighlightBadge/HighlightBadge";

interface BadgeListProps {
  isEdit?: boolean;
}

const BadgeList = ({ isEdit }: BadgeListProps) => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <p className="text-bold-18">{isEdit ? "대표 뱃지 설정" : "하이라이트 뱃지"}</p>

      <div className="flex flex-nowrap gap-4 overflow-x-scroll hidden-scrollbar">
        {/* 뱃지 클릭시 select 변경 기능 state로 구현 */}
        <HighlightBadge type="밋티" level={3} selected={isEdit} />
        <HighlightBadge type="댓글" level={3} />
        <HighlightBadge type="나눔" level={3} />
      </div>
    </div>
  );
};

export default BadgeList;