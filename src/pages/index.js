import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "T-Rex",
      price: 29.99,
      oldPrice: 49.99,
      image: "/trex.webp",
    },
    {
      id: 2,
      name: "Fennec Fox",
      price: 29.99,
      oldPrice: 49.99,
      image: "/fennec.webp",
    },
    {
      id: 3,
      name: "Mimic Octopus",
      price: 24.99,
      oldPrice: 35.99,
      image: "/octopus.webp",
    },
        {
      id: 3,
      name: "Disco Bee",
      price: 24.99,
      oldPrice: 35.99,
      image: "/discobee.webp",
    },
            {
      id: 3,
      name: "Queen Bee",
      price: 24.99,
      oldPrice: 35.99,
      image: "/queenbee.webp",
    },
  ];

  return (
    <main className="min-h-screen bg-sky-400 font-[Comic_Sans_MS] text-black">
      <Navbar />
      <h1 className="text-4xl text-center font-bold py-10">Suuper Shop</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 pb-20 justify-items-center">

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
