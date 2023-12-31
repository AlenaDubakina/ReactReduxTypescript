import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import UserList from './components/UserList';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <UserList />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
