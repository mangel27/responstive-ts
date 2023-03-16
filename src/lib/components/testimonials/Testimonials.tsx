import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import TestimonialCard from "./TestimonialCard";
import Carousel from "~/lib/patterns/Carousel";

const Testimonials = (props: { title: string; cards: any }) => {
    const { title, cards } = props;
    const getSlides = () => {
        let slides: JSX.Element[] = [];
        cards.map((slide, index) => {
            slides.push(
                <TestimonialCard children={slide} key={"card" + index} />
            );
        });
        return slides;
    };
    return (
        <Box
            px={["5vw", "10vw"]}
            w="100%"
            bg={useColorModeValue("white", "gray.200")}
        >
            <Heading my="2em">{title}</Heading>
            <Carousel
                slides={getSlides()}
                settings={{
                    dots: true,
                    infinite: true,
                    swipeToSlide: true,
                    speed: 500,
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    adaptiveHeight: true,

                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                initialSlide: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                }}
            />
        </Box>
    );
};
export default Testimonials;
