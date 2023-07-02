import { Box, Typography } from "@mui/material";
import { Nav } from "../../components/nav";
import { Timer } from "../../components/timer";
import { Body } from "../../components/homeBody/layout";
import { ProjectProps } from "../../types/app.type";

export const Project: React.FC<ProjectProps> = ({ bg, name, url }) => {
    return (
        <Box
            sx={{
                background: `url(${bg}) lightgray 50% / cover no-repeat`,
                height: "100vh",
                padding: "var(--pagePadding)",
            }}
        >
            <Nav
                logo={
                    <Typography
                        variant="subtitle1"
                        color="#FFF"
                        fontFamily={"Space Grotesk"}
                        fontWeight={500}
                        line-height={"1.1"}
                        sx={{
                            fontSize: { mobile: "20px" }
                        }}
                    >
                        Imoh Silas
                    </Typography>
                }
                utility={
                    <Timer
                        variant="subtitle1"
                        color={"#FFF"}
                        fontFamily={"Space Grotesk"}
                        fontWeight={500}
                        line-height={"1.1"}
                        sx={{
                            fontSize: { mobile: "20px" }
                        }}
                    />
                }
            />
            <Body
                projectName={name}
                projectURL={url}
            />
        </Box>
    )
}