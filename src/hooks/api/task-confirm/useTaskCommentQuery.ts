import type { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { GET, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { GetTaskCommentResponseType } from "@/types/taskConfirm";

const getTaskComments = async (taskConfirmId: string) => {
  const comments = await GET<GetTaskCommentResponseType>(
    END_POINTS.TASK_COMMENTS(taskConfirmId),
    createInit(),
  );

  return comments;
};

export const taskCommentsQueryOptions = (
  taskConfirmId: string,
): UseSuspenseQueryOptions<GetTaskCommentResponseType> => ({
  queryKey: [QUERY_KEYS.TASK_CONFIRM, taskConfirmId, QUERY_KEYS.TASK_COMMENTS],
  queryFn: async () => await getTaskComments(taskConfirmId),
});

export function useTaskCommentQuery(taskConfirmId: string) {
  return useSuspenseQuery(taskCommentsQueryOptions(taskConfirmId));
}
