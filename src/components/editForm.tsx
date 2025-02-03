'use client'
import { editProduct, FormState, } from "@/actions/products"
import { Product } from "@/app/products-db/page"
import { useActionState } from "react"




export default function EditForm({product}: {product: Product}) {
    const initialState: FormState= {
        errors: {}
    }

    const editProductWithId = editProduct.bind(null, product.id)

    const [state, formAction, isPending] = useActionState(editProductWithId, initialState)

   return (
       <form action={formAction} className="p-4 space-y-4 max-w-96">

        <label className="text-white">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
           defaultValue={product.title}
          />
         
        </label>
        <br/>
        {state.errors.title && <p className="text-red-500">{state.errors.title}</p>}

        <label className="text-white">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
            defaultValue={product.price}
          />
        </label>
        <br/>
        {state.errors.price && <p className="text-red-500">{state.errors.price}</p>}

        <label className="text-white">
          Description
          <textarea
            className="block w-full p-2 text-black border rounded"
            name="description"
            defaultValue={product.description ?? ""}
          />
          
        </label>
        <br/>
        {state.errors.description && <p className="text-red-500">{state.errors.description}</p>}

        {/* <Submit/> */}

        <button type='submit' className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500" disabled={isPending}>
           Submit
        </button>

       </form>
   )
}