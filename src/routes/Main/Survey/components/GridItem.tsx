import { Paper, Grid, GridProps } from "@mui/material";

interface Props extends GridProps {
    text?: string;
    bgColor: string;
}

const GridItem = (props: Props) => {
    const { text, bgColor, ...gridProps } = props;

    return (
        <Grid
            item
            xs={3}
        >
            <Paper
                sx={{
                    height: "90px",
                    backgroundColor: bgColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0px !important",
                    boxShadow: "4px 4px 4px 0px #FFFFFF"
                }}
            >
                {text}
            </Paper>
        </Grid>
    );
}

export default GridItem;