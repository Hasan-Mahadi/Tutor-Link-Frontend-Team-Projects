
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold">
          Tutor
        </a>
        <div className="hidden md:flex">
          <Link href="/" className="mx-2 hover:text-gray-300">
            Home
          </Link>
          <Link href="/browse" className="mx-2 hover:text-gray-300">
            Browse Tutors
          </Link>
          <Link href="/about" className="mx-2 hover:text-gray-300">
            About us
          </Link>
          <Link href="/news-blog" className="mx-2 hover:text-gray-300">
            Blogs
          </Link>
          <Link href="/faq" className="mx-2 hover:text-gray-300">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  
"use client"

import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut } from "next-auth/react";

type UserProps = {
  user?:{
    name?:string | null | undefined;
    email?:string | null | undefined;
    image?:string | null | undefined;
  }
}

export default function Navbar({session}:{session: UserProps | null}) {

  
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          Tutor
        </h1>
        <div className="max-w-md  flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-2">
        <Link href="/create-shop">
         <Button className="rounded-full">Home</Button>
         </Link>
          <Link href="/create-shop">
         <Button className="rounded-full">Browse Tutors</Button>
         </Link>
         {  session?.user ?  <>
        <Link href="/create-shop">
         <Button className="rounded-full">Become Tutors</Button>
         </Link>
         <DropdownMenu>
           <DropdownMenuTrigger>
           <Avatar>
             <AvatarImage src="https://github.com/shadcn.png" />
             <AvatarFallback>User</AvatarFallback>
           </Avatar>
           </DropdownMenuTrigger>
           <DropdownMenuContent>
             <DropdownMenuLabel>My Account</DropdownMenuLabel>
             <DropdownMenuSeparator />
             <DropdownMenuItem>Profile</DropdownMenuItem>
             <DropdownMenuItem>Dashboard</DropdownMenuItem>
             <DropdownMenuItem>My Shop</DropdownMenuItem>
             <DropdownMenuSeparator />
             <DropdownMenuItem className="bg-red-500 cursor-pointer"> <Button onClick={()=>signOut()}><LogOut/> <span>Log Out</span></Button> </DropdownMenuItem>
           </DropdownMenuContent>
         </DropdownMenu>
        </> :
           <Link href="/login">
           <Button className="rounded-full" variant="outline">Login</Button>
         </Link>       
         } 
        </nav>
      </div>
    </header>
  );
}

