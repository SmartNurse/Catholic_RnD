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
    { title: '성명', variable: 'name' },
    { title: '서명', variable: 'sig' },
  ];

  return (
    <>
      <RowContainer xs={12}>
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
