import { List } from '@mui/material';

import { IDisplayNursingRecord, TNanda } from '../type';
import useI18n from '../../../../hooks/useI18n';
import { styledRecordList } from '../../style';
import RecordContent from './RecordContent';
import RecordTitle from './RecordTitle';

const DisplayNanda = (props: IDisplayNursingRecord) => {
  const i18n = useI18n();
  const { content, record_type, ...titleProps } = props;

  const nanda = JSON.parse(content) as TNanda;
  const nandaKeys = Object.keys(nanda) as (keyof TNanda)[];

  return (
    <List sx={styledRecordList}>
      <RecordTitle title={i18n(`RECORD.${record_type}`)} {...titleProps} />

      {nandaKeys.map(nandaKey => {
        if (nandaKey === 'domain' || nandaKey === 'class') return null;
        return (
          <RecordContent
            key={nandaKey}
            title={i18n(`nanda.${nandaKey}`)}
            content={nanda[nandaKey]}
          />
        );
      })}
    </List>
  );
};

export default DisplayNanda;
