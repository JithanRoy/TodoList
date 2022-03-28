import React from "react";
//import component
import Todo from "./Todo";

const TodoList = ({todos, setTodos}) => {
    return (
        <div className= "todo-container">
        <ul className = "todo-list">
            {todos.map((todo) => (
                <Todo key={todo.id} todo = {todo} todos = {todos} setTodos ={setTodos} text = {todo.Text}  />
            )) }
        </ul>
        </div>
    );
};

export default TodoList;