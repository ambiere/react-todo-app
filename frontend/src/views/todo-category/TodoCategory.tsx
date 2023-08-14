import Dropdown from "../../components/input/dropdown/Dropdown";
import "./todoCategory.css";

function TodoCategory() {
  return (
    <div className="todo-category">
      <Dropdown
        options={["Personal", "Work", "Family", "Unknown"]}
        className="category"
        placeholder={"Category"}
      />
      <Dropdown options={["Important", "Normal"]} className="priority" placeholder={"Priority"} />
    </div>
  );
}

export default TodoCategory;
