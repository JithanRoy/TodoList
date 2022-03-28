import React from "react";

const Form = ({setInputText, inputText, todos, setTodos, setStatus}) => {
    //write js code
    const inputTextHandler = (e) => {
        
        setInputText(e.target.value);
    }

    const setTodosHandler = (e) => {
        e.preventDefault();
        setTodos([
          ...todos,
          {Text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };

    const setStatusHandler = (e) => {
      setStatus(e.target.value);
    }
    return (
        <form>
        <input value={inputText} onChange = {inputTextHandler} type="text" className="todo-input" />
        <button onClick={setTodosHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={setStatusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
}

export default Form;