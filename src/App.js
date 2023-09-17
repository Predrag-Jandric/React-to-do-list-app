import React, { useState } from "react";
import Item from "./components/Item";

function App() {

  const [todos, setTodos] = useState([])
  const [inputVal, setInputVal] = useState("")

  const handleInput = (e) => {
    setInputVal(e.target.value)
  }

  const addToDo = () => {
    if (inputVal !== "") {
      setTodos(prevTodo => [...prevTodo, inputVal])
      setInputVal("")
    }
  }

  const handleDelete = (uniqueIndex) => {
    setTodos((prev) => prev.filter((prevTodo, prevIndex) => prevIndex !== uniqueIndex));
  }

  return (
    <main className="main">
      <h1>React To-do List</h1>

      <section className="addItem">
        <input className="addItem__input" type="text" value={inputVal} placeholder="Enter task" onChange={handleInput} />
        <button className="addItem__btn globalBtn" onClick={addToDo}>Add</button>
      </section>

      <Item todos={todos} handleDelete={handleDelete} />

    </main>
  );
}

export default App;
