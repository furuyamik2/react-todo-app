export const InputTodos = (props) => {
    const { todoText, onChangeTodoText, onClickAdd } = props;
    return (
        <div className="flex gap-2">
          <input
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="TODOを入力"
            value={todoText}
            onChange={onChangeTodoText}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            onClick={onClickAdd}
          >
            追加
          </button>
        </div>
      );
};