import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList';
import {useState,useEffect} from 'react'

function App() {
  const [inputText,setInputText]= useState("");
  const [todoList,setTodoList] =useState([]);

  useEffect(()=>{
  const getLocalTodos=()=>{
    if(localStorage.getItem('todoList')===null){
      localStorage.setItem('todoList',JSON.stringify([]));
    }
    else{
     let localTodos = JSON.parse(localStorage.getItem("todoList",JSON.stringify(todoList)));
     setTodoList(localTodos);}}
  getLocalTodos();
},[]);

 useEffect(()=>{
  const saveLocalTodos=()=>{
    localStorage.setItem("todoList",JSON.stringify(todoList));
}
   saveLocalTodos();
 },[todoList]);

 

  return (
    <div className="main-container">
     <TodoHeader/>
     <TodoForm 
     inputText={inputText} 
     setInputText={setInputText}
     todoList={todoList}
     
     setTodoList={setTodoList}/>

     <TodoList 
     todoList={todoList}
     setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
