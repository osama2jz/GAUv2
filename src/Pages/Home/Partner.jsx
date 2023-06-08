import {
  Card,
  Flex,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Card1 from "../../assets/icons/Component1.svg";
import { Star } from "tabler-icons-react";
import Button from "../../components/Button";
import { useMediaQuery } from "@mantine/hooks";
import Pic1 from "../../assets/icons/partner1.png" 
import Pic2 from "../../assets/icons/partner2.png" 


const Partner = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");

  return (
    <Grid mt={"xl"} p={"xl"}>
      <Grid.Col span={12} md={6} lg={5.5}>
        <Stack p={"xl"}>
          <Card
            shadow="md"
            padding="md"
            withBorder
            w={matches600 ? "25rem" : "18rem"}
            h={matches600 ? "24rem" : "16rem"}
          >
            <Image src={Pic2} height={350} alt="Norway" />
          </Card>
          <Card
            shadow="md"
            padding="md"
            withBorder
            w={matches600 ? "25rem" : "18rem"}
            h={matches600 ? "24rem" : "16rem"}
            ml={matches600?"160px":"120px"}
            mt={matches600?"-300px":"-200px"}
          >
            <Image src={Pic1} height={350} alt="Norway" />
          </Card>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12} md={6} lg={5} p={"xl"}>
        <Group>
          <Title align="center" size={"40px"}>
            Become Our Partner
          </Title>
          <Text align="justify" size={"lg"}>
            Welcome to our NGO dedicated to empowering the Gypsy community in
            Spain. We are passionate about promoting social inclusion, fighting
            discrimination, and improving the lives of Gypsy people across the
            country. Our organization is committed to promoting social
            inclusion, advocating for equal rights, and addressing the unique
            challenges faced by the Gypsy community. With a deep understanding
            of their cultural heritage and the barriers they encounter, we
            strive to empower Gypsy individuals and families by providing
            educational opportunities, access to healthcare, and social support.
          </Text>
          <Button label={"Become a Partner"} primary={true} size="md" />
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default Partner;
