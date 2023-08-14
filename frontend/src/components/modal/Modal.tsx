import React from "react";
import "./modal.css";

type ModalPropsType = {
  options: string[];
  onSelectCb: () => void;
  className: string;
};

type Ref = React.LegacyRef<HTMLDivElement> | undefined;

const Modal = React.forwardRef(function Modal(
  { className, options, onSelectCb }: ModalPropsType,
  ref: Ref,
) {
  return (
    <div className={`modal-wrapper ${className}`} ref={ref}>
      {options.map((option) => (
        <div key={crypto.randomUUID()} onClick={onSelectCb}>
          {option}
        </div>
      ))}
    </div>
  );
});

export default Modal;
