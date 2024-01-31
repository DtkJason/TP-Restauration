import { Primary } from "./CardPrimary";
import { Secondary } from "./CardSecondary";

const Card = ({ children }) => {
  return <div>{children}</div>;
};

Card.Primary = Primary;

Card.Secondary = Secondary;

export default Card;
