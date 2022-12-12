import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import { Table, TableBody, TableCell, TableRow, Grid } from "@mui/material";
import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from "components/Form/MuiTextField";
import RowContainer from '../../components/RowContainer';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
    dbTime: (string | null)[];
    setDbTime: (dbTime: (string | null)[]) => void;
}  

const DialysisDB = (props: Props) => {
    const { dbTime, setDbTime, disabled, register, getValues, setValue } = props;

    const labels = ["투석액온도/용량", "혈류속도", "동맥압", "정맥압", "초여과율", "막통과압", "헤파린", "SBP", "DBP", "PR", "BT", "RR"];
    const registerIds = ["temp_amount", "speed", "arterial_pressure", "venous_pressure", "filteration_rate", "passing_pressure", "heparin", "sbp", "dbp", "pr", "bt", "rr"];

    return (
        <>
            <SectionTitle title="투석 DB"/>
            <RowContainer xs={12}>
                <Grid item flex={1}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
                        <TableBody>
                        <TableRow key={"시간"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                시간
                            </TableCell>
                            {Array(4).fill(0).map((_, idx) =>
                                <TableCell>
                                    <MobileTimePicker
                                        value={dbTime[idx]}
                                        onChange={(v) => {
                                            const newDbTime = [...dbTime];
                                            newDbTime[idx] = v;
                                            setDbTime([...newDbTime]);
                                        }}
                                        renderInput={params => (
                                        <MuiTextField
                                            {...params}
                                            required={false}
                                            placeholder="00:00 pm"
                                            InputProps={{ endAdornment: <AccessTime /> }}
                                        />
                                        )}
                                    />
                                </TableCell>
                            )}
                        </TableRow>
                        {labels.map((label) => (
                            <TableRow
                            key={label}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {label}
                                </TableCell>
                                {Array(4).fill(0).map((_, idx) =>
                                    <TableCell>
                                        <Form.MuiTextField {...register(`dialysis.dialysis_db.${registerIds[idx]}.${idx + 1}`)} />
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Grid>
            </RowContainer>
        </>
    );
}

export default DialysisDB;