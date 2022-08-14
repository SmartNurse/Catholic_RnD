import { List } from '@mui/material';

import { IDisplayNursingRecord, TRemarks } from '../type';
import useI18n from '../../../../hooks/useI18n';
import { styledRecordList } from '../../style';
import RecordContent from './RecordContent';
import RecordTitle from './RecordTitle';

const DisplayRemarks = (props: IDisplayNursingRecord) => {
  const i18n = useI18n();
  const { content, record_type, ...titleProps } = props;

  const remarks = JSON.parse(content) as TRemarks;
  const remarksKeys = Object.keys(remarks) as (keyof TRemarks)[];

  return (
    <List sx={styledRecordList}>
      <RecordTitle title={i18n(`RECORD.${record_type}`)} {...titleProps} />

      {remarksKeys.map(remarksKey => {
        return (
          <RecordContent
            key={remarksKey}
            title={i18n(`remarks.${remarksKey}`)}
            content={remarks[remarksKey]}
          />
        );
      })}
    </List>
  );
};

export default DisplayRemarks;
