import React from "react";
import Slider, { Settings } from "react-slick";
import { Box, BoxProps, Center } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProps extends BoxProps {
    slides: React.ReactNode[];
    settings?: Settings;
}

const Carousel: React.FC<CarouselProps> = ({ slides, settings, ...rest }) => {
    const defaultSettings: Settings = {
        ...settings
    };

    return (
        <Box {...rest}>
            <Slider {...defaultSettings}>
                {slides.map((slide, index) => (
                    <Center w="200px" key={index} height="100%">
                        {slide}
                    </Center>
                ))}
            </Slider>
        </Box>
    );
};

export default Carousel;
