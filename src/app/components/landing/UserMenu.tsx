"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import BackDrop from "./BackDrop";
import { SafeUser } from "@/app/types/userTypes";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <section className="relative z-30">
        <div
          className="p-2 border border-pistachio-800 hover:shadow-[2px_2px] hover:shadow-yellow-400 flex flex-row items-center gap-1 rounded-md cursor-pointer shadow-md transition text-slate-200"
          onClick={toggleOpen}
        >
          <FaUser />
          <AiFillCaretDown />
        </div>
        {isOpen && (
          <nav className="absolute rounded-md shadow-md w-[160px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
            {currentUser ? (
              <div>
                <Link href="/pedidos">
                  <MenuItem onClick={toggleOpen}>Pedidos</MenuItem>
                </Link>
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut;
                  }}
                >
                  Cerrar sesión
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/ingreso">
                  <MenuItem onClick={toggleOpen}>Ingresar</MenuItem>
                </Link>
                <Link href="/registro">
                  <MenuItem onClick={toggleOpen}>Registrar</MenuItem>
                </Link>
              </div>
            )}
          </nav>
        )}
      </section>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
