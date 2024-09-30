"use client" 

import { GlobalStyles } from "@/styles/globalStyles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <GlobalStyles/>
        {children}
      </body>
    </html>
  );
}
