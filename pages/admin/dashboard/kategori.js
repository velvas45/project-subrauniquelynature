import React from 'react';
import Layout from '../../../layouts/Layout';
import Kategori from '../../../layouts/admin/dashboard/kategori';

function DashboardAdmin() {
  return (
    <Layout title="Admin Site Kategori" isAdmin={true}>
      <Kategori />
    </Layout>
  );
}

export default DashboardAdmin;
