import { useState } from "react";
import { InputTodos } from "./components/InputTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Todoリスト</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <InputTodos
            todoText={todoText}
            onChangeTodoText={onChangeTodoText}
            onClickAdd={onClickAdd}
          />
          <IncompleteTodos
            incompleteTodos={incompleteTodos}
            onClickDelete={onClickDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
