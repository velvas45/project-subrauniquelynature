import Head from 'next/head';
import Layout from '../layouts/Layout';
import Home from '../layouts/pages/Home';

export default function LandingPage() {
  return (
    <Layout title="Homepage">
      <Home />
    </Layout>
  );
}
