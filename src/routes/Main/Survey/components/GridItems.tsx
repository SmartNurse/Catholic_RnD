import { Paper, Grid, GridProps, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { StyledFormControlLabel } from "routes/Main/style";

interface Props extends GridProps {
    id: string,
    first: string;
    second: string;
    third: string;
}

const GridItems = (props: Props) => {
    const { id, first, second, third, ...gridProps } = props;

    return (
        <>
            <RadioGroup name={id} row sx={{ width: "75%", display: "flex", justifyContent: "space-around" }}>
                <StyledFormControlLabel value={first} label={first} control={<Radio />} />
                <StyledFormControlLabel value={second} label={second} control={<Radio />} />
                <StyledFormControlLabel value={third} label={third} control={<Radio />} />
            </RadioGroup>
        </>
    );
}

export default GridItems;