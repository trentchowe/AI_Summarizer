import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/*const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
*/
let rapidApiKey = '4b08aac12cmsh271e91886559b14p1d32e7jsn84603bb8d4e5'

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", rapidApiKey);
            headers.set("X-RapidAPI-Host", 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi