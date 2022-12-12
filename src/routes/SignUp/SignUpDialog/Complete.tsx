import MuiDialog from 'components/MuiDialog';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Complete = ({ isOpen, onClose }: Props) => (
  <MuiDialog.Confirm
    isOpen={isOpen}
    title="회원가입 신청 완료"
    message="승인까지 최대 1일이 소요 됩니다"
    onClose={onClose}
  />
);

export default Complete;
