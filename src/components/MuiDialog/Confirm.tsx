import {
  Breakpoint,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import { ReactComponent as ChannelTalk } from '../../assets/channelTalk.svg';

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

        <div style={{ marginTop: '1rem' }}>
          <ChannelTalk
            style={{ cursor: 'pointer', marginLeft: '-25px' }}
            onClick={() => window.open('https://vd48q.channel.io/lounge')}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose} sx={{ marginTop: '-20px' }}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Confirm;
