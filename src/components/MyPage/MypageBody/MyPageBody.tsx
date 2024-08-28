"use client";

import Link from "next/link";

import Avatar from "@/components/common/Avatar/Avatar";
import Image from "@/components/common/Image/Image";
import BadgeCard from "@/components/MyPage/BadgeCard/BadgeCard";
import ClockIcon from "@/components/MyPage/ClockIcon";
import Divider from "@/components/MyPage/dividers/Divider/Divider";
import ThickDivider from "@/components/MyPage/dividers/ThickDivider/ThickDivider";
import InformationCard from "@/components/MyPage/InformationCard/InformationCard";
import MenuListItem from "@/components/MyPage/MenuListItem/MenuListItem";

import { INFORMATIONS_DATA, MENU_ITEMS_DATA } from "@/constants/mypage";
import { PATH } from "@/constants/path";

import { useUpdateUserInfoMutation } from "@/hooks/api/userInfo/useUpdateUserInfoMutation";
import { useUserInformationQuery } from "@/hooks/api/userInfo/useUserInformationQuery";

const MyPageBody = () => {
  const { mutate: updateUserInfoMutation } = useUpdateUserInfoMutation();
  const { userId, user } = useUserInformationQuery();

  const handleChangeInfoAgreement = () => {
    updateUserInfoMutation({
      id: userId,
      updateUserForm: { informationAgreement: !user.informationAgreement },
    });
  };

  return (
    <>
      {/* 프로필 카드 */}
      <div className="flex justify-between mt-10 px-4">
        <div className="flex gap-4 items-center">
          <Avatar src={user.profileImage} />
          <div className="flex flex-col gap-1 items-start">
            <p className="text-medium-16 text-gray-400">디자이너</p>
            <p className="text-bold-20">{user.name}</p>
          </div>
        </div>
        {/* TODO: user 정보가 없을 경우 로그인 페이지로 redirect */}
        <Link href={PATH.USER_PROFILE(userId)} className="self-end">
          <button className="border rounded border-primary-200 bg-primary-50 p-2">
            <p className="text-medium-12 text-primary-450">공개용 프로필</p>
          </button>
        </Link>
      </div>

      {/* 일정 */}
      <div className="flex justify-between mt-9 mx-4 border border-primary-200 rounded bg-[#F9F9F9] px-5 py-4">
        <div className="flex gap-3.5 items-center">
          <p className="text-primary-350 text-medium-14 relative after:h-2.5 after:absolute after:top-1 after:ml-3.5 after:border after:border-primary-200">
            피그마 팔로업 회의
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <ClockIcon color="#A180F4" width="16" height="15" />
          <p className="text-[#645294] text-medium-14">오늘 오후 8:30 PM</p>
        </div>
      </div>

      {/* 내 정보 */}
      <div className="flex flex-col gap-3 px-4 mt-9">
        <header className="text-bold-18">내 정보</header>
        <section className="grid grid-cols-3 border border-primary-200 rounded-lg py-9 bg-primary-50">
          {/* TODO: user 정보 없을 경우 redirect */}
          <InformationCard
            count={2} // TODO: user.studyList.length
            informationData={INFORMATIONS_DATA.STUDY}
            navigateTo={PATH.STUDY_JOINING_LIST}
          />
          <InformationCard
            count={9} // TODO: user.scrapList.length
            informationData={INFORMATIONS_DATA.SCRAP}
            navigateTo={PATH.STUDY_INTEREST_LIST}
          />
          {/* TODO: user 친구 리스트 데이터 생성 */}
          <InformationCard
            count={13}
            informationData={INFORMATIONS_DATA.FOLLOW}
            navigateTo={PATH.USER_FOLLOW_LIST(userId ?? 0)}
          />
        </section>
      </div>

      {/* 내 능력 현황 */}
      <Link href={PATH.ABILITY}>
        <section className="flex flex-col gap-7 mt-8 mb-12 bg-white">
          <div className="flex justify-between items-center px-3.5">
            <h3 className="text-bold-18">내 능력 현황</h3>
            <Image src="svg/ic-thick-arrow-right.svg" alt="next" className="w-[8px] h-[14px]" />
          </div>
          <div className="grid grid-cols-4 px-4">
            <BadgeCard type="댓글" level={3} />
            <BadgeCard type="나눔" title="토론" level={1} />
            <BadgeCard type="밋티" title="방장" level={3} />
            <BadgeCard type="피드백" level={2} />
          </div>
        </section>
      </Link>

      <ThickDivider />

      <div className="flex flex-col gap-8 mt-8 mb-12 px-4">
        {/* 내 스터디 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">내 스터디</header>
          <ul className="flex flex-col gap-4">
            {/* TODO: 진행 중인 스터디와 종료된 스터디 구분 필요 */}
            <MenuListItem menuItemData={MENU_ITEMS_DATA.JOINING} isPrimary studyCount={2} />

            <MenuListItem menuItemData={MENU_ITEMS_DATA.PAST} studyCount={8} />
          </ul>
        </div>

        <Divider />

        {/* 관심 보인 스터디 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">관심 보인 스터디</header>
          <ul className="flex flex-col gap-4">
            <MenuListItem
              // TODO: 최근 방문한 관심 스터디 ID로 수정 (user.recentVisit)
              navigateTo={PATH.STUDY(1)}
              menuItemData={MENU_ITEMS_DATA.RECENT_VISIT}
            />

            <MenuListItem menuItemData={MENU_ITEMS_DATA.INTEREST} studyCount={8} />
          </ul>
        </div>
      </div>

      <ThickDivider />

      <div className="flex flex-col gap-8 mt-8 mb-16 px-4">
        {/* 고객 센터 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">고객 센터</header>
          <ul className="flex flex-col gap-4">
            <MenuListItem menuItemData={MENU_ITEMS_DATA.FAQ} />
            <MenuListItem menuItemData={MENU_ITEMS_DATA.INQUIRY} />
            <MenuListItem menuItemData={MENU_ITEMS_DATA.NOTIFICATION} isUpdated />
          </ul>
        </div>

        <Divider />

        {/* 계정 정보 */}
        <div className="flex flex-col gap-6">
          <header className="text-bold-18">계정 정보</header>
          <ul className="flex flex-col gap-4">
            <MenuListItem
              navigateTo={PATH.USER_PROFILE_EDIT(user.id)}
              menuItemData={MENU_ITEMS_DATA.PROFIL_EDIT}
            />
            <MenuListItem menuItemData={MENU_ITEMS_DATA.PASSWORD_EDIT} />
            <MenuListItem
              menuItemData={MENU_ITEMS_DATA.INFORMATION_AGREEMENT}
              isToggle={user?.informationAgreement}
              handleUpdateToggle={handleChangeInfoAgreement}
            />
            <MenuListItem menuItemData={MENU_ITEMS_DATA.WITHDRAW} />
          </ul>
        </div>
      </div>
    </>
  );
};
export default MyPageBody;