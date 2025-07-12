export default function Navbar() {
  const navItems = ["Home", "Orders", "FAQ", "TOS", "Discord"];
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-green-500 border-b-2 border-black">
      <div className="flex gap-4">
        {navItems.map((item) => (
          <button
            key={item}
            className="border-2 border-black px-4 py-1 rounded-full hover:bg-green-600 font-bold"
          >
            {item}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 border-2 border-black px-4 py-1 rounded-full hover:bg-green-600 font-bold">
        <span>🛒</span> Cart
      </button>
    </nav>
  );
}
