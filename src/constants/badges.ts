import type { BadgesType } from "@/types/badge";

export const COMMENT: BadgesType = {
  value: "댓글",
  type: "comment",
  title: "대화를 이어가는 힘!",
  description: `꾸준한 댓글로 활기를 불어넣었어요.\n나의 말 한마디가 사람들을 모으고 대화를 이끌어냅니다.`,
  badges: [
    { title: "댓뉴비", level: 1, icon: "/svg/ic-badge-comment-newbie.svg" },
    { title: "댓러너", level: 2, icon: "/svg/ic-badge-comment-runner.svg" },
    { title: "댓마스터", level: 3, icon: "/svg/ic-badge-comment-master.svg" },
  ],
};

export const SHARE: BadgesType = {
  value: "나눔",
  type: "nanum",
  title: "논쟁을 이끄는 힘!",
  description: `커뮤니티에서 활발한 논의를 이끌었어요.\n나의 아이디어가 새로운 대화의 시작입니다.`,
  badges: [
    { title: "나눔 뉴비", level: 1, icon: "/svg/ic-badge-nanum-newbie.svg" },
    { title: "나눔 러너", level: 2, icon: "/svg/ic-badge-nanum-runner.svg" },
    { title: "나눔 마스터", level: 3, icon: "/svg/ic-badge-nanum-master.svg" },
  ],
};

export const FEEDBACK: BadgesType = {
  value: "피드백",
  type: "feedback",
  title: "변화를 만드는 피드백!",
  description: `피드백이 커뮤니티를 더 나은 방향으로 이끌었습니다.\n나의 IT 스터디 피드백 능력이 상승했어요`,
  badges: [
    { title: "피드 뉴비", level: 1, icon: "/svg/ic-badge-feedback-newbie.svg" },
    { title: "피드 러너", level: 2, icon: "/svg/ic-badge-feedback-runner.svg" },
    { title: "피드 마스터", level: 3, icon: "/svg/ic-badge-feedback-master.svg" },
  ],
};

export const MEETIE: BadgesType = {
  value: "밋티",
  type: "meetie",
  title: "모두가 믿고 따르는 리더쉽!",
  description: `진정한 방장으로 거듭났습니다.\n나의 IT 스터디 방장 능력이 상승했어요`,
  badges: [
    { title: "밋티 뉴비", level: 1, icon: "/svg/ic-badge-meetie-newbie.svg" },
    { title: "밋티 러너", level: 2, icon: "/svg/ic-badge-meetie-runner.svg" },
    { title: "밋티 마스터", level: 3, icon: "/svg/ic-badge-meetie-master.svg" },
  ],
};

export const BADGE_DATA: BadgesType[] = [COMMENT, SHARE, FEEDBACK, MEETIE];
