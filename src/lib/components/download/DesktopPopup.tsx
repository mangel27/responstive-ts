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
import { TiDownload } from "react-icons/ti";

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
        <Stat px={4} py={"4"}>
            <Flex justifyContent={"center"}>
                <Box
                    pl={4}
                    pt={4}
                    color={useColorModeValue("white", "gray.200")}
                >
                    <Link><Image src="./img/playstore.png" w={140} p={1}></Image></Link>
                </Box>
                <Box
                    pt={4}
                    pl={4}
                    color={useColorModeValue("white", "gray.200")}
                >
                    <Text fontSize={'sm'} fontWeight={"medium"} align="center">
                        {statText}
                    </Text>
                    <StatLabel fontSize={'lg'} fontWeight={"medium"}>
                        {statLabel}
                    </StatLabel>
                </Box>
                <Box
                    pl={4}
                    pt={4}
                    color={useColorModeValue("white", "gray.200")}
                >
                    <Link><Image src="./img/istore.png" w={140} p={1}></Image></Link>
                </Box>
            </Flex>
        </Stat >
    );
};
const Desktop = () => {
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
export default Desktop;
