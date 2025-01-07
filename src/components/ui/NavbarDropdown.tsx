"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";

import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";

export default function NavbarDropdown() {
  const router = useRouter();
  const {user,setIsLoading : userLoading} = useUser()
  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleLogout = ()=>{
    logout()
    userLoading(true)
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key='profile' onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem key='settings' onClick={() => handleNavigation("/profile/settings")}>
          Settings
        </DropdownItem>
        <DropdownItem key='create-post' onClick={() => handleNavigation("/profile/create-post")}>
          Create Post
        </DropdownItem>
        <DropdownItem key="delete" className="text-danger"  color="danger" onClick={()=> handleLogout()}>
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}