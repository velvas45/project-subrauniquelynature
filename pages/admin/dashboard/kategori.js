import React from 'react';
import Layout from '../../../layouts/Layout';
import Kategori from '../../../layouts/admin/dashboard/kategori';
import withAuth from '../../../components/HOC/withAuth'

function KategoriAdmin() {
  return (
    <Layout title="Admin Site Kategori" isAdmin={true}>
      <Kategori />
    </Layout>
  );
}

export default withAuth(KategoriAdmin);
