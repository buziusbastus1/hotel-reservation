"use client";

import { useCallback, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useOnClickOutside } from "@/app/hooks/useClickOutside";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const router = useRouter();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const menuButtonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleClickOutside = useCallback((event: { target: any }) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      !menuButtonRef.current?.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useOnClickOutside(menuRef, handleClickOutside);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          ref={menuButtonRef}
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition md:min-w-[80px]"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          className="menu-item absolute rounded-xl shadow-md w-[40vw] md:w-[20vw]  bg-white overflow-hidden right-0 top-12 text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/trips")}
                  label="My Trips"
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label="My Favorites"
                />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Singn up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
