import { Container, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import aboutus from "../../assets/icons/aboutUsHeader.png";

import Partner from "../Home/Partner";

const About = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");

  return (
    <>
      <Container
        fluid
        p="0px"
        m="0px"
        style={{
          backgroundImage: `url(${aboutus})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          position: "relative",
        }}
        h={matches600 ? "500px" : "300px"}
        mb="xl"
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0,0,0,0.2)",
          }}
        ></div>
        <Title
          order={1}
          pos={"absolute"}
          top={"50%"}
          left={"40%"}
          color="white"
        >
          Patner
        </Title>
      </Container>
      <Partner />
    </>
  );
};
export default About;
