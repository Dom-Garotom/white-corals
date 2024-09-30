import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "White Corals",
  description: "Plataforma de compartilhamento de artigos para ajudar a combater o branqueamento de corais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
