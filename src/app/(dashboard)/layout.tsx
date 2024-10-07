import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen flex">
      <section className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-red-50 p-1 lg:p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32}></Image>
          <span className="hidden lg:block">School</span>
        </Link>
        <Menu />
      </section>
      <section className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar></Navbar>
        {children}
      </section>
    </main>
  );
}
