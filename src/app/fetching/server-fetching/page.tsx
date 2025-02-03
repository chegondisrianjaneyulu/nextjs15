import React from 'react'

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

async function ServerFetching() {
  await new Promise((reslove) => setTimeout(reslove, 2000))
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) throw new Error('Falied to fetch users')
  const users:User[] = await response.json();
 
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

export default ServerFetching