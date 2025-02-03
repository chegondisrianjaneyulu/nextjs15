import Link from 'next/link'
import React from 'react'
function Products() {
  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-[30px]'>Products</h1>
      <Link href={'/products/1'}>Product 1</Link>
      <Link href={'/products/2'}>Product 2</Link>
      <Link href={'/products/3'}>Product 3</Link>
    </div>
  )
}

export default Products