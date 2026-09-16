"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FlavourDropIcon from "./FlavourDropIcon";

const navItems = [
  { label: "Flavours", href: "/" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-lilac/95 backdrop-blur sticky top-0 z-40 border-b border-plum/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-plum rounded"
        >
          <FlavourDropIcon className="h-7 w-5" />
          <span className="font-display text-2xl font-semibold tracking-tight text-plum">
            Vapour Notes
          </span>
        </Link>
        <nav aria-label="Primary" className="w-full">
          <ul className="flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/60 p-1.5 shadow-inner shadow-plum/5">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`inline-block rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum ${
                      isActive
                        ? "bg-plum text-lilac shadow-sm shadow-plum/30"
                        : "text-plum hover:bg-plum/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
