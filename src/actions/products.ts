'use server'

import { createProdct } from "@/prisma-db";
import { redirect } from "next/navigation";

export type Errors = {
    title?: string;
    description?: string;
    price?: string;
}

export type FormState = {
    errors: Errors
}

export const handleSubmit = async (prevState:FormState, formData: FormData) => {
   
    const title = await formData.get('title') as string 
    const description = await formData.get('description') as string 
    const price = await formData.get('price') as string

    const errors: Errors = {}

    if ( !title ) {
        errors.title = 'Title is required'
    }
    if ( !description ) {
        errors.description = 'Description is required'
    }
    if ( !price ) {
        errors.price = 'Price is required'
    }
    
    if ( Object.keys(errors).length > 0 ) {
        return {errors}
    }

    await createProdct( title, +price, description );
    redirect('/products-db')
}