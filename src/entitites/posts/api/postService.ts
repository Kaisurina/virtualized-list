import { baseApi } from "shared/api";
import { IPost } from "../model/posts";

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPostsByPage: builder.query<
      { data: IPost[]; totalCount: number },
      number
    >({
      query: (page) => ({
        url: `/posts?_limit=10&_page=${page}`,
        method: "GET",
      }),

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.data.push(...newItems.data);
      },
      transformResponse(data: IPost[], meta) {
        return {
          data,
          totalCount: Number(meta?.response?.headers.get("X-Total-Count")),
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        if (currentArg && previousArg) {
          return currentArg > previousArg;
        }
        return false;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: "Posts" as const, id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
    getPostById: builder.query<IPost, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, args) =>
        result
          ? [{ type: "Posts", id: result.id }]
          : [{ type: "Posts", id: args }],
    }),
  }),
});

export const { useGetPostsByPageQuery, useGetPostByIdQuery } = postsApi;
