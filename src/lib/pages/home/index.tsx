import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import CardGroup from "~/lib/components/cardgroups/CardGroup";
import FAQSegment from "~/lib/components/faqsegment/FAQSegment";
import Features from "~/lib/components/features/Features";
import Hero from "~/lib/components/hero/Hero";
import StepsToPlay from "~/lib/components/stepstoplay/StepsToPlay";
import Testimonials from "~/lib/components/testimonials/Testimonials";
import { FANTASY_BENEFITS, FAQ_ITEMS } from "~/lib/constants/sharedData";

const Home = () => {
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
            <CardGroup
                title={"Earn more with HalaPlay"}
                cards={FANTASY_BENEFITS}
            />
            <CardGroup title={"Halaplay Benefits"} cards={FANTASY_BENEFITS} />

            <StepsToPlay title={"How to create team?"} />
            <FAQSegment title={"Frequently Asked Questions"} data={FAQ_ITEMS} />
            <Testimonials />
        </Flex>
    );
};

export default Home;
