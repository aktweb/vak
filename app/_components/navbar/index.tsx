import Image from "next/image";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavContact } from "./nav-contact";
import LoginButton from "./login";
import { getXataClient } from "@/src/xata";
export type ProductType = {
  id: string;
  title: string;
  image: string;
  desc: string;
};
async function productsList():Promise<ProductType[] | any> {
  const xataClient = getXataClient();
  const products = await xataClient.db.products.getMany();

  console.log("products");
  console.log(products);
  return products;
}

export const NavBar =async () => {
  const products = await productsList()
  return (
    <div className="flex bg-[#f48423] p-2 justify-between">
      <Logo />
      <NavMenu products={products} />
      {/* <Search /> */}
      <NavContact />
      <LoginButton/>
    </div>
  );
};
