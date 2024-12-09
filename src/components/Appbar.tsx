"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AppBar() {
  return (
    <header className="fixed top-0 w-full h-16 border-b border-zinc-800 bg-blue-950 backdrop-blur-xl z-50">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-xl font-bold text-white">Stake</div>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-zinc-400 hover:text-white">
            Sign In
          </Button>
          <Button>Join Now</Button>
        </div>
      </div>
    </header>
  );
}
