import Product from "@/app/_components/Product/page";
import { Contents } from "../content";

export default function ProductsList() {
  const list = Contents.Products;
  return (
    <>
      <h1>Products</h1>
      {list.length > 0 &&
        list.map(({ id, name, image }) => {
          <Product key={id} title={name} image={image} />;
        })}
    </>
  );
}
