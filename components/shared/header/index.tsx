import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {APP_NAME} from "@/lib/constants";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import Menu from "@/components/shared/header/menu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <nav className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image src="/images/logo.svg" alt={`APP_NAME`} width={48} height={48} priority={true}/>
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <Menu/>
      </nav>
    </header>
  )
};
export default Header
