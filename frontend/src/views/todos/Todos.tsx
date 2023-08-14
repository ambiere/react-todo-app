import MenuIcon from "../../components/menu/MenuIcon";
import NotificationIcon from "../../components/notification/NotificationIcon";
import TodoCategory from "../todo-category/TodoCategory";
import TodoControlBtn from "../todo-control-btn/TodoControlBtn";
import TodoOption from "../todo-option/TodoOption";
import TodoReminder from "../todo-reminder/TodoReminder";
import TodoTimestamp from "../todo-timestamp/TodoTimestamp";
import TodoTitle from "../todo-title/TodoTitle";
import "./todo.css";

type TodosPropsType = {
  todos: {
    id: string;
    title: string;
    content: string;
    timestamp: {
      createdOn: string;
      dueOn: string;
    };
    reminder: string;
    priority: string;
    category: string;
  }[];
};

function Todos({ todos }: TodosPropsType) {
  const sx = {
    fill: "rgba(255, 255, 255, 0.87)",
    width: "10px",
    strokeWidth: 0.1,
  };
  return (
    <>
      <ul className="todo-wrapper">
        {todos.map((todo) => (
          <li key={crypto.randomUUID()}>
            <div className="todo">
              <div className="todo-main">
                <TodoTitle title={todo.title} />
                <TodoReminder Icon={NotificationIcon} sx={sx} reminder={todo.reminder} />
                <TodoOption
                  MenuIcon={MenuIcon}
                  sx={{ ...sx, scale: 1.2, strokeWidth: 0, right: "6px", bottom: "6px" }}
                />
              </div>
              <TodoCategory />
              <TodoTimestamp timestamp={todo.timestamp} />
              <TodoControlBtn />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
