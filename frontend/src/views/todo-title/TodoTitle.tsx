import "./todoTitle.css";

type TodoTitlePropsType = {
  title: string;
};

function TodoTitle({ title }: TodoTitlePropsType) {
  return (
    <p className="todo-title">
      {title.substring(0, 70)}
      {title.length > 50 ? "..." : ""}
    </p>
  );
}

export default TodoTitle;
