import {
  Button,
  ButtonGroup,
  Grid,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import FormItem from '../../../components/FormItem';

function NandaContainer() {
  return (
    <Stack spacing={2} minHeight="100%">
      <Grid
        container
        wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        spacing={0.75}
      >
        <Grid item xs={4}>
          <Typography variant="caption">영역 Domain</Typography>
        </Grid>
        <Grid item xs={8}>
          <Select fullWidth size="small" placeholder="선택"></Select>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption">분류 Class</Typography>
        </Grid>
        <Grid item xs={8}>
          <Select fullWidth size="small" placeholder="선택"></Select>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="caption">진단명 Dignosis</Typography>
        </Grid>
        <Grid item xs={8}>
          <Select fullWidth size="small" placeholder="선택"></Select>
        </Grid>
      </Grid>

      <FormItem title="자료 수집 주관적 / 객관적">
        <TextField fullWidth size="small" variant="outlined" />
      </FormItem>

      <FormItem title="간호목표 단기/장기 Goal">
        <TextField fullWidth size="small" variant="outlined" />
      </FormItem>

      <FormItem title="간호계획 Plan">
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="간호수행/중재/이론적 근거 Interventions">
        <TextField
          fullWidth
          multiline
          rows={3}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <FormItem title="간호평가 Evaluation">
        <TextField
          fullWidth
          multiline
          rows={2}
          size="small"
          variant="outlined"
        />
      </FormItem>

      <ButtonGroup size="small" color="info">
        <Button variant="text" color="inherit">
          취소
        </Button>
        <Button variant="text">저장</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default NandaContainer;
