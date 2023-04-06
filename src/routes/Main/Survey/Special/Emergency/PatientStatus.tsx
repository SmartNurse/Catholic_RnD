import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import { Ti18nId } from "hooks/useI18n"

import SectionTitle from '../../components/SectionTitle';
import IntakeOutput from "./IntakeOutput";
import VitalSign from './VitalSign';

interface Props extends IFormRegister, IFormValues, IFormWatch {
    disabled?: boolean;
    onRequired: (id: Ti18nId) => void;
    onSuccess: (message: string) => void;
}  

const PatientStatus = (props: Props) => {
    return (
        <>
            <SectionTitle title="환자 상태 기록" />
            <IntakeOutput {...props} />
            <VitalSign {...props} />
        </>
    );
}

export default PatientStatus;