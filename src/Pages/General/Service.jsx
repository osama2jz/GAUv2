import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useMediaQuery } from "@mantine/hooks";
import { Star } from "tabler-icons-react";
import star from "../../assets/icons/star.png";
import profile from "../../assets/icons/profile.png";

export const Service = ({ data }) => {
  const { classes } = useStyles();
  const { translate } = useContext(UserContext);
  const isMobile = useMediaQuery("(min-width: 600px)");
  return (
    <Container >
      <Card
        shadow="sm"
        padding="lg"
        // radius="md"
        withBorder
        w={isMobile?"400px":"380px"}
        h={"450px"}
      >
        {/* <Card.Section> */}
        <Image
          src={data?.image}
          height={220}
          alt="Norway"
        />
        {/* </Card.Section> */}
        <h3>{translate(data?.title)}</h3>

        <Text size="md" mt={"-10px"}>
        {translate(data?.des)}
        </Text>

        <Group mt={"md"}>
          <img src={star} height={"20px"} width={"20px"} />
          <Text size="sm" color="dimmed">
            {`${data?.rating} (100+ reviews)`}
          </Text>
        </Group>
        <Group spacing={"md"}>
          <img src={profile} height={"20px"} width={"20px"} />

          <Text size="sm" color="dimmed">
            {translate(data?.work)}
          </Text>
        </Group>
        <Group>
          <Star size={18} strokeWidth={2} color={"#d2ca79"} />
          <Text size="sm" color="dimmed">
           {`${data?.branches} ${translate("Branches")}`}
          </Text>
        </Group>
      </Card>
    </Container>
  );
};
