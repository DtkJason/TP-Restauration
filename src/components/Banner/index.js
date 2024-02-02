import { Red } from "./BannerRed";
import { Black } from "./BannerBlack";

const Banner = ({ children }) => {
  return <div>{children}</div>;
};

Banner.Red = Red;
Banner.Black = Black;

export default Banner;
