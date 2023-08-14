import { format } from "date-fns";
import { useEffect, useState } from "react";
import "./todoTimestamp.css";

type TodoTimestampPropsType = {
  timestamp: {
    createdOn: string;
    dueOn: string;
  };
};

function TodoTimestamp({ timestamp }: TodoTimestampPropsType) {
  const [createdOn, setCreatedOn] = useState("");
  const [dueOn, setDueOn] = useState("");

  useEffect(() => {
    setCreatedOn(format(new Date(timestamp.createdOn), "MMMM dd, yyyy"));
    setDueOn(format(new Date(timestamp.dueOn), "MMMM dd, yyyy"));
  }, [timestamp]);

  return (
    <div className="todo-timestamp">
      <span>Created on: {createdOn}</span> {""}
      <span>Due on: {dueOn}</span>
    </div>
  );
}

export default TodoTimestamp;
