"use client";

import { useRouter } from "next/navigation";

import Image from "@/components/common/Image/Image";
import Toggle from "@/components/MyPage/Toggle/Toggle";

interface MenuItemDataType {
  title: string;
  icon?: string;
  navigateTo?: string;
}

interface MenuListItemProps {
  menuItemData: MenuItemDataType;
  isToggle?: boolean;
  isUpdated?: boolean;
  isPrimary?: boolean;
  studyCount?: number;
  handleClickItem?: () => void;
}

const MenuListItem = ({
  menuItemData,
  isToggle,
  isUpdated,
  isPrimary,
  studyCount,
  handleClickItem,
}: MenuListItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (menuItemData.navigateTo) {
      router.push(menuItemData.navigateTo);
    } else if (handleClickItem) {
      handleClickItem();
    }
  };

  return (
    <li onClick={handleClick}>
      <article className="flex justify-between items-center cursor-pointer">
        <div className="flex gap-2 items-center">
          {menuItemData.icon && (
            <Image src={menuItemData.icon} alt="study menu" className="w-[15px] h-[15px]" />
          )}
          <p
            className={`text-medium-16 text-gray-600 ${isUpdated && "relative after:absolute after:h-2 after:w-2 after:rounded-full after:top-0 after:-right-2 after:bg-red-500"}`}
          >
            {menuItemData.title}
          </p>
          {studyCount !== undefined && (
            <div className={isPrimary ? "w-5 h-5 rounded-full bg-blue-100 text-primary-500" : ""}>
              <p className="text-semibold-16 text-center">{studyCount}</p>
            </div>
          )}
        </div>

        {isToggle === undefined ? (
          <Image src="svg/ic-arrow-right.svg" alt="arrow right" className="w-[24px] h-[24px]" />
        ) : (
          <Toggle checked={isToggle} />
        )}
      </article>
    </li>
  );
};

export default MenuListItem;
