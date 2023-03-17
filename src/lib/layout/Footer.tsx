import { Box, Image, Flex, Stack, List, ListItem, Link, Text, SimpleGrid } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            as="footer"
            bg="gray.100"
            borderTop="1px solid"
            borderColor="gray.100"
            py="2.5rem"
        >
            <Box
                maxW="64rem"
                marginX="auto"
                pb="2rem"
                mb="1.5rem"
                px={10}
                borderBottom="1px solid"
                borderColor="gray.300"
            >

                <Stack display='flex' alignItems="center">
                    <Text color="gray.500" fontSize="xl" fontWeight='bold' pb={6}>
                        Halaplay Technology Pvt. Ltd.
                    </Text>
                </Stack>

                <Flex flexWrap="wrap" alignItems="start" justify="space-between">
                    <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
                        <List lineHeight="2" justifyContent="center">
                            <LinkItem text="How to Play" />
                            <LinkItem text="Point System" />
                            <LinkItem text="Offer" />
                        </List>
                    </Box>
                    <Box w={{ base: '100%', sm: '50%', md: 'max-content' }} mb={{ base: '1.5rem', lg: '0' }}>
                        <List lineHeight="2" justifyContent="center">
                            <LinkItem text="About Us" />
                            <LinkItem text="Support" />
                            <LinkItem text="T&C" />
                            <LinkItem text="FAQ" />
                            <LinkItem text="Blog" />
                        </List>
                    </Box>
                </Flex>
            </Box>
            <Stack display='flex' alignItems="center">
                <Text color="gray.600" fontSize="lg">
                    Follow us
                </Text>
                <SimpleGrid columns={3} spacing={5}>
                    <Link><Image src="./img/facebook.png" w={[30, 50]} p={1}></Image></Link>
                    <Link><Image src="./img/instagram.png" w={[30, 50]} p={1}></Image></Link>
                    <Link><Image src="./img/twitter.png" w={[30, 50]} p={1}></Image></Link>
                </SimpleGrid>
                <Text color="gray.600" fontSize="md" pt={5}>
                    Write us for any Complaint or Feedback
                </Text>
                <Text color="blue.600" fontSize="md">
                    <Link>care@halaplay.com</Link>
                </Text>
            </Stack>
        </Box>
    );
};

type LinkItemProps = {
    text?: string;
    isTag?: boolean;
    tagText?: string;
};

const LinkItem = ({ text, isTag = false, tagText }: LinkItemProps) => {
    return (
        <ListItem display="flex">
            <Link
                fontWeight="400"
                href="#"
                color="grey.100"
                textDecoration="none"
            >
                {text}
            </Link>
            {isTag && (
                <Text
                    as="span"
                    bg="#008F94"
                    px="0.25rem"
                    display="inline-flex"
                    alignItems="center"
                    color="#fff"
                    height="1.25rem"
                    borderRadius="0.25rem"
                    ml="0.25rem"
                    mt="0.25rem"
                    fontSize="0.75rem"
                >
                    {tagText}
                </Text>
            )}
        </ListItem>
    );
};

export default Footer;