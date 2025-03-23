import React from "react";
import Navitem from "./Navitem";
import DropdownWrapper from "@/components/shared/wrappers/DropdownWrapper";

const NavItems = () => {
  const navItems = [
    {
      id: 1,
      name: "About Us",
      path: "#About",
      dropdown: null,
      isRelative: false,
    },
    {
      id: 2,
      name: "Our Services",
      path: "#OurServices",
      dropdown: null,
      isRelative: false,
    },
    {
      id: 4,
      name: "Our Projects",   // Dashboard
      path: "#OurProjects",
      dropdown: null,
      isRelative: true,
    },
    // {
    //   id: 5,
    //   name: "Client Success Stories",   
    //   path: "#ClientSuccessStories",
    //   dropdown: null,
    //   isRelative: true,
    // },
    {
      id: 6,
      name: "Feedback",   
      path: "#Feedback",
      dropdown: null,
      isRelative: true,
    },
  ];
  return (
    <div className="hidden lg:block lg:col-start-3 lg:col-span-7">
      <ul className="nav-list flex justify-center">
        {navItems.map((navItem, idx) => (
          <Navitem key={idx} idx={idx} navItem={{ ...navItem, idx: idx }}>
            <DropdownWrapper>{navItem.dropdown}</DropdownWrapper>
          </Navitem>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;
