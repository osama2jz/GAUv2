import { Burger, Container, Flex, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import routeNames from "../../Routes/routeNames";
import logo from "../../assets/Gau.png";
import { UserContext } from "../../contexts/UserContext";
import Button from "../Button";
import { useStyles } from "./styles";

export const LandingHeader = ({ opened, toggle }) => {
  const isMobile = useMediaQuery("(max-width: 820px)");
  const { user, translate } = useContext(UserContext);
  const { classes } = useStyles({ opened });

  const navigate = useNavigate();
  return (
    <Container
      fluid
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-around",
        alignItems: "center",
        
      }}
      p={"sm"}
    >
      <Flex
        align={"center"}
        className={classes.logo}
        onClick={() => navigate(routeNames.general.landing)}
      >
        <img src={logo} width={60} />
        <Text fw={"bold"} fz={20}>
          GAU
        </Text>
      </Flex>
      {isMobile && <Burger opened={opened} onClick={toggle} />}
      <Flex gap={"lg"} align={"center"} className={classes.navigationBar}>
        <Link className={classes.link} to={routeNames.general.landing}>
          {translate("Home")}
        </Link>
        <Link className={classes.link} to={routeNames.general.landing}>
          {translate("Services")}
        </Link>
        <Link className={classes.link} to={routeNames.general.aboutUs}>
          {translate("About Us")}
        </Link>
        <Link className={classes.link} to={routeNames.general.donate}>
          {translate("Donations")}
        </Link>
        <Link className={classes.link} to={routeNames.general.landing}>
          {translate("Our Partner")}
        </Link>
        <Link className={classes.link} to={routeNames.general.landing}>
          {translate("Contact Us")}
        </Link>
        {!user?.role ? (
          <>
            <Button
              label={"Sign up"}
              primary={true}
              onClick={() => navigate(routeNames.general.signup)}
            />
            <Button
              label={"Log in"}
              primary={true}
              onClick={() => navigate(routeNames.general.login)}
            />
          </>
        ) : (
          <Button
            onClick={() => {
              localStorage.removeItem("userData");
              window.location.reload();
            }}
            label={"Logout"}
          />
        )}
      </Flex>
    </Container>
  );
};
