import { List } from '@mui/material';

import { IDisplayNursingRecord, TNarrativeContent } from '../type';
import useI18n from '../../../../hooks/useI18n';
import { styledRecordList } from '../../style';
import DisplayContent from './RecordContent';
import RecordTitle from './RecordTitle';

const DisplayNarrative = (props: IDisplayNursingRecord) => {
  const i18n = useI18n();
  const { content, record_type, ...titleProps } = props;

  const { narrativeNote } = JSON.parse(content) as TNarrativeContent;

  return (
    <List sx={styledRecordList}>
      <RecordTitle title={i18n(`RECORD.${record_type}`)} {...titleProps} />
      <DisplayContent title={i18n('NARRATIVE.NOTES')} content={narrativeNote} />
    </List>
  );
};

export default DisplayNarrative;
