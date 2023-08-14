import { FormEvent } from "react";
import Button from "../../components/button/Button";
import { Sx } from "../../components/expand/ExpandIcon";
import Form from "../../components/form/Form";
import "./header.css";

type HeaderPropsType = {
  userName: string;
  UserIcon: ({ sx }: { sx: Sx | undefined }) => JSX.Element;
  MenuIcon: ({ sx }: { sx: Sx | undefined }) => JSX.Element;
  onSubmit: (event: FormEvent) => Promise<void>;
  setTodoCb: React.Dispatch<React.SetStateAction<string>>;
  inputPlaceholder: string;
  submitBtnText: string;
  menuTitle?: string;
  sx?: Sx;
};

function Header({
  userName,
  UserIcon,
  MenuIcon,
  onSubmit,
  setTodoCb,
  inputPlaceholder,
  submitBtnText,
  sx,
}: HeaderPropsType) {
  return (
    <div className="header">
      <Button
        className={"user"}
        textContent={userName}
        Icon={UserIcon}
        sx={sx}
        clickCb={() => console.log("yaya")}
      />
      <Form
        onSubmit={onSubmit}
        setTodoCb={setTodoCb}
        inputPlaceholder={inputPlaceholder}
        submitBtnText={submitBtnText}
      />
      <Button
        className={"menu"}
        textContent={""}
        Icon={MenuIcon}
        sx={{ ...sx, scale: 1.2, top: "14px" }}
        clickCb={() => console.log("yaya")}
      />
    </div>
  );
}

export default Header;
