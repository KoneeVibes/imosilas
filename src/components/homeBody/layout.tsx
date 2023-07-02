import { Box, Button, Typography, useMediaQuery } from "@mui/material"
import { HomeBodyProps } from "../../types/app.type"
import { ForwardArrow } from "../../assets"
import { useNavigate } from "react-router-dom"
import { Header } from "./header"

export const Body: React.FC<HomeBodyProps> = ({ projectName, projectURL }) => {

    const navigate = useNavigate();
    const smallerScreens = useMediaQuery('(max-width:280px)');

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
            <Header
                projectName={projectName}
            />
            <Button
                disableElevation={true}
                startIcon={<ForwardArrow />}
                onClick={() => navigate(`/projects/${projectURL}`)}
                sx={{
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    width: smallerScreens ? "100%" : "fit-content",
                    marginTop: { mobile: "2rem", miniTablet: "var(--pagePadding)" },
                    marginBottom: { mobile: "2rem", miniTablet: "var(--pagePadding)" },
                    color: "#FFF",
                    overflow: "hidden",
                    "&:hover": {
                        backgroundColor: "transparent",
                    }
                }}
            >
                <Typography
                    component={"span"}
                    variant="subtitle2"
                    fontFamily={"Neue Montreal"}
                    fontWeight={500}
                    lineHeight={1.1}
                    fontSize={"1rem"}
                >
                    [ VIEW PROJECT ]
                </Typography>
            </Button>
        </Box>
    )
}