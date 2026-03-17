
import type { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: "/gniot/favicon.webp",
    shortcut: "/gniot/favicon.webp",
    apple: "/gniot/favicon.webp",
  },
};

export default function UniversityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
