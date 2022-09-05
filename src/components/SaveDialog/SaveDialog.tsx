import { Close } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export interface SaveDialogProps {
  title: string;
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  update_at?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

function SaveDialog(props: SaveDialogProps) {
  const { zIndex, breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));

  const {
    title,
    isOpen = false,
    children,
    update_at,
    onClose,
    onSubmit,
  } = props;

  return (
    <Dialog
      maxWidth="xl"
      open={isOpen}
      onClose={onClose}
      scroll={isMobile ? 'body' : 'paper'}
    >
      <form onSubmit={onSubmit} style={{ minWidth: 1280 }}>
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

          <Typography variant="caption" color="gray" sx={{ ml: 'auto', mr: 2 }}>
            {update_at && `최근 저장한 시간: ${update_at}`}
          </Typography>

          <Button size="small" type="submit" variant="contained">
            저장
          </Button>
        </DialogTitle>

        <DialogContent>{children}</DialogContent>
      </form>
    </Dialog>
  );
}

export default SaveDialog;
