import Header from './Header';
import HeaderAdmin from './HeaderAdmin';
import Footer from './Footer';
import Head from 'next/head';
import { useMediaQuery } from 'react-responsive';
import styles from './layout.module.scss';
import { Layout as LayoutAntd, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import { Menu, Dropdown } from 'antd';

const { Content } = LayoutAntd;

const Logout = () => (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

const Layout = ({ title, children, isNotHome = false, isAdmin = false }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <>
      <Head>{title && <title>{title} · SUBRA UNIQELY NATURE</title>}</Head>
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
                <Dropdown overlay={Logout}>
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
