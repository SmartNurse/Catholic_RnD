import { Stack, TextField } from '@mui/material';

import Form from 'components/Form';

import { IFormRegister } from '../type';

interface Props extends IFormRegister {
  disabled?: boolean;
}

function Remarks({ register, disabled }: Props) {
  return (
    <Stack spacing={2}>
      <label style={{marginTop:"17px", fontWeight:"bold", fontSize:14}}>
        간호사정 (Assessment)
        <TextField
          sx={{marginTop:"8px"}}
          required
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          disabled={disabled}
          {...register('subjective')}
        />
      </label>
      <label style={{marginTop:"17px", fontWeight:"bold", fontSize:14}}>
        간호진단 (Diagnosis)
        <div style={{display:"flex", height:"70px"}}>
          <TextField
            sx={{width:"350px", height: "100px"}}
            required
            multiline
            variant="outlined"
            disabled={disabled}
            {...register('subjective')}
          />
          <div style={{paddingTop:"13px", paddingLeft:"12px", fontSize:18, fontWeight:400}}>
            <label>와/과 관련된</label>
          </div>
        </div>
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          disabled={disabled}
          {...register('subjective')}
          />
      </label>
      <label style={{marginTop:"17px", fontWeight:"bold", fontSize:14}}>
        간호목표 (Goal)
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          disabled={disabled}
          {...register('subjective')}
        />
      </label>
      <label style={{marginTop:"17px", fontWeight:"bold", fontSize:14}}>
        간호계획 (Plan)
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          disabled={disabled}
          {...register('subjective')}
      />
      </label>
      <label style={{marginTop:"17px", fontWeight:"bold", fontSize:14}}>
        간호수행/중재/이론적 근거 (Interventions)
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          disabled={disabled}
          {...register('subjective')}
        />
      </label>
      <label style={{marginTop:"17px", fontWeight:"bold", fontSize:14}}>
        간호평가 (Evaluation)
        <TextField
          required
          fullWidth
          multiline
          rows={2}
          variant="outlined"
          disabled={disabled}
          {...register('subjective')}
        />
      </label>
    </Stack>
  );
}

export default Remarks;
