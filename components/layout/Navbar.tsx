"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { IconMenu2, IconX, IconShoppingCart, IconSearch } from "@tabler/icons-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Hombre", path: "/ropa" },
    { name: "Mujer", path: "/mujer" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/buscar?q=${search}`);
    setSearch("");
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/20 dark:border-gray-700/40 shadow-lg shadow-black/10"
      style={{
        backgroundImage: `url("https://p4.wallpaperbetter.com/wallpaper/940/466/460/simple-wallpaper-preview.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-white/40 dark:bg-black/40">

        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight text-white drop-shadow-lg hover:opacity-80 transition-all"
        >
          Luxe <span className="text-blue-300">Style</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium drop-shadow-md">

          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`relative group transition ${
                pathname === link.path ? "text-white" : ""
              }`}
            >
              {link.name}
              <span
                className={`
                  absolute left-0 -bottom-1 h-2px bg-blue-300
                  transition-all duration-300
                  ${pathname === link.path ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </Link>
          ))}

          {/* SEARCH BAR */}
          <form
            onSubmit={handleSearch}
            className="relative flex items-center bg-white/30 backdrop-blur-sm border border-white/40 rounded-full px-3 py-1"
          >
            <IconSearch size={18} className="text-white" />
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none ml-2 w-40 text-sm text-white placeholder-white/70"
            />
          </form>

          {/* CART ICON */}
          <Link href="/carrito" className="hover:scale-110 transition">
            <IconShoppingCart size={28} className="text-white drop-shadow-md" />
          </Link>

          {/* LOGIN BUTTON */}
          <Link
            href="/login"
            className="px-5 py-2 rounded-full bg-white/90 text-black font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Login
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IconX size={28} color="white" /> : <IconMenu2 size={28} color="white" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-xl px-6 py-4 flex flex-col gap-4 text-white">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className="text-lg border-b pb-2 border-white/40"
            >
              {link.name}
            </Link>
          ))}

          {/* SEARCH MOBILE */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-white/20 px-4 py-2 rounded-full mt-2"
          >
            <IconSearch size={20} className="text-white" />
            <input
              type="text"
              placeholder="Buscar..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none ml-2 text-white w-full"
            />
          </form>

          {/* CART LINK */}
          <Link
            href="/carrito"
            onClick={() => setOpen(false)}
            className="text-lg flex items-center gap-2"
          >
            <IconShoppingCart size={24} /> Carrito
          </Link>

          {/* LOGIN */}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-2 rounded-full bg-white text-black shadow-md transition-all"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
