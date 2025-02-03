import React from 'react'

async function ProductComponent() {
  await new Promise((reslove) => setTimeout(reslove, 2000))
  return (
    <div>ProductComponent</div>
  )
}

export default ProductComponent