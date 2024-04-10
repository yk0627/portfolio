"use client"

import React, { ReactNode, useMemo } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function ReactQueryProvider({ children }: { children: ReactNode }) {
  const client = useMemo(
    () => new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }),
    []
  )

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
