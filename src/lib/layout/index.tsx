import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Download from "../components/download/Download";
import Footer from "./Footer";
import Gateway from "./Gateway";
import Header from "./Header";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box margin="0" bg="purple.500" h="100vh" transition="0.5s ease-out">
            <Box>
                <Header />
                <Box as="main">{children}</Box>
                <Footer />
                <Gateway />
                <Box id="myPopup" display="none" position="sticky" bottom="0" w="full" >
                    <Download />
                </Box>
            </Box>
        </Box>
    );
};


if (typeof document !== 'undefined') {
    const popupWindow = document.getElementById('myPopup') as HTMLElement | null;

    if (popupWindow) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                popupWindow.style.display = 'block';
            } else {
                popupWindow.style.display = 'none';
            }
        });
    }
}



export default Layout;
