import { Flex, Text, Title } from "@mantine/core";
import { ChevronsRight } from "tabler-icons-react";
import { Service } from "../General/Service";
import AboutUs from "./AboutUs";
import Carasoul from "./Carasole";
import Donation from "./Donation";
import routeNames from "../../routes/routeNames";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import Partner from "./Partner";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import { useStyles } from "./styles";

const index = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");
  const navigate = useNavigate();
  const {classes}=useStyles()
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Best forests to visit in North America",
      category: "nature",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Hawaii beaches review: better than you think",
      category: "beach",
    },
    {
      image:
        "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      title: "Mountains at night: 12 best locations to enjoy the view",
      category: "nature",
    },
  ];
  return (
    <>
      <Carasoul
        carouselImages={[{ src: "img1" }, { src: "img2" }, { src: "img3" }]}
      />
      {/* <Container w={"100%"} bg={"red"}> */}
      <Title align="center" size={"40px"} mt="xl">
        Our Services
      </Title>
      <Flex
        justify={"flex-end"}
        m={"md"}
        className={classes.more}
        onClick={() => navigate(routeNames.general.services)}
      >
        <Text color="#327BBF" fw={"bold"}>
          Learn More
        </Text>
        <ChevronsRight color="#327BBF" />
      </Flex>
      <Flex
        align={"center"}
        justify="center"
        m={"md"}
        direction={matches600 ? "row" : "column"}
        gap={"sm"}
      >
        {data.map((item, index) => (
          // <Grid.Col md={"auto"} key={index}>
          <Service data={item} key={index} />
          // </Grid.Col>
        ))}
      </Flex>
      <AboutUs />
      <Donation />
      <Partner />
      <Projects />
      <Testimonials
        carouselImages={[{ src: "img1" }, { src: "img2" }, { src: "img3" }]}
      />
    </>
  );
};

export default index;
