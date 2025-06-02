import Image from "next/image";
import React from "react";
import logo1 from "@/assets/images/logo/logo_1.png";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <div className="lg:col-start-1 lg:col-span-2">
      <Link href="/">
        <Image
          src={logo1}
          alt="logo"
          width={100} // reduced width
          height={40} // optional height
          className="py-2"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
