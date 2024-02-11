"use server";
import { getXataClient } from "@/src/xata";

async function fetchDetails(params: string): Promise<any> {
  const xataClient = getXataClient();
  const products = await xataClient.db.items
    .filter( "product_id", `${params}` )
    .getMany();

  return products;
}
const ItemPage = async ({ params }: { params: string }) => {
  console.log({ params } + "ITEM Params");

  const items = await fetchDetails(params);
  console.log(items + "ITEMS page");

  return <div> </div>;
};

export default ItemPage;
