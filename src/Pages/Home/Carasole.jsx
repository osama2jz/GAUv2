import { Carousel } from "@mantine/carousel";
import { Container, Image, Paper, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
// import Autoplay from "embla-carousel-autoplay";
import Slider1 from "../../assets/icons/Component1.svg";

const SearchBackground = ({ carouselImages }) => {
  const matches600 = useMediaQuery("(min-width: 600px)");

  // const autoplay = useRef(Autoplay({ delay: 10000 }));

  const searchBackgroundCarousel = (
    <Carousel
      styles={{ indicators: { zIndex: 10 } }}
      withIndicators
      loop
      align="start"
      height={matches600?"75vh":"50vh"}
      orientation="vertical"
      draggable={false}
      withControls={false}
      // plugins={[autoplay.current]}
    >
      {carouselImages?.map((image, index) => {
        return (
          <Carousel.Slide key={index}>
            <Image height={matches600?"75vh":"50vh"} src={Slider1} />
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
  return (
    <Paper withBorder style={{ backgroundColor: "#000", position: "relative"}}>
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
            size={matches600 ? "3vw" : "5vw"}
            weight="bold"
            align="center"
            color="white"
            style={{ fontVariant: "small-caps" }}
          >
            <b className="fgColorF">"Empowering </b> Lives{", "}
            {/* {!matches600 ? <br></br> : null}Used{" "} */}
            <b className="fgColorF">Inspiring Change"</b>
          </Text>
          <Text
            size={matches600 ? "1.5vw" : "3vw"}
            // weight="bold"
            align="center"
            color="white"
            style={{ fontVariant: "small-caps" }}
            w={matches600?"50rem":"20rem"}
            ml={"auto"}
            mr={"auto"}
          >
            Unlocking potential, transforming lives - our NGO is dedicated to
            empowering individuals and communities
          </Text>
        </div>
      </Stack>
      {/* <SearchBackgroundOpacityDiv /> */}
      {searchBackgroundCarousel}
    </Paper>
  );
};

export default SearchBackground;
