import {
  Breakpoint,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

interface Props {
  middleTitle: string;
  message: string;
  isOpen?: boolean;
  maxWidth?: Breakpoint;
  onClose: () => void;
  deleteFile: (i: number) => void;
  i: number;
  yesDelet: boolean;
  setYesDelet: React.Dispatch<React.SetStateAction<boolean>>;
}

function DeleteConfirm(props: Props) {
  const {
    middleTitle,
    message,
    isOpen = false,
    maxWidth = 'xs',
    onClose,
    deleteFile,
    i,
    yesDelet,
    setYesDelet,
  } = props;

  return (
    <Dialog maxWidth={maxWidth} open={isOpen} onClose={onClose}>
      <DialogTitle sx={{ fontSize: '18px' }}>{middleTitle}</DialogTitle>
      <DialogContent
        sx={{
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          lineHeight: '24px',
          fontSize: '14px',
        }}
      >
        {message}
      </DialogContent>
      <DialogActions>
        <Button
          variant="text"
          onClick={onClose}
          sx={{ marginTop: '-20px', color: '#1976D2' }}
        >
          취소
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setYesDelet(!yesDelet);
            deleteFile(i);
          }}
          sx={{ marginTop: '-20px', color: '#E63529' }}
        >
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirm;
