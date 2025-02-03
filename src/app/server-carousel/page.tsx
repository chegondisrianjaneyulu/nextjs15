
import ImageSlider from '@/components/slider'
import React from 'react'
import { serverSideFunction } from '../utils/server-utils'
import { clientSideFucntion } from '../utils/client-utils'


function ServerCarousel() {
    const result = serverSideFunction()
    console.log('result', result)

    //this will not work because we are not using 'use client'.  clientSideFucntion is client-only
    // const result2 = clientSideFucntion();
    // console.log('result2', result2) 

   return (
     <>
       <h1>Hello world</h1>
       {/*only this component render on client side because packages are not updated with use client */}
       <ImageSlider/>
     </>
   )
}

export default ServerCarousel