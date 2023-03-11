/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
    title: "single-page-game-app",
    titleTemplate: "%s | single-page-game-app",
    defaultTitle: "single-page-game-app",
    description: "Next.js + chakra-ui + TypeScript template",
    canonical: "https://single-page-game-app.sznm.dev",
    openGraph: {
        url: "https://single-page-game-app.sznm.dev",
        title: "single-page-game-app",
        description: "Next.js + chakra-ui + TypeScript template",
        images: [
            {
                url: "https://og-image.sznm.dev/**single-page-game-app**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
                alt: "single-page-game-app.sznm.dev og-image"
            }
        ],
        site_name: "single-page-game-app"
    },
    twitter: {
        handle: "@sozonome",
        cardType: "summary_large_image"
    }
};

export default defaultSEOConfig;
