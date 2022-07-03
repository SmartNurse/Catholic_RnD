import { styled } from '@mui/material';
import theme from '../../styles/theme';

export const DrawerWrapper = styled('div')`
  flex: 1;

  .MuiToolbar-root {
    height: 52px;
    min-height: 52px;
    justify-content: center;
  }

  .userName {
    color: #fff;
    height: 46px;
    font-weight: 600;
    background-color: #2e85dc;
    text-align: center;
    padding: 12px;
  }

  .MuiList-root {
    /* 100% - MuiToolbar - userName */
    display: flex;
    flex-direction: column;
    height: calc(100% - 98px);
    padding: 18px 10px;
    background-color: ${theme.palette.primary.main};

    .MuiListItem-root {
      .MuiListItemButton-root {
        padding: 8px 18px;
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
        color: ${theme.palette.primary.main};
      }
      .MuiListItemIcon-root {
        color: ${theme.palette.primary.main};
      }
    }

    .MuiListItemButton-root.Mui-disabled {
      opacity: 1;
    }
  }
`;
