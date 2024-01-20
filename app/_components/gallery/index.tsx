import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Contents } from "@/app/content";
import Link from "next/link";
import { useEffect } from "react";
// import { productsList } from "./products";
import { getXataClient } from "@/src/xata";
import { GalleryComponent } from "./products";

export type ProductType = {
  id: string;
  title: string;
  image: string;
  desc: string;
};

export async function productsList(): Promise<ProductType[] | any> {
  const xataClient = getXataClient();
  const products = await xataClient.db.products.getMany();
  return products;
}

export async function Gallery() {
  const products = await productsList();

  return (
    <div>
      <div className="flex justify-center">
        <p className=" text-lg font-semibold text-amber-600 ">Our Products</p>
      </div>
      <GalleryComponent products={products} />
    </div>
  );
}
