import { Box } from "@mui/material"
import { ArrowProps } from "../../types/app.type"

export const Arrow: React.FC<ArrowProps> = ({ url, alt, right, onClick }) => {
    return (
        <Box
            component={"button"}
            onClick={() => onClick()}
            position={"absolute"}
            bottom={"var(--pagePadding)"}
            zIndex={1}
            right={right}
            padding={"0.5rem"}
            sx={{
                display: { mobile: "none", laptop: "flex" },
                justifyContent: { laptop: "center" },
                alignItems: { laptop: "center" },
                background: "none",
                border: "1px solid #FFF",
                borderRadius: "3px",
            }}
        >
            <img
                src={url}
                alt={alt}
            />
        </Box>
    )
}