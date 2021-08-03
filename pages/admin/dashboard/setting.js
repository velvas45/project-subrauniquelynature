import React from 'react';
import Layout from '../../../layouts/Layout';
import Setting from '../../../layouts/admin/dashboard/setting';
import withAuth from '../../../components/HOC/withAuth'

function SettingAdmin() {
  return (
    <Layout title="Admin Site Setting" isAdmin={true}>
      <Setting />
    </Layout>
  );
}

export default withAuth(SettingAdmin);
