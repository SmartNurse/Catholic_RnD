import { IFormRegister } from 'routes/Main/type';

import Form from 'components/Form';
import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

import { Box, Table, TableBody, TableRow } from '@mui/material';

import {
  StyledTableCell,
  StyledTableCellWithoutLeft,
  StyledTableCellWithoutLeftRight,
} from 'routes/Main/style';

interface Props extends IFormRegister {
  disabled?: boolean;
}

const Signature = (props: Props) => {
  const { disabled, register } = props;

  return (
    <>
      <Box sx={{ width: '95%', margin: '60px auto' }}>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <StyledTableCell
                align="center"
                sx={{ padding: '50px', width: '100px', whiteSpace: 'nowrap' }}
              >
                담당의사
              </StyledTableCell>
              <StyledTableCellWithoutLeftRight>
                <div style={{ display: 'flex', margin: '20px 0 20px 0' }}>
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '60px',
                      minWidth: '150px',
                    }}
                  >
                    성명
                  </Box>
                  <Form.MuiTextField
                    required={false}
                    disabled={disabled}
                    {...register('patient_bday')}
                  />
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '60px',

                      minWidth: '150px',
                    }}
                  >
                    서명 또는 인
                  </Box>
                  <Form.MuiTextField
                    sx={{ paddingRight: '60px' }}
                    required={false}
                    disabled={disabled}
                    {...register('patient_contact')}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '60px',
                      minWidth: '150px',
                    }}
                  >
                    전문의 성명
                  </Box>
                  <Form.MuiTextField
                    required={false}
                    disabled={disabled}
                    {...register('patient_name')}
                  />
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '60px',
                      minWidth: '150px',
                    }}
                  >
                    날짜
                  </Box>
                  <Form.MuiTextField
                    type="date"
                    required={false}
                    disabled={disabled}
                    sx={{ paddingRight: '60px' }}
                    {...register('patient_name')}
                  />
                </div>
              </StyledTableCellWithoutLeftRight>
              <StyledTableCellWithoutLeft></StyledTableCellWithoutLeft>
            </TableRow>

            <TableRow>
              <StyledTableCell
                align="center"
                sx={{ padding: '50px', width: '150px', whiteSpace: 'nowrap' }}
              >
                해당분야의 전문의
              </StyledTableCell>
              <StyledTableCellWithoutLeftRight>
                <div style={{ display: 'flex', margin: '20px 0 20px 0' }}>
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '60px',
                      minWidth: '150px',
                    }}
                  >
                    성명
                  </Box>
                  <Form.MuiTextField
                    required={false}
                    disabled={disabled}
                    {...register('companion_bday')}
                  />
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '60px',
                      minWidth: '150px',
                    }}
                  >
                    소속 의료기관
                  </Box>
                  <Form.MuiTextField
                    sx={{ paddingRight: '60px' }}
                    required={false}
                    disabled={disabled}
                    {...register('companion_contact')}
                  />
                </div>
                <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '60px',
                      minWidth: '150px',
                    }}
                  >
                    전문과목
                  </Box>
                  <Form.MuiTextField
                    required={false}
                    disabled={disabled}
                    {...register('companion_name')}
                  />
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '60px',
                      minWidth: '150px',
                    }}
                  >
                    서명 또는 인
                  </Box>
                  <Form.MuiTextField
                    required={false}
                    disabled={disabled}
                    sx={{ paddingRight: '60px' }}
                    {...register('patient_name')}
                  />
                </div>
                {/* <div style={{ display: 'flex', marginBottom: '20px' }}>
                  <Box
                    sx={{
                      paddingTop: '10px',
                      paddingLeft: '45px',
                      minWidth: '150px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    전문의 자격 번호
                  </Box>
                  <Form.MuiTextField
                    sx={{ paddingRight: '60px' }}
                    required={false}
                    disabled={disabled}
                    {...register('companion_sig')}
                  />
                </div> */}
              </StyledTableCellWithoutLeftRight>
              <StyledTableCellWithoutLeft></StyledTableCellWithoutLeft>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default Signature;
