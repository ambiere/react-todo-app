import React, { FormEvent, useEffect, useState } from "react";
import { Types } from "./TodoReducer";
import { createTodosCtx } from "./todoContext";
import { v4 as uuidV4 } from "uuid";
import useAPI from "./useAPI";
import axios from "axios";

const [useCtx, ,] = createTodosCtx();

export default function TodoList() {
  const { state, dispatch } = useCtx();
  const [todoText, setTodoText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editTodo, setEditTodo] = useState<{ id: string; text: string } | null>(null);
  const buttonTitle = editMode ? "Edit" : "Add";
  const endpoint = "http://localhost:3000/todos/";
  const savedTodos = useAPI(endpoint);

  useEffect(() => {
    dispatch({ type: Types.GET, payload: savedTodos });
  }, [dispatch, savedTodos]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (editMode) {
      await axios.patch(endpoint + editTodo?.id, { text: todoText });
      dispatch({ type: Types.EDIT, payload: { id: editTodo?.id, text: todoText } });
      setEditMode(false);
      setEditTodo(null);
      setTodoText("");
    } else if (todoText !== "") {
      const payload = { id: uuidV4(), text: todoText };
      await axios.post(endpoint, payload);
      dispatch({ type: Types.ADD, payload: payload });
      setTodoText("");
    }
  };

  return (
    <div className="w-[640px] mr-auto ml-auto flex flex-col">
      <form action="" className="flex flex-col md: w-8/12 mr-auto ml-auto" onSubmit={handleSubmit}>
        <input type="text" value={todoText} className="outline-none border h-9 p-2 mb-4 text-sm" placeholder="Enter To Do" onChange={(event) => setTodoText(event.target.value)} />
        <button type="submit" className="bg-blue-600 text-white font-semibold w-12 h-8 rounded-[4px] mb-6">
          {buttonTitle}
        </button>
      </form>

      <div className="grid grid-cols-8  bg-gray-100 text-sm font-semibold mb-4 h-8 content-center md: w-8/12 mr-auto ml-auto">
        <span className="col-start-1 col-end-7 pl-2">To Do</span>
        <span>Edit</span>
        <span>Delete</span>
      </div>

      <ul className="md: w-8/12 mr-auto ml-auto">
        {state.todos.map((todo) => (
          <li key={todo.id} className="grid gap-2 p-1 m-0 grid-cols-8 border-b-[1px]">
            <span className="col-start-1 col-end-7 pl-2 text-sm">{todo.text}</span>
            <span
              className="cursor-pointer text-sm text-blue-600 underline"
              onClick={() => {
                setTodoText(todo.text);
                setEditMode(true);
                setEditTodo(todo);
              }}
            >
              Edit
            </span>
            <span
              className="cursor-pointer text-sm text-red-600 underline "
              onClick={async () => {
                await axios.delete(endpoint + todo.id);
                dispatch({ type: Types.DELETE, payload: todo });
              }}
            >
              Delete
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
