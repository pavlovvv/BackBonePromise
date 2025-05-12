
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
        backgroundColor: '#ffff',
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
              width: 60, 
            },
          ]}
          margin={{
            left: -18,  
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
