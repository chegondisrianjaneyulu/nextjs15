
import React from 'react'

async function Users({params}: {params: Promise<{id:string}>} ) {
  const  {id} = await params
  return (
    <div>Users {id}</div>
  )
}

export default Users