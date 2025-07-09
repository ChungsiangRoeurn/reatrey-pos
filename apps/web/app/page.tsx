import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, ScanLine } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col">
      <div className="flex justify-end p-4 md:p-6">
        <Link href="/login">
          <Avatar className="hover:scale-105 transition-all size-10 md:size-11 cursor-pointer shadow-md hover:shadow-primary/20 border border-primary/30">
            <AvatarImage src="/user.jpg" alt="POS User" />
            <AvatarFallback className="bg-primary/15 text-primary-foreground text-sm font-semibold">
              RT
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>

      <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 md:px-6 flex-1 py-8 md:py-12 gap-8 md:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Modern POS for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Cambodian Businesses
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
            Reatrey POS is designed specifically for Khmer businesses. Manage
            sales, inventory, and customers with our intuitive, Khmer-language
            enabled system.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button className="h-12 px-8 md:h-14 md:px-10 text-base md:text-lg gap-2 shadow-lg hover:shadow-primary/30 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary transition-all">
              <ShoppingBasket className="w-5 h-5 md:w-6 md:h-6" />
              Get Started
            </Button>
            <Button
              variant="outline"
              className="h-12 px-8 md:h-14 md:px-10 text-base md:text-lg gap-2 border border-gray-400 hover:border-primary text-gray-200 hover:text-primary bg-transparent hover:bg-gray-800/40"
            >
              <ScanLine className="w-5 h-5 md:w-6 md:h-6" />
              Live Demo
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative rounded-xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-600 hover:border-primary/50 transition-all duration-300 group">
            <Image
              src="/images/cta.jpeg"
              alt="Reatrey POS Interface"
              width={600}
              height={400}
              className="object-cover w-full h-auto group-hover:scale-[1.02] transition-transform duration-300"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
