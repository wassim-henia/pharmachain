// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import {
  AppWidget,
  AppWelcome,
  AppFeatured,
  AppNewInvoice,
  AppTopAuthors,
  AppTopRelated,
  AppAreaInstalled,
  AppWidgetSummary,
  AppCurrentDownload,
  AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';
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
  BankingContacts,
  BankingWidgetSummary,
  BankingInviteFriends,
  BankingQuickTransfer,
  BankingCurrentBalance,
  BankingBalanceStatistics,
  BankingRecentTransitions,
  BankingExpensesCategories,
} from '../../sections/@dashboard/general/banking';
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
// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          



          
          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Available drugs"
              percent={18}
              total={20000000}
              chartColor={theme.palette.primary.main}
              chartData={[22, 20, 23, 28, 25, 27, 20, 17, 16, 20]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Drugs Sold"
              percent={-20}
              total={18000000}
              chartColor={theme.palette.primary.main}
              chartData={[12, 19, 20, 23, 19, 24, 23, 24, 28, 18]}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <EcommerceWidgetSummary
              title="Imported drugs"
              percent={12}
              total={8500000}
              chartColor={theme.palette.primary.main}
              chartData={[12, 9, 8, 8, 7, 10, 11, 12, 8, 8.5]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary title="avaiblable drug types" total={71400} icon={'ant-design:check'} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary title="Under stock drug types" color="warning" total={33400} icon={'ant-design:android-filled'} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <AnalyticsWidgetSummary title="Stockout drug types" color="error" total={5300} icon={'ant-design:android-filled'} />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <AnalyticsConversionRates />
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <BookingTotalIncomes />
              </Grid>

              <Grid item xs={12} md={6}>
                <BookingBookedRoom />
              </Grid>

              <Grid item xs={12} md={12}>
                <BookingCheckInWidgets />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <BookingRoomAvailable />
          </Grid>


          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Active Users"
              percent={2.6}
              total={18765}
              chartColor={theme.palette.primary.main}
              chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Installed"
              percent={0.2}
              total={4876}
              chartColor={theme.palette.chart.blue[0]}
              chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Total Downloads"
              percent={-0.1}
              total={678}
              chartColor={theme.palette.chart.red[0]}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentDownload />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} lg={8}>
            <AppNewInvoice />
          </Grid>

          

          

         

          
        </Grid>
      </Container>
    </Page>
  );
}
