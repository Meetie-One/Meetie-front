import { useMutation, useQueryClient } from "@tanstack/react-query";

import { POST, createInit } from "@/apis/httpMethod";

import { END_POINTS } from "@/constants/api";
import { QUERY_KEYS } from "@/constants/queryKey";

import type { CreateStudyFormRequestType } from "@/types/study";

export const usePostStudyMutation = () => {
  const queryClient = useQueryClient();

  const postStudyMutation = useMutation({
    mutationFn: (createStudyForm: CreateStudyFormRequestType) =>
      POST(END_POINTS.POST_STUDY, createInit(createStudyForm)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STUDY_LIST] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return postStudyMutation;
};
