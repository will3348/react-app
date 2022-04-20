import './App.css';
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  console.log({ todo });
  function onChangeField(event) {
    setTodo(event.target.value)
  }
  function onClickAdd() {
    setList([...list, todo])
  }
  function onRemoveClick(index) {
    setList(list.filter((x,i) => index !==i));
  }
  return (
    <div className="App">
      <h1>What I Am Going To Do</h1>
      <input vulue={todo} onChange={onChangeField} />
      <button onClick={onClickAdd}>ADD</button>
      <ul>
        {list.map((item, index) => {
          return (
          <li key={index}>
            {item}<button onClick={() =>onRemoveClick(index)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
