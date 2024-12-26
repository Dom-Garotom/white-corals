"use client"
import { ReactNode } from "react";
import { GlobalStyles } from "@/styles/globalStyles";
import StyledComponentsRegistry from "@/components/atomos/StyledComponentsRegistry";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>White Corals</title>
        <link href="/logo-corais.png" type="image/png"  rel="icon"/>
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
