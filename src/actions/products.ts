'use server'

import { createProdct, deleteProduct, updateProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";
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


export const editProduct = async (id:number, prevState:FormState, formData: FormData) => {
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

    await updateProduct(id, title, +price, description );
    redirect('/products-db')
}


export const removeProduct = async (id:number) => {
    await deleteProduct(id)
    revalidatePath('/products-db')
}