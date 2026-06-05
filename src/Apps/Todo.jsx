import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([
    { id: 1, label: "study react", done: false },
    { id: 2, label: "study node", done: false },
  ]);

  const handleDelete = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  };

  const toggleDone = (id) => {
    const toggle = items.map((item) => {
      if (item.id == id)
        return {
          ...item,
          done: !item.done,
        };

      return item;
    });

    setItems(toggle);
  };

  const handleAdd = () => {
    setItems([
      ...items,
      {
        id: Date.now(),
        label: "Sample Todo",
        done: false,
      },
    ]);
  };

  return (
    <>
      <section>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <p
                  style={{
                    textDecoration: item.done ? "line-through" : "none",
                  }}
                >
                  {item.label}
                </p>

                <button onClick={() => toggleDone(item.id)}>
                  {item.done ? "Undo" : "Done"}
                </button>

                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </li>
            );
          })}
          <button onClick={handleAdd}>Add Todo</button>
        </ul>
      </section>
    </>
  );
}

export default Todo;
