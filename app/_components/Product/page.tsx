import Image from "next/image";
export default function Product({id, name, image }:any) {
  return (
    <div className=" border-2 border-white m-3 p-3">
      <h4>{name}</h4>
      <Image alt={name} src={image} height={100} width={50} />
    </div>
  );
}
