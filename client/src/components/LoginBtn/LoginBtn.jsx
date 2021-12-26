import { Icon } from "@iconify/react";

const LoginBtn = ({ btnText, btnClasses }) => {
  return (
    <button
      className={btnClasses}
      style={{ display: "flex", alignItems: "center" }}
    >
      <Icon icon="tabler:login" height="16" />
      <span className="ml-1">{btnText}</span>
    </button>
  );
};

export default LoginBtn;
