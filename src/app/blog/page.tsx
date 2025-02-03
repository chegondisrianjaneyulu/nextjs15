import { cookies } from 'next/headers'
import React from 'react'

async function Blog() {
  console.log('This is Blog Page')
  const cookie = await cookies();
  console.log('cookie====', cookie)
  return (
    <div>Blog {new Date().toLocaleTimeString()}</div>
  )
}

export default Blog