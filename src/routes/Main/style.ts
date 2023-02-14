import { Slider, FormControlLabel, TableCell, useTheme } from '@mui/material';
import { TabPanel } from '@mui/lab';
import { styled } from '@mui/material';

export const StyledDrawerWrapper = styled('div')`
  flex: 1;

  .MuiToolbar-root {
    height: 52px;
    min-height: 52px;
    justify-content: center;
  }

  .userDiv {
    position: relative;
    color: #fff;
    height: 46px;
    line-height: 46px;
    font-weight: 600;
    font-size: 14px;
    background-color: ${({ theme }) => theme.palette.secondary.main};
    text-align: center;
  }

  .hamburgerIcon {
    position: absolute;
    top: 10px;
    left: 14px;
  }

  .hamburgerIcon:hover {
    cursor: pointer;
  }

  .MuiList-root {
    display: flex;
    flex-direction: column;
    /* 100% - MuiToolbar - userName */
    height: calc(100% - 98px);
    padding: 18px 10px;
    background-color: ${({ theme }) => theme.palette.primary.main};

    .MuiListItem-root {
      .isPro {
        padding-right: 28px !important;
      }

      .MuiListItemButton-root {
        padding: 8px 8px;
        line-height: 18px;
        border-radius: 4px;

        .MuiListItemText-root {
          margin: 0;
          .MuiTypography-root {
            color: #fff;
            font-size: 13px;
            font-weight: 500;
          }
        }

        .MuiListItemIcon-root {
          color: #fff;
          min-width: 26px;
          .MuiSvgIcon-root {
            width: 14px;
            height: 14px;
          }
        }
      }
    }

    .MuiListItemButton-root:hover {
      background-color: #fff;
      .MuiListItemText-root .MuiTypography-root {
        color: ${({ theme }) => theme.palette.primary.main};
      }
      .MuiListItemIcon-root {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }

    .MuiListItemButton-root.Mui-disabled {
      opacity: 1;
    }
  }
`;

export const StyledContentContainer = styled('section')`
  padding: 20px;
  overflow: auto;
  /* 100% - MuiToolbar */
  height: calc(100vh - 52px);
`;

export const StyledTabPanel = styled(TabPanel)`
  flex: 1;
  padding: 10px 0;

  .MuiButtonGroup-root {
    color: #000000b2;
    margin-top: auto;
    padding-top: 16px;
    justify-content: flex-end;
  }
`;

/*
export const sxRecordItem = {
  pt: 0,

  '&.active': {
    backgroundColor: theme.palette.grey[100],
  },
  ':not(:first-of-type)': {
    mt: 2,
    px: 1,
    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  },
  ':not(:last-of-type)': {
    px: 1,
  },
};
*/

export const StyledMiniBox = styled('div')`
  width: 75px;
  border: 1px solid #00000080;
  border-radius: 4px;

  color: #00000080;
  font-size: 13px;
  text-align: center;
  word-break: keep-all;
`;

export const StyledSlider = styled(Slider)`
  color: ${({ theme }) => theme.palette.secondary.main};

  & .MuiSlider-thumb {
    width: 12;
    height: 12;
  }

  & .MuiSlider-rail {
    color: #00000033;
  }

  & .MuiSlider-mark {
    width: 12;
    height: 12;
    marginLeft: -5px;
    borderRadius: 8px;
    color: #00000033;

    &.MuiSlider-markActive {
      backgroundColor: ${({ theme }) => theme.palette.secondary.main};
      opacity: 1;
    }
  } 
`;

export const StyledFormControlLabel = styled(FormControlLabel)({
  '&.MuiFormControlLabel-root': {
    width: "200px",
    
    '& .MuiFormControlLabel-label': {
      wordBreak: "keep-all",
    }      
  }
});

export const StyledTableCell = styled(TableCell)({
  border: "1px solid lightgray",
  padding: "0px",
});

export const StyledTableCellWithoutLeft = styled(TableCell)({
  border: "1px solid lightgray",
  borderLeft: "none",
  padding: "0px",
});

export const StyledTableCellWithoutRight = styled(TableCell)({
  border: "1px solid lightgray",
  borderRight: "none",
  padding: "0px",
});

export const StyledTableCellWithoutLeftRight = styled(TableCell)({
  border: "1px solid lightgray",
  borderLeft: "none",
  borderRight: "none",
  padding: "0px",
});