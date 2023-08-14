import { Sx } from "../expand/ExpandIcon";
import "./button.css";

type ButtonPropType = {
  textContent?: string;
  Icon?: ({ sx }: { sx: Sx | undefined }) => JSX.Element;
  clickCb: () => void;
  sx?: Sx;
  className: string;
};

function Button({ textContent, Icon, sx, className, clickCb }: ButtonPropType) {
  return (
    <button type="submit" className={`button ${className}`} onClick={clickCb}>
      {Icon && Icon({ sx })}
      <span>{textContent}</span>
    </button>
  );
}

export default Button;
