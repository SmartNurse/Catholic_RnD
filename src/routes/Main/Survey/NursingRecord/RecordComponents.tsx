import Form from 'components/Form';

import { Fragment, useState } from 'react';
import { AccessTime, Delete } from '@mui/icons-material';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import { Ti18nId } from 'hooks/useI18n';
import { INursingProcess } from 'apis/survey/type';
import { IFormRegister, IFormValues, IFormWatch } from 'routes/Main/type';

import MuiTextField from 'components/Form/MuiTextField';
import SectionTitle from '../components/SectionTitle';

import useUser from 'store/user/useUser';

interface Props extends IFormValues, IFormWatch, IFormRegister {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const RecordComponents = (props: Props) => {
  const {
    disabled,
    watch,
    setValue,
    onRequired,
    onSuccess,
    getValues,
    register,
  } = props;
  const nursingRecordList: INursingProcess[] = watch(
    'nursing_process_narrative_note_survey'
  );

  const { student_no, student_name } = useUser();

  const [priority, setPriority] = useState('');
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [goal, setGoal] = useState('');
  const [plan, setPlan] = useState('');
  const [reason, setReason] = useState('');
  const [perform, setPerform] = useState('');
  const [evaluation, setEvaluation] = useState('');

  const onAddRow = () => {
    const request = {
      priority,
      subjective,
      objective,
      diagnosis,
      goal,
      plan,
      reason,
      perform,
      evaluation,
    };

    onSuccess('간호과정 서술기록 추가되었습니다.');
    setValue(
      'nursing_process_narrative_note_survey',
      nursingRecordList ? [...nursingRecordList, request] : [request]
    );

    setPriority('');
    setSubjective('');
    setObjective('');
    setDiagnosis('');
    setGoal('');
    setPlan('');
    setReason('');
    setPerform('');
    setEvaluation('');
  };

  const onDeleteRow = (index: number) => {
    setValue(
      'nursing_process_narrative_note_survey',
      nursingRecordList.filter((_, i) => i !== index)
    );
  };

  const inputRows = [
    {
      label: '제출자',
      elements: [
        {
          type: 'date',
          element: (
            <Stack direction="row" gap={2}>
              <Form.MuiTextField
                required={false}
                value={student_no}
                InputProps={{ readOnly: true }}
                sx={{ backgroundColor: '#dcd8d8' }}
              />
              <Form.MuiTextField
                required={false}
                value={student_name}
                InputProps={{ readOnly: true }}
                sx={{ backgroundColor: '#dcd8d8' }}
              />
            </Stack>
          ),
        },
        {
          type: 'button',
          element: (
            <Button variant="contained" size="small" onClick={onAddRow}>
              추가
            </Button>
          ),
        },
      ],
    },
    {
      label: '간호진단목록/우선순위',
      elements: [
        {
          type: 'text',
          element: (
            <MuiTextField
              sx={{
                marginTop: '-20px',
              }}
              value={priority}
              required={false}
              onChange={({ target: { value } }) => setPriority(value)}
              multiline
              minRows={5}
            />
          ),
        },
      ],
    },
    {
      label: '간호사정',
      elements: [
        {
          type: 'text',
          element: (
            <Box
              display="flex"
              sx={{
                direction: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '-20px',
              }}
            >
              <Stack sx={{ width: '49%' }}>
                <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
                  주관적 자료
                </Typography>
                <Form.MuiTextField
                  required={false}
                  value={subjective}
                  disabled={disabled}
                  multiline
                  minRows={5}
                  onChange={({ target: { value } }) => setSubjective(value)}
                />
              </Stack>
              <Stack sx={{ width: '49%' }}>
                <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
                  객관적 자료
                </Typography>
                <Form.MuiTextField
                  required={false}
                  value={objective}
                  disabled={disabled}
                  multiline
                  minRows={5}
                  onChange={({ target: { value } }) => setObjective(value)}
                />
              </Stack>
            </Box>
          ),
        },
      ],
    },
    {
      label: '간호진단-간호진단진술문 (PE)',
      elements: [
        {
          type: 'text',
          element: (
            <MuiTextField
              sx={{
                marginTop: '-20px',
              }}
              value={diagnosis}
              required={false}
              onChange={({ target: { value } }) => setDiagnosis(value)}
              multiline
              minRows={5}
            />
          ),
        },
      ],
    },
    {
      label: '간호 계획',
      elements: [
        {
          type: 'text',
          element: (
            <Box
              display="flex"
              sx={{
                width: '100%',
                marginTop: '-20px',
                flexDirection: 'column',
              }}
            >
              <Stack>
                <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
                  목표 / 기대되는 결과
                </Typography>
                <Form.MuiTextField
                  value={goal}
                  required={false}
                  disabled={disabled}
                  multiline
                  minRows={5}
                  onChange={({ target: { value } }) => setGoal(value)}
                />
              </Stack>

              <Stack direction="row" gap={3.9} sx={{ marginTop: '20px' }}>
                <Stack sx={{ width: '49%' }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
                    간호중재
                  </Typography>
                  <Form.MuiTextField
                    value={plan}
                    required={false}
                    disabled={disabled}
                    multiline
                    minRows={30}
                    onChange={({ target: { value } }) => setPlan(value)}
                  />
                </Stack>
                <Stack sx={{ width: '49%' }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 500 }}>
                    이론적 근거
                  </Typography>
                  <Form.MuiTextField
                    value={reason}
                    required={false}
                    disabled={disabled}
                    multiline
                    minRows={30}
                    onChange={({ target: { value } }) => setReason(value)}
                  />
                </Stack>
              </Stack>
            </Box>
          ),
        },
      ],
    },
    {
      label: '간호 수행 (Optional)',
      elements: [
        {
          type: 'text',
          element: (
            <MuiTextField
              sx={{
                marginTop: '-20px',
              }}
              value={perform}
              required={false}
              onChange={({ target: { value } }) => setPerform(value)}
              multiline
              minRows={5}
            />
          ),
        },
      ],
    },
    {
      label: '간호 평가 (Optional)',
      elements: [
        {
          type: 'text',
          element: (
            <MuiTextField
              sx={{
                marginTop: '-20px',
              }}
              value={evaluation}
              required={false}
              onChange={({ target: { value } }) => setEvaluation(value)}
              multiline
              minRows={5}
            />
          ),
        },
      ],
    },
  ];

  const displayRows = nursingRecordList
    ? nursingRecordList.map((item, i) => ({
        ...item,
        id: i,
        // time: formatStringToDate(item.time, 'hh:mm a'),
        action: (
          <IconButton
            size="small"
            onClick={() => onDeleteRow(i)}
            sx={{ display: disabled ? 'none' : 'block' }}
          >
            <Delete />
          </IconButton>
        ),
      }))
    : [];

  return (
    <Fragment>
      <SectionTitle title="간호과정 서술" />
      <Grid item xs={12}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {!disabled &&
              inputRows.map(row => {
                if (row.label === '제출자') {
                  return (
                    <TableRow
                      key={row.label}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        style={{
                          width: '20%',
                          verticalAlign: 'top',
                          fontSize: '13px',
                          fontWeight: 500,
                        }}
                      >
                        {row.label}
                      </TableCell>
                      {row.elements.map(element => {
                        if (element.type === 'date') {
                          return (
                            <TableCell align="right" width="30%">
                              {element.element}
                            </TableCell>
                          );
                        } else if (element.type === 'button') {
                          return (
                            <TableCell align="right">
                              {element.element}
                            </TableCell>
                          );
                        } else
                          return (
                            <TableCell colSpan={3}>{element.element}</TableCell>
                          );
                      })}
                    </TableRow>
                  );
                } else
                  return (
                    <>
                      <TableRow
                        key={row.label}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell
                          style={{
                            width: '20%',
                            verticalAlign: 'top',
                            borderBottom: 'none',
                            fontSize: '13px',
                            fontWeight: 500,
                          }}
                        >
                          {row.label}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        {row.elements.map(element => {
                          if (element.type === 'date') {
                            return (
                              <TableCell align="right" sx={{ width: '300px' }}>
                                {element.element}
                              </TableCell>
                            );
                          } else if (element.type === 'time') {
                            return <TableCell>{element.element}</TableCell>;
                          } else if (element.type === 'button') {
                            return (
                              <TableCell align="right">
                                {element.element}
                              </TableCell>
                            );
                          } else
                            return (
                              <TableCell colSpan={3}>
                                {element.element}
                              </TableCell>
                            );
                        })}
                      </TableRow>
                    </>
                  );
              })}
          </TableBody>
        </Table>

        <SectionTitle title="저장 항목" mt={2} mb={1} />

        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <Box>
            {displayRows.map(row => {
              return (
                <Grid item xs={12} sx={{ marginLeft: '10px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid lightgray',
                      paddingBottom: '15px',
                      paddingTop: '5px',
                    }}
                  >
                    <Stack direction="row" gap={30}>
                      <Typography
                        whiteSpace="nowrap"
                        sx={{
                          lineHeight: '38px',
                          fontSize: '13px',
                          fontWeight: 500,
                        }}
                      >
                        제출자
                      </Typography>
                      <Stack direction="row" gap={2}>
                        <Form.MuiTextField
                          required={false}
                          value={student_no}
                          InputProps={{ readOnly: true }}
                          sx={{
                            backgroundColor: '#dcd8d8',
                          }}
                        />
                        <Form.MuiTextField
                          required={false}
                          value={student_name}
                          InputProps={{ readOnly: true }}
                          sx={{ backgroundColor: '#dcd8d8' }}
                        />
                      </Stack>
                    </Stack>
                    {row.action}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      borderBottom: '1px solid lightgray',
                      paddingBottom: '15px',
                      paddingTop: '5px',
                    }}
                  >
                    <Stack direction="column">
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호진단목록/우선순위
                      </Typography>
                      <Box
                        display="flex"
                        sx={{
                          direction: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginTop: '10px',
                        }}
                      >
                        <Box>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.priority}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid lightgray',
                      paddingBottom: '15px',
                      paddingTop: '5px',
                    }}
                  >
                    <Stack direction="column">
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호사정
                      </Typography>
                      <Stack
                        gap={10}
                        direction="row"
                        sx={{
                          display: 'flex',
                          direction: 'row',
                          justifyContent: 'space-between',
                          marginTop: '10px',
                        }}
                      >
                        <Box width="49%">
                          <Typography
                            style={{ fontSize: '12px', fontWeight: 500 }}
                          >
                            주관적자료
                          </Typography>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.subjective}
                          </Typography>
                        </Box>
                        <Box width="49%">
                          <Typography
                            style={{
                              fontSize: '13px',
                              fontWeight: 500,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            객관적 자료
                          </Typography>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.objective}
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      borderBottom: '1px solid lightgray',
                      paddingBottom: '15px',
                      paddingTop: '5px',
                    }}
                  >
                    <Stack direction="column">
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호진단-간호진단진술문 (PE)
                      </Typography>
                      <Box
                        display="flex"
                        sx={{
                          direction: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginTop: '10px',
                        }}
                      >
                        <Box>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.diagnosis}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      borderBottom: '1px solid lightgray',
                      paddingBottom: '15px',
                      paddingTop: '5px',
                    }}
                  >
                    <Stack direction="column">
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호계획
                      </Typography>
                      <Box width="100%">
                        <Typography
                          style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            marginTop: '10px',
                            minWidth: '650px',
                          }}
                        >
                          목표 / 기대되는 결과
                        </Typography>
                        <Typography style={{ fontSize: '12px' }}>
                          {row.goal}
                        </Typography>
                      </Box>
                      <Stack
                        direction="row"
                        gap={10}
                        sx={{ marginTop: '10px' }}
                      >
                        <Box width="49%">
                          <Typography
                            style={{
                              fontSize: '13px',
                              fontWeight: 500,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            간호중재
                          </Typography>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.plan}
                          </Typography>
                        </Box>
                        <Box width="49%">
                          <Typography
                            style={{
                              fontSize: '13px',
                              fontWeight: 500,
                              whiteSpace: 'nowrap',
                            }}
                          >
                            이론적 근거
                          </Typography>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.reason}
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      borderBottom: '1px solid lightgray',
                      paddingBottom: '15px',
                      paddingTop: '5px',
                    }}
                  >
                    <Stack direction="column">
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호 수행 (Optional)
                      </Typography>
                      <Box
                        display="flex"
                        sx={{
                          direction: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginTop: '10px',
                        }}
                      >
                        <Box>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.perform}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      borderBottom: '1px solid lightgray',
                      paddingBottom: '15px',
                      paddingTop: '5px',
                    }}
                  >
                    <Stack direction="column">
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호 평가 (Optional)
                      </Typography>
                      <Box
                        display="flex"
                        sx={{
                          direction: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginTop: '10px',
                        }}
                      >
                        <Box>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.evaluation}
                          </Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </div>
                </Grid>
              );
            })}
          </Box>
        </Table>

        {/* <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {displayRows.map(row => {
              console.log('row  : ', row);
              return (
                <Grid item xs={12}>
                 
                  <TableRow
                    key="간호사정"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      style={{
                        verticalAlign: 'top',
                        // borderBottom: 'none',
                      }}
                      width="49%"
                    >
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호사정
                      </Typography>
                      <Box
                        display="flex"
                        sx={{
                          direction: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginTop: '10px',
                        }}
                      >
                        <Box width="49%">
                          <Typography
                            style={{ fontSize: '12px', fontWeight: 500 }}
                          >
                            주관적자료
                          </Typography>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.subjective}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell
                      style={{
                        paddingTop: '40px',
                      }}
                      width="49%"
                    >
                      <Box width="49%">
                        <Typography
                          style={{ fontSize: '13px', fontWeight: 500 }}
                        >
                          객관적 자료
                        </Typography>
                        <Typography style={{ fontSize: '12px' }}>
                          {row.objective}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>

                  <TableRow
                    key="간호진단-간호진단진술문 (PE)"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      style={{
                        verticalAlign: 'top',
                      }}
                    >
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호진단-간호진단진술문 (PE)
                      </Typography>
                      <Box
                        display="flex"
                        sx={{
                          direction: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginTop: '10px',
                        }}
                      >
                        <Box>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.diagnosis}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell sx={{ borderBottom: 'none' }}>
                      <Box>
                        <Typography
                          style={{ fontSize: '13px', fontWeight: 500 }}
                        >
                          간호계획
                        </Typography>
                        <Typography
                          style={{
                            fontSize: '12px',
                            fontWeight: 500,
                            marginTop: '10px',
                          }}
                        >
                          목표
                        </Typography>
                        <Typography style={{ fontSize: '12px' }}>
                          {row.goal}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ borderBottom: 'none' }}>
                      <Typography style={{ fontSize: '12px', color: 'white' }}>
                        {row.goal}
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: 'none' }}></TableCell>
                  </TableRow>
                  <TableRow
                    key="간호계획"
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell width="49%">
                      <Box width="49%" sx={{ marginTop: '-30px' }}>
                        <Typography
                          style={{ fontSize: '12px', fontWeight: 500 }}
                        >
                          간호계획
                        </Typography>
                        <Typography style={{ fontSize: '12px' }}>
                          {row.plan}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      // style={{
                      //   paddingTop: '40px',
                      // }}
                      width="49%"
                    >
                      <Box width="49%" sx={{ marginTop: '-30px' }}>
                        <Typography
                          style={{ fontSize: '12px', fontWeight: 500 }}
                        >
                          이론적 근거
                        </Typography>
                        <Typography style={{ fontSize: '12px' }}>
                          {row.reason}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow
                    key="간호 수행 (Optional)"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      style={{
                        verticalAlign: 'top',
                      }}
                    >
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호 수행 (Optional)
                      </Typography>
                      <Box
                        display="flex"
                        sx={{
                          direction: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginTop: '10px',
                        }}
                      >
                        <Box>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.perform}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow
                    key="간호 평가 (Optional)"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell
                      style={{
                        verticalAlign: 'top',
                      }}
                    >
                      <Typography style={{ fontSize: '13px', fontWeight: 500 }}>
                        간호 평가 (Optional)
                      </Typography>
                      <Box
                        display="flex"
                        sx={{
                          direction: 'row',
                          justifyContent: 'space-between',
                          width: '100%',
                          marginTop: '10px',
                        }}
                      >
                        <Box>
                          <Typography style={{ fontSize: '12px' }}>
                            {row.evaluation}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </Grid>
              );
            })}
          </TableBody>
        </Table> */}
      </Grid>
    </Fragment>
  );
};

export default RecordComponents;
