import { Suspense } from "react";

import { ServerFetchBoundary } from "@/apis/ServerFetchBoundary";

import Gnb from "@/components/common/Gnb/Gnb";
import MyPageBody from "@/components/MyPage/MypageBody/MyPageBody";
import MyPageBodySkeleton from "@/components/MyPage/MypageBody/MyPageBodySkeleton";
import MyPageHeader from "@/components/MyPage/MyPageHeader/MyPageHeader";

import { userInfoQueryOptions } from "@/hooks/api/userInfo/useUserInfoQuery";

export default function MyPage() {
  const serverFetchOptions = [userInfoQueryOptions()];
  return (
    <>
      <MyPageHeader />

      <Suspense fallback={<MyPageBodySkeleton />}>
        <ServerFetchBoundary fetchOptions={serverFetchOptions}>
          <MyPageBody />
        </ServerFetchBoundary>
      </Suspense>

      <Gnb />
    </>
  );
}
