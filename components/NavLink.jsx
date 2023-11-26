"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, prefetch, children }) {
  const pathname = usePathname();
  console.log("pathname ", pathname);

  if (href === pathname) {
    return <span className="text-orange-800">{children}</span>;
  }

  return (
    <Link href={href} prefetch={prefetch} className="text-orange-800 hover:underline">
      {children}
    </Link>
  );
}
