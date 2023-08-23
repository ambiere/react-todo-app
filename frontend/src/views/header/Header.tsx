import Form from "../../components/form/Form";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <Form inputPlaceholder={"Got new todo?"} submitBtnText={"Add"} />
    </div>
  );
}

export default Header;
