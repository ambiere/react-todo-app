import "./button.css";

function Button({ className, textContent, sx, Icon, clickCb }: ButtonPropsType) {
  return (
    <button type="submit" className={`button ${className}`} onClick={clickCb}>
      <span style={{ width: sx?.width }}>{Icon ? <Icon sx={sx} /> : ""}</span>
      <span>{textContent}</span>
    </button>
  );
}

export default Button;
