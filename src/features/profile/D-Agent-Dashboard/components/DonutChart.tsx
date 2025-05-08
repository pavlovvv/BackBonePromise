// import { FC, useState, ReactElement } from 'react';
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
//   PieChart,
//   Pie,
//   Cell,
//   Sector,
// } from 'recharts';
// import {Period} from "@/features/profile/types.ts";
// import {donutChartData} from "@/features/profile/constants.ts";


// const renderActiveShape = (props: any): ReactElement => {
//   const {
//     cx,
//     cy,
//     innerRadius,
//     outerRadius,
//     startAngle,
//     endAngle,
//     fill,
//     payload,
//     midAngle,
//   } = props;

//   const RADIAN = Math.PI / 180;
//   const radius = (innerRadius + outerRadius + 10) / 2;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//       <g>
//         <Sector
//             cx={cx}
//             cy={cy}
//             innerRadius={innerRadius}
//             outerRadius={outerRadius + 10}
//             startAngle={startAngle}
//             endAngle={endAngle}
//             fill={fill}
//         />
//         <text
//             x={x}
//             y={y}
//             textAnchor="middle"
//             dominantBaseline="central"
//             fill="#fff"
//             fontSize={14}
//             fontWeight="bold"
//         >
//           {`${payload.value}%`}
//         </text>
//       </g>
//   );
// };

// const DonutChart: FC = () => {
//   const [timeRange, setTimeRange] = useState<Period>('This month');

//   const handleChange = (event: SelectChangeEvent<Period>) => {
//     setTimeRange(event.target.value as Period);
//   };

//   // Find index of max value entry
//   const activeIndex = donutChartData.reduce((maxIdx, entry, idx, arr) =>
//           entry.value > arr[maxIdx].value ? idx : maxIdx
//       , 0);

//   return (
//       <Card sx={{ width: 300, p: 2, borderRadius: 2, bgcolor: '#fff' }}>
//         <CardContent>
//           {/* Header */}
//           <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
//             <Typography variant="h6" fontWeight={500}>
//               Subscribers
//             </Typography>
//             <Select
//                 value={timeRange}
//                 onChange={handleChange}
//                 variant="standard"
//                 disableUnderline
//                 sx={{ fontSize: 14 }}
//             >
//               <MenuItem value="This month">This month</MenuItem>
//               <MenuItem value="Last month">Last month</MenuItem>
//             </Select>
//           </Box>

//           {/* Chart */}
//           <Box display="flex" justifyContent="center">
//             <PieChart width={200} height={200}>
//               <Pie
//                   data={donutChartData}
//                   dataKey="value"
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={50}
//                   outerRadius={80}
//                   startAngle={90}
//                   endAngle={-270}
//                   stroke="none"
//                   activeIndex={activeIndex}
//                   activeShape={renderActiveShape}
//               >
//                 {donutChartData.map((entry) => (
//                     <Cell key={entry.name} fill={entry.color} />
//                 ))}
//               </Pie>
//             </PieChart>
//           </Box>

//           {/* Legend */}
//           <Box mt={2}>
//             {donutChartData.map(item => (
//                 <Box
//                     key={item.name}
//                     display="flex"
//                     alignItems="center"
//                     mb={0.5}
//                     sx={{ fontSize: 14 }}
//                 >
//                   <Box display="flex" alignItems="center">
//                     <Box
//                         sx={{
//                           width: 10,
//                           height: 10,
//                           borderRadius: '50%',
//                           bgcolor: item.color,
//                           mr: 1,
//                         }}
//                     />
//                     <Typography variant="body2" color="textSecondary">
//                       {item.value}%
//                     </Typography>
//                   </Box>
//                   <Typography variant="body2" color="textSecondary" ml="auto">
//                     {item.name}
//                   </Typography>
//                 </Box>
//             ))}
//           </Box>
//         </CardContent>
//       </Card>
//   );
// };

// export default DonutChart;
import { FC, useState, ReactElement } from 'react';
import {
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import {
  PieChart,
  Pie,
  Cell,
  Sector,
} from 'recharts';
import { Period } from "@/features/profile/types.ts";
import { donutChartData } from "@/features/profile/constants.ts";

const renderActiveShape = (props: any): ReactElement => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    midAngle,
  } = props;

  const RADIAN = Math.PI / 180;
  const radius = (innerRadius + outerRadius + 10) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 12}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#fff"
        fontSize={14}
        fontWeight="bold"
      >
        {`${payload.value}%`}
      </text>
    </g>
  );
};

const DonutChart: FC = () => {
  const [timeRange, setTimeRange] = useState<Period>('This month');

  const handleChange = (event: SelectChangeEvent<Period>) => {
    setTimeRange(event.target.value as Period);
  };

  const activeIndex = donutChartData.reduce(
    (maxIdx, entry, idx, arr) => (entry.value > arr[maxIdx].value ? idx : maxIdx),
    0
  );

  return (
    <div style={{
      width: "100%",
      height: "100%",
      padding: 16,
      borderRadius: 16,
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      display:"flex",
      flexDirection:"column" ,
      justifyContent:"space-between"
      
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
      }}>
        <h3 style={{
          fontSize: 18,
          fontWeight: 500,
          margin: 0
        }}>Subscribers</h3>
        <Select
          value={timeRange}
          onChange={handleChange}
          variant="standard"
          disableUnderline
          sx={{ fontSize: 14 }}
        >
          <MenuItem value="This month">This month</MenuItem>
          <MenuItem value="Last month">Last month</MenuItem>
        </Select>
      </div>

      {/* Chart */}
      <div style={{width:"100%", height:"100%" , display: 'flex', justifyContent: 'center' }}>
        <PieChart width={300} height={300}>
          <Pie
            data={donutChartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            startAngle={90}
            endAngle={-270}
            stroke="none"
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
          >
            {donutChartData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>

      {/* Legend */}
      <div style={{display:"flex" ,gap:"20px", justifyContent:"space-between" }}>
        {donutChartData.map((item) => (
          <div key={item.name} style={{
            display: 'flex',
            flex: "1",
            alignItems: 'center',
            flexDirection:"column",
            fontSize: 14
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                backgroundColor: item.color,
                marginRight: 8
              }} />
              <span style={{ color: '#888' }}>{item.value}%</span>
            </div>
            <span style={{  color: '#888', textAlign:"center" }}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
