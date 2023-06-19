import { createStyles, keyframes } from "@mantine/core";
import donation from "../../assets/icons/Component1.svg";
export const bigToSmall = keyframes({
  from: { transform: "scale(1.5)", margin: "50px" },
  to: { transform: "scale(1)", margin: "0px" },
});
export const useStyles = createStyles((theme, props) => ({
  donation: {
    backgroundImage: `url(${donation})`,
    height: "330px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  animation: {
    animation: props?.animate ? `${bigToSmall} 1s ease-in-out` : "",
  },
  projects: {
    backgroundImage: `url(${donation})`,
    height: "300px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "space-evenly",

    [`@media (max-width: 600px)`]: {
      flexDirection: "column",
      height: "auto",
      gap: "15px",

      // position: "absolute",
      // top: "80px",
      // padding: "50px 20px",
      // borderRadius: "10px",
      // width: "100vw",
      // right: 0,
      // backgroundColor: "white",
    },
  },
  projectsDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "5px",
    border: "2px solid white",
    padding: "15px",
  },
  more: {
    cursor: "pointer",
  },
}));
