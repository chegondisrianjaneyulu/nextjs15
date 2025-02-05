'use client'

import { useAuth, useUser } from "@clerk/nextjs"
import { useState } from "react"



export default function Counter() {
    const [count, setCount] = useState(0)

    const {isLoaded, userId, sessionId, getToken} = useAuth();
    // const {isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !userId) {
        return null
    }

    return (
        <div className="flex flex-col">
         <h1>Count</h1>
         <p>{count}</p>
         <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        </div>
    )
}