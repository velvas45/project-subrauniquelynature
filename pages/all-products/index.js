import React from 'react';
import Layout from '../../layouts/Layout';
import AllProduct from '../../layouts/pages/AllProducts';

function index() {
  return (
    <Layout title="All Products" isNotHome={true}>
      <AllProduct />
    </Layout>
  );
}

export default index;
