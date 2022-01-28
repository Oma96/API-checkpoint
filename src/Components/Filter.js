import React from 'react'
import {Button}from 'react-bootstrap'

function Filter({input,setInput}) {

    


     const handleInput=(e) => {
         setInput(e.target.value) }

         const addHandler=(e)=>{
            e.preventDefault()
        setInput("")
        console.log({input})
    }

  
    return (
        <div>
          <form>
          <input
        type='text'
        value={input}
         onChange={handleInput}
        ></input>
        <Button variant= 'secondary' onClick={addHandler} style={{height:35}} >Search</Button>
        </form>
        </div>
    )
}

export default Filter

