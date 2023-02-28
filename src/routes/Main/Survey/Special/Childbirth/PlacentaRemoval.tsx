import Form from 'components/Form';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
}  

const PlacentaRemoval = (props: Props) => {
    const { disabled, getValues, setValue, watch } = props;

    const contents = [
        {
            label: "시간",
            element: 
                <MobileTimePicker
                    disabled={disabled}
                    value={watch("placenta_removal.time") || null}
                    onChange={(v) => setValue("placenta_removal.time", v)}
                    renderInput={params => (
                    <MuiTextField
                        {...params}
                        required={false}
                        placeholder="00:00 pm"
                        InputProps={{ endAdornment: <AccessTime /> }}
                        fullWidth={false}
                    />
                    )}
                />,
        },
        {
            label: "방법",
            element: 
                <Form.MuiRadioGroup
                    disabled={disabled}
                    i18nKey='CHILDBIRTH.PLACENTA_REMOVAL.METHOD'
                    values={[1, 2]}
                    defaultValue={getValues('placenta_removal.methods')}
                    onChange={v => setValue('placenta_removal.methods', v)}
                />,
        },
        {
            label: "소파 여부",
            element: 
                <Form.MuiRadioGroup
                    disabled={disabled}
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[1, 2]}
                    defaultValue={getValues('placenta_removal.curettage')}
                    onChange={v => setValue('placenta_removal.curettage', v)}
                    width="50px"
                />,
        },
    ];
    return (
        <>
            <SectionTitle title="태반 반출"/>
            <RowContainer xs={12}>
                {contents.map(({label, element}) => 
                    <>
                        <RowContent title={label} titleRatio={1} childrenRatio={3}>
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default PlacentaRemoval;