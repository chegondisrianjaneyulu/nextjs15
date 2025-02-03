import Submit from "@/components/submit"
import { createProdct } from "@/prisma-db"
import { redirect } from "next/navigation"



export default function ProductsDbCreate() {
    
    const handleSubmit = async (formData: FormData) => {
        'use server'
        const title = await formData.get('title') as string 
        const description = await formData.get('description') as string 
        const price = await formData.get('price') as string
        await createProdct(title, +price, description);
        redirect('/products-db')
    }
  
    return (
        <form action={handleSubmit} className="p-4 space-y-4 max-w-96">
        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
           
          />
        </label>
        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
           
          />
        </label>
        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="description"
            
          />
        </label>
        <Submit/>
       </form>
    )
}