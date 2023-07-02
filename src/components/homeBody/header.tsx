import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useRef, useContext } from "react";
import { HeaderProps } from "../../types/app.type";
import { Context } from "../../context";

export const Header: React.FC<HeaderProps> = ({ projectName, ...others }) => {

    const textRef = useRef<HTMLHeadingElement>(null);
    const { setHeaderElement } = useContext(Context);

    useEffect(() => {
        setHeaderElement(textRef);
    });

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={"1rem"}
            width={"100%"}
            {...others}
        >
            <Typography
                ref={textRef}
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
                overflow={"hidden"}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation={true}
                    sx={{
                        color: "#FFF",
                        borderColor: "#FFF",
                        borderRadius: "42px",
                        overflow: "hidden",
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
                    disableElevation={true}
                    sx={{
                        color: "#FFF",
                        borderColor: "#FFF",
                        borderRadius: "42px",
                        overflow: "hidden",
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
        </Box>
    )
}