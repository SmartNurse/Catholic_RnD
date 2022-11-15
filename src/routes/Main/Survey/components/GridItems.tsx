import { Paper, Grid, GridProps, Radio, RadioGroup, FormControlLabel } from "@mui/material";

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
                <FormControlLabel sx={{ width: "200px" }} value={first} label={first} control={<Radio />} />
                <FormControlLabel sx={{ width: "200px" }} value={second} label={second} control={<Radio />} />
                <FormControlLabel sx={{ width: "200px" }} value={third} label={third} control={<Radio />} />
            </RadioGroup>
        </>
    );
}

export default GridItems;