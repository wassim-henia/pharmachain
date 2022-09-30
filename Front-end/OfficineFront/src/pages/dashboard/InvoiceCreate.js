// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import InvoiceNewEditForm from '../../sections/@dashboard/invoice/new-edit-form';

// ----------------------------------------------------------------------

export default function InvoiceCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Invoices: Create a new Order">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new order"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Orders', href: PATH_DASHBOARD.invoice.list },
            { name: 'New order' },
          ]}
        />

        <InvoiceNewEditForm />
      </Container>
    </Page>
  );
}
