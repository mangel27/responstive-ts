import { Box, Image, Flex, Stack, List, ListItem, Link, Text, SimpleGrid } from '@chakra-ui/react';

const Gateway = () => {
    return (
        <Box
            borderTop="1px solid"
            borderColor="gray.100"
            py="10"
        >
            <Stack display='flex' alignItems="center">
                <Text color="gray.800" fontSize="md">
                    Our Supporting Payment Gateway
                </Text>
                <SimpleGrid
                    columns={5}
                    spacing={5}
                    py={2}
                >
                    <Image src="./img/google-pay.png" w={[30, 50]} p={1}></Image>
                    <Image src="./img/phonpay.png" w={[30, 50]} p={1}></Image>
                    <Image src="./img/amazonpay.png" w={[30, 50]} p={1}></Image>
                    <Image src="./img/paytm.png" w={[30, 50]} p={1}></Image>
                    <Image src="./img/payu.png" w={[30, 50]} p={1}></Image>
                </SimpleGrid>
                <Text
                    color="gray.600"
                    fontSize={['sm', 'md']}
                    pt={5}
                    align={['left', 'center']}
                    p={3}
                >
                    This game involves an element of financial risk and may be addictive<br></br>
                    Please play responssibly at your own risk<br></br>
                    The game is applicable for people above 18 only
                </Text>
            </Stack>
        </Box>
    );
};

export default Gateway;