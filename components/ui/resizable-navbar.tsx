"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  IconMenu2,
  IconX,
  IconShoppingCart,
} from "@tabler/icons-react";

export default function ResizableNavbar() {
  const [open, setOpen] = useState(false);
  const [small, setSmall] = useState(false);

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
          ? "rgba(255,255,255,0.35)"
          : "rgba(255,255,255,0.6)",
      }}
      transition={{ type: "spring", stiffness: 130, damping: 20 }}
      className="
        sticky top-0 left-0 w-full z-50 
        border-b border-white/20 dark:border-gray-800
        shadow-lg shadow-black/5
        flex items-center px-10 justify-between
        font-[Playfair_Display]
      "
    >

      {/* LOGO */}
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

      {/* MENÚ DESKTOP */}
      <div className="hidden md:flex items-center gap-12">
        {navItems.map((item) => (
          <motion.div
            key={item.link}
            whileHover={{
              y: -4,
              scale: 1.08,
              rotate: -0.4,
              opacity: 0.95,
              transition: { type: "spring", stiffness: 250 },
            }}
          >
            <Link
              href={item.link}
              className="
                text-gray-800 dark:text-gray-200
                text-lg tracking-wide font-semibold
                transition-all duration-300
              "
            >
              {item.name}
            </Link>
          </motion.div>
        ))}

        {/* CARRITO */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            href="/carrito"
            className="hover:text-black dark:hover:text-white transition"
          >
            <IconShoppingCart size={28} />
          </Link>
        </motion.div>

        {/* LOGIN */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="/login"
            className="
              px-6 py-2 rounded-full 
              bg-black text-white font-semibold
              dark:bg-white dark:text-black
              shadow-md hover:shadow-xl transition-all duration-300
            "
          >
            Login
          </Link>
        </motion.div>
      </div>

      {/* BOTÓN MÓVIL */}
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <IconX size={30} /> : <IconMenu2 size={30} />}
      </button>

      {/* MENÚ MOVIL */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            absolute top-full left-0 w-full 
            bg-white/90 dark:bg-black/90
            backdrop-blur-xl shadow-xl
            px-6 py-5 flex flex-col gap-4
            font-[Playfair_Display]
          "
        >
          {navItems.map((item) => (
            <motion.div
              key={item.link}
              whileHover={{ x: 6, opacity: 0.9 }}
            >
              <Link
                href={item.link}
                onClick={() => setOpen(false)}
                className="
                  text-xl border-b pb-2 border-gray-300 dark:border-gray-700
                  font-semibold tracking-wide
                "
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

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
