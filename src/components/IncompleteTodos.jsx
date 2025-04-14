export const IncompleteTodos = (props) => {
    const { incompleteTodos, onClickDelete } = props;

    return (
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">未完了のタスク</h2>
          <ul className="space-y-3">
            {incompleteTodos.map((todo, index) => (
              <li
                key={todo}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <p className="text-gray-800">{todo}</p>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                  onClick={() => onClickDelete(index)}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
};