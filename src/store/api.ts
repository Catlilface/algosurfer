import { createApi } from '@reduxjs/toolkit/query/react'

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Article, Directory, Params } from './types'

const BASE_URL = 'https://api.gitub.com'
const RAW_BASE_URL = 'https://raw.ithubusercontent.com'
const OWNER = 'catlilface'
const REPO = 'algosurfer'
const DOCS_PATH = 'docs'

export const contentApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getDirectories: builder.query<Directory[], Params>({
      query: () => `repos/${OWNER}/${REPO}/contents/${DOCS_PATH}`,
    }),
    getDocuments: builder.query<Article[], Params>({
      query: ({ path }) => `repos/${OWNER}/${REPO}/contents/${path}`,
    }),
  }),
})
export const rawContentApi = createApi({
  reducerPath: 'rawContentApi',
  baseQuery: fetchBaseQuery({ baseUrl: RAW_BASE_URL }),
  endpoints: (builder) => ({
    getArticle: builder.query<Article, Params>({
      query: ({ path, language }) => `${OWNER}/${REPO}/master/${DOCS_PATH}/${path}/article.${language}.md`,
    }),
  }),
})

export const { useGetDirectoriesQuery, useGetDocumentsQuery } = contentApi
export const { useGetArticleQuery } = rawContentApi