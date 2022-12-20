import Form from 'components/Form';
import { IFormRegister, IFormValues } from 'routes/Main/type';

import { AccessTime } from '@mui/icons-material';
import { MobileTimePicker } from '@mui/x-date-pickers';

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister, IFormValues {
    disabled?: boolean;
    time: string | null;
    setTime: (time: string | null) => void;  
}  

const PlacentaRemoval = (props: Props) => {
    const { time, setTime, getValues, setValue } = props;


    const contents = [
        {
            label: "시간",
            element: 
                <MobileTimePicker
                    value={time}
                    onChange={setTime}
                    renderInput={params => (
                    <MuiTextField
                        {...params}
                        required={false}
                        placeholder="00:00 pm"
                        InputProps={{ endAdornment: <AccessTime /> }}
                    />
                    )}
                />,
        },
        {
            label: "방법",
            element: 
                <Form.MuiRadioGroup
                    i18nKey='CHILDBIRTH.PLACENTA_REMOVAL.METHOD'
                    values={[1, 2]}
                    defaultValue={getValues('childbirth.placenta_removal.method')}
                    onChange={v => setValue('childbirth.placenta_removal.method', v)}
                />,
        },
        {
            label: "소파 여부",
            element: 
                <Form.MuiRadioGroup
                    i18nKey='CHILDBIRTH.YES_OR_NO'
                    values={[0, 1]}
                    defaultValue={getValues('childbirth.placenta_removal.curettage')}
                    onChange={v => setValue('childbirth.placenta_removal.curettage', v)}
                />,
        },
    ];
    return (
        <>
            <SectionTitle title="태반 반출"/>
            <RowContainer xs={12}>
                {contents.map(({label, element}) => 
                    <>
                        <RowContent title={label} titleRatio={1} childrenRatio={2}>
                            {element}
                        </RowContent>
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default PlacentaRemoval;