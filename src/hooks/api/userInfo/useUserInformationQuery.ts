import type { AxiosError } from "axios";

import { useSuspenseQuery } from "@tanstack/react-query";

import { getUserInfo } from "@/apis/userInfo/getUserInfo";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetUserInfoResponseType, ProfileFormType } from "@/types/userInfo";

export const useUserInformationQuery = (id?: string) => {
  const { data: userData } = useSuspenseQuery<GetUserInfoResponseType, AxiosError>({
    queryKey: [QUERY_KEYS.USER_INFO, id],
    queryFn: () => getUserInfo(id),
  });

  const user = userData.data;

  const initialProfileForm: ProfileFormType = {
    name: user.name,
    introduce: user.introduce,
    profileImage: user.profileImage,
    mainBadge: user.mainBadge,
    position: user.position,
    purposes: user.purposes,
    styles: user.styles,
    period: user.period,
  };

  return { userId: user.user_id, userData, user, initialProfileForm };
};
