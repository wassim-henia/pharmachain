// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  EcommerceWelcome,
  EcommerceNewProducts,
  EcommerceYearlySales,
  EcommerceBestSalesman,
  EcommerceSaleByGender,
  EcommerceWidgetSummary,
  EcommerceSalesOverview,
  EcommerceLatestProducts,
  EcommerceCurrentBalance,
} from '../../sections/@dashboard/general/e-commerce';
import {
  AnalyticsTasks,
  AnalyticsNewsUpdate,
  AnalyticsOrderTimeline,
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsTrafficBySite,
  AnalyticsWidgetSummary,
  AnalyticsCurrentSubject,
  AnalyticsConversionRates,
} from '../../sections/@dashboard/general/analytics';

import {
  BookingDetails,
  BookingBookedRoom,
  BookingTotalIncomes,
  BookingRoomAvailable,
  BookingNewestBooking,
  BookingWidgetSummary,
  BookingCheckInWidgets,
  BookingCustomerReviews,
  BookingReservationStats,
} from '../../sections/@dashboard/general/booking';

// ----------------------------------------------------------------------

export default function GeneralEcommerce() {
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="General: E-commerce">
      <Container maxWidth={themeStretch ? false : 'xl'}>

          <Grid item xs={12} md={12}>
            <EcommerceWelcome />
          </Grid>
          <br/>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary title="Weekly Sales" total={714000} icon={'ant-design'} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary title="Drugs in Stock" total={1352831} color="info" icon={'ant-design'} />
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary
              title="Drugs Orders"
              total={1723315}
              color="warning"
              icon={'ant-design'}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Drugs Sold"
              percent={2.6}
              total={765}
              chartColor={theme.palette.primary.main}
              chartData={[22, 8, 35, 50, 82, 84, 77, 12, 87, 43]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Total Balance"
              percent={-0.1}
              total={18765}
              chartColor={theme.palette.chart.green[0]}
              chartData={[56, 47, 40, 62, 73, 30, 23, 54, 67, 68]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Sales Profit"
              percent={0.6}
              total={4876}
              chartColor={theme.palette.primary.main}
              chartData={[40, 70, 75, 70, 50, 28, 7, 64, 38, 27]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <EcommerceSaleByGender />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <EcommerceYearlySales />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <BookingRoomAvailable />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <EcommerceLatestProducts />
          </Grid>
         
        </Grid>
      </Container>
    </Page>
  );
}
