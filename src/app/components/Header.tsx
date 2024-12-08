import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link"
export default function Header() {
  return (
    <header className="p-4 h-20 items-center">
      <div className="container mx-auto flex justify-between pt-3 items-center">
        {/* Navigation Links */}
        <nav className="flex space-x-16 justify-center  pl-[40%]">
          <a href="/" className="text-black hover:text-gray-700 hover:underline">Home</a>
          <a href="/account" className="text-black hover:text-gray-700 hover:underline">Shop</a>
          <a href="/about" className="text-black hover:text-gray-700 hover:underline">About</a>
          <Link href="/contact" className="text-black hover:text-gray-700 hover:underline">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex space-x-8 pr-14 text-black">
          <Link href="/account">   <FaUser className="hover:text-gray-700 cursor-pointer" size={20} /></Link>
          <FaSearch className="hover:text-gray-700 cursor-pointer" size={20} />
          <FaHeart className="hover:text-gray-700 cursor-pointer" size={20} />
          <FaShoppingCart className="hover:text-gray-700 cursor-pointer" size={20} />
        </div>
      </div>
    </header>

  );
}
