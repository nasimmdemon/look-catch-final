"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav = () => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#business", label: "Business" },
    { href: "#drivers", label: "Drivers" },
    { href: "#about", label: "About" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header className="padding-x py-4 w-full absolute top-0">
      <nav className="flex justify-between items-center max-container relative">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" height={20} width={60} />
        </Link>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="font-monstserrat leading-normal text-lg text-white hover:text-blue-300"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Image
            className="hidden max-lg:block cursor-pointer"
            src="/assets/images/hamburger.png"
            width={25}
            height={25}
            alt="hamburger"
            onClick={() => setOpen(!open)}
          />
        </div>
        {open && (
          <div className="mobile-menu absolute top-16 right-0 bg-white p-3 rounded-lg shadow-lg lg:hidden">
            {navLinks.map((link) => (
              <li className="list-none" key={link.label}>
                <Link
                  className="font-monstserrat leading-normal text-lg text-black hover:text-blue-300"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
