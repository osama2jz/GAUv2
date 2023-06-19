import {
  Card,
  Container,
  Group,
  Image,
  Text
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useContext } from "react";
import { Star } from "tabler-icons-react";
import profile from "../../assets/icons/profile.png";
import star from "../../assets/icons/star.png";
import { UserContext } from "../../contexts/UserContext";
import { useStyles } from "./styles";

export const Service = ({ data }) => {
  const { classes } = useStyles();
  const { translate } = useContext(UserContext);
  const isWeb = useMediaQuery("(min-width: 600px)");
  return (
    <Container>
      <Card
        shadow="sm"
        padding="lg"
        // radius="md"
        withBorder
        style={{
          borderRadius: "10px",
          marginLeft: !isWeb ? "0px" : "40px",
          boxShadow: "2px 2px 10px 2px rgb(0,0,0,0.2)",
          margin: "5px",
        }}
        w={isWeb ? "400px" : "320px"}
        h={isWeb ? "450px" : "460px"}
      >
        {/* <Card.Section> */}
        <Image src={data?.image} height={220} alt="image" />
        {/* </Card.Section> */}
        <h3>{translate(data?.title)}</h3>

        <Text size={isWeb ? "md" : "sm"} mt={"-10px"}>
          {translate(data?.des)}
        </Text>

        <Group mt={"md"}>
          <img src={star} height={"20px"} width={"20px"} />
          <Text size={isWeb ? "sm" : "xs"} color="dimmed">
            {`${data?.rating} (100+ reviews)`}
          </Text>
        </Group>
        <Group spacing={"md"}>
          <img src={profile} height={"20px"} width={"20px"} />

          <Text size={isWeb ? "sm" : "xs"} color="dimmed">
            {translate(data?.work)}
          </Text>
        </Group>
        <Group>
          <Star size={18} strokeWidth={2} color={"#d2ca79"} />
          <Text size={isWeb ? "sm" : "xs"} color="dimmed">
            {`${data?.branches} ${translate("Branches")}`}
          </Text>
        </Group>
      </Card>
    </Container>
  );
};
