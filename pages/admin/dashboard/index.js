import React from 'react';
import Layout from '../../../layouts/Layout';
import Product from '../../../layouts/admin/dashboard/product';

function DashboardAdmin() {
  return (
    <Layout title="Admin Site" isAdmin={true}>
      <Product />
    </Layout>
  );
}

export default DashboardAdmin;
