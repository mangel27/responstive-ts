import { Box, Heading, Text, useColorModeValue, Image, Center, SimpleGrid } from "@chakra-ui/react";

const StepTile1 = () => {
    return (
        <Box>
            <Image src="./img/step1.png"></Image>
        </Box>
    );
};
const StepTile2 = () => {
    return (
        <Box>
            <Image src="./img/step2.png"></Image>
        </Box>
    );
};
const StepTile3 = () => {
    return (
        <Box>
            <Image src="./img/step3.png"></Image>
        </Box>
    );
};

const StepsToPlay = (props: { title: string }) => {
    const { title } = props;
    return (
        <Box
            p="10"
            w="100%"
            ms="auto"
            textAlign={"center"}
            bg={useColorModeValue("white", "gray.200")}
        >
            <Heading>{title}</Heading>
            <SimpleGrid
                columns={[1, 3]}
                pt={[10, 20]}
                spacing={6}
            >
                <StepTile1 />
                <StepTile2 />
                <StepTile3 />
            </SimpleGrid>
        </Box>
    );
};
export default StepsToPlay;
