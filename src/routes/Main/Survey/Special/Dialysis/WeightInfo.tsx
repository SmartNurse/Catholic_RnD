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
            prev: <Form.MuiTextField {...register("pre_previous_weight")} required={false} />,
            today: <Form.MuiTextField {...register("pre_today_weight")} required={false} />,
            diff: <Form.MuiTextField {...register("pre_weight_change")} required={false} />,
        },
        {
            id: "post",
            division: <Typography noWrap variant="caption" fontWeight="bold" lineHeight="38px">Post</Typography>,
            prev: <Form.MuiTextField {...register("post_previous_weight")} required={false} />,
            today: <Form.MuiTextField {...register("post_today_weight")} required={false} />,
            diff: <Form.MuiTextField {...register("post_weight_change")} required={false} />,
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