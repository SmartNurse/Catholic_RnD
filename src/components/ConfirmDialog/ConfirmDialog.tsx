import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

interface Props {
  title: string;
  message: string;
  isOpen?: boolean;
  onClose: () => void;
}

function ConfirmDialog(props: Props) {
  const { title, message, isOpen = false, onClose } = props;

  return (
    <Dialog maxWidth="xs" open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ wordBreak: 'keep-all', lineHeight: '24px' }}>
        {message}
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialog;
