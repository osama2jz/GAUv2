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
        w={isMobile?"380px":"340px"}
        h={"450px"}
      >
        {/* <Card.Section> */}
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={220}
          alt="Norway"
        />
        {/* </Card.Section> */}
        <h3>Shelter food for everony</h3>

        <Text size="md">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours
        </Text>

        <Group mt={"md"}>
          <img src={star} height={"20px"} width={"20px"} />
          <Text size="sm" color="dimmed">
            4.8 (100+ reviews)
          </Text>
        </Group>
        <Group spacing={"md"}>
          <img src={profile} height={"20px"} width={"20px"} />

          <Text size="sm" color="dimmed">
            Our Ngo shelter more than 100 families
          </Text>
        </Group>
        <Group>
          <Star size={18} strokeWidth={2} color={"#d2ca79"} />
          <Text size="sm" color="dimmed">
            15 Branches
          </Text>
        </Group>
      </Card>
    </Container>
  );
};
