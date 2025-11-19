"use client";

interface Props {
  title: string;
  image: string;
}

export default function ProductCard({ title, image }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 hover:shadow-xl transition">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-xl"
      />

      <h2 className="text-xl font-bold mt-4">{title}</h2>
    </div>
  );
}
