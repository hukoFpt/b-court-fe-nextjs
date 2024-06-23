import Logo from "../../public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

// replace 'your-routing-library' with the actual routing library you're using, like 'react-router-dom' or 'next/router'

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Shop Detail", href: "/shop-detail" },
  { name: "Pages", href: "/pages" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="flex gap-4 mx-8 justify-between items-center ">
      <Link href="/">
        <Image
          className="mx-6"
          src={Logo}
          height={100}
          width={170}
          alt={"Logo"}
        />
      </Link>
      <div className="flex gap-8">
        {links.map((link, index) => (
          <Link
            key={index}
            href={`http://localhost:3000/${link.href}`}
            className="hover:text-orange-500 cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="relative">
        <input
          type="text"
          className="py-2 pl-4 pr-10 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          placeholder="Search..."
        />
        <div className="absolute right-2 top-2">
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
      <div>
        <IoCartOutline className="w-4" />
      </div>
      <div className="flex gap-2">
        <div className="bg-green-600 hover:bg-orange-500 cursor-pointer text-white px-3 py-2 rounded-lg">
          Sign In
        </div>
        <div className="bg-green-600 hover:bg-orange-500 cursor-pointer text-white px-3 py-2 rounded-lg">
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Navbar;
