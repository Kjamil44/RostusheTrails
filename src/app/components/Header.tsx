"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="https://dstal.com.au/wp-content/uploads/2021/09/logoipsum.png"
          alt="Logo"
          width={100}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center space-x-8 text-gray-700">
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
            <span className="cursor-pointer hover:text-blue-500">
              Trails
            </span>
            <ul className="absolute hidden group-hover:block mt-2 bg-white shadow-md border border-gray-200 rounded-lg">
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
