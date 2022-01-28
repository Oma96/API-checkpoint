import React from 'react'


export default function Rate({rate,setRate}) {
    var array=[1,2,3,4,5]
    return (


<div>
   {array.map((el,key)=><span onClick={()=>setRate(el)}>
   {(el <=rate)? <i className='fas fa-star'></i> : <i className='far fa-star'></i>}
   </span>)}
</div>
)}
