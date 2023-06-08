import {
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import aboutus from "../../assets/icons/aboutUsHeader.png";
import education from "../../assets/education.svg";
import Aboutus1 from "../../assets/icons/au1.png";
import surgery from "../../assets/surgery.svg";
import food from "../../assets/food.svg";
import health from "../../assets/health.svg";
import funding from "../../assets/funding.svg";
import { Service } from "../General/Service";
import Projects from "../Home/Projects";

const About = () => {
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
          About Us
        </Title>
      </Container>
      <Container size={"xl"}>
        <Grid mt={"xl"} p={"xl"}>
          <Grid.Col span={12} md={6} lg={5}>
            {/* <Stack p={"xl"}> */}
            <Card
              shadow="md"
              padding="md"
              withBorder
              w={matches600 ? "30rem" : "18rem"}
              h={matches600 ? "29rem" : "16rem"}
            >
              <Image src={Aboutus1} height={425} width={450} alt="Norway" />
            </Card>
            {/* </Stack> */}
          </Grid.Col>
          <Grid.Col span={12} md={6} lg={6} p={"xl"}>
            <Stack>
              <Text size={"20px"} mb={"-20px"}>About us</Text>
              <Group>
                <Title>Help is Our </Title>
                <Text size={35} color="green">
                  {" "}
                  Main Goal
                </Text>
              </Group>

              <Text fw={"bold"} fz={"lg"}>
                We are the dedicated Team of individuals passionate about making
                a positive impact in the lives of those in need.
              </Text>
              <Text align="justify" size={"lg"} color="dimmed">
                Our organization was founded with the belief that every person
                deserves a chance to thrive and live a fulfilling life.
              </Text>
              <Text align="justify" size={"lg"} color="dimmed">
                Through our tireless efforts, we aim to address pressing social
                issues and provide essential support to vulnerable communities.
                By fostering a culture of compassion, empathy, and
                collaboration, we strive to create lasting change and empower
                individuals to overcome obstacles. Together, we are committed to
                building a brighter future, one act of kindness at a time. Join
                us in our mission and together let's make a difference that
                truly matters.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
      <Container size={"xl"} mb={"xl"}>
        <Grid mt={"xl"} p={"xl"}>
          <Grid.Col span={12} md={6} lg={6.5} p={"xl"}>
            <Stack>
              <Title size={22} color="green" mb={"-12px"}>
                Our Mission
              </Title>
              <Text size={23} fw={"bolder"} mb={"-15px"}>
                We work around the globe to save lives, defeat poverty and
                achieve social justice.
              </Text>
              <Text align="justify" size={"lg"} color="dimmed" mt={"md"}>
                Our mission at GAU is to create positive and lasting change in
                the world. We are dedicated to empowering individuals and
                communities, providing support, and fostering hope. Through our
                collaborative efforts, we strive to address pressing social,
                environmental, and economic challenges. Our mission is driven by
                the belief that every person deserves access to basic
                necessities, quality education, healthcare, and a safe
                environment. By working together, we aim to inspire compassion,
                amplify voices, and create sustainable solutions that uplift
                lives and build a brighter future for all. Together, we can make
                a meaningful impact and create a world where everyone has the
                opportunity to thrive.
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={12} md={6} lg={5} ml={"xl"}>
            {/* <Stack p={"xl"}> */}
            <Card
              shadow="md"
              padding="md"
              withBorder
              w={matches600 ? "30rem" : "18rem"}
              h={matches600 ? "29rem" : "16rem"}
            >
              <Image src={Aboutus1} height={425} width={500} alt="Norway" />
            </Card>
            {/* </Stack> */}
          </Grid.Col>
        </Grid>
      </Container>
      <Projects />
      <Container size={"xl"} mt={"xl"}>
        <Grid mt={"xl"} p={"xl"}>
          <Grid.Col span={12} md={6} lg={5}>
            {/* <Stack p={"xl"}> */}
            <Card
              shadow="md"
              padding="md"
              withBorder
              w={matches600 ? "30rem" : "18rem"}
              h={matches600 ? "29rem" : "16rem"}
            >
              <Image src={Aboutus1} height={425} width={450} alt="Norway" />
            </Card>
            {/* </Stack> */}
          </Grid.Col>
          <Grid.Col span={12} md={6} lg={6} p={"xl"}>
            <Stack>
              <Text size={"20px"}mb={"-15px"}>How GAU help Gypsies</Text>
              <Group mb={"-10px"}>
                <Title>Our </Title>
                <Text size={35} color="green">
                  {" "}
                  Main Services
                </Text>
              </Group>

              <Text fw={"bold"} fz={"lg"}>
                "Empowering the Gypsy Community: Services that Transform Lives
                in Spain"
              </Text>
              <Text align="justify" size={"lg"} color="dimmed">
                Our organization is driven by a commitment to breaking down
                barriers, fighting discrimination, and improving the lives of
                Gypsy individuals and families. With a deep understanding of
                their unique challenges and cultural heritage, we offer a range
                of services tailored to their specific needs.
              </Text>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
export default About;
