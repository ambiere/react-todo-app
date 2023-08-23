import { useEffect, useRef, useState } from "react";
import "./dropdown.css";

type DropdownPropsType = {
  options: string[];
  className: string;
  placeholder: string;
  selectedOption: string | undefined;
};

type CurrentTarget = {
  currentTarget: EventTarget & HTMLDivElement;
};

function Dropdown({ selectedOption, options, className, placeholder }: DropdownPropsType) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState(selectedOption);
  const [indexSelected, setIndexSelected] = useState<number>();

  const handleSelection = (option: string) => {
    setSelected(option);
    setIndexSelected(options.indexOf(option));
  };

  const openDropdown = ({ currentTarget }: CurrentTarget) => {
    currentTarget.nextElementSibling?.classList.toggle("dropdown-input-wrapper--focused");
  };

  useEffect(() => {
    document.addEventListener(
      "click",
      () => {
        dropdownRef.current?.classList.contains("dropdown-input-wrapper--focused") &&
          dropdownRef.current?.classList.remove("dropdown-input-wrapper--focused");
      },
      true,
    );
  }, []);

  return (
    <div className={`dropdown ${className}`}>
      <div className="dropdown-input-wrapper" onClick={openDropdown}>
        <input
          className="dropdown-input"
          type="text"
          name=""
          id=""
          value={selected}
          placeholder={placeholder}
          readOnly
        />
        <span className="dropdown-icon"></span>
      </div>
      <div className="dropdown-options-wrapper" ref={dropdownRef}>
        {options.map((option, index) => (
          <div
            key={crypto.randomUUID()}
            data-value={option}
            data-index={index}
            className={`dropdown-option ${indexSelected === index ? "selected-option" : ""}`}
            onClick={() => handleSelection(option)}
          >
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
