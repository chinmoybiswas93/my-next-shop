import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-200">
      <div className="text-xl font-bold">Welcome to My Next Shop</div>
      <div>
        <ul className="flex items-center justify-center gap-4 p-4">
          <li>
            <Link className="hover:text-blue-500 p-2" href="/products">
              Products
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 p-2" href="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 p-2" href="/admin">
              Admin
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 p-2" href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 p-2" href="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
