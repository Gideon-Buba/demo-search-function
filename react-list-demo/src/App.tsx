import React, {
  useMemo,
  useRef,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";

const App: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [query, setQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [items, query]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value !== "") {
      setItems((prev) => {
        return [...prev, inputRef.current!.value];
      });

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      Search:
      <input value={query} onChange={handleInputChange} type="search" />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </>
  );
};

export default App;
