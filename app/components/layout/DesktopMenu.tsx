import { menuLinks } from "@/app/utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import Mapping from "../reuseable/Mapping";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx"; 

const DesktopMenu = () => {
  const pathName = usePathname();

  const menuItems = useMemo(() => {
    return menuLinks.map((item) => ({
      ...item,
      isActive: pathName === item.link,
    }));
  }, [pathName]);

  return (
    <section className="hidden md:flex justify-between items-center lg:w-[73%]">
      
      <div className="max-lg:mx-3 mx-5 max-md:w-[20%] w-[38%] p-3 px-5 rounded-2xl border border-gray-300 flex items-center">
        <FontAwesomeIcon icon={faSearch} className="mr-2 h-2.5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="9/12 border-0 outline-none text-gray-600 placeholder-gray-400"
        />
      </div>

        <Mapping array={menuItems} className="flex items-center gap-4 md:gap-[2px] xl:gap-7">
          {(item) => (
            <div
              key={item.name}
              className={clsx(
                "p-2 px-5 md:px-2 rounded-lg transition-colors duration-200",
                item.isActive && "bg-red-100"
              )}
            >
              <Link
                href={item.link}
                className={clsx(
                  "menu_link",
                  item.name === "Sign Up" && "btn",
                  item.isActive && "text-red-600 font-semibold"
                )}
              >
                {item.name}
              </Link>
            </div>
          )}
        </Mapping>
    
    </section>
  );
};

export default DesktopMenu;
