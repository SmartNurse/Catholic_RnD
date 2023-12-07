import { Fragment } from 'react';

import { GridColDef } from '@mui/x-data-grid';

import MuiDataGrid from 'components/MuiDataGrid';
import { IUpedateNursingRecord } from 'apis/survey/type';
import useI18n from 'hooks/useI18n';
import { Box, Stack, Typography, useTheme } from '@mui/material';

interface Props {
  list: IUpedateNursingRecord[];
  isLoading: boolean;
  totalCount: number;
  page: number;
  onPageChange: (page: number) => void;
}

function ContentsBody(props: Props) {
  const i18n = useI18n();
  const { palette } = useTheme();

  const { list, isLoading, totalCount, page, onPageChange } = props;

  const Nanda = [
    '영역 Domain',
    '분류 Class',
    '진단명 Diagnosis',
    '자료 수집 주관적 / 객관적 Data',
    '간호목표 단기 / 장기 Goal ',
    '간호계획 Plan',
    '간호수행/중재/이론적 근거 Interventions',
    '간호평가 Evaluation',
  ];

  const Soapie = [
    '주관적 증상 Subjective Data',
    '객관적 정보 Objective Data',
    '사정 Assessment',
    '계획 Planning',
    '중재 Interventions',
    '평가 Evaluation',
  ];

  const Focus = ['포커스 Focus', '데이터 Data', '활동 Action', '반응 Response'];

  const NurseAssessment = [
    '간호사정 Assessment',
    '간호진단 Diagnosis',
    '',
    '간호목표 Goal',
    '간호계획 Plan',
    '간호수행/중재/이론적 근거 Interventions',
    '간호평가 Evaluation',
  ];
  const columns: GridColDef[] = [
    {
      field: 'student_name',
      headerName: '',
      renderCell: list => {
        if (!list.row.student_nursing_record) {
          return <>기록없음</>;
        }

        const recordTypes = list.row.student_nursing_record.map(
          (type: any) => type.record_type
        );
        // console.log('recordTypes : ', recordTypes);
        // console.log('list : ', list.row);
        return (
          <Box sx={{ borderBottom: '3px solid black', width: '100%' }}>
            <Stack direction="row" mt={1}>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bord',
                  color: `${palette.primary.main}`,
                }}
              >
                {list.row.student_name}
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#00000052',
                  margin: '0 5px 0 5px',
                }}
              >
                |
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bord',
                  color: `${palette.primary.main}`,
                }}
              >
                {list.row.student_no}
              </Typography>
            </Stack>

            {recordTypes.map((type: any, i: number) => {
              const catecorys = list.row.student_nursing_record[i].content;
              const jsonCategory = JSON.parse(catecorys);
              const categoryKeys = Object.keys(jsonCategory) as any[];

              const create_at = list.row.student_nursing_record[i].record_time;

              // console.log('contents : ', categoryKeys);

              if (type === 0) {
                return (
                  <Box sx={{ margin: '0 0 5px 20px' }}>
                    <Stack direction="row" mt={0.5} mb={1}>
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 500,
                        }}
                      >
                        Nanda
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#00000052',
                          marginLeft: '10px',
                        }}
                      >
                        {create_at}
                      </Typography>
                    </Stack>
                    {categoryKeys.map((title: string, i: number) => {
                      return (
                        <Fragment key={title}>
                          <Typography
                            component="li"
                            variant="caption"
                            fontWeight="bold"
                            sx={{
                              margin: '0 10px 0 10px',
                            }}
                          >
                            {Nanda[i]}
                          </Typography>
                          <Typography
                            // component="li"
                            variant="caption"
                            sx={{
                              pl: 1,
                              whiteSpace: 'pre-wrap',
                              marginLeft: '20px',
                            }}
                          >
                            {jsonCategory[title]}
                          </Typography>
                        </Fragment>
                      );
                    })}
                  </Box>
                );
              } else if (type === 1) {
                return (
                  <Box
                    sx={{
                      margin: '0 0 5px 20px',
                      borderTop: '1px solid lightgray',
                      width: '80vw',
                    }}
                  >
                    <Stack direction="row" mt={1} mb={1}>
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 500,
                        }}
                      >
                        SOAPIE
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#00000052',
                          marginLeft: '10px',
                        }}
                      >
                        {create_at}
                      </Typography>
                    </Stack>
                    {categoryKeys.map((title: string, i: number) => {
                      return (
                        <Fragment key={title}>
                          <Typography
                            component="li"
                            variant="caption"
                            fontWeight="bold"
                            sx={{
                              margin: '0 10px 0 10px',
                            }}
                          >
                            {Soapie[i]}
                          </Typography>
                          <Typography
                            // component="li"
                            variant="caption"
                            sx={{
                              pl: 1,
                              whiteSpace: 'pre-wrap',
                              marginLeft: '20px',
                            }}
                          >
                            {jsonCategory[title]}
                          </Typography>
                        </Fragment>
                      );
                    })}
                  </Box>
                );
              } else if (type === 2) {
                return (
                  <Box
                    sx={{
                      margin: '0 0 5px 20px',
                      borderTop: '1px solid lightgray',
                      width: '80vw',
                    }}
                  >
                    <Stack direction="row" mt={1} mb={1}>
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 500,
                        }}
                      >
                        Focus DAR
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#00000052',
                          marginLeft: '10px',
                        }}
                      >
                        {create_at}
                      </Typography>
                    </Stack>
                    {categoryKeys.map((title: string, i: number) => {
                      return (
                        <Fragment key={title}>
                          <Typography
                            component="li"
                            variant="caption"
                            fontWeight="bold"
                            sx={{
                              margin: '0 10px 0 10px',
                            }}
                          >
                            {Focus[i]}
                          </Typography>
                          <Typography
                            // component="li"
                            variant="caption"
                            sx={{
                              pl: 1,
                              whiteSpace: 'pre-wrap',
                              marginLeft: '20px',
                            }}
                          >
                            {jsonCategory[title]}
                          </Typography>
                        </Fragment>
                      );
                    })}
                  </Box>
                );
              } else if (type === 3) {
                return (
                  <Box
                    sx={{
                      margin: '0 0 5px 20px',
                      borderTop: '1px solid lightgray',
                      width: '80vw',
                    }}
                  >
                    <Stack direction="row" mt={1} mb={1}>
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 500,
                        }}
                      >
                        서술기록
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#00000052',
                          marginLeft: '10px',
                        }}
                      >
                        {create_at}
                      </Typography>
                    </Stack>
                    {categoryKeys.map((title: string, i: number) => {
                      return (
                        <Fragment key={title}>
                          <Typography
                            component="li"
                            variant="caption"
                            fontWeight="bold"
                            sx={{
                              margin: '0 10px 0 10px',
                            }}
                          >
                            서술기록 Narrative Notes
                          </Typography>
                          <Typography
                            // component="li"
                            variant="caption"
                            sx={{
                              pl: 1,
                              whiteSpace: 'pre-wrap',
                              marginLeft: '20px',
                            }}
                          >
                            {jsonCategory[title]}
                          </Typography>
                        </Fragment>
                      );
                    })}
                  </Box>
                );
              } else if (type === 4) {
                return (
                  <Box
                    sx={{
                      margin: '0 0 5px 20px',
                      borderTop: '1px solid lightgray',
                      width: '80vw',
                    }}
                  >
                    <Stack direction="row" mt={1} mb={1}>
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 500,
                        }}
                      >
                        간호과정
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#00000052',
                          marginLeft: '10px',
                        }}
                      >
                        {create_at}
                      </Typography>
                    </Stack>
                    {categoryKeys.map((title: string, i: number) => {
                      if (title === 'diagnosisRelate') {
                        return (
                          <Fragment key={title}>
                            <Typography
                              component="li"
                              variant="caption"
                              fontWeight="bold"
                              sx={{
                                margin: '0 10px 0 10px',
                              }}
                            >
                              간호진단 Diagnosis
                            </Typography>
                            <Typography
                              // component="li"
                              variant="caption"
                              sx={{
                                pl: 1,
                                whiteSpace: 'pre-wrap',
                                marginLeft: '20px',
                              }}
                            >
                              {jsonCategory[title]}
                            </Typography>
                            <br />
                            <Typography
                              // component="li"
                              variant="caption"
                              sx={{
                                pl: 1,
                                whiteSpace: 'pre-wrap',
                                marginLeft: '20px',
                              }}
                            >
                              와/과 관련된
                            </Typography>
                            <br />
                          </Fragment>
                        );
                      } else if (title === 'diagnosis' && type === 4) {
                        return (
                          <Fragment key={title}>
                            <Typography
                              // component="li"
                              variant="caption"
                              sx={{
                                pl: 1,
                                whiteSpace: 'pre-wrap',
                                marginLeft: '20px',
                              }}
                            >
                              {jsonCategory[title]}
                            </Typography>
                          </Fragment>
                        );
                      } else
                        return (
                          <Fragment key={title}>
                            <Typography
                              component="li"
                              variant="caption"
                              fontWeight="bold"
                              sx={{
                                margin: '0 10px 0 10px',
                              }}
                            >
                              {NurseAssessment[i]}
                            </Typography>
                            <Typography
                              // component="li"
                              variant="caption"
                              sx={{
                                pl: 1,
                                whiteSpace: 'pre-wrap',
                                marginLeft: '20px',
                              }}
                            >
                              {jsonCategory[title]}
                            </Typography>
                          </Fragment>
                        );
                    })}
                  </Box>
                );
              }
            })}
          </Box>
        );
      },
    },
  ];

  return (
    <MuiDataGrid
      headerHeight={0}
      columns={columns}
      loading={isLoading}
      onPageChange={onPageChange}
      page={page}
      pageSize={100}
      rows={list.map(item => ({ ...item, id: item.student_uuid }))}
      rowCount={totalCount}
      getRowHeight={() => 'auto'}
    />
  );
}

export default ContentsBody;
