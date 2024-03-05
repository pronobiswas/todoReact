import React, { useState } from 'react'
import './blogComponentStyle.css'
import TodoComponent from '../TodoComponent/TodoComponent';


const BlogComponent = () => {
    let [count,setCount] = useState(0);
    let [errorText,setErrorText] =useState("");
    let plusResult = ()=>{
        if(count >= 10){
            setErrorText("value mus be 10 o4 less")
        }else{
            count++
            setCount(count);
            setErrorText("")
        }
    }
    let minusResult = ()=>{
        if(count <= 0){
            setErrorText("minus value not allowed")
        }else{
            count--;
            setCount(count);
            setErrorText("")
        }
    }
  return (
    <>
      <div id="blogComponent">
        <button className='plusIncrement' onClick={plusResult}>Incrementt</button>
        <p className="resultblog">{count}</p>
        <button className='minusDecrement' onClick={minusResult}>Decrement</button>
        <p className="errorMasage">{errorText}</p>
      </div>
      <TodoComponent/>
    </>
  )
}

export default BlogComponent
