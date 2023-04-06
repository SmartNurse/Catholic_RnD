import {useState} from 'react';
import { Grid, Box } from '@mui/material';

import { IFormRegister, IFormValues } from 'routes/Main/type';

import Form from 'components/Form';
import RadioGroup from './RadioGroup';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
    }


const EmergencyResult = (props: Props) => {
    const { disabled, register, getValues, setValue } = props;



    return (
        <>
            <SectionTitle title="응급 치료 결과" />
                <Box sx={{ width: "98%", margin: "48px auto 24px 40px", display: "flex" }}>
                    <Grid container xs={12}>
                        
                        <RadioGroup
                            i18nKey="EMERGENGY.RESULT"
                            values={[0, 1, 2, 3, 4]}
                            disabled={disabled}
                            defaultValue={getValues('emergency.result.value')}
                            onChange={v => setValue('emergency.result.value', v)}
                        />
                        <Form.MuiTextField
                            required={false}
                            sx={{width:"200px"}}
                            disabled={disabled}
                            placeholder="직접 입력"
                            {...register('body_status.cycle.input')}
                        />
                    </Grid>
                </Box>
        </>
    );
}

export default EmergencyResult;