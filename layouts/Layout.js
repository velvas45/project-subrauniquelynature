import Header from './Header';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';
import styles from './layout.module.scss';
import { Layout as LayoutAntd, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import { Menu, Dropdown } from 'antd';

const { Content } = LayoutAntd;

const Logout = ({ handlerLogout }) => (
  <Menu>
    <Menu.Item onClick={handlerLogout}>
      <a rel="noopener noreferrer">Logout</a>
    </Menu.Item>
  </Menu>
);

const Layout = ({ title, children, isNotHome = false, isAdmin = false }) => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const logoutSession = () => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      window.sessionStorage.clear();
      router.push('/admin');
    }
  };

  return (
    <>
      <Head>
        {title && <title>{title} · SUBRA UNIQELY NATURE</title>}
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      {!isAdmin ? (
        <>
          <Header />
          <main
            className={
              !isMobile
                ? isNotHome
                  ? styles.mainContentNormal
                  : styles.mainContent
                : styles.mobileContent
            }
          >
            {children}
          </main>
          <Footer />
        </>
      ) : (
        <>
          <LayoutAntd style={{ minHeight: '100vh' }}>
            <HeaderAdmin />
            <LayoutAntd>
              <LayoutAntd.Header
                style={{ background: '#fff', textAlign: 'end' }}
              >
                <Dropdown overlay={<Logout handlerLogout={logoutSession} />}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Admin <DownOutlined />
                  </a>
                </Dropdown>
              </LayoutAntd.Header>
              <Content style={{ margin: '48px 16px 0' }}>
                <div style={{ minHeight: 360, background: '#fff' }}>
                  {children}
                </div>
              </Content>
            </LayoutAntd>
          </LayoutAntd>
        </>
      )}
    </>
  );
};

export default Layout;
