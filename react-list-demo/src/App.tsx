import { useState, useRef } from "react";

function onSubmit(e) {
  e.preventDefault();
}

const App = () => {
  const [items, setItems] = useState([]);
  // const [query, setQuery] = useState([]);
  // const inputRef = useRef();

  return (
    <>
      Search:
      <input type="search" />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input type="text" />
        <button type="submit">Add</button>
      </form>
      <h2>Items:</h2>
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
};

export default App;
