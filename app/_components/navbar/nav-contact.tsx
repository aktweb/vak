"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { QueryPost } from "../query-form/submit";
import { QForm } from "../query-form";
import { useState } from "react";

export const NavContact = () => {

    const [show, setShow] = useState<boolean>(false);

  const handleOnClick = () => {
    console.log("false");

    // setShow(false)
    // setShow(true)
  };


  return (
    <div className=" flex justify-center items-center">
      <Button
        variant="blank"
        className=" bg-transparent"
        onClick={() => setShow(true)}
      >
        <Image src="/contact-us.png" className={cn("w-[35px] lg:w-10 ")} alt="conatact-us" width={60} height={60} />
        <span className={cn("hidden lg:block")}>Contact Us</span>
      </Button>
      {show && (
        <div>
          <QForm
            setShow={setShow}
            style={cn(
              "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"
            )}
          />
        </div>
      )}
    </div>
  );
};
