import { FormEvent, useRef } from "react";
import Button from "../button/Button";
import Input from "../input/text/Input";
import "./form.css";

type FormPropsType = {
  onSubmit: (event: FormEvent) => Promise<void>;
  setTodoCb: React.Dispatch<React.SetStateAction<string>>;
  inputPlaceholder: string;
  submitBtnText: string;
};

function Form({ onSubmit, setTodoCb, inputPlaceholder, submitBtnText }: FormPropsType) {
  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleSubmitAction = () => {
    console.log(inputRef.current!.value);
  };

  const sx = {
    fill: "rgba(128, 128, 128, 0.996",
    width: "16px",
    strokeWidth: 0.1,
  };
  return (
    <form action="" className="form" onSubmit={onSubmit}>
      <Input ref={inputRef} setTodo={setTodoCb} sx={sx} inputPlaceholder={inputPlaceholder} />
      <Button textContent={submitBtnText} className="add-button" clickCb={handleSubmitAction} />
    </form>
  );
}

export default Form;
