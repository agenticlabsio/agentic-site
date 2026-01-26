import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agentic Labs",
  description: "Enterprise AI solutions for operations, automation, and intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Pass-through layout - each route group handles its own html/body
  return children;
}
