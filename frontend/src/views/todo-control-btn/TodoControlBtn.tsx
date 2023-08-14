import Button from "../../components/button/Button";
import "./todoControlBtn.css";

function TodoControlBtn() {
  return (
    <div className="todo-control-btn">
      <Button
        className={"mark-as-done"}
        textContent="Mark as done"
        clickCb={() => console.log("done")}
      />
      {/* <Button className={"set-reminder"} textContent="Set a reminder" /> */}
      {/* <Button className={"edit"} textContent="Edit" /> */}
      <Button className={"delete"} textContent="Delete" clickCb={() => console.log("deleted")} />
    </div>
  );
}

export default TodoControlBtn;
