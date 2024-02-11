"use server ";
import { ProductType } from "@/app/_components/gallery";
import { getXataClient } from "@/src/xata";
import ProductDetailsPage from "../product-details";

// interface ProductPageProps {
//   params: {
//     index: string;
//   };
// }

// interface ProductDetailsProps {
//   id: number;
//   title: string;
//   desc: string;
//   image: string;
// }

async function fetchDetails(params: string): Promise<ProductType | any> {
  const xataClient = getXataClient();
  const products = await xataClient.db.products.read(params);
  // const productsitem = await xataClient.db.items
  //   // .filter({ product_id: `${params}` })
  //   .getMany();
  // console.log(productsitem + "producst item");

  return products;
}

const ProductPage = async ({ params }: { params: any }) => {
  // console.log({ params } + "\nParams");

  const data = await fetchDetails(params);
  return (
    <>
      <ProductDetailsPage product={data} />
    </>
  );
};

export default ProductPage;
