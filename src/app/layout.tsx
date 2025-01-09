"use client"

import { ReactNode } from "react";

import StyledComponentsRegistry from "@/components/atomos/StyledComponentsRegistry";
import { ArticleContextProvider } from "@/components/atomos/articleContexProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import { GlobalStyles } from "@/styles/globalStyles";
import { queryClient } from "@/lib/react-query";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>White Corals</title>
        <link href="/logo-corais.png" type="image/png" rel="icon" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ArticleContextProvider>
            <QueryClientProvider client={queryClient}>
              <GlobalStyles />
              {children}
            </QueryClientProvider>
          </ArticleContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
