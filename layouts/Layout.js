import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import styles from './layout.module.scss'

const Layout = ({ title, children, isLandingPage = true }) => (
  <>
    <Head>{title && <title>{title} · SUBRA UNIQELY NATURE</title>}</Head>
    <Header />
    <main className={isLandingPage ? styles.mainContent : styles.secondContent}>{children}</main>
    <Footer />
  </>
);

export default Layout;
