import { type UseSuspenseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

import { getCommunityList, getRecommendedCommunityList } from "@/apis/community/getCommunityList";

import { QUERY_KEYS } from "@/constants/queryKey";

import type { FilterSelectedType, GetCommunityListResponseType } from "@/types/community";

export const communityListQueryOptions = (
  filterOption?: FilterSelectedType,
): UseSuspenseQueryOptions<GetCommunityListResponseType> => ({
  queryKey: [QUERY_KEYS.COMMUNITY_LIST],
  queryFn: async () => await getCommunityList(filterOption),
});

export const RecommendedCommunityListQueryOptions =
  (): UseSuspenseQueryOptions<GetCommunityListResponseType> => ({
    queryKey: [QUERY_KEYS.COMMUNITY_LIST_RECOMMEND],
    queryFn: async () => await getRecommendedCommunityList(),
  });

export const useCommunityListQuery = (filterOption: FilterSelectedType) => {
  return useSuspenseQuery(communityListQueryOptions(filterOption));
};

export const useRandomCommunityListQuery = () => {
  return useSuspenseQuery(RecommendedCommunityListQueryOptions());
};