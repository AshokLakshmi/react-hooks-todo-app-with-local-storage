import React from 'react'
import {MdDoneAll} from 'react-icons/md'
import {TiDelete} from "react-icons/ti"

export default function TodoList({todoList,setTodoList}) {

    /*On click Detele items*/
    const OnDeleteHandler=(listItems)=>{
         setTodoList(todoList.filter((newListData)=>{
             return newListData.id!==listItems.id
         }))}
     /*on Click Complete items*/    
    const OnCompleteHandler=(listItems)=>{
        setTodoList(todoList.map((newListData)=>{
            if(newListData.id===listItems.id){
            return {...newListData, isCompleted:!newListData.isCompleted}
        }
            return newListData
            }))}
        
/* display todo List and Buttons to detele ,update and complete*/
    return (
       
        <div className="todo-list">
             {todoList.length > 0 ?(
                 <ul>
                 {todoList.map((listItems)=>{
                     return <div key={listItems.id}>
                         <li className={listItems.isCompleted ? "completed": ""}>
                     {listItems.text}
                     <div className="icons">
                     <button onClick={()=>OnCompleteHandler(listItems)}><MdDoneAll/></button>
 
                    
 
                     <button onClick={()=>OnDeleteHandler(listItems)}><TiDelete/></button>
                     </div>
                     </li>
                     </div>
                 })}
                 
               
                
             </ul>
             ): <ul className="no-todo">You Have No Tasks...!<br/>
             Add Your Task First</ul>}
            
        </div>
    )
}
