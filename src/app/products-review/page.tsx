
import ProductComponent from '@/components/product'
import ReviewsComponent from '@/components/reviews'
import React, { Suspense } from 'react'

//STREMING
function ProductReviews() {
  return (
    <div>
        <h1>Product Reviews</h1>

        <Suspense fallback={<><p className='text-2xl font-bold'>Product component is loading........</p></>}>
             <ProductComponent/>
        </Suspense>

        <Suspense fallback={<><p className='text-2xl font-bold'>Reviews component is loading.........</p></>} >
           <ReviewsComponent/>
        </Suspense>

    </div>
  )
}

export default ProductReviews