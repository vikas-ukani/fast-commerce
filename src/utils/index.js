
export const responsiveCarousel = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1280 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1280, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 720 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 720, min: 360 },
        items: 2
    },
    smallMobile: {
        breakpoint: { max: 360, min: 0 },
        items: 1
    }
};
