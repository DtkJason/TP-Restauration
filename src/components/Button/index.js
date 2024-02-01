import { Primary } from "./ButtonPrimary";
import { Secondary } from "./ButtonSecondary";

const Button = ({ children }) => {
  return <div>{children}</div>;
};

Button.Primary = Primary;
Button.Secondary = Secondary;

export default Button;
