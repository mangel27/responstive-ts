import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
const InnerCard = () => {
    return (
        <Box
            w="300px"
            h="150px"
            p={4}
            bg={useColorModeValue("gray.300", "gray.500")}
            borderWidth="1px"
            borderColor="grey.900"
            borderRadius="lg"
            pos="absolute"
            right={10}
            top={-10}
        >
            <Text fontSize={"xl"} fontWeight="bold">
                Unique Team Creation
            </Text>
            <Text fontSize={"md"}>
                Now you can select only 1 player from Bat, Bwl, AllR, WK
            </Text>
        </Box>
    );
};
const StepTile = () => {
    return (
        <Box
            w={["100%", "70%"]}
            pos="relative"
            minH={"200px"}
            mx="auto"
            my={20}
            bg={useColorModeValue("gray.100", "gray.900")}
            boxShadow={"xl"}
            padding={8}
            borderWidth="1px"
            borderColor="grey.900"
            borderRadius="lg"
        >
            <Box
                pos="absolute"
                boxSize={"50px"}
                top={-5}
                left={20}
                color={useColorModeValue("white", "gray.900")}
                p={3}
                fontWeight="bold"
                borderColor="white"
                borderWidth="2px"
                //my="auto"
                bg="green.400"
                rounded={"full"}
            >
                1
            </Box>
            <InnerCard />
            <Heading my={2} textAlign={"left"}>
                Step 1
            </Heading>
        </Box>
    );
};

const StepsToPlay = (props: { title: string }) => {
    const { title } = props;
    return (
        <Box
            p="5"
            w="100%"
            mx="auto"
            textAlign={"center"}
            bg={useColorModeValue("white", "gray.200")}
        >
            <Heading>{title}</Heading>
            <StepTile></StepTile>
            <StepTile></StepTile>
            <StepTile></StepTile>
        </Box>
    );
};
export default StepsToPlay;
