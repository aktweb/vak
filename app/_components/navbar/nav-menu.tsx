"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import productsList from "@/app/products/page";
import { ProductType } from ".";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Valves",
    href: "/docs/primitives/hover-card",
    description:
      "N Generation Valves,Ball Valves,Vak Mechanical / Solenoid Valves",
  },
  {
    title: "Tubes",
    href: "/docs/primitives/progress",
    description:
      "Air Cylinder, Air Hose Reel , Polyurethane Tubing,Polyurethane Tubes and Coiled Hoses.",
  },
  {
    title: "Fittings",
    href: "/docs/primitives/scroll-area",
    description: "Vak Push Type Fittings,One Touch Fittings",
  },
  {
    title: "Vak Pneumatic Air Guns",
    href: "/docs/primitives/scroll-area",
    description: "Vak Push Type Fittings,One Touch Fittings",
  },
  {
    title: "Cylinders",
    href: "/docs/primitives/alert-dialog",
    description: "Air Cylinders,",
  },
  {
    title: "Spring Balancer",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export  function NavMenu({products}:{products:ProductType[]}) {
  console.log(products)
  return (
    <div className={cn(" m-1 mt-4 lg:flex justify-center")}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className={cn("hidden lg:block")}>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent className={cn("w-[200px] ms-0 ")}>
              <ul className="grid gap-3 p-6 md:w-[400px] ">
                {products.map((product) => (
                  <ListItem
                    key={product.id}
                    href={`/products/${product.id}`}
                    title={product.title}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground h-full",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
