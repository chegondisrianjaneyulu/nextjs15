'use client'

import { removeProduct } from "@/actions/products"
import { Product } from "@/app/products-db/page"
import Link from "next/link"
import { useOptimistic } from "react"

export default function ProductDetail({products}: {products: Product[]}) {

    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId) => {
        return currentProducts.filter((data) => data.id !== productId)
    })
  
    const handleDelete = async (productId:number) => {
       setOptimisticProducts(productId)
       removeProduct(productId)
    }

    return (
        <ul className="space-y-4 p-4">
        {optimisticProducts.map((product) => (
            <li key={product.id} className="p-4 bg-white shadow-md rounded-lg text-gray-700">
            <h2 className="text-xl font-semibold">
                <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
            <form action={handleDelete.bind(null, product.id)}>
                <button type='submit' className="px-4 py-2 mt-4 text-white bg-red-500 hover:bg-red-700 rounded-md">delete</button>
            </form>
            </li>
        ))}
    </ul>
    )
}