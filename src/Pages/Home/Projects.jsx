import { Card, Flex, Group, Image, Stack, Text, Title } from "@mantine/core";
import React, { useContext, useState } from "react";
import { useStyles } from "./styles";
import { useMediaQuery } from "@mantine/hooks";
import GroupIcon from "../../assets/icons/Group.svg";
import PatternIcon from "../../assets/icons/Group (1).svg";
import PeopleIcon from "../../assets/icons/Group (2).svg";
import LaptopIcon from "../../assets/icons/Group (3).svg";
import { UserContext } from "../../contexts/UserContext";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Projects = () => {
  const { classes } = useStyles();
  const matches600 = useMediaQuery("(min-width: 600px)");
  const { translate } = useContext(UserContext);
  const [count, setCount] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCount(true)}
      onExit={() => setCount(false)}
    >
      <Card withBorder className={classes.projects} p={"xl"}>
        {/* <Flex justify={"space-evenly"}> */}
        <div className={classes.projectsDiv}>
          <Image src={GroupIcon} width={200} height={70} fit="contain" />
          {count && (
            <CountUp
              start={0}
              end={5}
              duration={2}
              style={{ fontSize: "60px", fontWeight: 1000, color: "white" }}
            />
          )}
          <Text color="white" size={"xl"}>
            {translate("Years of Operations")}
          </Text>
        </div>
        <div className={classes.projectsDiv}>
          <Image src={PatternIcon} width={200} height={70} fit="contain" />
          {count && (
            <CountUp
              start={0}
              end={10}
              duration={2}
              style={{ fontSize: "60px", fontWeight: 1000, color: "white" }}
            />
          )}
          <Text color="white" size={"xl"}>
            {translate("Completed Projects")}
          </Text>
        </div>
        <div className={classes.projectsDiv}>
          <Image src={PeopleIcon} width={200} height={70} fit="contain" />
          {count && (
            <CountUp
              start={0}
              end={20}
              duration={2}
              style={{ fontSize: "60px", fontWeight: 1000, color: "white" }}
            />
          )}
          <Text color="white" size={"xl"}>
            {translate("Loyal Clients")}
          </Text>
        </div>
        <div className={classes.projectsDiv}>
          <Image src={LaptopIcon} width={200} height={70} fit="contain" />
          {count && (
            <CountUp
              start={0}
              end={5}
              duration={2}
              style={{ fontSize: "60px", fontWeight: 1000, color: "white" }}
            />
          )}
          <Text color="white" size={"xl"}>
            {translate("New Projects")}
          </Text>
        </div>
        {/* </Flex> */}
      </Card>
    </ScrollTrigger>
  );
};

export default Projects;
