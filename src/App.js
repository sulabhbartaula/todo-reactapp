import './App.css';
import { useState } from 'react';
import Product from './Product';

function App() {

  const [todos, settodos] = useState([""])

  const [input, setInput] = useState("")

  const addTodo = (e) => {
    e.preventDefault(); // to prevent refresh
    console.log(`this is the input: ${input}`);
    settodos([...todos,input]);
    setInput("");
  };

  return (
    <div className="App">

      <h1>Welcome to my Todo List</h1>

      <form>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          type="text" />

        <button onClick={addTodo}>Add Todo</button>
      </form>

      <h2>List of Todos</h2>

      {todos.map(todo =>(
        <p className="todoitem">{todo}</p>
      ))}
    

    </div>
  );
}

export default App;
