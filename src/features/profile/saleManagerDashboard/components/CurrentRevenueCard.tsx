// import { FC, useState, ReactNode } from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Select,
//   MenuItem,
//   Tooltip,
//   Radio,
//   Stack,
//   SelectChangeEvent,
// } from '@mui/material';
// import { Segment, Period } from '@/features/profile/types.ts'
// import {revenueData} from "@/features/profile/constants.ts";

// const renderTooltipContent = (segment: Segment): ReactNode => (
//     <Stack spacing={1}>
//       <Box display="flex" alignItems="center">
//         <Radio size="small" checked disabled />
//         <Typography fontSize={14}>{segment.label}</Typography>
//       </Box>
//       {segment.children?.map(child => (
//           <Box
//               key={child.label}
//               display="flex"
//               justifyContent="space-between"
//           >
//             <Typography fontSize={14}>{child.label}</Typography>
//             <Typography fontSize={14} fontWeight="bold">
//               ${child.value / 1000}k ({child.percent}%)
//             </Typography>
//           </Box>
//       ))}
//     </Stack>
// );

// const CurrentRevenueCard: FC = () => {
//   const [period, setPeriod] = useState<Period>('This month');
//   const [, setHovered] = useState<string | null>(null);

//   const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
//     setPeriod(event.target.value as Period);
//   };

//   return (
//       <Card variant="outlined" sx={{ borderRadius: 3 }}>
//         <CardContent>
//           {/* Header */}
//           <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//             <Typography variant="h6">Current revenue</Typography>
//             <Select
//                 value={period}
//                 onChange={handlePeriodChange}
//                 size="small"
//                 variant="standard"
//                 disableUnderline
//                 sx={{ fontSize: 14 }}
//             >
//               <MenuItem value="This month">This month</MenuItem>
//               <MenuItem value="Last month">Last month</MenuItem>
//             </Select>
//           </Box>

//           {/* Total */}
//           <Typography variant="h4" fontWeight="bold" gutterBottom>
//             ${revenueData.total / 1000}k
//           </Typography>
//           <Typography variant="body2" color="text.secondary" mb={2}>
//             Total revenue
//           </Typography>

//           {/* Progress Bar */}
//           <Box display="flex" height={15} borderRadius={5} overflow="hidden" mb={2}>
//             {revenueData.segments.map(segment => (
//                 <Tooltip
//                     key={segment.label}
//                     title={renderTooltipContent(segment)}
//                     placement="top"
//                     arrow
//                 >
//                   <Box
//                       flex={`${segment.percent}`}
//                       sx={{ bgcolor: segment.color, cursor: 'pointer' }}
//                       onMouseEnter={() => setHovered(segment.label)}
//                       onMouseLeave={() => setHovered(null)}
//                   />
//                 </Tooltip>
//             ))}
//           </Box>

//           {/* Labels */}
//           <Stack spacing={1}>
//             {revenueData.segments.map(segment => (
//                 <Box
//                     key={segment.label}
//                     display="flex"
//                     alignItems="center"
//                     gap={1}
//                 >
//                   <Box
//                       sx={{
//                         width: 12,
//                         height: 12,
//                         borderRadius: '50%',
//                         bgcolor: segment.color,
//                         border: '2px solid #fff',
//                       }}
//                   />
//                   <Typography fontSize={14} flex={1}>
//                     {segment.label}
//                   </Typography>
//                   <Typography fontSize={14}>
//                     ${segment.value / 1000}k&nbsp;
//                     <Typography component="span" color="text.secondary">
//                       ({segment.percent}%)
//                     </Typography>
//                   </Typography>
//                 </Box>
//             ))}

//             {/* Nested items under first segment */}
//             <Box pl={4} mt={1}>
//               {revenueData.segments[0].children?.map(child => (
//                   <Box
//                       key={child.label}
//                       display="flex"
//                       alignItems="center"
//                       gap={1}
//                       mb={0.5}
//                   >
//                     <Box
//                         sx={{
//                           width: 12,
//                           height: 12,
//                           borderRadius: '50%',
//                           bgcolor: child.color,
//                           border: '2px solid #fff',
//                         }}
//                     />
//                     <Typography fontSize={14} flex={1}>
//                       {child.label}
//                     </Typography>
//                     <Typography fontSize={14}>
//                       ${child.value / 1000}k&nbsp;
//                       <Typography component="span" color="text.secondary">
//                         ({child.percent}%)
//                       </Typography>
//                     </Typography>
//                   </Box>
//               ))}
//             </Box>
//           </Stack>
//         </CardContent>
//       </Card>
//   );
// };

// export default CurrentRevenueCard;
import { FC, useState } from 'react';
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  Tooltip,
} from '@mui/material';
import { Period } from '@/features/profile/types.ts';
import { revenueData } from '@/features/profile/constants.ts';

const CurrentRevenueCard: FC = () => {
  const [period, setPeriod] = useState<Period>('This month');
  const [, setHovered] = useState<string | null>(null);

  const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
    setPeriod(event.target.value as Period);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '20px',
      backgroundColor: '#fff'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <h3 style={{font:" 400 24px PT Serif, sans-serif" ,  margin: 0 }}>Current revenue</h3>
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

      {/* Total */}
      <h2 style={{fontSize:"24px" ,font:" 400 24px Open Sans, sans-serif", margin: '0 0 8px 0' }}>
        ${revenueData.total / 1000}k
      </h2>
      <p style={{ color: '#777', marginBottom: 16 }}>Total revenue</p>

      {/* Progress Bar with Tooltip */}
      <div style={{
        display: 'flex',
        height: 15,
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 16
      }}>
        {revenueData.segments.map(segment => (
          <Tooltip
            key={segment.label}
            title={`${segment.label} — $${segment.value / 1000}k (${segment.percent}%)`}
            placement="top"
            arrow
          >
            <div
              style={{
                flex: segment.percent,
                backgroundColor: segment.color,
                cursor: 'pointer'
              }}
              onMouseEnter={() => setHovered(segment.label)}
              onMouseLeave={() => setHovered(null)}
            />
          </Tooltip>
        ))}
      </div>

      {/* Labels */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {revenueData.segments.map(segment => (
          <div
            key={segment.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            <div style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: segment.color,
              border: '2px solid #fff',
              flexShrink: 0
            }} />
            <div style={{ flex: 1 }}>{segment.label}</div>
            <div>
              ${segment.value / 1000}k{' '}
              <span style={{ color: '#777' }}>({segment.percent}%)</span>
            </div>
          </div>
        ))}

        {/* Nested Items */}
        <div style={{ paddingLeft: 32, marginTop: 8 }}>
          {revenueData.segments[0].children?.map(child => (
            <div
              key={child.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 4
              }}
            >
              <div style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: child.color,
                border: '2px solid #fff',
                flexShrink: 0
              }} />
              <div style={{ flex: 1 }}>{child.label}</div>
              <div>
                ${child.value / 1000}k{' '}
                <span style={{ color: '#777' }}>({child.percent}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentRevenueCard;
