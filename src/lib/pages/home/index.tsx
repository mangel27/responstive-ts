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
                title={"Gamezy Fantasy Benefits"}
                cards={FANTASY_BENEFITS}
            />
            <CardGroup
                title={"Other Fantasy Benefits"}
                cards={FANTASY_BENEFITS}
            />
            <StepsToPlay title={"It's easy to start playing on Halaplay"} />
            <FAQSegment title={"Frequently Asked Questions"} data={FAQ_ITEMS} />
            <Testimonials />
        </Flex>
    );
};

export default Home;
