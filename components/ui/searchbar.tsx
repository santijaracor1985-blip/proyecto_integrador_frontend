"use client";

import { IconSearch } from "@tabler/icons-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div
      className="
        flex items-center gap-2
        bg-white border border-gray-300
        rounded-full px-4 py-2 shadow-sm
        w-full max-w-sm mx-auto
      "
    >
      <IconSearch size={20} className="text-gray-500" />
      <input
        type="text"
        placeholder="Buscar productos..."
        className="bg-transparent outline-none w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
