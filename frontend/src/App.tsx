import { useGetTodosQuery } from "./store/redux-slices/todoSlice";
import Header from "./views/header/Header";
import Todo from "./views/main/Todo";
import "./app.css";

function App() {
  const { data: todos = [] } = useGetTodosQuery();
  return (
    <div className="app">
      <Header />
      <Todo className="todo-container" todos={todos} />
    </div>
  );
}

export default App;
