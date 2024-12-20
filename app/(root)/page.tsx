import { Collection } from "@/components/collection";
import { Navbar } from "@/components/navbar";
import { ProductList } from "@/components/product_list";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.png"
        alt="banner"
        width={2000}
        height={1000}
        className="w-screen"
      />
      <Collection />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";
