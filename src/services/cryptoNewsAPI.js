import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsHeaders = {
  "X-RapidAPI-Key": "1adbc39d74msh5b43fcbf3f3d4c1p108295jsnad24e2ba0516",
  "X-RapidAPI-Host": "investing4.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: newsHeaders });

const baseUrl = "https://investing4.p.rapidapi.com/";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest(`news/cryptocurrency-news`),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;