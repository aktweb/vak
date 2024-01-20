"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { QForm } from "@/app/_components/query-form";
import { cn } from "@/lib/utils";
import { ProductType } from "@/app/_components/gallery";
import DetailsAccordian from "../_components/details";

interface ProductPageProps {
  params: {
    index: string;
  };
}

interface ProductDetailsProps {
  id: number;
  title: string;
  desc: string;
  image: string;
}

const ProductDetailsPage = ({ product }: { product: ProductType | any }) => {
  const [show, setShow] = useState<boolean>(false);

  //   const id = params.index;
  //   const product = product;
  console.log(product + "product");

  const descriptionLines = product?.desc.split("\\n");

  console.log(descriptionLines);
  return (
    <>
      <div className="flex m-10 justify-center ">
        <Image
          src={product?.image}
          height={100}
          width={500}
          alt={product?.title}
        />
      </div>
      {/* <DetailsAccordian /> */}
      <div className=" m-10 flex justify-center ">
        <Button
          onClick={() => setShow(true)}
          className=" bg-[#fe9030] w-64 h-12"
        >
          <span className=" font-bold">Ask For Price</span>
        </Button>
      </div>
      <div className=" flex justify-center">
        <h4 className=" font-bold text-lg">{product?.title}</h4>
      </div>
      {/* <div className=" flex justify-center "> */}
      {/* <p className=" flex justify-center">{product.name}</p> */}
      <ul className="m-4">
        {descriptionLines?.map((line: any, index: any) => (
          <li
            key={index}
            className="  flex justify-center items-start mt-[10px]  "
          >
            {line}
          </li>
        ))}{" "}
      </ul>
      {/* </div> */}
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
    </>
  );
};

export default ProductDetailsPage;
