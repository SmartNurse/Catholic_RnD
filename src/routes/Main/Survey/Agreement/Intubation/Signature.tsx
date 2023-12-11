import { IFormRegister } from 'routes/Main/type';

import Form from 'components/Form';
import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister {
  disabled?: boolean;
}

const Signature = (props: Props) => {
  const { disabled, register } = props;

  const labels = [
    { title: '날짜', variable: 'date' },
    { title: '환자와의 관계', variable: 'relationship' },
    { title: '본인 (또는 법정대리인) 성명', variable: 'name' },
    { title: '본인 (또는 법정대리인) 서명', variable: 'sign' },
  ];

  const labelsTwo = [
    { title: '', variable: '' },
    { title: '의사 성명', variable: 'dr_name' },
    { title: '의사 서명', variable: 'dr_sign' },
  ];

  return (
    <>
      <RowContainer xs={11.5} sx={{ margin: '20px 0px 30px 0px' }}>
        {labels.map(({ title, variable }, _) => (
          <>
            {Array(2)
              .fill(0)
              .map(() => (
                <RowContent titleRatio={1.5} childrenRatio={2.5} />
              ))}
            {variable === 'date' ? (
              <RowContent
                key={variable}
                title={title}
                titleRatio={1.5}
                childrenRatio={2.5}
              >
                <Form.MuiTextField
                  type="date"
                  required={false}
                  disabled={disabled}
                  {...register(`${variable}`)}
                />
              </RowContent>
            ) : (
              <RowContent
                key={variable}
                title={title}
                titleRatio={1.5}
                childrenRatio={2.5}
              >
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register(`${variable}`)}
                />
              </RowContent>
            )}
          </>
        ))}

        {labelsTwo.map(({ title, variable }, _) => (
          <>
            {Array(2)
              .fill(0)
              .map(() => (
                <RowContent titleRatio={1.5} childrenRatio={2.5} />
              ))}
            {variable === '' ? (
              <RowContent
                key={variable}
                title={title}
                titleRatio={1.5}
                childrenRatio={2.5}
              ></RowContent>
            ) : (
              <RowContent
                key={variable}
                title={title}
                titleRatio={1.5}
                childrenRatio={2.5}
              >
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register(`${variable}`)}
                />
              </RowContent>
            )}
          </>
        ))}
      </RowContainer>
    </>
  );
};

export default Signature;
