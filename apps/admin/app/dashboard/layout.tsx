import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for Admin",
};

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>; 
}
