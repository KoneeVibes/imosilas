import { Box } from "@mui/material"
import { ThumbnailProps } from "../../types/app.type"

export const Thumbnail: React.FC<ThumbnailProps> = ({ url, alt }) => {
    return (
        <Box>
            <img
                src={url}
                alt={alt}
            />
        </Box>
    )
}