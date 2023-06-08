import { Grid, Group, Text, Title } from "@mantine/core";

import { Star } from "tabler-icons-react";

import { useMediaQuery } from "@mantine/hooks";

const AboutUs = () => {
  
  const matches600 = useMediaQuery("(min-width :600px)");
  return (
    <>
      <Grid mt={matches600?"xl":"md"} p={matches600?"xl":"md"}>
        <Grid.Col span={12} md={6} lg={5.5} bg={"#327BBF"} p={"xl"}>
          <video
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            autoPlay
            muted
            loop
            width={matches600?"590rem":"400rem"}
            height={"400rem"}
          />
        </Grid.Col>
        <Grid.Col span={12} md={6} lg={5} p={"xl"}>
          <Group spacing={"md"}>
            <Title align="center" size={"40px"}>
              About Us
            </Title>
            <Text align="justify" size={"lg"}>
              Welcome to our NGO dedicated to empowering the Gypsy community in
              Spain. We are passionate about promoting social inclusion,
              fighting discrimination, and improving the lives of Gypsy people
              across the country. Our organization is committed to promoting
              social inclusion, advocating for equal rights, and addressing the
              unique challenges faced by the Gypsy community. With a deep
              understanding of their cultural heritage and the barriers they
              encounter, we strive to empower Gypsy individuals and families by
              providing educational opportunities, access to healthcare, and
              social support.
            </Text>
            <Group position="right">
              <Text color="#327BBF" fw={"bold"}>
                Learn More
              </Text>
              <Star />
            </Group>
          </Group>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default AboutUs;
