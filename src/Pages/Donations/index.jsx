import {
  Container,
  Flex,
  Grid,
  List,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import d1 from "../../assets/d1.svg";
import donation from "../../assets/donation.svg";
import d2 from "../../assets/d2.svg";
import d3 from "../../assets/d3.svg";
import d4 from "../../assets/d4.svg";
import { useForm } from "@mantine/form";
import Button from "../../components/Button";
import { useStyles } from "./styles";

const Donations = () => {
  const matches600 = useMediaQuery("(min-width: 600px)");
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      amount: null,
      comments: "",
    },

    validate: {
      firstName: (value) => (value?.length < 1 ? "Enter First Name" : null),
      lastName: (value) => (value?.length < 1 ? "Enter Last Name" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Enter valid email"),
      phoneNo: (value) => (value?.length < 1 ? "Enter Phone Number" : null),
      amount: (value) => (value < 1 ? "Enter Amount" : null),
    },
  });

  return (
    <>
      <Container
        fluid
        p="0px"
        m="0px"
        style={{
          backgroundImage: `url(${donation})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          position: "relative",
        }}
        h={matches600 ? "500px" : "300px"}
        mb="xl"
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0,0,0,0.2)",
          }}
        ></div>
        <Title
          order={1}
          pos={"absolute"}
          top={"50%"}
          left={"40%"}
          color="white"
          style={{ borderBottom: "2px solid white" }}
        >
          Services
        </Title>
      </Container>
      <Flex
        gap={"xl"}
        direction={!matches600 ? "column" : "row"}
        justify={"space-between"}
        w="85%"
        m="auto"
        align={"flex-start"}
        mb="50px"
        pt="xl"
      >
        <Stack spacing={"20px"} w={matches600 ? "45%" : "100%"}>
          <Title order={1} mt="0px">
            Empower the Gypsy Community Donate and Make a Lasting Impact
          </Title>
          <Text>
            Ignite hope. Unleash compassion. Support the Gypsy community. Your
            donation breathes life into forgotten dreams, breaking chains of
            marginalization. Together, we create a symphony of transformation,
            painting a brighter future. Let love and understanding guide our
            path, rewriting their story with unwavering kindness. Make an
            indelible mark of empathy, for every heartfelt gift shapes their
            lives.
          </Text>
          <List mt={"xl"}>
            <List.Item>
              Your support celebrates the vibrant culture of the Gypsy people.
            </List.Item>
            <List.Item>
              By amplifying their voices, you nurture their dreams for a better
              future.
            </List.Item>
            <List.Item>
              Your generosity becomes a catalyst for positive change.
            </List.Item>
            <List.Item>
              Together, we can make a profound difference in their lives.
            </List.Item>
          </List>
        </Stack>
        <Grid w={!matches600 ? "100%" : "45%"}>
          <Grid.Col xs={12}>
            <img src={d1} width={"100%"} />
          </Grid.Col>
          <Grid.Col span={6}>
            <img src={d2} width={"100%"} />
          </Grid.Col>
          <Grid.Col span={6}>
            <img src={d3} width={"100%"} />
          </Grid.Col>
        </Grid>
      </Flex>
      <Grid p={"xl"} justify="space-evenly">
        <Grid.Col md={4}>
          <form className={classes.form} onSubmit={form.onSubmit(() => {})}>
            <Title align="center">Make A Donation</Title>
            <TextInput
              placeholder="First Name"
              size="md"
              {...form.getInputProps("firstName")}
            />
            <TextInput
              size="md"
              placeholder="Last Name"
              {...form.getInputProps("lastName")}
            />
            <TextInput
              placeholder="Email"
              size="md"
              type="email"
              {...form.getInputProps("email")}
            />
            <TextInput
              size="md"
              placeholder="Phone Number"
              type="tel"
              {...form.getInputProps("phoneNo")}
            />
            <TextInput
              placeholder="Amount"
              size="md"
              type="number"
              {...form.getInputProps("amount")}
            />
            <TextInput
              placeholder="Comments"
              size="md"
              {...form.getInputProps("comments")}
            />
            <Button type={"submit"} label={"Donate"} bg={true} />
          </form>
        </Grid.Col>
        <Grid.Col xs={6}>
          <img src={d4} width="100%" />
        </Grid.Col>
      </Grid>
    </>
  );
};
export default Donations;
