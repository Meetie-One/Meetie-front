import Image from "next/image";
import Link from "next/link";

import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Gnb from "@/components/common/Gnb/Gnb";
import StudyList from "@/components/Study/StudyList/StudyList";
import StudyListSkeleton from "@/components/Study/StudyList/StudyListSkeleton";
import StudyRoomListHeader from "@/components/Study/StudyList/StudyRoomListHeader";

import { PATH } from "@/constants/path";

import { studyListQueryOptions } from "@/hooks/api/study/useStudyListQuery";

export default function Page() {
  const serverFetchOptions = [studyListQueryOptions()];

  return (
    <>
      <StudyRoomListHeader />
      <article className="mx-4">
        <div className="mt-[50px] mb-[32px]">
          <h1 className="text-bold-18 mb-2">
            아직 스터디가
            <br />
            존재하지 않아요!
          </h1>
          <h2 className="text-medium-14 text-gray-200">#원하는 스터디를 탐색해 볼까요?</h2>
        </div>
        <Link href={PATH.STUDY_EXPLORER}>
          <div className="h-35 max-w-full p-6 bg-gray-50 rounded-lg mb-[12px]">
            <div className="flex justify-between">
              <div>
                <h2 className="text-medium-14 text-gray-200">
                  밋티의 맞춤형 스터디를 탐색해보세요!
                </h2>
                <h1 className="text-bold-18 mb-3">스터디 탐색하기</h1>
                <label className="bg-[#E3E3FA] text-[#4A5999] text-medium-12 p-2 rounded-lg">
                  바로가기
                </label>
              </div>
              <div className="relative">
                <div className="absolute w-[70px] h-[81px] bg-blue-400 mix-blend-hue z-10" />
                <Image
                  className="opacity-75"
                  src="/img/img-thinking_face.png"
                  alt="thinking face"
                  width={70}
                  height={70}
                  priority
                />
              </div>
            </div>
          </div>
        </Link>
        <Link
          href={PATH.STUDY_CREATE}
          className="bg-[#E3E3FA] max-w-full block px-[22px] py-[25px] rounded-lg mb-10"
        >
          <div className="flex justify-between">
            <div className="my-auto">
              <h2 className="text-medium-14 text-gray-200">찾으시는 스터디가 없으신가요?</h2>
              <h2 className="text-bold-14">쉽고 빠른 스터디 개설하기!</h2>
            </div>
            <div className="relative">
              <div className="absolute w-[55px] h-[55px] bg-blue-400 mix-blend-hue z-10" />
              <Image
                className="opacity-75"
                src="/img/img-waving_hand.png"
                alt="waving hand"
                width={55}
                height={55}
                priority
              />
            </div>
          </div>
        </Link>
      </article>
      <Suspense fallback={<StudyListSkeleton />}>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <StudyList />
        </ServerFetchBoundary>
      </Suspense>

      <Gnb />
    </>
  );
}
