import { Fragment } from 'react';
import { Stack } from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';
import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../components/SectionTitle';

import RowContent from '../components/RowContent';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
  category: 'oral' | 'perineum' | 'bath';
}

const HygieneRecords = (props: Props) => {
  const {
    disabled,
    watch,
    setValue,
    onRequired,
    onSuccess,
    register,
    category,
  } = props;

  const fieldCount = Array(4).fill('');

  const categoryToTitle = () => {
    switch (category) {
      case 'oral':
        return '구강 간호';
      case 'perineum':
        return '회음부 간호';
      case 'bath':
        return '침상 목욕';
    }
  };

  return (
    <Fragment>
      <SectionTitle title={categoryToTitle()} />
      <RowContent title="시행 일시">
        <Stack direction={'row'} spacing={2}>
          {fieldCount.map((_, i) => (
            <MuiTextField
              key={i}
              type="date"
              placeholder="날짜 선택"
              required={false}
              {...register(`${category}.date`)}
            />
          ))}
        </Stack>
      </RowContent>
      <RowContent title="시행 여부">
        <Stack direction={'row'} spacing={2}>
          {fieldCount.map((_, i) => (
            <MuiTextField
              key={i}
              required={false}
              // {...register('oral.date')}
            />
          ))}
        </Stack>
      </RowContent>
    </Fragment>
  );
};

export default HygieneRecords;
