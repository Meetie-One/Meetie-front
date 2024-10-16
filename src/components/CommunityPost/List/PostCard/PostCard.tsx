import Image from "next/image";

import { default as CustomImage } from "@/components/common/Image/Image";

import { POSITION_DATA } from "@/constants/community";

import { cn } from "@/utils/className";
import { convertDate } from "@/utils/date";

import type { CommunityPostType } from "@/types/community";

interface PostCardProps extends React.LiHTMLAttributes<HTMLLIElement> {
  post: CommunityPostType;
  isReadMode?: boolean;
}

const BLUR_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8UA8AAkUBYdOfF4cAAAAASUVORK5CYII=";

const PostCard = ({ post, isReadMode, className, ...props }: PostCardProps) => {
  const mainImage = post.images[0];

  const positionItemClassName = "flex gap-1 items-center ml-1";
  const markerClassName = "w-0.5 h-0.5 rounded-full bg-[#434343]";

  return (
    <li
      className={cn(
        "rounded-lg px-5 py-6 flex flex-col gap-2 bg-white border border-[#D9D9D9]",
        className,
      )}
      {...props}
    >
      <div className="flex whitespace-nowrap text-regular-12 text-[#434343] ">
        <span>{!post.userPosition ? "미정" : post.userPosition}</span>
        {post.position.length === POSITION_DATA.length ? (
          <div className={positionItemClassName}>
            <div className={markerClassName} />
            <span>전체</span>
          </div>
        ) : (
          <div
            className={`flex flex-wrap ${!isReadMode && post.position.length > 5 ? "after:content-['...'] after:ml-0.5" : ""}`}
          >
            {post.position.map((position, index) => (
              <div
                className={cn(positionItemClassName, isReadMode ? "" : "[&:nth-child(n+6)]:hidden")}
                key={`${post.id}/${position}/${index}`}
              >
                <div className={markerClassName} />
                <span>{position}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <h2 className="text-bold-16 text-[#434343]">{post.title}</h2>

      {mainImage &&
        (isReadMode ? (
          <div className="w-full h-full flex flex-nowrap gap-2 overflow-x-scroll hidden-scrollbar">
            {post.images.map((image, index) => (
              <Image
                key={`post_image_${index}`}
                src={image}
                alt="post image"
                width={100}
                height={100}
                className={cn(
                  "object-contain",
                  post.images.length > 1 ? "w-auto h-[120px]" : "w-full h-auto",
                )}
                placeholder="blur"
                blurDataURL={BLUR_IMAGE}
              />
            ))}
          </div>
        ) : (
          <div className="w-full h-[120px] relative rounded-lg border border-[#DCD8EF] overflow-hidden">
            <Image
              src={mainImage}
              fill
              sizes="100%"
              alt="main image"
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL={BLUR_IMAGE}
            />
          </div>
        ))}

      {isReadMode && <p className="text-medium-14 mt-4">{post.contents}</p>}

      {isReadMode ?? (
        <div className="flex justify-between items-center h-6">
          <div className="flex gap-1">
            <CustomImage
              src="/svg/ic-community-calendar.svg"
              alt="calendar"
              className="w-[15px] h-[15px]"
            />
            <span className="text-medium-12 text-[#555555]">
              {convertDate(new Date(post.postDate), true)}
            </span>
          </div>
          <div className="flex gap-1">
            <CustomImage src="/svg/ic-eye.svg" alt="eye" className="w-3.5 h-3.5" />
            <span className="text-medium-12 text-[#908794]">{post.viewCount}</span>
          </div>
        </div>
      )}
    </li>
  );
};

export default PostCard;
