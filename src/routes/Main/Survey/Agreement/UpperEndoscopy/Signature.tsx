import { IFormRegister } from 'routes/Main/type';

import Form from 'components/Form';
import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

import {
  Box,
  Typography,
  RadioGroup,
  Radio,
  Table,
  TableBody,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material';

import {
  StyledTableCell,
  StyledTableCellWithoutLeft,
  StyledTableCellWithoutRight,
  StyledTableCellWithoutLeftRight,
} from 'routes/Main/style';

interface Props extends IFormRegister {
  disabled?: boolean;
}

const Signature = (props: Props) => {
  const { disabled, register } = props;

  return (
    <>
      <Box sx={{ width: '1400px', margin: '60px auto' }}>
        <Table aria-label="simple table">
          <TableRow>
            <StyledTableCell
              align="center"
              sx={{ padding: '50px', width: '200px' }}
            >
              환자
            </StyledTableCell>
            <StyledTableCellWithoutLeftRight>
              <div style={{ display: 'flex', margin: '20px 0 20px 0' }}>
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  생년월일
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  전화번호
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  성명
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  서명
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
              </div>
            </StyledTableCellWithoutLeftRight>
          </TableRow>

          <TableRow>
            <StyledTableCell
              align="center"
              sx={{ padding: '50px', width: '200px' }}
            >
              보호자
            </StyledTableCell>
            <StyledTableCellWithoutLeftRight>
              <div style={{ display: 'flex', margin: '20px 0 20px 0' }}>
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  생년월일
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  전화번호
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
              </div>
              <div style={{ display: 'flex', marginBottom: '20px' }}>
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  성명
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  서명
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
              </div>
            </StyledTableCellWithoutLeftRight>
          </TableRow>

          <TableRow>
            <StyledTableCell
              align="center"
              sx={{ padding: '50px', width: '200px' }}
            >
              의사
            </StyledTableCell>
            <StyledTableCellWithoutLeftRight>
              <div style={{ display: 'flex', margin: '20px 0 20px 0' }}>
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  성명
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
                <Box
                  sx={{
                    paddingTop: '10px',
                    paddingLeft: '60px',
                    minWidth: '200px',
                  }}
                >
                  서명
                </Box>
                <Form.MuiTextField
                  required={false}
                  disabled={disabled}
                  {...register('das')}
                />
              </div>
            </StyledTableCellWithoutLeftRight>
          </TableRow>
        </Table>
      </Box>
    </>
  );
};

export default Signature;
