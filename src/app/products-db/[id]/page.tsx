import EditForm from "@/components/editForm"
import { getProductId } from "@/prisma-db"
import { Product } from "../page"
import { notFound } from "next/navigation"



export default async function EditProduct({params} : {params: Promise<{id: string}>}) {

    const {id} = await params
    const product:Product | null = await getProductId(+id)
    
    if (!product) {
       notFound()
    }
    
    return (
       <EditForm product={product}/>
    )
}