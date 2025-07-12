'use client';
import { useState } from 'react';

export default function ProductCard({ product }: any) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="bg-green-400 p-4 rounded-2xl border-4 border-black w-72 text-center shadow-lg">
      <h2 className="text-white text-2xl font-bold mb-2">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
      <div className="mb-4 text-lg">
        <span className="text-red-600 line-through mr-2">${product.oldPrice}</span>
        <span className="font-bold">${product.price}</span>
      </div>
      <div className="flex justify-center items-center gap-4 border-2 border-black px-6 py-2 rounded-xl bg-green-500">
        <button onClick={() => setQuantity(q => Math.max(0, q - 1))} className="text-white text-xl">−</button>
        <span className="text-white text-xl">{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)} className="text-white text-xl">＋</button>
      </div>
    </div>
  );
}
