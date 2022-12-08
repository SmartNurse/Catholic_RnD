import { useState } from "react";

import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import { Grid, Typography } from "@mui/material";

import SectionTitle from '../../components/SectionTitle';
import MuiTable from 'components/MuiTable';

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
}  

const WeightInfo = (props: Props) => {
    const { disabled, register, getValues, setValue } = props;

    const columns = [
        { fieldId: 'division', label: '구분', sx: { width: 200 } },
        { fieldId: 'prev', label: '이전 체중' },
        { fieldId: 'today', label: '오늘 체중' },
        { fieldId: 'diff', label: '체중 변화' },
    ];

    const rows = [
        {
            id: "pre",
            division: <Typography noWrap variant="caption" fontWeight="bold" lineHeight="38px">Pre</Typography>,
            prev: <Form.MuiTextField {...register("dialysis.weight_info.pre.prev")} />,
            today: <Form.MuiTextField {...register("dialysis.weight_info.pre.today")} />,
            diff: <Form.MuiTextField {...register("dialysis.weight_info.pre.diff")} />,
        },
        {
            id: "post",
            division: <Typography noWrap variant="caption" fontWeight="bold" lineHeight="38px">Post</Typography>,
            prev: <Form.MuiTextField {...register("dialysis.weight_info.pre.prev")} />,
            today: <Form.MuiTextField {...register("dialysis.weight_info.pre.today")} />,
            diff: <Form.MuiTextField {...register("dialysis.weight_info.pre.diff")} />,
        },
    ];

    return (
        <>
            <SectionTitle title="체중 정보"/>
            <Grid item xs={12}>
                <MuiTable columns={columns} rows={[...rows]} />
            </Grid>
        </>
    );
}

export default WeightInfo;