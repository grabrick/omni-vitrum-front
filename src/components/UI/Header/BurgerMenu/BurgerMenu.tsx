import Image from "next/image";
import Logo from "../../shared/Logo/Logo";
import m from "./BurgerMenu.module.scss";
import Link from "next/link";
import ArrowDown from "@/assets/icons/ArrowDown.svg";

const BurgerMenu = ({ setIsActive, navRouters, pathname }: any) => {
  return (
    <div className={m.overlay} onClick={() => setIsActive(false)}>
      <div className={m.modal} onClick={(e) => e.stopPropagation()}>
        <div className={m.head}>
          <Logo />
        </div>
        <div className={m.routeWrapper}>
          {navRouters.map((items: any) => (
            <div
              key={items.id}
            >
              {items.isSelector === false ? (
                <div
                  className={m.link}
                >
                  <Link href={`${items.routePath}`} className={pathname === items.routePath ? m.wrappActive : ''} key={items.id}>
                    {items.title}
                  </Link>
                </div>
              ) : (
                <div
                  className={m.link}
                >
                  <Link href={'/navigate'} className={pathname === '/navigate' ? m.wrappActive : ''} key={items.id}>
                    {items.title}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
