import {
  Breakpoint,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import { ReactComponent as NaverBanner } from '../../assets/naverBanner.svg';
import { ReactComponent as KakaoBanner } from '../../assets/kakaoBanner.svg';



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

        <div style={{ marginTop:'1.5rem'}}>
          <NaverBanner
            style={{ cursor: "pointer" }}
            onClick={()=>window.open("https://talk.naver.com/ct/w4qrco")}
          />
        </div>

        <div style={{ marginTop:'1rem'}}>
          <KakaoBanner
            style={{ cursor: "pointer" }}
            onClick={()=>window.open("http://pf.kakao.com/_WxkzXb")}
          />
        </div>
        
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={onClose} sx={{marginTop:"-20px"}}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Confirm;
