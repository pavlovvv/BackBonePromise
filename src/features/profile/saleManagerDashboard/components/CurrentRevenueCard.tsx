import { FC, useState, ReactNode } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  Tooltip,
  Radio,
  Stack,
  SelectChangeEvent,
} from '@mui/material';
import { Segment, Period } from '@/features/profile/types.ts'
import {revenueData} from "@/features/profile/constants.ts";

const renderTooltipContent = (segment: Segment): ReactNode => (
    <Stack spacing={1}>
      <Box display="flex" alignItems="center">
        <Radio size="small" checked disabled />
        <Typography fontSize={14}>{segment.label}</Typography>
      </Box>
      {segment.children?.map(child => (
          <Box
              key={child.label}
              display="flex"
              justifyContent="space-between"
          >
            <Typography fontSize={14}>{child.label}</Typography>
            <Typography fontSize={14} fontWeight="bold">
              ${child.value / 1000}k ({child.percent}%)
            </Typography>
          </Box>
      ))}
    </Stack>
);

const CurrentRevenueCard: FC = () => {
  const [period, setPeriod] = useState<Period>('This month');
  const [, setHovered] = useState<string | null>(null);

  const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
    setPeriod(event.target.value as Period);
  };

  return (
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Current revenue</Typography>
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
          </Box>

          {/* Total */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            ${revenueData.total / 1000}k
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Total revenue
          </Typography>

          {/* Progress Bar */}
          <Box display="flex" height={15} borderRadius={5} overflow="hidden" mb={2}>
            {revenueData.segments.map(segment => (
                <Tooltip
                    key={segment.label}
                    title={renderTooltipContent(segment)}
                    placement="top"
                    arrow
                >
                  <Box
                      flex={`${segment.percent}`}
                      sx={{ bgcolor: segment.color, cursor: 'pointer' }}
                      onMouseEnter={() => setHovered(segment.label)}
                      onMouseLeave={() => setHovered(null)}
                  />
                </Tooltip>
            ))}
          </Box>

          {/* Labels */}
          <Stack spacing={1}>
            {revenueData.segments.map(segment => (
                <Box
                    key={segment.label}
                    display="flex"
                    alignItems="center"
                    gap={1}
                >
                  <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: segment.color,
                        border: '2px solid #fff',
                      }}
                  />
                  <Typography fontSize={14} flex={1}>
                    {segment.label}
                  </Typography>
                  <Typography fontSize={14}>
                    ${segment.value / 1000}k&nbsp;
                    <Typography component="span" color="text.secondary">
                      ({segment.percent}%)
                    </Typography>
                  </Typography>
                </Box>
            ))}

            {/* Nested items under first segment */}
            <Box pl={4} mt={1}>
              {revenueData.segments[0].children?.map(child => (
                  <Box
                      key={child.label}
                      display="flex"
                      alignItems="center"
                      gap={1}
                      mb={0.5}
                  >
                    <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          bgcolor: child.color,
                          border: '2px solid #fff',
                        }}
                    />
                    <Typography fontSize={14} flex={1}>
                      {child.label}
                    </Typography>
                    <Typography fontSize={14}>
                      ${child.value / 1000}k&nbsp;
                      <Typography component="span" color="text.secondary">
                        ({child.percent}%)
                      </Typography>
                    </Typography>
                  </Box>
              ))}
            </Box>
          </Stack>
        </CardContent>
      </Card>
  );
};

export default CurrentRevenueCard;
