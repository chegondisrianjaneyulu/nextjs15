import Navbar from '@/components/newDashboardLayout/navbar'
import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

async function NewDashboard() {

  const authObj = await auth()
  const userObj = await currentUser()

  console.log(authObj)
  console.log(userObj)

  return (
    <div>
        <Navbar/>
        <main>
            <h1>New Dashboard Page Heading</h1>
        </main>
    </div>
  )
}

export default NewDashboard