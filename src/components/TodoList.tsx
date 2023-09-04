import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchTodos } from '../store/action-creators/todo';
import { useActions } from '../hooks/useActions';

const TodoList: React.FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todo
  );
  const pages = [1, 2, 3, 4, 5];
  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}. {todo.title}
        </div>
      ))}
      <div style={{ display: 'flex' }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            key={p}
            style={{
              border: p === page ? '2px solid green' : '1px solid grey',
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
