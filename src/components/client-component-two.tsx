'use client'

import { useState } from "react"

export default function ClientComponentTwo() {
  const [name, setName] = useState('world')
  
  return (
    <div>Client Component Two</div>
  )
}