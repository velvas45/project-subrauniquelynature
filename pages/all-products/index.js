import React from 'react';
import Layout from '../../layouts/Layout';
import AllProduct from '../../layouts/pages/AllProducts';

import { clientAxios } from '../../utils/axios';
import { client } from '../../utils/api';

function index({ data }) {
  return (
    <Layout title="All Products" isNotHome={true}>
      <AllProduct dataProduct={data} />
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const res = await clientAxios.get(client.getProducts);
  const data = res?.data?.response;
  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 45,
  };
}

export default index;
