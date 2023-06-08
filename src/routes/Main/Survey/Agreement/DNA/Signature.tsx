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
    { title: '검사대상자 성명', variable: 'testee_name' },
    { title: '검사대상자 서명', variable: 'testee_sig' },
    { title: '법정대리인 성명', variable: 'representative_name' },
    { title: '법정대리인 서명', variable: 'representative_sig' },
    { title: '상담자 성명', variable: 'consultant_name' },
    { title: '상담자 성명', variable: 'consultant_sig' },
  ];

  return (
    <>
      <RowContainer xs={12} sx={{ marginBottom: '50px' }}>
        {labels.map(({ title, variable }, _) => (
          <>
            {Array(3)
              .fill(0)
              .map(() => (
                <RowContent titleRatio={1} childrenRatio={2} />
              ))}
            {variable === 'date' ? (
              <RowContent
                key={variable}
                title={title}
                titleRatio={1}
                childrenRatio={2}
              >
                <Form.MuiTextField
                  type="date"
                  disabled={disabled}
                  {...register(`${variable}`)}
                />
              </RowContent>
            ) : (
              <RowContent
                key={variable}
                title={title}
                titleRatio={1}
                childrenRatio={2}
              >
                <Form.MuiTextField
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
