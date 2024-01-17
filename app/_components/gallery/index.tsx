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

  console.log("products");
  console.log(products);
  return products;
}

export async function Gallery() {
  const products = await productsList();

  return (
    <div>
      <GalleryComponent products={products} />
    </div>
    // <Carousel
    //   plugins={[
    //     Autoplay({
    //       delay: 2000,
    //     }),
    //   ]}
    //   opts={{
    //     align: "start",
    //     loop: "true",
    //   }}
    //   className="p-4 flex justify-center  "
    // >
    //   <CarouselContent>
    //     {products.map((_, index) => (
    //       <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
    //         <div className="p-1">
    //           <Link href={`/p/${index}`}>
    //             <Card className={cn("lg:h-60 lg:w-60")} onClick={() => {}}>
    //               <CardContent
    //                 className={cn(
    //                   "flex aspect-square items-center justify-center p-2 lg:p-5 "
    //                 )}
    //               >
    //                 <div>
    //                   <Image
    //                     alt={products[index].title || ""}
    //                     height={300}
    //                     width={300}
    //                     src={products[index].image || ""}
    //                   ></Image>
    //                   <div>
    //                     <span className={cn("lg:text-center lg:text-base")}>
    //                       {products[index].title || ""} ({index})
    //                     </span>
    //                   </div>
    //                 </div>
    //               </CardContent>
    //             </Card>
    //           </Link>
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   {/* <CarouselPrevious /> */}
    //   {/* <CarouselNext /> */}
    // </Carousel>
  );
}
