'use client'
import { useState } from "react"
import ServerComponentOne from "./server-component-one"
// import ClientComponentTwo from "./client-component-two"

export default function ClientComponentOne({children}: {children: React.ReactNode}) {
  const [name, setName] = useState('world')

  return (
    <div>
        <h1>Client Component One</h1>
        {children}
        {/* <ClientComponentTwo/> */}
    </div>
  )
}