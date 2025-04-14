import { useState } from "react";

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
    <div>
      <h1>Todoリスト</h1>
      {/* 入力エリア */}
      <div>
        <input placeholder="TODOを追加" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      {/* タスク一覧 */}
      <div>
        <p>完了のタスク</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <p>{todo}</p>
              <button onClick = {() => onClickDelete(index)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
