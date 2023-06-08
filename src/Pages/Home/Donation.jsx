import {
  Card,
  Container,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";

import Button from "../../components/Button";
import routeNames from "../../routes/routeNames";
import { useNavigate } from "react-router-dom";

const Donation = () => {
  const { classes } = useStyles();
  const navigate=useNavigate()
  const matches600 = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <Card withBorder className={classes.donation}>
        <Stack
          style={{ position: "absolute", height: "100%", width: "100%" }}
          align="center"
          justify={"center"}
        >
          <div
            style={{
              zIndex: 10,
              width: "100%",
            }}
          >
            <Text
              size={matches600 ? "3vw" : "6vw"}
              weight="bold"
              align="center"
              color="white"
              // style={{ fontVariant: "small-caps" }}
            >
              <b className="fgColorF">Make </b> a Donation{" "}
            </Text>
            <Text
              size={matches600 ? "1.2vw" : "2.4vw"}
              // weight="bold"
              align="center"
              color="white"
              w={matches600 ? "50rem" : "30rem"}
              ml={"auto"}
              mr={"auto"}
            >
              Your donation can empower the Gypsy community in Spain. Give today
              and make a lasting impact. Your contribution will directly support
              our efforts to empower and uplift Gypsy individuals and families.
              With your generous donation, we can provide education, healthcare,
              and social support programs tailored to their specific needs
            </Text>
          </div>
          <Button
            label="Donate now"
            primary={true}
            size={matches600 ? "lg" : "md"}
            onClick={() => navigate(routeNames.general.donate)}
          />
        </Stack>
      </Card>
    </>
  );
};

export default Donation;
