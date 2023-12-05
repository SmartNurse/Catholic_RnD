import { GridColDef } from '@mui/x-data-grid';

import MuiDataGrid from 'components/MuiDataGrid';
import { IUpedateNursingRecord } from 'apis/survey/type';
import { Box, Grid, Stack, Table, Typography, useTheme } from '@mui/material';
import { formatStringToDate } from 'utils/formatting';

interface Props {
  list: IUpedateNursingRecord[];
  isLoading: boolean;
  totalCount: number;
  page: number;
  onPageChange: (page: number) => void;
}

function ContentsBody(props: Props) {
  const { palette } = useTheme();

  const { list, isLoading, totalCount, page, onPageChange } = props;

  const columns: GridColDef[] = [
    {
      field: 'student_name',
      headerName: '',
      renderCell: list => {
        if (!list.row.nursing_process_narrative_note_survey) {
          return <>기록없음</>;
        }

        return (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {list.row.nursing_process_narrative_note_survey.map(
              (item: any, i: number) => {
                const itemJSON = JSON.parse(item.contents);
                const create_at = formatStringToDate(item.create_at);

                return (
                  <Grid item xs={12} sx={{ marginLeft: '10px' }}>
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: '1px solid lightgray',
                        paddingBottom: '15px',
                        paddingTop: '5px',
                      }}
                    >
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
                          최근 저장한 시간 : {create_at}
                        </Typography>
                      </Stack>
                    </div>

                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontWeight: 500,
                        marginTop: '10px',
                      }}
                    >
                      간호진단목록/우선순위
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: '1px solid lightgray',
                        paddingBottom: '15px',
                        paddingTop: '5px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 400,
                        }}
                      >
                        {itemJSON[i]['priority']}
                      </Typography>
                    </div>

                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontWeight: 500,
                        marginTop: '10px',
                      }}
                    >
                      간호사정
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: '1px solid lightgray',
                        paddingBottom: '15px',
                        paddingTop: '5px',
                      }}
                    >
                      <Stack direction="row" mt={0.5} mb={1} gap={10}>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: 500,
                            }}
                          >
                            주관적 자료
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: 400,
                            }}
                          >
                            {itemJSON[i]['subjective']}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: 500,
                            }}
                          >
                            객관적 자료
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: 400,
                            }}
                          >
                            {itemJSON[i]['objective']}
                          </Typography>
                        </Box>
                      </Stack>
                    </div>

                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontWeight: 500,
                        marginTop: '10px',
                      }}
                    >
                      간호진단-간호진단진술문 (PE)
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: '1px solid lightgray',
                        paddingBottom: '15px',
                        paddingTop: '5px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 400,
                        }}
                      >
                        {itemJSON[i]['diagnosis']}
                      </Typography>
                    </div>

                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontWeight: 500,
                        marginTop: '10px',
                      }}
                    >
                      간호계획
                    </Typography>

                    <div
                      style={{
                        display: 'flex',
                        paddingBottom: '15px',
                        paddingTop: '5px',
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            fontWeight: 500,
                          }}
                        >
                          목표
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '13px',
                            fontWeight: 400,
                          }}
                        >
                          {itemJSON[i]['goal']}
                        </Typography>
                      </Box>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: '1px solid lightgray',
                        paddingBottom: '15px',
                        paddingTop: '5px',
                      }}
                    >
                      <Stack direction="row" mt={0.5} mb={1} gap={10}>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: 500,
                            }}
                          >
                            간호중재
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: 400,
                            }}
                          >
                            {itemJSON[i]['plan']}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: 500,
                            }}
                          >
                            이론적 근거
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              fontWeight: 400,
                            }}
                          >
                            {itemJSON[i]['reason']}
                          </Typography>
                        </Box>
                      </Stack>
                    </div>

                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontWeight: 500,
                        marginTop: '10px',
                      }}
                    >
                      간호 수행 (Optional)
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: '1px solid lightgray',
                        paddingBottom: '15px',
                        paddingTop: '5px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 400,
                        }}
                      >
                        {itemJSON[i]['perform']}
                      </Typography>
                    </div>

                    <Typography
                      sx={{
                        fontSize: '13px',
                        fontWeight: 500,
                        marginTop: '10px',
                      }}
                    >
                      간호 평가 (Optional)
                    </Typography>
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: '3px solid black  ',
                        paddingBottom: '15px',
                        paddingTop: '5px',
                        marginBottom: '20px',
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: '13px',
                          fontWeight: 400,
                        }}
                      >
                        {itemJSON[i]['evaluation']}
                      </Typography>
                    </div>
                  </Grid>
                );
              }
            )}

            {/* {recordTypes.map((type: any, i: number) => {
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
                            ></Typography>
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
            })} */}
          </Table>
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
