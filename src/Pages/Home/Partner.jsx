import {
  Card,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import Button from "../../components/Button";
import { useMediaQuery } from "@mantine/hooks";
import Pic1 from "../../assets/icons/partner1.png";
import Pic2 from "../../assets/icons/partner2.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Partner = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");
  const {translate}=useContext(UserContext)

  return (
    <Grid mt={"xl"} p={"xl"}>
      <Grid.Col span={12} md={6} lg={5.5}>
        <Stack p={"xl"}>
          <Card
            shadow="md"
            padding="md"
            withBorder
            w={matches600 ? "25rem" : "13rem"}
            h={matches600 ? "24rem" : "13rem"}
            ml={matches600 ? "" : "-20px"}

          >
            <Image src={Pic2} height={350} alt="Norway" />
          </Card>
          <Card
            shadow="md"
            padding="md"
            withBorder
            w={matches600 ? "25rem" : "13rem"}
            h={matches600 ? "24rem" : "13rem"}
            ml={matches600 ? "160px" : "90px"}
            mt={matches600 ? "-300px" : "-200px"}
          >
            <Image src={Pic1} height={350} alt="Norway" />
          </Card>
        </Stack>
      </Grid.Col>
      <Grid.Col span={12} md={6} lg={5} p={"xl"}>
        <Group>
          <Title align="center" size={"40px"}>
            {translate("Become Our Partner")}
          </Title>
          <Text align="justify" size={"lg"}>
           {translate("Join us in our mission to create equal opportunities and a brighter future for the Gypsy community in Spain. Donate today and be a part of this transformative journey of empowerment and social change. Together, we can make a significant difference in the lives of Gypsy individuals and families. By partnering with GAU, you will have the opportunity to contribute your expertise, resources, and network to support our programs and initiatives. Let's collaborate to break down barriers, fight discrimination, and create a more inclusive society. Contact us today to explore partnership opportunities and together, we can build a brighter future for the Gypsy community in Spain.")}
          </Text>
          <Button label={"Become a Partner"} primary={true} size="md" onClick={()=>window.location.href="https://gauapp.es/auth/signup-professional"} />
        </Group>
      </Grid.Col>
    </Grid>
  );
};

export default Partner;
