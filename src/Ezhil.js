import React, { useState } from 'react'

function Ezhil() {
    Const[counts1,setcounts1]=useState(0);
    function myfunc()
    {
      setcounts1(counts1+1)
    }
    function myfunc1()
    {
      setcounts1(counts1-1)
    }
  return (
    <>
    <button onClick={myfunc}>increase</button>
<span>{counts1}</span>
    <button onClick={myfunc}>decrease</button>
    </>
  )
}

export default Ezhil