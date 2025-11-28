"use client";
import { useState } from "react";
import { Lens } from "@/components/ui/lens";

export default function ZoomImage({ src }: { src?: string | null }) {
  const [hovering, setHovering] = useState(false);

  
  const safeSrc =
    src ||
    "https://via.placeholder.com/600x600?text=Sin+imagen";

  return (
    <Lens hovering={hovering} setHovering={setHovering}>
      <img
        src={safeSrc}
        alt="Producto"
        className="w-full h-64 object-cover rounded-lg" 
        onError={(e) => {
          
          (e.currentTarget as HTMLImageElement).src =
            "https://via.placeholder.com/600x600?text=Sin+imagen";
        }}
      />
    </Lens>
  );
}
