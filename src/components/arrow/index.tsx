import { Box } from "@mui/material"
import { ArrowProps } from "../../types/app.type"

export const Arrow: React.FC<ArrowProps> = ({ url, alt, right, onClick }) => {
    return (
        <Box
            component={"button"}
            onClick={onClick}
            position={"absolute"}
            bottom={"var(--pagePadding)"}
            zIndex={1}
            right={right}
            sx={{
                display: {mobile: "none", laptop: "unset"}
            }}
        >
            <img
                src={url}
                alt={alt}
            />
        </Box>
    )
}