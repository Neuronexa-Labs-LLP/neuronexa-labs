import React from "react";
import DropdownHome from "./DropdownHome";
import DropdownCourses2 from "./DropdownCourses2";
import DropdownBlog from "./DropdownBlog";
import DropdownPages2 from "./DropdownPages2";
import Navitem from "./Navitem";
import DropdownWrapper from "@/components/shared/wrappers/DropdownWrapper";

const NavItems2 = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
      dropdown: null,
      isRelative: false,
    },
    {
      id: 2,
      name: "About",
      path: "/about",
      dropdown: null,
      isRelative: false,
    },
    {
      id: 3,
      name: "Blog",
      path: "/dashboards/instructor-dashboard",
      dropdown:null,
      isRelative: false,
    },
    {
      id: 4,
      name: "Courses",
      path: "/courses",
      dropdown: null,
      isRelative: false,
    },

    {
      id: 5,
      name: "Pages",
      path: "/about",
      dropdown: null,
      isRelative: false,
    },
    {
      id: 6,
      name: "Contact",
      path: "/contact",
      dropdown: null,
      isRelative: false,
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
export default NavItems2;
