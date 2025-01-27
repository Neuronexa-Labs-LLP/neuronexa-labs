"use client";
import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons
import useIsTrue from "@/hooks/useIsTrue";

const NavbarRight = () => {
  const isHome4 = useIsTrue("/home-4");
  const isHome4Dark = useIsTrue("/home-4-dark");
  const isHome5 = useIsTrue("/home-5");
  const isHome5Dark = useIsTrue("/home-5-dark");
  const isHome2Dark = useIsTrue("/home-2-dark");

  return (
    <div className="lg:col-start-10 lg:col-span-3">
      <ul className="relative nav-list flex justify-end items-center">
        {/* Removed Cart Icon (DropdownCart) */}
        {/* Removed Login Button for Home4, Home4Dark, Home5, and Home5Dark */}

        <li className="hidden lg:block">
          <Link
            href="https://wa.me/message/JJEEGZUSAFCGA1" // Updated link to the desired WhatsApp message link
            target="_blank" // Open WhatsApp in a new tab
            className="flex items-center text-size-12 2xl:text-size-15 text-whiteColor bg-[#25D366] block border-[#25D366] border hover:bg-[#128C7E] hover:text-white px-15px py-2 rounded-standard dark:hover:bg-whiteColor-dark dark: dark:hover:text-whiteColor"
          >
            {/* WhatsApp Icon */}
            <FaWhatsapp className="mr-2 text-xl" />
            Chat With Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarRight;
