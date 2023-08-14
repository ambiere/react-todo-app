import { useEffect, useState } from "react";
import { formatDistanceStrict } from "date-fns";
import { Sx } from "../../components/expand/ExpandIcon";
import "./todoReminder.css";

type TodoReminderPropsType = {
  Icon: ({ sx }: { sx: Sx | undefined }) => JSX.Element;
  sx?: Sx;
  reminder: string;
};

function TodoReminder({ Icon, sx, reminder }: TodoReminderPropsType) {
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    const reminderDate = new Date(reminder);
    const currentDate = new Date();
    setTimeLeft(formatDistanceStrict(currentDate, reminderDate));
  }, [reminder]);

  return (
    <div className="todo-reminder">
      <Icon sx={sx} />
      <span>{timeLeft}</span>
    </div>
  );
}

export default TodoReminder;
