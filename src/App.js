import "./App.css";
import React, { useEffect, useState } from "react";     
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
//run useEffect once

useEffect = (() => {
  getLocalStroage();
}, []);
  //useEffect
  useEffect = (() => {
    console.log("run");
    filterStatus();
    saveLocalStorage();
    
  }, [todos,status]);

  const filterStatus = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true ));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false ));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalStorage = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem("todos", JSON.stringify());
    }
  }
  const getLocalStroage = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let TodoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(TodoLocal);
    }
  }


  return (
    <div className="App">
      <header>
        <h1>Jony's Todo List</h1>
      </header>
      <Form  setStatus = {setStatus} todos = {todos} inputText = {inputText} setTodos={setTodos} setInputText = {setInputText} />
      <TodoList filteredTodos = {filteredTodos} setStatus = {setStatus} todos = {todos} setTodos = {setTodos} />
    </div>
  );
}

export default App;
