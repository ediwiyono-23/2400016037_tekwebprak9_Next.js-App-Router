"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navbarBg =
    pathname === "/blog"
      ? "bg-blue-100"
      : pathname === "/about"
      ? "bg-green-100"
      : "bg-gray-100";

  const navLinkClass = (path) =>
    `px-4 py-2 rounded-md transition ${
      pathname === path
        ? "bg-blue-500 text-white font-semibold"
        : "bg-gray-200 text-black hover:bg-gray-700"
    }`;

  return (
    <nav className={`p-4 shadow-md flex gap-4 ${navbarBg}`}>
      <Link href="/" className={navLinkClass("/")}>
        Home
      </Link>
      <Link href="/blog" className={navLinkClass("/blog")}>
        Blog
      </Link>
      <Link href="/about" className={navLinkClass("/about")}>
        About
      </Link>
    </nav>
  );
}
