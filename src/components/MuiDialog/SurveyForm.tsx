import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

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
import { formatStringToDate } from 'utils/formatting';
import useUser from 'store/user/useUser';
import zIndex from '@mui/material/styles/zIndex';
import styled from 'styled-components';

export interface SurveyFormProps {
  title: string;
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
  update_at?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

function SurveyForm(props: SurveyFormProps) {
  const { breakpoints } = useTheme();
  const isMobile = useMediaQuery(breakpoints.down('sm'));

  const printRef = useRef(null);

  const onClickPrint = () => {
    window.print();
  };

  const {
    title,
    isOpen = false,
    children,
    update_at,
    onClose,
    onSubmit,
  } = props;

  const { isStudent } = useUser();

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
            <Close color="primary" />
          </IconButton>

          {title}

          <Typography variant="caption" color="gray" sx={{ ml: 'auto', mr: 2 }}>
            {update_at && `최근 저장한 시간: ${formatStringToDate(update_at)}`}
          </Typography>

          <Button
            onClick={onClickPrint}
            size="small"
            type="button"
            variant="contained"
            sx={{ marginRight: '10px' }}
            disabled={isStudent ? false : true}
          >
            인쇄
          </Button>

          <Button
            size="small"
            type="submit"
            variant="contained"
            sx={{ display: onSubmit ? 'block' : 'none' }}
            disabled={isStudent ? false : true}
          >
            저장
          </Button>
        </DialogTitle>

        <DialogContent>
          <div ref={printRef}>
            <PrintableBodyWrapper>{children}</PrintableBodyWrapper>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default SurveyForm;

const PrintableBodyWrapper = styled.div`
  page-break-before: auto;

  @media print and (width: 21cm) and (height: 29.7cm) {
    @page {
      margin: 3cm;
    }
  }

  /* style sheet for "letter" printing */
  @media print and (width: 8.5in) and (height: 11in) {
    @page {
      margin: 1in;
    }
  }

  /* A4 Landscape*/
  @page {
    size: A3 landscape;
    margin: 0%;
    margin-top: 1%;
  }
`;
