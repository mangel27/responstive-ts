import { ReactElement } from "react";
import {
    Box,
    Heading,
    Stack,
    Flex,
    Icon,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import { cardColors } from "~/lib/constants/sharedData";
interface FeatureProps {
    title: string;
    text: string;
    icon: any;
    index: any;
}
const SimpleCard = (props: FeatureProps) => {
    const { title, text, icon, index } = props;
    return (
        <Stack
            borderWidth="1px"
            textAlign={"center"}
            px={4}
            py={10}
            bg={cardColors[index]}
            color={useColorModeValue("white", "gray.200")}
            rounded="lg"
            justifyContent={"space-around"}
            shadow="lg"
            minW={["46%", "30%"]}
            minH="300px"
        >
            <Box mx="auto" w="100%">
                <Icon as={icon} w={12} h={12} color={"white"} />
            </Box>

            <Text fontWeight={600} fontSize="xl">
                {title}
            </Text>
            <Text>{text}</Text>
        </Stack>
    );
};
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
                        icon={card.icon}
                        index={index}
                        key={"card" + index}
                    />
                ))}
            </Flex>
        </Box>
    );
};
export default CardGroup;
