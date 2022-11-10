import { Fragment } from "react";
import { Box } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Ti18nId } from "hooks/useI18n";
import { IFormValues, IFormWatch } from "routes/Main/type";

import SectionTitle from '../components/SectionTitle';

interface Props extends IFormValues, IFormWatch {
    disabled?: boolean;
    onRequired: (id: Ti18nId) => void;
    onSuccess: (message: string) => void;
}

const series = [
    {
      name: 'BT (℃)',
      data: [
        { timestamp: 'A', value: Math.random()*200, temp: Math.random()*35 },
        { timestamp: 'B', value: Math.random()*200, temp: Math.random()*35 },
        { timestamp: 'C', value: Math.random()*200, temp: Math.random()*35 },
      ],
    },
    {
      name: 'PR (회)',
      data: [
        { timestamp: 'B', value: Math.random()*200, temp: Math.random()*35 },
        { timestamp: 'C', value: Math.random()*200, temp: Math.random()*35 },
        { timestamp: 'D', value: Math.random()*200, temp: Math.random()*35 },
      ],
    },
    {
      name: 'RR (회)',
      data: [
        { timestamp: 'C', value: Math.random()*200, temp: Math.random()*35 },
        { timestamp: 'D', value: Math.random()*200, temp: Math.random()*35 },
        { timestamp: 'E', value: Math.random()*200, temp: Math.random()*35 },
      ],
    },
    {
        name: 'SBP (mmHg)',
        data: [
          { timestamp: 'C', value: Math.random()*200, temp: Math.random()*35 },
          { timestamp: 'D', value: Math.random()*200, temp: Math.random()*35 },
          { timestamp: 'E', value: Math.random()*200, temp: Math.random()*35 },
        ],
      },
      {
        name: 'DBP (mmHg)',
        data: [
          { timestamp: 'C', value: Math.random()*200, temp: Math.random()*35 },
          { timestamp: 'D', value: Math.random()*200, temp: Math.random()*35 },
          { timestamp: 'E', value: Math.random()*200, temp: Math.random()*35 },
        ],
      },
  
  ];

const colors = ["#FE2503", "#FF9200", "#02F900", "#0333FF", "#942092"];

const VitalSignGraph = (props: Props) => {

    return (
        <Fragment>
            <SectionTitle title="Vital Sign Graph" />
            <Box sx={{ width: "80%", height: "500px", margin: "50px auto 0px auto"}}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart margin={{ top:5, right: 5, bottom: 5, left: 5 }}>
                        <CartesianGrid horizontal={false} />
                        <XAxis dataKey="timestamp" type="category" allowDuplicatedCategory={false} />
                        <YAxis yAxisId={0} orientation="left" dataKey="value" type="number" tickCount={11} domain={[0, 200]} />
                        <YAxis yAxisId={1} orientation="right" dataKey="temp" type="number" domain={[30, 42]} />
                        <Tooltip />
                        <Legend
                            layout="vertical"
                            align="right"
                            verticalAlign="middle"
                            formatter={(value) => <span style={{ color: "black" }}>{value}</span>}
                            wrapperStyle={{ backgroundColor: "#EBEBEB", padding: "15px 10px", marginLeft: "10px" }}
                        />
                        {series.map((s, idx) => (
                            <Line dataKey="value" data={s.data} name={s.name} key={s.name} stroke={colors[idx]} dot={{ stroke: colors[idx], strokeWidth: 4 }} />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Fragment>
    );
}

export default VitalSignGraph;