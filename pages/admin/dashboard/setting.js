import React from 'react';
import Layout from '../../../layouts/Layout';
import Setting from '../../../layouts/admin/dashboard/setting';

function setting() {
  return (
    <Layout title="Admin Site Setting" isAdmin={true}>
      <Setting />
    </Layout>
  );
}

export default setting;
