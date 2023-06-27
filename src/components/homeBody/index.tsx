import { Box, Button, Typography } from "@mui/material"
import { HomeBodyProps } from "../../types/app.type"
import { ForwardArrow } from "../../assets"

export const Body: React.FC<HomeBodyProps> = ({ projectName }) => {
    return (
        <Box
            position={"absolute"}
            top={"40%"}
            sx={{
                transform: "translateY(-40%)",
            }}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            gap={"1rem"}
            width={"85%"}
            zIndex={2}
            overflow={"hidden"}
        >
            <Typography
                variant="h1"
                color={"#FFF"}
                fontFamily={"Neue Montreal"}
                fontWeight={500}
                lineHeight={"1.1"}
                whiteSpace={"normal"}
                textAlign={"left"}
                width={"100%"}
                sx={{
                    fontSize: { mobile: "36px", miniTablet: "48px", tablet: "68px" }
                }}
            >
                {projectName}
            </Typography>
            <Box
                display={"flex"}
                alignItems={"center"}
                flexWrap={"wrap"}
                gap={"1rem"}
                width={"100%"}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation={true}
                    sx={{
                        color: "#FFF",
                        borderColor: "#FFF",
                        borderRadius: "42px",
                        "&:hover": {
                            color: "#FFF",
                            borderColor: "#FFF",
                        }
                    }}
                    onClick={() => console.log("Iam the ICONS button")}
                >
                    <Typography
                        component={"span"}
                        variant="subtitle2"
                        fontFamily={"Neue Montreal"}
                        fontWeight={500}
                        lineHeight={1.1}
                        fontSize={"0.75rem"}
                    >
                        UI/UX
                    </Typography>
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation={true}
                    sx={{
                        color: "#FFF",
                        borderColor: "#FFF",
                        borderRadius: "42px",
                        "&:hover": {
                            color: "#FFF",
                            borderColor: "#FFF",
                        }
                    }}
                    onClick={() => console.log("Iam the ICONS button")}
                >
                    <Typography
                        component={"span"}
                        variant="subtitle2"
                        fontFamily={"Neue Montreal"}
                        fontWeight={500}
                        lineHeight={1.1}
                        fontSize={"0.75rem"}
                    >
                        ICONS
                    </Typography>
                </Button>
            </Box>
            <Box
                component={"div"}
                display={"flex"}
                alignItems={"center"}
                flexWrap={"wrap"}
                gap={"1rem"}
                width={"100%"}
                sx={{
                    paddingTop: { mobile: "2rem", miniTablet: "var(--pagePadding)" },
                    paddingBottom: { mobile: "2rem", miniTablet: "var(--pagePadding)" },
                }}
                onClick={() => console.log("Iam the view project button")}
            >
                <ForwardArrow 
                    style={{
                        cursor: "pointer",
                    }}
                />
                <Typography
                    variant="body1"
                    color={"#FFF"}
                    fontFamily={"Neue Montreal"}
                    fontWeight={500}
                    lineHeight={1.1}
                    fontSize={"1rem"}
                    sx={{
                        cursor: "pointer",
                    }}
                >
                    [ VIEW PROJECT ]
                </Typography>
            </Box>
        </Box>
    )
}