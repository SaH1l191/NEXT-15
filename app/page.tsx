import React from 'react'

async function Home  ()  {

    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    if(!response.ok) throw new Error("failed to fetch data")


        const albums = await response.json()

        console.log(albums)


  return (
    <div>
      
    </div>
  )
}

export default Home
