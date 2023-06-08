import { createStyles } from "@mantine/core";
import landingBg from "../../assets/landingBg.svg";
import g2 from "../../assets/g2.svg";
import footer from "../../assets/landingFooter.svg";
import donation from "../../assets/icons/Component1.svg";
export const useStyles = createStyles((theme) => ({
  donation: {
    backgroundImage: `url(${donation})`,
    height: "330px",
    backgroundSize:"cover",
    backgroundRepeat: "no-repeat",
    
  },
}));
