import React from 'react'
import { QueryClient } from "react-query"

export const MyQueryClient = new QueryClient({defaultOptions: {
  queries: {
    refetchOnWindowFocus: false
  }
}})