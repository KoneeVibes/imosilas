import { Typography } from "@mui/material";
import { TimerProps } from "../../types/app.type";
import { useEffect, useState } from "react"

export const Timer: React.FC<TimerProps> = ({
    color, variant, fontFamily, fontWeight, lineHeight, sx,
}) => {

    const [timeString, setTimeString] = useState("");

    useEffect(() => {
        const timeString = new Date().toLocaleString('en-US', {
            timeZone: 'America/Los_Angeles',
            hour12: false,
            hour: 'numeric',
            minute: 'numeric',
        })
        setTimeString(`[${timeString} . GMT-7]`)
    }, [])

    return (
        <Typography
            variant={variant}
            color={color}
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            sx={sx}
        >
            {timeString}
        </Typography>
    )
}