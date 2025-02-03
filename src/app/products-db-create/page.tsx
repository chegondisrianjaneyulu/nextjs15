'use client'
import Submit from "@/components/submit"
import { createProdct } from "@/prisma-db"
import { redirect } from "next/navigation"
import { useActionState } from "react"

type Errors = {
    title?: string;
    description?: string;
    price?: string;
}

type FormState = {
    errors: Errors
}

export default function ProductsDbCreate() {
    
    const initialState: FormState= {
        errors: {}
    }
    const [state, formAction, isPending] = useActionState(handleSubmit, initialState)

    
    const handleSubmit = async (formData: FormData) => {
        'use server'
        const title = await formData.get('title') as string 
        const description = await formData.get('description') as string 
        const price = await formData.get('price') as string

        const errors: Errors = {}

        if ( !title ) {
            errors.title = 'Title is required'
        }
        if ( !description ) {
            errors.title = 'Description is required'
        }
        if ( !price ) {
            errors.title = 'Price is required'
        }
        
        if ( Object.keys(errors).length > 0 ) {
            return {errors}
        }

        await createProdct( title, +price, description );
        redirect('/products-db')
    }
  
    return (
        <form action={formAction} className="p-4 space-y-4 max-w-96">

        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
           
          />
          <br/>
          {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}
        </label>

        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
           
          />
           <br/>
           {state.errors.price && <p className="text-red-500">{state.errors.price}</p>}
        </label>

        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="description"
            
          />
           <br/>
           {state.errors.description && <p className="text-red-500">{state.errors.description}</p>}
        </label>

        {/* <Submit/> */}

        <button type='submit' className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500" disabled={isPending}>
           Submit
        </button>

       </form>
    )
}