import { Fragment, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { Ti18nId } from 'hooks/useI18n';
import { IFormValues, IFormWatch } from 'routes/Main/type';

import SectionTitle from '../components/SectionTitle';

import useVitalsign from 'store/vitalsign/useVitalsign';

interface Props extends IFormValues, IFormWatch {
  disabled?: boolean;
  onRequired: (id: Ti18nId) => void;
  onSuccess: (message: string) => void;
}

const colors = ['#FE2503', '#FF9200', '#02F900', '#0333FF', '#942092'];

const VitalSignGraph = (props: Props) => {
  const { vitalsign } = useVitalsign();
  const [vitalsignData, setVitalsignData] = useState<
    {
      name: string;
      data: { timestamp: string; value?: number; temp?: number }[];
    }[]
  >([]);

  useEffect(() => {
    const btData = vitalsign.data.map(v => {
      return { timestamp: v.checkTime, temp: v.bt };
    });
    const prData = vitalsign.data.map(v => {
      return { timestamp: v.checkTime, value: v.pr };
    });
    const rrData = vitalsign.data.map(v => {
      return { timestamp: v.checkTime, value: v.rr };
    });
    const sbpData = vitalsign.data.map(v => {
      return { timestamp: v.checkTime, value: v.sbp };
    });
    const dbpData = vitalsign.data.map(v => {
      return { timestamp: v.checkTime, value: v.dbp };
    });

    setVitalsignData([
      { name: 'BT (℃)', data: [...btData] },
      { name: 'PR (회)', data: [...prData] },
      { name: 'RR (회)', data: [...rrData] },
      { name: 'SBP (mmHg)', data: [...sbpData] },
      { name: 'DBP (mmHg)', data: [...dbpData] },
    ]);

    // console.log(vitalsignData);
  }, [vitalsign.isUpdated]);

  return (
    <Fragment>
      <SectionTitle title="Vital Sign Graph" />
      <Box sx={{ width: '80%', height: '500px', margin: '50px auto 0px auto' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
            <CartesianGrid horizontal={false} />
            <XAxis
              dataKey="timestamp"
              type="category"
              allowDuplicatedCategory={false}
              padding={{ left: 50, right: 50 }}
              tickMargin={10}
            />
            <YAxis
              yAxisId={0}
              orientation="left"
              dataKey="value"
              type="number"
              tickCount={11}
              domain={[0, 200]}
              tickMargin={10}
            />
            <YAxis
              yAxisId={1}
              orientation="right"
              dataKey="temp"
              type="number"
              domain={[30, 42]}
              tickMargin={10}
            />
            <Tooltip />
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              formatter={value => (
                <span style={{ color: 'black' }}>{value}</span>
              )}
              wrapperStyle={{
                backgroundColor: '#EBEBEB',
                padding: '15px 10px',
                marginLeft: '10px',
              }}
            />
            {vitalsignData.map((v, idx) => (
              <Line
                dataKey={v.name === 'BT (℃)' ? 'temp' : 'value'}
                data={v.data}
                name={v.name}
                key={v.name}
                stroke={colors[idx]}
                dot={{ stroke: colors[idx], strokeWidth: 4 }}
                yAxisId={v.name === 'BT (℃)' ? 1 : 0}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Fragment>
  );
};

export default VitalSignGraph;
