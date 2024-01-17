import { ProductType } from "@/app/_components/gallery";
import { getXataClient } from "@/src/xata";
import ProductDetailsPage from "./product-details";

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

async function fetchDetails(params: string): Promise<ProductType | any> {
  console.log({params})
  const xataClient = getXataClient();
  const products = await xataClient.db.products.read(params);

  console.log("products");
  console.log(products);
  return products;
}

export const ProductPage = async ({params}:{params:any}) => {
  console.log({params}+"\nParams");
  
  const data = await fetchDetails(params);
  return (
    // <>
    //   <div className="flex m-10 justify-center ">
    //     <Image
    //       src={Contents.Products[id].image}
    //       height={100}
    //       width={500}
    //       alt={Contents.Products[id].name}
    //     />
    //   </div>
    //   <div className=" m-10 flex justify-center ">
    //     <Button onClick={() => setShow(true)} className=" w-64 h-12">
    //       <span className=" font-bold">Ask For Price</span>
    //     </Button>
    //   </div>
    //   <div className=" flex justify-center">
    //     <h4 className=" font-bold text-lg">{Contents.Products[id].name}</h4>
    //   </div>
    //   {/* <div className=" flex justify-center "> */}
    //   {/* <p className=" flex justify-center">{Contents.Products[id].name}</p> */}
    //   <ul className="m-4">
    //     {descriptionLines?.map((line, index) => (
    //       <li
    //         key={index}
    //         className="  flex justify-center items-start mt-[10px]  "
    //       >
    //         {line}
    //       </li>
    //     ))}{" "}
    //   </ul>
    //   {/* </div> */}
    //   {show && (
    //     <div>
    //       <QForm
    //         setShow={setShow}
    //         style={cn(
    //           "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"
    //         )}
    //       />
    //     </div>
    //   )}
    // </>
    <>
      <ProductDetailsPage product={data} />
    </>
  );
};

export default ProductPage;
