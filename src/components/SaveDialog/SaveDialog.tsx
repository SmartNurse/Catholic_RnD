import { Close } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useTheme,
} from '@mui/material';

export interface SaveDialogProps {
  title: string;
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

function SaveDialog(props: SaveDialogProps) {
  const { zIndex } = useTheme();
  const { title, isOpen = false, children, onClose, onSubmit } = props;

  return (
    <Dialog maxWidth="lg" open={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <DialogTitle
          display="flex"
          alignItems="center"
          position="sticky"
          sx={{
            top: 0,
            zIndex: zIndex.modal,
            background: '#fff',
            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
          }}
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
      </form>
    </Dialog>
  );
}

export default SaveDialog;
