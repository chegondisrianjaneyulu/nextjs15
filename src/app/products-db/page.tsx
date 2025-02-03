import ProductDetail from "@/components/productDetail";
import { getProducts } from "@/prisma-db";


export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

export default async function Products() {
   const products: Product[] = await getProducts();
  
   return (
     <ProductDetail products={products}/>
   )
}