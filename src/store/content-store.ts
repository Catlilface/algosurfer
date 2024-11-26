import { createApi } from '@reduxjs/toolkit/query'

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getRepoByName: builder.query<any, string>({
      query: (name, repo) => `repos/${name}/${repo}/contents/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi