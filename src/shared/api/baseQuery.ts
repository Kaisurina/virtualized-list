import { type BaseQueryFn } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  type FetchArgs,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BACKEND_URI,
  prepareHeaders: (headers) => {
    return headers;
  },
});
