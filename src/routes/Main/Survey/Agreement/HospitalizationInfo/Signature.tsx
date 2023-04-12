import { IFormRegister } from 'routes/Main/type';

import Form from 'components/Form';
import RowContainer from '../../components/RowContainer';
import RowContent from './RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister {
    disabled?: boolean;
}  

const Signature = (props: Props) => {
    const { disabled, register } = props;

    const labels = [
        { title: "이름", variable: "name" },
        { title: "환자와의 관계", variable: "relationship" },
        { title: "서명", variable: "signature" },
        { title: "작성일시", variable: "date" },
        { title: "의료인 서명", variable: "personnel_signature" },
    ];

    return (
        <>
            <RowContainer xs={11.5}>
                <RowContent titleRatio={1} childrenRatio={2} />
                {labels.map(({title, variable}, _) => 
                    <>
                        {(variable === "date" || variable === "personnel_signature") &&
                            Array(3).fill(0).map(() => <RowContent titleRatio={1} childrenRatio={2} />)                
                        }
                        {variable === "date" ?
                        <RowContent key={variable} title={title} titleRatio={1} childrenRatio={2}>
                            <Form.MuiTextField
                                type="date"
                                disabled={disabled}
                                sx={{ width: "170px"}}
                                
                                {...register("date")}
                            />
                        </RowContent>
                        :
                        <RowContent key={variable} title={title} titleRatio={1} childrenRatio={2} >
                            <Form.MuiTextField
                                disabled={disabled}
                                sx={{ width: "170px"}}
                                {...register(`${variable}`)}
                            />
                        </RowContent>
                        }
                    </>
                )}
            </RowContainer>
        </>
    );
}

export default Signature;