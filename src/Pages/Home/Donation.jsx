import { Card, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useStyles } from "./styles";

import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import routeNames from "../../routes/routeNames";

import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const Donation = () => {
  const { translate } = useContext(UserContext);
  const navigate = useNavigate();
  const matches600 = useMediaQuery("(min-width: 600px)");
  const componentRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);
  const { classes } = useStyles({ animate: inViewport });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold value as needed
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

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
            ref={componentRef}
            className={classes.animation}
          >
            <Text
              size={"25px"}
              weight="bold"
              align="center"
              color="white"
              // style={{ fontVariant: "small-caps" }}
            >
              <b className="fgColorF">{translate("Make a Donation")} </b>
            </Text>
            <Text
              size={"15px"}
              // weight="bold"
              align="center"
              color="white"
              w={matches600 ? "50rem" : "20rem"}
              ml={"auto"}
              mr={"auto"}
            >
              {
                translate("Your donation can empower the Gypsy community in Spain. Give today and make a lasting impact. Your contribution will directly support our efforts to empower and uplift Gypsy individuals and families. With your generous donation, we can provide education, healthcare, and social support programs tailored to their specific needs")
              }
            </Text>
          </div>
          <Button
            label="Donate now"
            primary={true}
            size={matches600 ? "lg" : "sm"}
            onClick={() => navigate(routeNames.general.donate)}
           
          />
        </Stack>
      </Card>
    </>
  );
};

export default Donation;
