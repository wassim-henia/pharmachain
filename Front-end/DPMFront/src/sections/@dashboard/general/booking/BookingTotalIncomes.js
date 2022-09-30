import merge from 'lodash/merge';
import ReactApexChart from 'react-apexcharts';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Typography, Stack } from '@mui/material';
// utils
import { fCurrency, fPercent,fNumber } from '../../../../utils/formatNumber';
// components
import Iconify from '../../../../components/Iconify';
import BaseOptionChart from '../../../../components/chart/BaseOptionChart';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  padding: theme.spacing(3),
  color: theme.palette.primary.darker,
  backgroundColor: theme.palette.primary.lighter,
}));

// ----------------------------------------------------------------------

const TOTAL = 78;
const PERCENT = 2.6;
const CHART_DATA = [{ data: [90, 101, 80, 76, 74, 54, 57, 65] }];

export default function BookingTotalIncomes() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: { sparkline: { enabled: true } },
    xaxis: { labels: { show: false } },
    yaxis: { labels: { show: false } },
    stroke: { width: 4 },
    legend: { show: false },
    grid: { show: false },
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (seriesName) => fNumber(seriesName),
        title: {
          formatter: () => '',
        },
      },
    },
    fill: { gradient: { opacityFrom: 0, opacityTo: 0 } },
  });

  return (
    <RootStyle>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
        <div>
          <Typography sx={{ mb: 2, typography: 'subtitle2' }}>Drugs reserves</Typography>
          <Typography sx={{ typography: 'h3' }}>{fNumber(TOTAL)} days</Typography>
        </div>

        <div>
          <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ mb: 0.6 }}>
            <Iconify width={20} height={20} icon={PERCENT >= 0 ? 'eva:trending-up-fill' : 'eva:trending-down-fill'} />
            <Typography variant="subtitle2" component="span" sx={{ ml: 0.5 }}>
              {PERCENT > 0 && '+'}
              {fPercent(PERCENT)}
            </Typography>
          </Stack>
          <Typography variant="body2" component="span" sx={{ opacity: 0.72 }}>
            &nbsp;than last month
          </Typography>
        </div>
      </Stack>

      <ReactApexChart type="area" series={CHART_DATA} options={chartOptions} height={132} />
    </RootStyle>
  );
}
