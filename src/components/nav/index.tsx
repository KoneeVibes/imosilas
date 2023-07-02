import { Grid } from "@mui/material"
import { NavProps } from "../../types/app.type"

export const Nav: React.FC<NavProps> = ({ logo, utility }) => {

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
                {logo}
            </Grid>
            <Grid
                item
                overflow={"hidden"}
            >
                {utility}
            </Grid>
        </Grid >
    )
}