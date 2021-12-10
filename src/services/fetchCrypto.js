import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const fetchCryptoHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': "d7c1e76dd7msh89056877eadec9cp166151jsnee28e99df98e"
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: fetchCryptoHeaders})

export const fetchCrypto = createApi({
    reducerPath: 'fetchCrypto',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        })
    })
})

export const { useGetCryptosQuery, useGetExchangesQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = fetchCrypto