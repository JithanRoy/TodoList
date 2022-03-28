import React from "react";

const Todo = ({text, todo, todos, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.map((items) => {

            if(items.id === todo.id)
            {
                return {
                    ...items, 
                    completed: !items.completed, 
                };
            }
            return items;
        }));
    }

    return (
        <div className="todo">
            <li className={`todo-item  ${ todo.completed ? "completed" : "" }`}>
                {text}
            </li>
            <button onClick = {completeHandler} className="complete-btn">
                <li className="fas fa-check"></li>
            </button>
            <button onClick = {deleteHandler} className="trash-btn">
                <li className="fas fa-trash"></li>
            </button>
        </div>
    );
};

export default Todo;