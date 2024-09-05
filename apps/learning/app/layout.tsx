import "@repo/ui/globals";

import { Header, Footer, ThemeProvider } from "@repo/ui";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Gives",
  description: "A simple quiz.",
  manifest: "/manifest.json"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider theme="learning">
      <Header app="learning" />

      {children}

      <Footer app="learning.gives" />
    </ThemeProvider>
  );
}
