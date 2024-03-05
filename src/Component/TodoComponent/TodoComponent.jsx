import React, { useState } from 'react'
import './todstyle.css'

const TodoComponent = () => {

    let [name, setName] = useState("");
    let [caption , setCaption] = useState("");
    let [myarry , setMyarry] =useState([]);
    let [showBtn, setShowBtn] = useState(false);
    let [myIndex, setMyIndex] = useState("")

    let handleTodoBtn=()=>{
        let array2 = [...myarry] 
        array2.push({name:name, caption:caption})
        setMyarry(array2)
        setName("")
        setCaption("")
        console.log(array2);
    }

    let handleEdit =(item,index)=>{
        setName(item.name)
        setCaption(item.caption)
        setShowBtn(true)
        setMyIndex(index)
    }
    let handleDel = (index)=>{
        let arr2 = [...myarry]
        arr2.splice(index,1)
        setMyarry(arr2)
    }
    let handleUpdate = ()=>{
        let arr2 = [...myarry]
       
        arr2[myIndex]=({
            name : name,
            caption :caption
        })
        setMyarry(arr2)
       setShowBtn(false)
       setCaption("")
       setName("")
    }


  return (
    <>
      <h1>To do app</h1>
      <div id="TodoApp">
        <section className='inputsection'>

        <label htmlFor="yourname">your name</label><br />
        <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" id='yourname' />
        <br />
        <br />
        <label htmlFor="yourcapion">yourcapion</label><br />
        <input value={caption} onChange={(e)=>{setCaption(e.target.value)}} type="text" id='yourcaption'/><br />
        {
            showBtn ? <button onClick={handleUpdate}>update</button>
            : <button onClick={handleTodoBtn}>add todo</button>
        }

        </section>
        <section className="outputsection">
        {
            myarry.map((item, index)=>(
                <>
                <li>{item.name}</li>
                <li>{item.caption}</li>
                <li>
                <button onClick={()=>{handleEdit(item,index)}}>edit</button>
                <button onClick={()=>{handleDel(index)}}>delet</button>
                </li>
                </>
            ))
        }
        </section>
      </div>
    </>
  )
}

export default TodoComponent
