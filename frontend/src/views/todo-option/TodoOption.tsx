import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import { Sx } from "../../components/expand/ExpandIcon";
import "./todoOption.css";
import { useEffect, useRef } from "react";

type TodoOptionPropsType = {
  MenuIcon: ({ sx }: { sx: Sx | undefined }) => JSX.Element;
  sx?: Sx;
};

function TodoOption({ MenuIcon, sx }: TodoOptionPropsType) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOptionBtn = () => {
    modalRef.current?.classList.toggle("modal-opened");
  };

  useEffect(() => {
    document.addEventListener(
      "click",
      () => {
        modalRef.current?.classList.contains("modal-opened") &&
          modalRef.current?.classList.remove("modal-opened");
      },
      true,
    );
  }, []);

  return (
    <div className="todo-option">
      <Button
        className={"option"}
        textContent={""}
        Icon={MenuIcon}
        sx={sx}
        clickCb={handleOptionBtn}
      />
      <Modal
        ref={modalRef}
        className={"modal"}
        options={["Edit", "Set reminder"]}
        onSelectCb={() => console.log("clicked")}
      />
    </div>
  );
}

export default TodoOption;
