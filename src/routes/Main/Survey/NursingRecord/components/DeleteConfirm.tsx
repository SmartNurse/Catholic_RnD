import {
  Breakpoint,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import useNotification from 'hooks/useNotification';

interface Props {
  middleTitle: string;
  message: string;
  isOpen?: boolean;
  maxWidth?: Breakpoint;
  onClose: () => void;
  yesDelet: boolean;
  setYesDelet: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

function DeleteConfirm(props: Props) {
  const {
    middleTitle,
    message,
    isOpen = false,
    maxWidth = 'xs',
    onClose,
    yesDelet,
    setYesDelet,
    onSubmit,
  } = props;
  const { onSuccess } = useNotification();

  return (
    <Dialog maxWidth={maxWidth} open={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <DialogTitle sx={{ fontSize: '16px', fontWeight: 700 }}>
          {middleTitle}
        </DialogTitle>
        <DialogContent
          sx={{
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all',
            lineHeight: '21px',
            fontSize: '14px',
          }}
        >
          {message}
        </DialogContent>
        <DialogActions>
          <Button
            variant="text"
            onClick={onClose}
            sx={{ marginTop: '-20px', color: '#E63529', fontSize: '14px' }}
          >
            취소
          </Button>
          <Button
            type="submit"
            variant="text"
            onClick={() => {
              setYesDelet(!yesDelet);
              onClose();
              onSuccess('정신간호 기록지 저장에 성공하였습니다.');
            }}
            sx={{
              marginTop: '-20px',
              color: '#1976D2',
              fontSize: '14px',
            }}
          >
            저장
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default DeleteConfirm;
