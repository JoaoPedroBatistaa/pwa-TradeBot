import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  {name: 'Dia 1', uv: 1230, pv: 2400, amt: 2400},
  {name: 'Dia 2', uv: 798, pv: 1398, amt: 2210},
  {name: 'Dia 3', uv: 2145, pv: 9800, amt: 2290},
  {name: 'Dia 4', uv: 2985, pv: 9800, amt: 2290},
  {name: 'Dia 5', uv: 1345, pv: 9800, amt: 2290},
  {name: 'Dia 6', uv: 345, pv: 9800, amt: 2290},
  {name: 'Dia 7', uv: 845, pv: 9800, amt: 2290},
  // ...
];

export default function MyLineChart() {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Isso será renderizado no servidor e no primeiro render do cliente
    return null;
  }

  // Este código será renderizado apenas no cliente a partir do segundo render
  return (
    <LineChart width={380} height={300} data={data}
      margin={{top: 20, right: 30, left: -15, bottom: 20}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#00B55E" activeDot={{r: 8}} />
    </LineChart>
  );
}

