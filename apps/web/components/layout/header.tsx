"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-secondary-foreground text-white sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-end px-4 py-2 h-14">
        {/* Only the user avatar remains */}
       
      </div>
    </header>
  );
}
