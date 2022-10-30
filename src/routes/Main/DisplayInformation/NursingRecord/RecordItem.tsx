import { List } from '@mui/material';

import useI18n from 'hooks/useI18n';
import { INursingRecord } from 'apis/main/type';
import { sxRecordItem } from 'routes/Main/style';

import RecordTitle from './RecordTitle';
import RecordContent from './RecordContent';
import ActionButtons from './ActionButtons';

interface Props extends INursingRecord {
  nurseName: string;
  refetch?: () => void;
}

const RecordItem = (props: Props) => {
  const i18n = useI18n();
  const {
    user_id,
    content,
    record_type,
    patient_id,
    nursing_record_id,
    refetch,
  } = props;

  const actionButtons = refetch ? (
    <ActionButtons
      user_id={user_id}
      patient_id={patient_id}
      record_id={nursing_record_id}
      refetch={refetch}
    />
  ) : null;

  const titleProps = {
    actionButtons,
    nurseName: props.nurseName,
    create_at: props.create_at,
    record_time: props.record_time,
    title: i18n(`RECORD.${record_type}`),
  };

  const contents = JSON.parse(content);
  const type = i18n(`RECORD.TYPE.${record_type}`);
  const contentKeys = Object.keys(contents) as any[];

  return (
    <List sx={sxRecordItem} component="ul">
      <RecordTitle {...titleProps} />
      {contentKeys.map(contentKey => (
        <RecordContent
          key={contentKey}
          title={i18n(`${type}.${contentKey}` as any)}
          content={contents[contentKey]}
        />
      ))}
    </List>
  );
};

export default RecordItem;
