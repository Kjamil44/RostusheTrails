"use client";

import Link from "next/link";
import Image from "next/image";
import logoPic from "../../assets/images/logo.jpg";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      {/* Logo */}
      <div className="flex justify-center py-4">
        <Image
          src={logoPic}
          alt="Logo"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav className="bg-gray-50 py-4 shadow-sm">
        <ul className="flex justify-center space-x-8 text-gray-700 font-medium relative">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li className="relative group">
            {/* Parent Menu */}
            <span className="cursor-pointer hover:text-blue-500">
              Trails
            </span>
            {/* Dropdown Menu */}
            <ul className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg text-sm z-10 hidden group-hover:flex flex-col">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/trails/ten-km">10 km</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/trails/twentyfour-km">24 km</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/trails/guide">Guide</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/trails/registered-runners">
                  Registered Runners
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/accommodation" className="hover:text-blue-500">
              Accommodation
            </Link>
          </li>
          <li>
            <Link href="/sponsors" className="hover:text-blue-500">
              Sponsors
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
