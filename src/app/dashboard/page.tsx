'use client'
import React, { useState } from 'react'

// bypass to render only on client component
// const Dashboard = dynamic(() => import('./Dashboard'), { ssr: false });

function Dashboard() {
    if (typeof window !== 'undefined') {
        console.log('This is client-side rendering');
    } 
    else {
        console.log('This is server-side rendering');
    }

  const [name, setName]=  useState('')
  return (
    <div>
        <h1>Dashboard</h1>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Hello! {name}</p>
    </div>
  )
}

export default Dashboard