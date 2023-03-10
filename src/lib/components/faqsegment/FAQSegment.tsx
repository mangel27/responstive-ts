import { useState } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Collapsible from "react-collapsible";
import { AiFillCloseCircle, AiFillPlusCircle } from "react-icons/ai";
type FAQRowProps = {
    row: any;
    index: number;
    currentOpen: number;
    setCurrentOpen: any;
};
const FAQRow = (props: FAQRowProps) => {
    const { row, index, currentOpen, setCurrentOpen } = props;
    const [isExpanded, setExpanded] = useState(false);

    const Icon = isExpanded ? AiFillCloseCircle : AiFillPlusCircle;

    return (
        <Box
            bg="gray.300"
            minH="70px"
            p="12px"
            pl="20px"
            boxShadow="xl"
            mt="2px"
        >
            <Collapsible
                open={currentOpen === index}
                transitionTime={200}
                onOpen={() => setExpanded(true)}
                handleTriggerClick={() => {
                    if (currentOpen === index) setCurrentOpen(-1);
                    else setCurrentOpen(index);
                }}
                onClose={() => setExpanded(false)}
                trigger={
                    <Flex align="center" w="100%">
                        <Text
                            fontSize={["14px", "14px", "14px", "18px"]}
                            color="grey.900"
                            textAlign="left"
                        >
                            {row.question}
                        </Text>

                        <Box ml="auto">
                            <Icon style={{ fill: "black" }} />
                        </Box>
                    </Flex>
                }
            >
                <Text mt="4px" color="grey.900" textAlign="left">
                    {row.answer}
                </Text>
            </Collapsible>
        </Box>
    );
};
type FAQSegmentProps = {
    title: string;
    data: any;
};
const FAQSegment = (props: FAQSegmentProps) => {
    const { title, data } = props;
    const [currentOpen, setCurrentOpen] = useState(-1);
    return (
        <Box w={["100%", "80%"]} p={6}>
            <Heading mb={6}>{title}</Heading>

            {data &&
                data.map((faq: any, index: number) => (
                    <FAQRow
                        key={`faq-${index}`}
                        row={faq}
                        index={index + 1}
                        currentOpen={currentOpen}
                        setCurrentOpen={setCurrentOpen}
                    />
                ))}
        </Box>
    );
};
export default FAQSegment;
