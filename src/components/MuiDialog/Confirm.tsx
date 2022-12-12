import {
  Breakpoint,
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
  maxWidth?: Breakpoint;
  onClose: () => void;
}

function Confirm(props: Props) {
  const { title, message, isOpen = false, maxWidth = 'xs', onClose } = props;

  return (
    <Dialog maxWidth={maxWidth} open={isOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent
        sx={{
          whiteSpace: 'pre-line',
          wordBreak: 'keep-all',
          lineHeight: '24px',
        }}
      >
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

export default Confirm;
