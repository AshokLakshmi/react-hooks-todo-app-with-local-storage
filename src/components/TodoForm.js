import React from 'react'

export default function TodoForm({inputText,setInputText,todoList,setTodoList}) {
    const OnChangeInput=(e)=>{
        setInputText(e.target.value)
    }
    const OnSubmitForm=(e)=>{
         e.preventDefault();
         if(inputText===0){
             return;
        }
        setTodoList([...todoList,{text:inputText,id:Date.now(),isCompleted:false}])
       
        setInputText("");
    }

    return (
        <div className="todo-form">
            <form onSubmit={OnSubmitForm}>
                <input
                onChange={OnChangeInput}
                value={inputText}
                required 
                type="text" 
                placeholder="Write here..."/>
                <button type="submit">ADD</button>
            </form>
            
        </div>
    )
}
