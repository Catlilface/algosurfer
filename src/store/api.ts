import { BaseQueryExtraOptions, createApi } from '@reduxjs/toolkit/query/react'

import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Article, Directory, Params } from './types'
import { Construction } from 'lucide-react'

const BASE_URL = 'https://api.github.com'
const RAW_BASE_URL = 'https://raw.githubusercontent.com'
const OWNER = 'catlilface'
const REPO = 'algosurfer'
const DOCS_PATH = 'src/docs'

export const contentApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getDirectories: builder.query<Directory[], Params>({
      query: () => `repos/${OWNER}/${REPO}/contents/${DOCS_PATH}`,
    }),
    getDocuments: builder.query<Article[], Params>({
      query: ({ path }) => `repos/${OWNER}/${REPO}/contents/${DOCS_PATH}/${path}`,
    }),
  }),
})
export const rawContentApi = createApi({
  reducerPath: 'rawContentApi',
  baseQuery: fetchBaseQuery({ baseUrl: RAW_BASE_URL }),
  endpoints: (builder) => ({
    getArticle: builder.query<string, Params>({
      query: ({ path, language = 'en' }) => ({
        url: `${OWNER}/${REPO}/master/${DOCS_PATH}/${path}/article.${language}.md`,
        responseHandler: (response: Response) => response.text(),
      }),
    }),
  }),
})


export const { useGetDirectoriesQuery, useGetDocumentsQuery } = contentApi
export const { useGetArticleQuery } = rawContentApi