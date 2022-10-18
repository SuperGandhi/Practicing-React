import React from 'react'
import {VscBug, VscGlobe} from 'react-icons/vsc';


const Posts = () => {
  return (
    <>
      <button onClick={()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
      }}>
        <VscBug/>
        <VscGlobe/>
        Get data
      </button>
    </>
  )
}

export default Posts