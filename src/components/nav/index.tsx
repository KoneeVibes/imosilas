import { Grid, Typography } from "@mui/material"
import { Timer } from "../timer"

export const Nav: React.FC<{}> = () => {

    return (
        <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
        >
            <Grid
                item
                overflow={"hidden"}
            >
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
            </Grid>
            <Grid
                item
                overflow={"hidden"}
            >
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
            </Grid>
        </Grid >
    )
}