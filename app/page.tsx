import Image from "next/image";
import { Gallery } from "./_components/gallery";
import { QForm } from "./_components/query-form";
import ClientGallery from "./_components/gallery/clients-gallery";
import AboutUs from "./_components/AboutUs/about-us";
// import './style.css'

export default function Home() {
  return (
    <div>
      <AboutUs/>
      <Gallery />
      
      <ClientGallery/>
    </div>
  );
}
