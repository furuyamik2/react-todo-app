import React, { useState, useEffect } from 'react';
import { supabase } from './lib/supabase';
import { InputTodos } from './components/InputTodos';
import { IncompleteTodos } from './components/IncompleteTodos';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(null);

  // 未完了のTodoを取得
  const fetchTodos = async () => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .eq('completed', false)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching todos:', error);
        setError(`Todoの取得に失敗しました: ${error.message}`);
      } else {
        setTodos(data);
        setError(null);
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError(`予期せぬエラーが発生しました: ${err.message}`);
    }
  };

  // 新しいTodoを追加
  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    try {
      const { error } = await supabase
        .from('todos')
        .insert([{ title: newTodo, completed: false }])
        .select();

      if (error) {
        console.error('Error adding todo:', error);
        setError(`Todoの追加に失敗しました: ${error.message}`);
      } else {
        setNewTodo('');
        setError(null);
        fetchTodos();
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError(`予期せぬエラーが発生しました: ${err.message}`);
    }
  };

  // Todoを完了にする
  const completeTodo = async (id) => {
    try {
      const { error } = await supabase
        .from('todos')
        .update({ completed: true })
        .eq('id', id);

      if (error) {
        console.error('Error completing todo:', error);
        setError(`Todoの完了処理に失敗しました: ${error.message}`);
      } else {
        setError(null);
        fetchTodos();
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError(`予期せぬエラーが発生しました: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Todoリスト</h1>
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          <div className="max-w-2xl mx-auto p-4">
            {error && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}
            <InputTodos addTodo={addTodo} newTodo={newTodo} setNewTodo={setNewTodo} />
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">未完了のタスク</h2>
            <IncompleteTodos todos={todos} completeTodo={completeTodo} />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Todo;
