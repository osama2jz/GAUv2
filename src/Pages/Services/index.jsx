import { Container, Flex, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import services from "../../assets/services.svg";
import education from "../../assets/education.svg";
import shelter from "../../assets/shelter.svg";
import surgery from "../../assets/surgery.svg";
import food from "../../assets/food.svg";
import health from "../../assets/health.svg";
import funding from "../../assets/funding.svg";
import { Service } from "../General/Service";

const Services = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");
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
      <Container
        fluid
        p="0px"
        m="0px"
        style={{
          backgroundImage: `url(${services})`,
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
          style={{ borderBottom: "2px solid white" }}
        >
          Services
        </Title>
      </Container>
      <Flex
        gap={"xl"}
        direction={!matches600 ? "column" : "row"}
        justify={"space-between"}
        w="85%"
        m="auto"
        align={"flex-start"}
        mb="50px"
      >
        <video
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          autoPlay
          muted
          loop
          width={matches600 ? "590rem" : "100%"}
          height={!matches600 ? "200px" : "400rem"}
        />
        <Stack spacing={"0px"} w={matches600 ? "45%" : "100%"}>
          <Text mt="lg" color="green">
            WE PROVIDE
          </Text>
          <Title order={1} mt="0px">
            Transforming Lives, One Act of Kindness at a Time
          </Title>
          <Text>
            Building a network of compassion, resilience, and sustainable
            solutions to uplift vulnerable communities and promote lasting
            positive change. Dedicated to empowering individuals, bridging
            divides, and building a world where everyone has equal opportunities
            to thrive.
          </Text>
          <SimpleGrid cols={2} mt="xl">
            <Flex align={"center"} gap="md">
              <img src={education} />
              <Text>Education</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={surgery} />
              <Text>Surgery</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={health} />
              <Text>Health</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={food} />
              <Text>Food</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={shelter} />
              <Text>Shelter</Text>
            </Flex>
            <Flex align={"center"} gap="md">
              <img src={funding} />
              <Text>Funding</Text>
            </Flex>
          </SimpleGrid>
        </Stack>
      </Flex>
      <Flex
        align={"center"}
        justify="center"
        m={"xl"}
        direction={matches600 ? "row" : "column"}
        gap={"sm"}
      >
        {data.map((item, index) => (
          <Service data={item} key={index} />
        ))}
      </Flex>
    </>
  );
};
export default Services;
