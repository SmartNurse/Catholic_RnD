import { Close } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';

export interface SaveDialogProps {
  title: string;
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function SaveDialog(props: SaveDialogProps) {
  const { title, isOpen = false, onClose, children } = props;

  return (
    <Dialog maxWidth="lg" open={isOpen} onClose={onClose}>
      <DialogTitle
        display="flex"
        alignItems="center"
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.3)' }}
      >
        <IconButton size="small" onClick={onClose} sx={{ mr: 1.5 }}>
          <Close />
        </IconButton>

        {title}

        <Button
          size="small"
          type="submit"
          variant="contained"
          sx={{ ml: 'auto' }}
        >
          저장
        </Button>
      </DialogTitle>

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default SaveDialog;
