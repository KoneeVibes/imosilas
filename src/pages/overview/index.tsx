import { Box, Button, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import { Nav } from "../../components/nav";
import { Header } from "../../components/homeBody/header";
import { projects } from "../../configs/app";
import { CloseIcon, SiteIcon } from "../../assets";
import bg from "../../assets/overviewBg.svg";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";

export const Overview: React.FC<{}> = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { headerElement } = useContext(Context);
    const smallerScreens = useMediaQuery('(max-width:280px)');
    const [textWidth, setTextWidth] = useState<number | null>(null);

    const getProject = (id?: string) => {
        if (id) {
            return projects.find(project => project.url === id);
        }
    }

    const details = getProject(id)?.details as { [key: string]: string };

    useEffect(() => {
        if (headerElement?.current) {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (context) {
                const font = getComputedStyle(headerElement.current).font;
                context.font = font;
                const width = context.measureText(headerElement.current.textContent!).width;
                context.clearRect(0, 0, canvas.width, canvas.height);
                setTextWidth(width);
            }
        }
    }, [headerElement]);

    // Find a way to restrict this component from returning this jsx if the id is not exactly a project url.
    return (
        <Container
            sx={{
                padding: "var(--pagePadding)",
                background: `url(${bg}) #303030 80% / cover no-repeat`,
            }}
        >
            <Nav
                logo={
                    <Typography
                        variant="subtitle1"
                        color="#FFF"
                        fontFamily={"Neue Montreal"}
                        fontWeight={500}
                        line-height={"1.1"}
                        sx={{
                            fontSize: { mobile: "20px" }
                        }}
                    >
                        Project Overview
                    </Typography>
                }
                utility={
                    <Button
                        disableElevation={true}
                        startIcon={<CloseIcon />}
                        onClick={() => navigate(-1)}
                        sx={{
                            color: "#FFF",
                            textTransform: "capitalize",
                            overflow: "hidden",
                            width: "100%",
                            "&:hover": {
                                backgroundColor: "transparent",
                            }
                        }}
                    >
                        <Typography
                            component={"span"}
                            variant="subtitle2"
                            fontFamily="Neue Montreal"
                            fontWeight={500}
                            lineHeight={1.1}
                            sx={{
                                fontSize: { mobile: "20px" }
                            }}
                        >
                            Close
                        </Typography>
                    </Button>
                }
            />
            <Box
                paddingTop={"var(--sectionMargin)"}
                paddingBottom={"var(--sectionMargin)"}
            >
                < Header
                    projectName={getProject(id)?.name}
                    sx={{
                        marginTop: "var(--sectionMargin)",
                        marginBottom: "var(--sectionMargin)",
                    }}
                />
                <Typography
                    variant="body1"
                    fontFamily="Space Grotesk"
                    fontWeight={500}
                    lineHeight={1.3}
                    color="#FFF"
                    whiteSpace={"normal"}
                    marginTop="var(--sectionMargin)"
                    marginBottom="var(--sectionMargin)"
                    sx={{
                        fontSize: { mobile: "12px" },
                        maxWidth: { laptop: textWidth },
                    }}
                >
                    Adapte is a design agency that specializes in creating amazing websites and brand strategy for forward-thinking startups. Despite their high-quality work, Adapte had previously struggled with building a strong online presence.
                </Typography>
                <Button
                    variant="outlined"
                    disableElevation={true}
                    startIcon={<SiteIcon />}
                    // onClick={() => navigate(`/projects/${projectURL}`)}
                    sx={{
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        width: smallerScreens ? "100%" : "fit-content",
                        marginBottom: { mobile: "var(--sectionMargin)" },
                        color: "#FFF",
                        textTransform: "capitalize",
                        overflow: "hidden",
                        border: "0.5px solid #FFF",
                        borderRadius: "6px",
                        "&:hover": {
                            border: "0.5px solid #FFF",
                        }
                    }}
                >
                    <Typography
                        component={"span"}
                        variant="subtitle2"
                        fontFamily={"Neue Montreal"}
                        fontWeight={500}
                        lineHeight={1.1}
                        fontSize={"12px"}
                    >
                        Live Site
                    </Typography>
                </Button>
                <Typography
                    variant="h2"
                    marginBottom="var(--sectionMargin)"
                    fontFamily={"Neue Montreal"}
                    fontWeight={500}
                    lineHeight={1.1}
                    color={"#FFF"}
                    sx={{
                        fontSize: { mobile: "20px", }
                    }}
                >
                    Details
                </Typography>

                {/* Details */}
                <Grid
                    container
                    gap={"var(--flexGap)"}
                    sx={{
                        flexDirection: { mobile: "column", tablet: "row" }
                    }}
                >
                    {/* Project Details */}
                    <Grid
                        item
                        container
                        flex={1}
                        flexDirection={"column"}
                        gap={"2.5rem"}
                        padding={"2rem"}
                        borderRadius={"15px"}
                        border={"1px solid #727272"}
                        overflow={"hidden"}
                        sx={{
                            background: "#333"
                        }}
                    >
                        {
                            Object.entries(details).map(([key, value]) => {
                                return (
                                    <Grid
                                        key={key}
                                        item
                                        container
                                        flexWrap={"nowrap"}
                                        gap={"var(--flexGap)"}
                                        justifyContent={"space-between"}
                                        overflow={"hidden"}
                                    >
                                        <Grid
                                            item
                                            overflow={"hidden"}
                                            width={"100%"}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                whiteSpace={"normal"}
                                                color={"#FFF"}
                                                fontFamily={"Neue Montreal"}
                                                fontWeight={500}
                                                lineHeight={1.1}
                                                sx={{
                                                    fontSize: { mobile: "15px" }
                                                }}
                                            >
                                                {key}:
                                            </Typography>
                                        </Grid>
                                        <Grid
                                            item
                                            overflow={"hidden"}
                                            width={"100%"}
                                        >
                                            <Typography
                                                variant="subtitle1"
                                                whiteSpace={"normal"}
                                                color={"#FFF"}
                                                fontFamily={"Neue Montreal"}
                                                fontWeight={500}
                                                lineHeight={1.1}
                                                sx={{
                                                    fontSize: { mobile: "15px" },
                                                    float: "right",
                                                }}
                                            >
                                                {value}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                    {/* Project Description */}
                    <Grid
                        item
                        flex={1}
                        padding={"2rem"}
                        borderRadius={"15px"}
                        border={"1px solid #727272"}
                        overflow={"hidden"}
                        width={"100%"}
                        sx={{
                            background: "#333"
                        }}
                    >
                        <Typography
                            variant="h3"
                            color={"#FFF"}
                            fontFamily={"Neue Montreal"}
                            fontWeight={500}
                            lineHeight={1.1}
                            sx={{
                                fontSize: { mobile: "30px" }
                            }}
                        >
                            Description
                        </Typography>
                        <Typography
                            variant="body1"
                            whiteSpace={"normal"}
                            color={"#FFF"}
                            fontFamily={"Neue Montreal"}
                            fontWeight={400}
                            lineHeight={"145.1%"}
                            sx={{
                                fontSize: { mobile: "15px" },
                                paddingTop: "var(--sectionMargin)",
                            }}

                        >
                            {getProject(id)?.description}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
}