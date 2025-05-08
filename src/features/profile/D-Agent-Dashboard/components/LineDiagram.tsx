// import {FC, useState} from 'react';
// import {
//     Card,
//     CardContent,
//     Typography,
//     Box,
//     Select,
//     MenuItem,
//     SelectChangeEvent,
// } from '@mui/material';
// import CircleIcon from '@mui/icons-material/Circle';
// import {LineChart} from '@mui/x-charts/LineChart';
// import {Period} from "@/features/profile/types"
// import { uData, pData, xLabels } from "@/features/profile/constants.ts";

// const BalanceOverviewChart: FC = () => {
//     const [period, setPeriod] = useState<Period>('This month');

//     const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
//         setPeriod(event.target.value as Period);
//     };

//     const series: any[] = [
//         {
//             data: uData,
//             label: 'Revenue',
//             color: 'green',
//             curve: 'monotone',
//             showMark: false,
//         },
//         {
//             data: pData,
//             label: 'Expenses',
//             color: 'red',
//             curve: 'monotone',
//             showMark: false,
//         },
//     ];

//     const xAxis: any[] = [
//         {
//             scaleType: 'point',
//             data: xLabels,
//             tickLabelStyle: {fontSize: 12},
//             line: {stroke: 'transparent'},
//             tickLine: {stroke: 'transparent'},
//         },
//     ];

//     const yAxis = [
//         {
//             min: 0,
//             max: 200000,
//             tickLabelStyle: {fontSize: 12},
//             line: {stroke: 'transparent'},
//             tickLine: {stroke: 'transparent'},
//             valueFormatter: (value: number) => `${Math.round(value / 1000)}k`,
//         },
//     ];

//     return (
//         <Card variant="outlined" sx={{borderRadius: 3}}>
//             <CardContent>
//                 {/* Header */}
//                 <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//                     <Typography variant="h6">Balance overview</Typography>
//                     <Select
//                         value={period}
//                         onChange={handlePeriodChange}
//                         size="small"
//                         variant="standard"
//                         disableUnderline
//                         sx={{fontSize: 14}}
//                     >
//                         <MenuItem value="This month">This month</MenuItem>
//                         <MenuItem value="Last month">Last month</MenuItem>
//                     </Select>
//                 </Box>

//                 {/* Indicators */}
//                 <Box display="flex" alignItems="center" gap={4} mb={2}>
//                     <Box display="flex" alignItems="center" gap={1}>
//                         <CircleIcon sx={{color: 'green', fontSize: 12}}/>
//                         <Box>
//                             <Typography fontWeight="bold" fontSize={18}>$120k</Typography>
//                             <Typography fontSize={12}>Revenue</Typography>
//                         </Box>
//                     </Box>
//                     <Box display="flex" alignItems="center" gap={1}>
//                         <CircleIcon sx={{color: 'red', fontSize: 12}}/>
//                         <Box>
//                             <Typography fontWeight="bold" fontSize={18}>$85k</Typography>
//                             <Typography fontSize={12}>Expenses</Typography>
//                         </Box>
//                     </Box>
//                     <Box>
//                         <Typography fontWeight="bold" fontSize={18}>3.6%</Typography>
//                         <Typography fontSize={12}>Profit ratio</Typography>
//                     </Box>
//                 </Box>

//                 {/* Chart */}
//                 <LineChart
//                     height={300}
//                     series={series}
//                     xAxis={xAxis}
//                     yAxis={yAxis}
//                     margin={{top: 10, bottom: 30, right: 10, left: 0}}
//                     grid={{vertical: false, horizontal: true}}
//                     sx={{width: '100%'}}
//                 />
//             </CardContent>
//         </Card>
//     );
// };

// export default BalanceOverviewChart;

// import { FC, useState } from 'react';
// import {
//     Select,
//     MenuItem,
//     SelectChangeEvent,
// } from '@mui/material';
// import CircleIcon from '@mui/icons-material/Circle';
// import { LineChart } from '@mui/x-charts/LineChart';
// import { Period } from "@/features/profile/types";
// import { uData, pData, xLabels } from "@/features/profile/constants.ts";

// const BalanceOverviewChart: FC = () => {
//     const [period, setPeriod] = useState<Period>('This month');

//     const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
//         setPeriod(event.target.value as Period);
//     };

//     const series: any[] = [
//         {
//             data: uData,
//             label: 'Revenue',
//             color: 'green',
//             curve: 'monotone',
//             showMark: false,
//         },
//         {
//             data: pData,
//             label: 'Expenses',
//             color: 'red',
//             curve: 'monotone',
//             showMark: false,
//         },
//     ];

//     const xAxis: any[] = [
//         {
//             scaleType: 'point',
//             data: xLabels,
//             tickLabelStyle: { fontSize: 12 },
//             line: { stroke: 'transparent' },
//             tickLine: { stroke: 'transparent' },
//         },
//     ];

//     const yAxis = [
//         {
//             min: 0,
//             max: 200000,
//             tickLabelStyle: { fontSize: 12 },
//             line: { stroke: 'transparent' },
//             tickLine: { stroke: 'transparent' },
//             valueFormatter: (value: number) => `${Math.round(value / 1000)}k`,
//         },
//     ];

//     return (
//         <section style={{
//             border: '1px solid rgba(0,0,0,0.12)',
//             borderRadius: '12px',
//             padding: '16px',
//             backgroundColor:"#ffff"
//         }}>
//             {/* Header */}
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 marginBottom: '16px',
//                 backgroundColor:"#ffff"
//             }}>
//                 <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Balance overview</h2>
//                 <Select
//                     value={period}
//                     onChange={handlePeriodChange}
//                     size="small"
//                     variant="standard"
//                     disableUnderline
//                     sx={{ fontSize: 14 }}
//                 >
//                     <MenuItem value="This month">This month</MenuItem>
//                     <MenuItem value="Last month">Last month</MenuItem>
//                 </Select>
//             </div>

//             {/* Indicators */}
//             <div style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '32px',
//                 marginBottom: '16px',
//                 justifyContent:"space-around"
//             }}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                     <CircleIcon sx={{ color: 'green', fontSize: 12 }} />
//                     <div>
//                         <p style={{font: 'normal 400 32px "Open Sans", sans-serif', margin: 0, }}>$120k</p>
//                         <p style={{font: 'normal 400 14px "Open Sans", sans-serif', margin: 0, }}>Revenue</p>
//                     </div>
//                 </div>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                     <CircleIcon sx={{ color: 'red', fontSize: 12 }} />
//                     <div>
//                         <p style={{font: 'normal 400 32px "Open Sans", sans-serif', margin: 0 }}>$85k</p>
//                         <p style={{font: 'normal 400 14px "Open Sans", sans-serif', margin: 0}}>Expenses</p>
//                     </div>
//                 </div>
//                 <div>
//                     <p style={{font: 'normal 400 32px "Open Sans", sans-serif', margin: 0 }}>3.6%</p>
//                     <p style={{font: 'normal 400 14px "Open Sans", sans-serif', margin: 0}}>Profit ratio</p>
//                 </div>
//             </div>

//             {/* Chart */}
//             <LineChart
//                 height={300}
//                 series={series}
//                 xAxis={xAxis}
//                 yAxis={yAxis}
//                 margin={{ top: 10, bottom: 30, right: 10, left: 0 }}
//                 grid={{ vertical: false, horizontal: true }}
//                 sx={{ width: '100%' }}
//             />
//         </section>
//     );
// };

// export default BalanceOverviewChart;
import { FC, useState } from 'react';
import {
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { LineChart } from '@mui/x-charts/LineChart';
import { Period } from "@/features/profile/types";
import { uData, pData, xLabels } from "@/features/profile/constants.ts";
import { styled } from '@mui/system';

const AnimatedLineChart = styled(LineChart)(() => ({
    width: '100%',
    '& .MuiChartsAxisHighlight-root': {
        transition: 'all 0.3s ease',
    },
    '& .MuiHighlightElement-root': {
        transition: 'all 0.2s ease',
    },
}));

const BalanceOverviewChart: FC = () => {
    const [period, setPeriod] = useState<Period>('This month');

    const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
        setPeriod(event.target.value as Period);
    };

    const series: any[] = [
        {
            data: uData,
            label: 'Revenue',
            color: 'green',
            curve: 'monotone',
            showMark: false,
        },
        {
            data: pData,
            label: 'Expenses',
            color: 'red',
            curve: 'monotone',
            showMark: false,
        },
    ];

    const xAxis: any[] = [
        {
            scaleType: 'point',
            data: xLabels,
            tickLabelStyle: { fontSize: 12 },
            line: { stroke: 'transparent' },
            tickLine: { stroke: 'transparent' },
        },
    ];

    const yAxis = [
        {
            min: 0,
            max: 200000,
            tickLabelStyle: { fontSize: 12 },
            line: { stroke: 'transparent' },
            tickLine: { stroke: 'transparent' },
            valueFormatter: (value: number) => `${Math.round(value / 1000)}k`,
        },
    ];

    return (
        <section style={{
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: '12px',
            padding: '16px',
            backgroundColor: "#fff",
        }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
            }}>
                <h2 style={{ margin: 0, fontSize: '1.25rem' }}>Balance overview</h2>
                <Select
                    value={period}
                    onChange={handlePeriodChange}
                    size="small"
                    variant="standard"
                    disableUnderline
                    sx={{ fontSize: 14 }}
                >
                    <MenuItem value="This month">This month</MenuItem>
                    <MenuItem value="Last month">Last month</MenuItem>
                </Select>
            </div>

            {/* Indicators */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '32px',
                marginBottom: '16px',
                justifyContent: "space-around"
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CircleIcon sx={{ color: 'green', fontSize: 12 }} />
                    <div>
                        <p style={{ font: 'normal 400 32px "Open Sans", sans-serif', margin: 0 }}>$120k</p>
                        <p style={{ font: 'normal 400 14px "Open Sans", sans-serif', margin: 0 }}>Revenue</p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CircleIcon sx={{ color: 'red', fontSize: 12 }} />
                    <div>
                        <p style={{ font: 'normal 400 32px "Open Sans", sans-serif', margin: 0 }}>$85k</p>
                        <p style={{ font: 'normal 400 14px "Open Sans", sans-serif', margin: 0 }}>Expenses</p>
                    </div>
                </div>
                <div>
                    <p style={{ font: 'normal 400 32px "Open Sans", sans-serif', margin: 0 }}>3.6%</p>
                    <p style={{ font: 'normal 400 14px "Open Sans", sans-serif', margin: 0 }}>Profit ratio</p>
                </div>
            </div>

            {/* Chart */}
            <AnimatedLineChart
                height={300}
                series={series}
                xAxis={xAxis}
                yAxis={yAxis}
                margin={{ top: 10, bottom: 30, right: 10, left: 0 }}
                grid={{ vertical: false, horizontal: true }}
            />
        </section>
    );
};

export default BalanceOverviewChart;
