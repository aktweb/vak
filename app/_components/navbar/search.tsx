"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <form
      //   onSubmit={onSubmit}
      className="w-1/2 lg:w-[400px] flex items-center"
    >
      <Input
        type="text"
        placeholder="Search"
        // value={value}
        // onChange={(e) => {
        //   setValue(e.target.value);
        // }}
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {/* {value && (
        <X
          onClick={onClear}
          className="absolute top-2 right-14 h-6 w-6 text-muted-foreground cursor-pointer hover:opacity-75 transition"
        />
      )} */}
      <Button
        type="submit"
        size="default"
        variant="primary"
        className="rounded-l-none bg-[#3c3b41]"
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground text-white " />
      </Button>
    </form>
  );
};
