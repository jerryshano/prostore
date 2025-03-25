import React from 'react'

const DataTest = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const posts = await data.json();
  return (
    <div>
      userid:{posts.userId} id: {posts.id} title: {posts.title} body: {posts.body}
    </div>
  )
}
export default DataTest
