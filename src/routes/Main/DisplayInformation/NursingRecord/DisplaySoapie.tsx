import { List } from '@mui/material';

import { IDisplayNursingRecord, TSoapie } from '../type';
import useI18n from '../../../../hooks/useI18n';
import { styledRecordList } from '../../style';
import DisplayContent from './RecordContent';
import RecordTitle from './RecordTitle';

const DisplaySoapie = (props: IDisplayNursingRecord) => {
  const i18n = useI18n();
  const { content, record_type, ...titleProps } = props;

  const soapie = JSON.parse(content) as TSoapie;
  const soapieKeys = Object.keys(soapie) as (keyof TSoapie)[];

  return (
    <List sx={styledRecordList}>
      <RecordTitle title={i18n(`RECORD.${record_type}`)} {...titleProps} />

      {soapieKeys.map(soapieKey => {
        return (
          <DisplayContent
            key={soapieKey}
            title={i18n(`soapie.${soapieKey}`)}
            content={soapie[soapieKey]}
          />
        );
      })}
    </List>
  );
};

export default DisplaySoapie;
