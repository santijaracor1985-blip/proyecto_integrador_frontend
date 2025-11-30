"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  IconMenu2,
  IconX,
  IconShoppingCart,
  IconSearch,
} from "@tabler/icons-react";

export default function ResizableNavbar() {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);
  const [search, setSearch] = useState("");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setSmall(y > 80);
  });

  const navItems = [
    { name: "Inicio", link: "/" },
    { name: "Ropa", link: "/ropa" },
    { name: "Mujer", link: "/mujer" },
  ];

  return (
    <motion.nav
      animate={{
        height: small ? 60 : 100,
        paddingTop: small ? 6 : 16,
        paddingBottom: small ? 6 : 16,
        backdropFilter: "blur(14px)",
        backgroundColor: small
          ? "rgba(255,255,255,0.45)"
          : "rgba(255,255,255,0.65)",
      }}
      transition={{ type: "spring", stiffness: 130, damping: 20 }}
      className="
        fixed top-0 left-0 w-full z-50 
        border-b border-white/20 dark:border-gray-800
        shadow-lg shadow-black/5
        flex items-center px-6 justify-between
        dark:bg-black/40
      "
    >
      {/* ⭐ LOGO */}
      <Link href="/" className="flex items-center">
        <img
          src="https://www.sosocial.net.au/wp-content/uploads/2017/02/Luxe-Logo-Design.png"
          alt="Logo Luxe"
          className={`
            object-contain transition-all duration-300
            ${small ? "h-10" : "h-14"}
          `}
        />
      </Link>

      {/* ⭐ MENÚ DESKTOP */}
      <div className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">

        {/* Links */}
        {navItems.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className="
              relative group cursor-pointer transition
              hover:text-black dark:hover:text-white
            "
          >
            {item.name}

            {/* Línea animada */}
            <span
              className="
                absolute left-0 -bottom-1 h-[2px] bg-blue-600
                w-0 group-hover:w-full transition-all duration-300
                rounded-full
              "
            />
          </Link>
        ))}

        {/* ⭐ Barra de búsqueda */}
        <div
          className="
            relative flex items-center
            bg-white/70 dark:bg-gray-800/70
            border border-gray-300 dark:border-gray-600
            rounded-full px-3 py-1.5
            shadow-sm backdrop-blur
          "
        >
          <IconSearch size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Buscar..."
            className="
              bg-transparent outline-none ml-2 w-40
              text-sm text-gray-700 dark:text-gray-200
            "
          />
        </div>

        {/* 🛒 CARRITO */}
        <Link
          href="/carrito"
          className="hover:text-black dark:hover:text-white transition"
        >
          <IconShoppingCart size={28} />
        </Link>

        {/* LOGIN */}
        <Link
          href="/login"
          className="
            px-5 py-2 rounded-full 
            bg-gradient-to-r from-black to-gray-800 
            text-white font-semibold shadow-md
            hover:shadow-xl hover:scale-105 active:scale-95
            transition-all duration-300
            dark:from-white dark:to-gray-300 dark:text-black
          "
        >
          Login
        </Link>
      </div>

      {/* ⭐ BOTÓN MÓVIL */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <IconX size={30} /> : <IconMenu2 size={30} />}
      </button>

      {/* ⭐ MENÚ MÓVIL */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            absolute top-full left-0 w-full 
            bg-white/85 dark:bg-black/85
            backdrop-blur-xl shadow-xl
            px-6 py-5 flex flex-col gap-4
          "
        >
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={() => setOpen(false)}
              className="
                text-lg border-b pb-2 border-gray-300 dark:border-gray-700
              "
            >
              {item.name}
            </Link>
          ))}

          {/* Busqueda móvil */}
          <div
            className="
              flex items-center bg-gray-200/60 dark:bg-gray-800/60
              px-4 py-2 rounded-full mt-2
            "
          >
            <IconSearch size={20} className="text-gray-600" />
            <input
              type="text"
              placeholder="Buscar..."
              className="
                bg-transparent outline-none ml-2 text-gray-700 dark:text-gray-200 w-full
              "
            />
          </div>

          <Link
            href="/carrito"
            onClick={() => setOpen(false)}
            className="text-lg flex items-center gap-2"
          >
            <IconShoppingCart size={24} /> Carrito
          </Link>

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="
              mt-2 text-center px-5 py-2 rounded-full 
              bg-black text-white dark:bg-white dark:text-black
              shadow-md hover:shadow-xl transition-all
            "
          >
            Login
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
