import "@repo/ui/globals";

import { Header, Footer, ThemeProvider } from "@repo/ui";

import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider theme="playing">
      <Header app="playing" />

      {children}

      <Footer app="playing.gives" />
    </ThemeProvider>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://learning.gives"),
  title: "Playing Gives",
  description: "A simple game.",
  category: "website",
  generator: "Next.js",
  manifest: "/manifest.json",
};
