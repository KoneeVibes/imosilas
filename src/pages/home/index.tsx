import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { projects } from "../../configs/app";
import { Box, useMediaQuery } from "@mui/material";
import { Nav } from "../../components/nav";
import "./styled.css";
import { Thumbnail } from "../../components/thumbnail";
import prevArrow from "../../assets/prevArrow.svg";
import nextArrow from "../../assets/nextArrow.svg";
import { Arrow } from "../../components/arrow";
import { Body } from "../../components/homeBody";

export const Home: React.FC<{}> = () => {

    const laptopScreenUpwards = useMediaQuery('(min-width:1024px)');

    return (
        <Carousel
            autoPlay={true}
            autoFocus={true}
            infiniteLoop={true}
            emulateTouch={true}
            showIndicators={false}
            thumbWidth={160}
            showStatus={laptopScreenUpwards && true}
            stopOnHover={false}
            useKeyboardArrows={true}
            statusFormatter={
                (current, total) => {
                    const formattedCurrent = String(current).padStart(2, "0");
                    const formattedTotal = String(total).padStart(2, "0");
                    return `${formattedCurrent} - ${formattedTotal}`;
                }
            }
            renderArrowPrev={
                (onClickHandler) => {
                    return (
                        <Arrow
                            url={prevArrow}
                            onClick={onClickHandler}
                            right="calc(3rem + var(--pagePadding))"
                        />
                    )
                }
            }
            renderArrowNext={
                (onClickHandler) => {
                    return (
                        <Arrow
                            url={nextArrow}
                            right="var(--pagePadding)"
                            onClick={onClickHandler}
                        />
                    )
                }
            }
            renderIndicator={() => null}
            renderThumbs={(children) => {
                const thumbnails = projects.map((project) => project.thumbnail);
                return children.map((child, i) => (
                    <Thumbnail key={i} url={thumbnails[i]} />
                ));
            }}
        >
            {
                projects.map((project, i) => {
                    return (
                        <Box
                            key={i}
                            sx={{
                                background: `url(${project.homePageBg}) lightgray 50% / cover no-repeat`,
                                height: "100vh",
                                padding: "var(--pagePadding)",
                            }}
                        >
                            <Nav />
                            <Body
                                projectName={project.name}
                                projectURL={project.url}
                            />
                        </Box>
                    )
                })
            }
        </Carousel>
    )
}