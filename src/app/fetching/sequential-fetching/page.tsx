import React, { Suspense } from 'react'
import { Author } from './author';

type Post = {
   userId: number;
   id: number;
   title: string;
   body: string;
}


async function PostsSequential() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts:Post[] = await response.json();

  const filterPosts = posts.filter((post) => post.id % 10 === 1);

  return (
    <div className='p-4 max-w-7xl mx-auto'>
        <h1 className='text-2xl font-extrabold mb-8'> Blog posts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
             {filterPosts.map((post, idx) => (
                <div key={idx} className='bg-white shadow-md rounded-lg p-6'>
                    <h1 className='text-2xl font-bold mb-3 text-gray-800 leading-tight'>{post.title}</h1>
                    <p className='text-gray-600 mb-4 leading-relaxed'>{post.body}</p>
                    <Suspense fallback={<div className='text-sm text-gray-500'>Loading author...........</div>}>
                       <Author userId={post.userId} />
                    </Suspense>
                </div>
             ))}
        </div>
    </div>
  )
}

export default PostsSequential