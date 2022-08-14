import { List } from '@mui/material';

import { IDisplayNursingRecord, TFocusDar } from '../type';
import useI18n from '../../../../hooks/useI18n';
import { styledRecordList } from '../../style';
import RecordContent from './RecordContent';
import RecordTitle from './RecordTitle';

const DisplayFocusDar = (props: IDisplayNursingRecord) => {
  const i18n = useI18n();
  const { content, record_type, ...titleProps } = props;

  const focusDar = JSON.parse(content) as TFocusDar;
  const focusDarKeys = Object.keys(focusDar) as (keyof TFocusDar)[];

  return (
    <List sx={styledRecordList}>
      <RecordTitle title={i18n(`RECORD.${record_type}`)} {...titleProps} />
      {focusDarKeys.map(focusDarKey => {
        return (
          <RecordContent
            key={focusDarKey}
            title={i18n(`focusDar.${focusDarKey}`)}
            content={focusDar[focusDarKey]}
          />
        );
      })}
    </List>
  );
};

export default DisplayFocusDar;
