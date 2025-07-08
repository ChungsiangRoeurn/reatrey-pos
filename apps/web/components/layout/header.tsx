"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Reatrey POS
        </Link>

        <Link href="/auth/login">
          <Avatar className="border border-white hover:opacity-90 transition size-10 cursor-pointer">
            <AvatarImage src="/user.jpg" alt="User Avatar" />
            <AvatarFallback className="text-black">RP</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}
