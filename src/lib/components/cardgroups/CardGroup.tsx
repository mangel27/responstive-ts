import { Box, Heading, Flex, useColorModeValue } from "@chakra-ui/react";
import SimpleCard from "../cardLayout/SimpleCard";

const CardGroup = (props: { title: string; cards: Array<any> }) => {
    const { title, cards } = props;

    return (
        <Box p="5" w="100%" bg={useColorModeValue("white", "gray.200")}>
            <Heading>{title}</Heading>
            <Flex
                w="100%"
                flexWrap="nowrap"
                gap={4}
                my={6}
                justifyContent={["flex-start", "space-around"]}
                overflowX="scroll"
                className="noScrollBar"
            >
                {cards.map((card, index) => (
                    <SimpleCard
                        title={card.title}
                        text={card.text}
                        index={index}
                        key={"card" + index}
                    />
                ))}
            </Flex>
        </Box>
    );
};
export default CardGroup;
