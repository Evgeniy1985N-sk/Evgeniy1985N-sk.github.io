import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

import Todos from "./components/Todos/Todos";

test("добавление нового элемента в список при вводе текста и нажатии на кнопку", () => {
  render(<Todos />);

  // Находим поле ввода и кнопку "добавить"
  const input = screen.getByPlaceholderText(/What needs to be done?/i) as HTMLInputElement;
  const addButton = screen.getByLabelText("Add Todo");

  // Вводим текст в поле ввода
  fireEvent.change(input, { target: { value: "New Todo Item" } });
  expect(input.value).toBe("New Todo Item");

  // Нажимаем на кнопку добавления
  fireEvent.click(addButton);

  // Проверяем, что элемент появился в списке
  const newItem = screen.getByText("New Todo Item");
  expect(newItem).toBeInTheDocument();

  // Проверяем, что поле ввода очищается после добавления
  expect(input.value).toBe("");
});