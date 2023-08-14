import { useEffect, useState } from "react";
import ExpandIcon, { Sx } from "../../expand/ExpandIcon";
import Button from "../../button/Button";
import "./input.css";
import React from "react";

type InputProptype = {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  inputPlaceholder: string;
  sx: Sx;
};

type Ref = React.LegacyRef<HTMLInputElement> | undefined;

type CurrentTarget = {
  currentTarget: EventTarget & HTMLInputElement;
};

const Input = React.forwardRef(({ inputPlaceholder, sx }: InputProptype, ref: Ref) => {
  const [inputvalue, setInputvalue] = useState<string>("");
  const handleInputChange = ({ currentTarget }: CurrentTarget) => {
    setInputvalue(currentTarget.value);
  };

  useEffect(() => {});
  return (
    <div className="input-wrapper">
      <input
        ref={ref}
        type="text"
        value={inputvalue}
        className="input"
        placeholder={inputPlaceholder}
        onChange={handleInputChange}
      />
      <Button
        Icon={ExpandIcon}
        sx={sx}
        className={"expand-input"}
        clickCb={() => console.log("expanded")}
      ></Button>
    </div>
  );
});

export default Input;
