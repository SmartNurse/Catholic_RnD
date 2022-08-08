import SaveDialog from '../../../components/SaveDialog/SaveDialog';
import { RECORD_TYPE } from '../type';

interface Props {
  record: string;
  onResetRecord: () => void;
}

const Records = ({ record, onResetRecord }: Props) => {
  if (!record) return null;

  const Content = () => {
    switch (record) {
      case RECORD_TYPE.ADMISSION:
        return <div>입원간호 기록지</div>;
      default:
        return null;
    }
  };

  return (
    <SaveDialog title={record} isOpen={Boolean(record)} onClose={onResetRecord}>
      <Content />
    </SaveDialog>
  );
};

export default Records;
