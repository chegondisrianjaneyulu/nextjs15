'use client'
import React, { useEffect } from 'react'

function Error({error}: {error: Error}) {

  useEffect(() => {
    console.error(`${error}`);
  }, [error])

  return (
    <div className='flex items-center justify-center h-screen'>
        <h1 className='text-2xl text-red-500'>Error fetching user data {error?.message}</h1>
    </div>
  )
}

export default Error