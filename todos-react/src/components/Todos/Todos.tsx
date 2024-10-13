import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './Todos.scss';

export default function Todos() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState<{ id: string; text: string; completed: boolean }[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(event:  React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inputText.trim() === "") return;
    setItems((prevItems) => [
      ...prevItems,
      { id: uuidv4(), text: inputText, completed: false },
    ]);
    setInputText("");
  }

  function isCompleted(id: string) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function clearCompleted() {
    setItems((prevItems) => prevItems.filter((item) => !item.completed));
  }

  function filterItems() {
    if (filter === "all") return items;
    if (filter === "active") return items.filter((item) => !item.completed);
    if (filter === "completed") return items.filter((item) => item.completed);
    return items;
  }

  const filteredItems = filterItems();

  return (
    <div className="todos">

      <form className="todos__form" onSubmit={addItem}>
        <button className="todos__button-add" type="submit" aria-label="Add Todo">
          ...
        </button>
        <input
          className="todos__input"
          type="text"
          placeholder="What needs to be done?"
          onChange={handleChange}
          value={inputText}
        />
      </form>

      <ul className="todos__list">
        {filteredItems.map((todoItem) => (
          <li
            className={todoItem.completed ? "todos__item todos__item_completed" : "todos__item"}
            key={todoItem.id}
          >
            <span className="todos__check" onClick={() => isCompleted(todoItem.id)}></span>
            <p className="todos__text">{todoItem.text}</p>
          </li>
        ))}
      </ul>

      <div className="todos__footer">
        <div className="todos__info">
          {items.filter((item) => !item.completed).length} items left
        </div>
        <div className="todos__wrapper-buttons">
          <button
            className={`todos__button ${filter === "all" ? "todos__button_active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`todos__button ${filter === "active" ? "todos__button_active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`todos__button ${filter === "completed" ? "todos__button_active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
        <button 
          className="todos__button" 
          onClick={clearCompleted}
        >
          Clear completed
        </button>
      </div>

    </div>
  );
}
