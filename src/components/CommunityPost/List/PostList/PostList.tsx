"use client";

import Image from "next/image";

import Divider from "@/components/common/Divider/Divider";
import Filter from "@/components/common/Filter/Filter";
import PostCard from "@/components/CommunityPost/List/PostCard/PostCard";

import { POSITION_DATA, SORT_OPTION_DATA, POSTDATE_OPTION_DATA } from "@/constants/community";

import { useCommunityListQuery } from "@/hooks/api/community/useCommunityListQuery";
import { useCommunityFilter } from "@/hooks/community/useCommunityFilter";

const PostList = () => {
  const { filterOption, handleClickTag, updateFilterOption } = useCommunityFilter({});
  const { communityListData } = useCommunityListQuery();

  return (
    <div className="pb-10">
      <div className="flex flex-col gap-5 my-8">
        <div className="flex flex-col gap-2 mx-4">
          <div className="flex justify-between items-center">
            <h1 className="text-bold-18 text-gray-600">주제별 게시글</h1>
            <div className="flex items-baseline">
              <button className="text-regular-14 text-[#82829B] self-start">더보기</button>
              <Image src="/svg/ic-arrow-right.svg" alt="more" width={20} height={20} />
            </div>
          </div>
          <p className="text-regular-14 text-[#82829B]">
            서비스 주제에 따른 게시글을 확인해보세요!
          </p>
        </div>

        <Filter>
          <Filter.FilterTag>
            <Filter.FilterTagSelect
              tags={POSITION_DATA}
              selected={filterOption.tags}
              handleClick={(tag: string) => updateFilterOption("tags", handleClickTag(tag))}
              handleClickTotal={() => updateFilterOption("tags", handleClickTag())}
            />
          </Filter.FilterTag>

          <Filter.FilterOption totalCount={2001}>
            <Filter.FilterOptionSelect
              options={SORT_OPTION_DATA}
              name="sort"
              value={filterOption.sort}
              onChange={(e) => updateFilterOption("sort", e.target.value)}
            />

            <Filter.FilterOptionSelect
              options={POSTDATE_OPTION_DATA}
              name="date"
              value={filterOption.date}
              onChange={(e) => updateFilterOption("date", e.target.value)}
            />
          </Filter.FilterOption>
        </Filter>

        <Divider className="bg-[#F1F2F6]" />

        <ul className="flex flex-col gap-4 px-4">
          {communityListData.data.map((post) => (
            <PostCard className="border border-[#EAEAEA]" post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostList;
