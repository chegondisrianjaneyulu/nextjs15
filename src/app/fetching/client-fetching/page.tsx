'use client'
import React, { useEffect, useState } from 'react'


type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}



function ClientFetching() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>('');

  useEffect(() => {
     fetchData()
  }, [])

   async function fetchData() {
     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) throw new Error('Falied to fetch users')
        const data = await response.json();
        setUsers(data)
     }
     catch(err) {
       if (err instanceof Error) {
          setError(err.message)
       }
       else {
         setError('Unknown Error')
       }
     }
     finally {
        setLoading(false)
     }

  }

  if (loading) return (<div>Loading....</div>)
  
  if (error) return (<div>Error {error}</div>)


  return (
    <div>
        {users.map((data, idx) => (
            <div key={idx}>
               <h1>{data.name}</h1>
               <p>{data.username}</p>
               <br/>
               <br/>
               <br/>
            </div>
        ))}
    </div>
  )
}

export default ClientFetching