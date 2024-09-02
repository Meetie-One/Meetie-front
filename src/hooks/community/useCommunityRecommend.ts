import { useState } from "react";

import { queryClient } from "@/components/providers/QueryProvider";

import { QUERY_KEYS } from "@/constants/queryKey";

import { useRandomCommunityListQuery } from "@/hooks/api/community/useCommunityListQuery";

export const useCommunityRecommend = () => {
  const { communityListData } = useRandomCommunityListQuery();

  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const { scrollLeft } = e.currentTarget;
    const index = Math.floor(scrollLeft / 343);

    if (index !== scrollIndex) {
      setScrollIndex(index);
    }
  };

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMUNITY_LIST_RECOMMEND] });
  };

  return { communityListData, scrollIndex, handleScroll, handleRefresh };
};
