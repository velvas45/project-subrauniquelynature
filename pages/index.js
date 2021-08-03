import Head from 'next/head';
import Layout from '../layouts/Layout';
import Home from '../layouts/pages/Home';

import { clientAxios } from '../utils/axios';
import { client } from '../utils/api';

export default function LandingPage({ data }) {
  return (
    <Layout title="Homepage">
      <Home dataProducts={data} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const res = await clientAxios.get(client.slickProduct);
  const data = res?.data?.data?.product;
  return {
    props: { data }, // will be passed to the page component as props
  };
}
