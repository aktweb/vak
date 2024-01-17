"use client";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <div className={cn("flex mt-0 lg:mt-1 justify-center")}>
      <Link href={`/login`}>
        <LogIn className={cn("mt-6 me-2 lg:m-3 lg:mt-6 text-white cursor-pointer")} />
      </Link>
    </div>
  );
};

export default LoginButton;
