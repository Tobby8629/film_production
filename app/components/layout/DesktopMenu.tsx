import { menuLinks } from "@/app/utils/constants";
import React, { useMemo } from "react";
import Mapping from "../reuseable/Mapping";
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
    <section className="hidden md:flex justify-between items-center ">

        <Mapping array={menuItems} className="flex items-center gap-4 md:gap-[2px] xl:gap-7">
          {(item) => (
            <div
              key={item.name}
              className={clsx(
                "p-2 px-5 md:px-2 rounded-lg transition-colors duration-200",
              )}
            >
              <Link
                href={item.link}
                className={clsx(
                  "menu_link",
                  item.name === "Sign Up" && "btn",
                  item.isActive && " font-semibold"
                )}
              >
                {item.name}
              </Link>
              {item.isActive ? <div className="active"></div> : null}
            </div>
          )}
        </Mapping>
    
    </section>
  );
};

export default DesktopMenu;
