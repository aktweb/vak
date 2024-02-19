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
import { ProductType } from ".";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// import { productsList } from "./products";

export function GalleryComponent({
  products,
}: {
  products: Promise<ProductType>[] | any;
}) {
  const router = useRouter();
  function handleClick(product: ProductType) {
    // router.push(`/products/${product.id}`);
    if (product.title == "Air Cylinders") {
      router.push(`/item/air-cylinders`);
    }
    if (product.title == "Pneumatic Valves") {
      router.push(`/item/pneumatic-valves`);
    }
    if (product.title == "Air Control Units (FRLs)") {
      router.push(`/item/air-control-units`);
    }
    if (product.title == "Quick Release Couplers (QRCs)") {
      router.push(`/item/quick-release-couplers`);
    }
    if (product.title == "Pneumatic Series Fittings") {
      router.push(`/item/pneumatic-series-fittings`);
    }
    if (product.title == "Pneumatic Series Tubes") {
      router.push(`/item/pneumatic-series-tubes`);
    }
    if (product.title == "Spring Balancer & Hose Reels") {
      router.push(`/item/spring-balancers`);
    }
    if (product.title == "Air Blow Gun, Air Booster, Air Silencers") {
      router.push(`/item/air-blow-gun`);
    }
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
          loop: true,
        }}
        className="p-4 flex justify-center  "
      >
        <CarouselContent>
          {products.map((product: any) => (
            <CarouselItem key={product.id} className="basis-1/2 lg:basis-1/4">
              <div className="p-1">
                <Card
                  className={cn(
                    " hover:cursor-pointer hover:backdrop-blur-3xl w-50 h-60 lg:h-80 lg:w-80"
                  )}
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
                      <div className="flex justify-center max-h-32 items-bas">
                        <span className={cn(" lg:text-center lg:text-base")}>
                          {product.title}
                          {/* ({index}) */}
                        </span>
                      </div>
                      {/* <div className="mt-2 flex justify-center align-bottom">
                        <Button onClick={() => handleClick(product)}>
                          Read more{" "}
                        </Button>
                      </div> */}
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
