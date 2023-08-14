import AvatarIcon from "./components/avatar/AvatarIcon";
import MenuIcon from "./components/menu/MenuIcon";
import "./app.css";
import Header from "./views/header/Header";
import Todos from "./views/todos/Todos";

function App() {
  const todos = [
    {
      id: crypto.randomUUID(),
      title:
        "Research on the contribution of greenhouses gases released from domestic latrine pits",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse viverra placerat tortor. ",
      timestamp: {
        createdOn: new Date().toISOString(),
        dueOn: new Date("1/12/2024").toISOString(),
      },
      reminder: new Date("1/12/2024").toISOString(),
      priority: "Important",
      category: "School",
    },
    {
      id: crypto.randomUUID(),
      title: "Research (greenhouse-gases)",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse viverra placerat tortor. ",
      timestamp: {
        createdOn: new Date().toISOString(),
        dueOn: new Date("1/12/2024").toISOString(),
      },
      reminder: new Date("1/12/2024").toISOString(),
      priority: "Important",
      category: "School",
    },
    {
      id: crypto.randomUUID(),
      title:
        "Research on the contribution of greenhouses gases released from domestic latrine pits",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse viverra placerat tortor. ",
      timestamp: {
        createdOn: new Date().toISOString(),
        dueOn: new Date("1/12/2024").toISOString(),
      },
      reminder: new Date("1/12/2024").toISOString(),
      priority: "Important",
      category: "School",
    },
    {
      id: crypto.randomUUID(),
      title:
        "Research on the contribution of greenhouses gases released from domestic latrine pits",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse viverra placerat tortor. ",
      timestamp: {
        createdOn: new Date().toISOString(),
        dueOn: new Date("1/12/2024").toISOString(),
      },
      reminder: new Date("1/12/2024").toISOString(),
      priority: "Important",
      category: "School",
    },
    {
      id: crypto.randomUUID(),
      title: "Research (greenhouse-gases)",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse viverra placerat tortor. ",
      timestamp: {
        createdOn: new Date().toISOString(),
        dueOn: new Date("1/12/2024").toISOString(),
      },
      reminder: new Date("1/12/2024").toISOString(),
      priority: "Important",
      category: "School",
    },
    {
      id: crypto.randomUUID(),
      title:
        "Research on the contribution of greenhouses gases released from domestic latrine pits",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse viverra placerat tortor. ",
      timestamp: {
        createdOn: new Date().toISOString(),
        dueOn: new Date("1/12/2024").toISOString(),
      },
      reminder: new Date("1/12/2024").toISOString(),
      priority: "Important",
      category: "School",
    },
  ];
  const sx = {
    fill: "rgba(255, 255, 255, 0.87)",
    width: "14px",
    strokeWidth: 0.1,
    top: "9px",
    left: "16px",
  };
  return (
    <div className="app">
      <Header
        userName={"zhid0399123"}
        UserIcon={AvatarIcon}
        MenuIcon={MenuIcon}
        sx={sx}
        onSubmit={async () => console.log("todo submited!")}
        setTodoCb={() => console.log("todo stored in state")}
        inputPlaceholder={"Got new todo?"}
        submitBtnText={"Add"}
      />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
