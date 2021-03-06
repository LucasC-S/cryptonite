import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const fetchNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': "d7c1e76dd7msh89056877eadec9cp166151jsnee28e99df98e"
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: fetchNewsHeaders})

export const fetchNews = createApi({
    reducerPath: 'fetchNews',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetNewsQuery } = fetchNews