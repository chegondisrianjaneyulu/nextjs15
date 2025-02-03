import ProductDetail from "@/components/productDetail";
import { getProducts } from "@/prisma-db";


export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function Products({searchParams}: {searchParams: Promise<{query?:  string}>}) {
   const {query} = await searchParams
   const products: Product[] = await getProducts(query);
  
   return (
     <ProductDetail products={products}/>
   )
}