import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Gnb from "@/components/common/Gnb/Gnb";
import StudyList from "@/components/Study/StudyList/StudyList";
import StudyListSkeleton from "@/components/Study/StudyList/StudyListSkeleton";
import StudyListTop from "@/components/Study/StudyList/StudyListTop";
import StudyRoomListHeader from "@/components/Study/StudyList/StudyRoomListHeader";

import { studyListQueryOptions } from "@/hooks/api/study/useStudyListQuery";
import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function Page() {
  const serverFetchOptions = [studyListQueryOptions(), userInfoQueryOptions()];

  return (
    <>
      <StudyRoomListHeader />

      <Suspense fallback={<StudyListSkeleton />}>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <StudyListTop />
          <StudyList />
        </ServerFetchBoundary>
      </Suspense>

      <Gnb />
    </>
  );
}
