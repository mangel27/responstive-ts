import { Box } from "@chakra-ui/react";
import Desktop from "./DesktopPopup";
import Mobile from "./MobilePopup";

const Download = () => {
    return (
        <Box>
            <Box display={{ base: "block", md: "none" }}><Mobile /></Box>
            <Box display={{ base: "none", md: "block" }}><Desktop /></Box>
        </Box>
    );
};
export default Download;
