import {
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    useColorModeValue,
    Image,
    Text,
    Link
} from "@chakra-ui/react";

const APP = [
    {
        statText: "Its always better with App",
        statLabel: "Download App & Get Rs250 off on League Join",
    },
];

const FeatureCard = (props: {
    statLabel: string;
    statText: string;
}) => {
    const { statLabel, statText } = props;
    return (
        <Stat px={2} py={"4"}>
            <Flex justifyContent={"center"}>
                <Box
                    pt={2}
                    pl={2}
                    color={useColorModeValue("white", "gray.200")}
                >
                    <Text fontSize={'sm'} fontWeight={"medium"}>
                        {statText}
                    </Text>
                    <StatLabel fontSize={"md"} fontWeight={"medium"} mt={1}>
                        {statLabel}
                    </StatLabel>
                </Box>
                <Box
                    pl={2}
                    pt={2}
                    color={useColorModeValue("white", "gray.200")}
                >
                    <Link><Image src="./img/istore.png" w={120} p={1}></Image></Link>
                    <Link><Image src="./img/playstore.png" w={120} p={1}></Image></Link>
                </Box>
            </Flex>
        </Stat >
    );
};
const Mobile = () => {
    return (
        <SimpleGrid columns={1} spacing={0} bg="blue.900" w="100%">
            {APP.map((item, index) => (
                <FeatureCard
                    key={index + "feature"}
                    statText={item.statText}
                    statLabel={item.statLabel}
                />
            ))}
        </SimpleGrid>
    );
};
export default Mobile;
