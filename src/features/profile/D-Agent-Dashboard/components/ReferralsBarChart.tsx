// import { FC, useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Select,
//   MenuItem,
//   Box,
//   SelectChangeEvent,
// } from '@mui/material';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   Cell,
//   CartesianGrid,
//   ReferenceLine
// } from 'recharts';

// const referralsData = [
//   { name: 'Paid Ads', value: 250, color: '#F87171' },
//   { name: 'Organic Search', value: 900, color: '#4ADE80' },
//   { name: 'Social Media', value: 680, color: '#FACC15' },
//   { name: 'Referrals', value: 500, color: '#93C5FD' },
// ];

// const ReferralsChart: FC = () => {
//   const [period, setPeriod] = useState('This month');

//   const handleChange = (event: SelectChangeEvent) => {
//     setPeriod(event.target.value);
//   };

//   return (
//     <Card sx={{ width: 320, bgcolor: '#F8FAFC', borderRadius: 2, p: 2 }}>
//       <CardContent sx={{ p: 0 }}>
//         {/* Header */}
//         {/* mb={2} */}
//         <Box display="flex" justifyContent="space-between" alignItems="center" >
//           <Typography variant="h6" fontWeight={500}>
//             Referrals pages
//           </Typography>
//           <Select
//             value={period}
//             onChange={handleChange}
//             variant="standard"
//             disableUnderline
//             sx={{ fontSize: 14 }}
//           >
//             <MenuItem value="This month">This month</MenuItem>
//             <MenuItem value="Last month">Last month</MenuItem>
//           </Select>
//         </Box>

//         {/* Chart */}
//         <ResponsiveContainer width="100%" height={250}>
//             <BarChart
//                 margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
//                 data={referralsData}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                 <ReferenceLine y={0} stroke="#CBD5E1" strokeDasharray="0" />
//                 <XAxis
//                 dataKey="name"
//                 tick={false}
//                 axisLine={false}
//                 tickLine={false}
//                 />
//                 <YAxis
//                 ticks={[0, 250, 500, 750, 1000, 1250, 1500, 1750, 2000]}
//                 axisLine={false}
//                 tickLine={false}
//                 />
//                 <Tooltip />
//                 <Bar dataKey="value" radius={[4, 4, 0, 0]}>
//                 {referralsData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                 ))}
//                 </Bar>
//             </BarChart>
//         </ResponsiveContainer>


//         {/* Legend */}
//         {/* mt={2} */}
//         <Box className="MuiBox-root css-0 css_gd4g3fd">
//           {referralsData.map((item) => (
//             <Box
//               key={item.name}
//               display="flex"
//               alignItems="center"
//               justifyContent="space-between"
//             //   mb={0.5}
//               sx={{ fontSize: 14 }}
//             >
//               <Box display="flex" alignItems="center">
//                 <Box
//                   sx={{
//                     width: 10,
//                     height: 10,
//                     borderRadius: '50%',
//                     bgcolor: item.color,
//                     mr: 1,
//                   }}
//                 />
//                 <Typography variant="body2">{item.value}</Typography>
//               </Box>
//               <Typography variant="body2" color="textSecondary">
//                 {item.name}
//               </Typography>
//             </Box>
//           ))}
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default ReferralsChart;
import { FC, useState } from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const referralsData = [
  { name: 'Paid Ads', value: 250, color: '#EF4D56'  },
  { name: 'Organic Search', value: 900, color: '#49AB3A' },
  { name: 'Social Media', value: 680, color: '#EDCE54' },
  { name: 'Referrals', value: 500, color: '#ABD1DE' },
];

const ReferralsChart: FC = () => {
  const [period, setPeriod] = useState('This month');

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };

  return (
    <div
      style={{
        height:"100%",
        width:"100%",
        backgroundColor: '#F8FAFC',
        borderRadius: '16px',
        padding: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        display:"flex", 
        justifyContent: "space-between",
        flexDirection: "column",
        
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h3 style={{ margin: 0, fontWeight: 500, fontSize: '1.25rem' }}>
          Referrals pages
        </h3>
        <Select
          value={period}
          onChange={handleChange}
          variant="standard"
          disableUnderline
          sx={{ fontSize: 14 }}
        >
          <MenuItem value="This month">This month</MenuItem>
          <MenuItem value="Last month">Last month</MenuItem>
        </Select>
      </div>

      {/* BarChart з окремими серіями */}
      <BarChart
        xAxis={[
          {
            scaleType: 'band',
            data: [''],
            tickLabelStyle: { display: 'none' },
          },
        ]}
        yAxis={[
            {
              width: 60, // досить місця для чисел
            },
          ]}
          margin={{
            left: -18,  // дає простір для чисел
            right: 10,
            top: 20,
            bottom: -10,
          }}
        series={referralsData.map((item) => ({
          data: [item.value],
          label: item.name,
          color: item.color,
        }))}
        // width={400}
        height={280}
        grid={{ horizontal: true }}
        borderRadius={6}
      />

      {/* Легенда */}
      <div
        style={{display:"flex" ,gap:"20px", justifyContent:"space-between" }}>
        {referralsData.map((item) => (
          <div
            key={item.name}
            style={{
              display: 'flex',
              flex: "1",
              flexDirection:"column",
              alignItems: 'center',
              fontSize: 14,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: item.color,
                  marginRight: 8,
                }}
              />
              <span>{item.value}</span>
            </div>
            <span style={{ color: '#6B7280' , textAlign:"center" }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralsChart;
