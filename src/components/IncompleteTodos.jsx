export const IncompleteTodos = (props) => {

    const {todos, completeTodo} = props;
    
    return(
        <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <span className="text-gray-800">{todo.title}</span>
            <button
              onClick={() => completeTodo(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              完了
            </button>
          </li>
        ))}
      </ul>
    );
}