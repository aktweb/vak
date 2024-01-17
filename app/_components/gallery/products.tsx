"use client";
import { getXataClient } from "@/src/xata";
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
import { ProductType } from ".";
import { useRouter } from "next/navigation";
// import { productsList } from "./products";

export function GalleryComponent({
  products,
}: {
  products: Promise<ProductType>[] | any;
}) {
  const router = useRouter();
  function handleClick(product: ProductType) {
    router.push(`/products/${product.id}`);
  }
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: "true",
        }}
        className="p-4 flex justify-center  "
      >
        <CarouselContent>
          {products.map((product: any) => (
            <CarouselItem key={product.id} className="basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card
                  className={cn("lg:h-80 lg:w-80")}
                  onClick={() => handleClick(product)}
                >
                  <CardContent
                    className={cn(
                      "flex aspect-square items-center justify-center p-2 lg:p-5 "
                    )}
                  >
                    <div>
                      <Image
                        alt={product.title}
                        height={300}
                        width={300}
                        src={product.image}
                      ></Image>
                      <div>
                        <span className={cn("lg:text-center lg:text-base")}>
                          {product.title}
                          {/* ({index}) */}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </>
  );
}
