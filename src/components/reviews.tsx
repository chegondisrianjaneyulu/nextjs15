import React from 'react'

async function ReviewsComponent() {
  await new Promise((reslove) => setTimeout(reslove, 5000))
  return (
    <div>ReviewsComponent</div>
  )
}

export default ReviewsComponent