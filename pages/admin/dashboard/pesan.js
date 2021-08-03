import React from 'react';
import Layout from '../../../layouts/Layout';
import Pesan from '../../../layouts/admin/dashboard/pesan';
import withAuth from '../../../components/HOC/withAuth';

function PesanAdmin() {
  return (
    <Layout title="Admin Site Pesan" isAdmin={true}>
      <Pesan />
    </Layout>
  );
}

export default withAuth(PesanAdmin);
