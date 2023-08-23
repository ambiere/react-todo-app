import { useRef } from "react";
import Button from "../button/Button";
import Input from "../input/text/Input";
import { useAddTodoMutation } from "../../store/redux-slices/todoSlice";
import { prepare } from "../../utils/preparePayload";
import "./form.css";

function Form({ inputPlaceholder, submitBtnText }: FormPropsType) {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const [addNewTodo, { isLoading }] = useAddTodoMutation();

  const onSubmit = (event: React.FormEvent<Element>): Promise<void> => {
    event.preventDefault();
    return Promise.resolve();
  };

  const handleSubmitAction = async () => {
    if ([inputRef.current!.value].every(Boolean) && !isLoading) {
      try {
        const todo = await addNewTodo(prepare({ title: inputRef.current!.value })).unwrap();
        todo && console.log("Todo added successfully! ", todo);
      } catch (error) {
        console.error("Failed to add new todo ", error);
      }
    }
  };

  const sx = {
    fill: "rgba(255, 255, 255, 0.87)",
    width: "12px",
    strokeWidth: 0.1,
  };
  return (
    <form action="" className="form" onSubmit={onSubmit}>
      <Input ref={inputRef} sx={sx} inputPlaceholder={inputPlaceholder} />
      <Button textContent={submitBtnText} className="add-button" clickCb={handleSubmitAction} />
    </form>
  );
}

export default Form;
