import React from 'react';
import Layout from '../../../layouts/Layout';
import Product from '../../../layouts/admin/dashboard/product';
import withAuth from '../../../components/HOC/withAuth'

function DashboardAdmin() {
  return (
    <Layout title="Admin Site" isAdmin={true}>
      <Product />
    </Layout>
  );
}

export default withAuth(DashboardAdmin);
