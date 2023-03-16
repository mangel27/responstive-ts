import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import CardGroup from "~/lib/components/cardgroups/CardGroup";
import FAQSegment from "~/lib/components/faqsegment/FAQSegment";
import Features from "~/lib/components/features/Features";
import Hero from "~/lib/components/hero/Hero";
import StepsToPlay from "~/lib/components/stepstoplay/StepsToPlay";
import Testimonials from "~/lib/components/testimonials/Testimonials";
import {
    FANTASY_BENEFITS,
    EARN_MORE,
    TESTIMONIAL_DATA
} from "~/lib/constants/sharedData";
import SimpleCard from "~/lib/components/cardLayout/SimpleCard";
import Carousel from "~/lib/patterns/Carousel";
import BenefitsSection from "~/lib/components/benefits/BenefitsSection";

const Home = () => {
    const getSlides = () => {
        let slides: JSX.Element[] = [];
        FANTASY_BENEFITS.map((slide, index) => {
            slides.push(
                <SimpleCard
                    title={slide.title}
                    text={slide.text}
                    index={index}
                    key={"card" + index}
                />
            );
        });
        return slides;
    };
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            // minHeight="70vh"
            //gap={4}
            mb={8}
            w="full"
        >
            <NextSeo title="Home" />
            <Hero />
            <Features />
            {/* <CardGroup
                title={"Earn more with HalaPlay"}
                cards={FANTASY_BENEFITS}
            /> */}
            <BenefitsSection
                title={"Earn more with Halaplay"}
                cards={EARN_MORE}
            />
            <BenefitsSection
                title={"Halaplay Benefits"}
                cards={FANTASY_BENEFITS}
            />
            <Testimonials
                title={"What our users say"}
                cards={TESTIMONIAL_DATA}
            />
            {/* <StepsToPlay title={"How to create team?"} /> */}

            {/* <FAQSegment title={"Frequently Asked Questions"} data={FAQ_ITEMS} /> */}

            {/* <Testimonials /> */}
        </Flex>
    );
};

export default Home;
