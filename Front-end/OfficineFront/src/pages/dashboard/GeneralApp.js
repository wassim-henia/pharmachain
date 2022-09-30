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

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome displayName={user?.displayName} />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Stockout"
              percent={-3.6}
              total={38}
              chartColor={theme.palette.error.dark}
              chartData={[5, 18, 12, 51, 68, 11, 39, 37, 27, 20]}
            />
          </Grid>


          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title={"UnderStock"}
              percent={44}
              total={354}
              chartColor={theme.palette.warning.main}
              chartData={[20, 41, 63, 33, 28, 35, 50, 46, 11, 26]}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary
              title="Satisfactory"
              percent={60}
              total={678}
              chartColor={theme.palette.success.main}
              chartData={[8, 9, 31, 8, 16, 37, 8, 33, 46, 31]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Not Expired" total={385} icon={'eva:checkmark-fill'} chartData={48} />
              <AppWidget title="Expire Soon" total={555} icon={'eva:alert-circle-fill'} color="warning" chartData={75} />
              <AppWidget title="Expired" total={555} icon={'eva:slash-fill'} color="error" chartData={75} />
            </Stack>
          </Grid>
        

          <Grid item xs={12} md={6} lg={8}>
            <AppCurrentDownload 
            title="Most selling"
            l= {['Valium', 'Viagra', 'Voltaren Gel', 'Vistaril']}
            c= {[theme.palette.primary.lighter,
              theme.palette.primary.light,
              theme.palette.primary.main,
              theme.palette.primary.dark,
            ]}
            chartData = {[12244, 53345, 44313, 78343]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={12}>
            <AppAreaInstalled />
          </Grid>

          <Grid item xs={12} lg={8}>
            <AppNewInvoice />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopRelated />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopInstalledCountries />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTopAuthors />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Stack spacing={3}>
              <AppWidget title="Conversion" total={38566} icon={'eva:person-fill'} chartData={48} />
              <AppWidget title="Applications" total={55566} icon={'eva:email-fill'} color="warning" chartData={75} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
