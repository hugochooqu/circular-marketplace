import { headerItems } from "@/constants";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center pt-8 relative">
      <div className="header-container px-8">
        <ul className="flex flex-row justify-between items-center mt-4">
          {headerItems.map((item) => (
            <Link href={item.url} key={item.name} className="flex flex-row">
              <span className="block lg:hidden">{item.icon}</span>
              <li className={` ${item.name === 'LOGO' ? 'header-logo': 'hidden lg:block' } `}>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
