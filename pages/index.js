import Head from 'next/head';
import Image from 'next/image';
import { Logo } from '../components/icons/index';
import Layout from '../layouts/Layout';
import Home from '../layouts/pages/Home';

export default function LandingPage() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
