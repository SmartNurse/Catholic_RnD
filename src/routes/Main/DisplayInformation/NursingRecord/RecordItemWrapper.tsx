import { List } from '@mui/material';

import { sxRecordItem } from '../../style';
import { INursingRecord } from '../../../../apis/main/type';
import ActionButtons from './ActionButtons';
import RecordItem from './RecordItem';

interface Props extends INursingRecord {
  nurseName: string;
  refetch: () => void;
}

const RecordItemWrapper = (props: Props) => {
  const { nurseName, user_id, patient_id, nursing_record_id, refetch } = props;

  const displayProps = {
    ...props,
    nurseName,
    actionButtons: (
      <ActionButtons
        user_id={user_id}
        patient_id={patient_id}
        record_id={nursing_record_id}
        refetch={refetch}
      />
    ),
  };

  return (
    <List sx={sxRecordItem}>
      <RecordItem {...displayProps} />
    </List>
  );
};

export default RecordItemWrapper;
