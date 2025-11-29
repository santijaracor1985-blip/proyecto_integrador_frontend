"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";

export default function ResizableNavbar() {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);

  const { scrollY } = useScroll();

  // Detecta scroll para encoger el navbar
  useMotionValueEvent(scrollY, "change", (y) => {
    setSmall(y > 80); // si baja más de 80px, se encoge
  });

  const navItems = [
    { name: "Inicio", link: "/" },
    { name: "Ropa", link: "/ropa" },
    { name: "Mujer", link: "/mujer" },
    { name: "Login", link: "/login" },
  ];

  return (
    <motion.nav
      animate={{
        height: small ? 60 : 100,
        paddingTop: small ? 8 : 18,
        paddingBottom: small ? 8 : 18,
        backdropFilter: small ? "blur(12px)" : "none",
        backgroundColor: small
          ? "rgba(255,255,255,0.65)"
          : "rgba(255,255,255,0.75)",
      }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="
        fixed top-0 left-0 w-full z-50 
        border-b border-neutral-200/40 dark:border-neutral-800/40
        flex items-center px-6 justify-between
        dark:bg-black/40
      "
    >
      {/* LOGO */}
      <Link href="/" className="text-2xl font-bold">
        MiTienda
      </Link>

      {/* DESKTOP ITEMS */}
      <div className="hidden md:flex gap-6 text-sm font-medium">
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="hover:text-blue-600 transition"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* MOBILE BUTTON */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <IconX size={28} /> : <IconMenu2 size={28} />}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            absolute top-full left-0 w-full 
            bg-white dark:bg-black
            py-4 flex flex-col gap-4 px-6 shadow-md
          "
        >
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-neutral-200 dark:border-neutral-700"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
