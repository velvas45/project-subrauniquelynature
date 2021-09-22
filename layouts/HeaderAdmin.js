import { useState, useEffect } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { Layout, Menu } from 'antd';
import {
  PlusCircleOutlined,
  ProjectOutlined,
  SettingOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Logo } from '../components/icons';

const { Sider } = Layout;

function HeaderAdmin() {
  const router = useRouter();
  const [currentActivePage, setCurrentActivePage] = useState(['1']);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      const currPathname = url.split('/');
      if (currPathname.includes('kategori')) {
        setCurrentActivePage(['2']);
      }
      if (currPathname.includes('setting')) {
        setCurrentActivePage(['3']);
      }
      if (currPathname.includes('pesan')) {
        setCurrentActivePage(['4']);
      }
    };

    // const handleRouteChangeError = (url, { shallow }) => {
    //   console.log(url);
    // };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, [currentActivePage]);

  useEffect(() => {
    const currPath = router.pathname.split('/');
    if (currPath.includes('pesan')) {
      setCurrentActivePage(['4']);
    }
    if (currPath.includes('setting')) {
      setCurrentActivePage(['3']);
    }
    if (currPath.includes('kategori')) {
      setCurrentActivePage(['2']);
    }

    return () => {};
  }, []);

  const selectHandler = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    setCurrentActivePage(selectedKeys);
    switch (key) {
      case '1':
        router.replace('/admin/dashboard');
        break;
      case '2':
        router.replace('/admin/dashboard/kategori');
        break;
      case '3':
        router.replace('/admin/dashboard/setting');
        break;
      case '4':
        router.replace('/admin/dashboard/pesan');
        break;
      default:
        break;
    }
  };
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      collapsible
      style={{ background: '#f0ece2' }}
    >
      <div style={{ textAlign: 'center', margin: '16px' }}>
        <Logo />
      </div>
      <Menu
        style={{ background: '#f0ece2' }}
        selectedKeys={currentActivePage}
        mode="inline"
        onSelect={selectHandler}
      >
        <Menu.Item key="1" icon={<ProjectOutlined />}>
          Products
        </Menu.Item>
        <Menu.Item key="2" icon={<PlusCircleOutlined />}>
          Kategori
        </Menu.Item>
        <Menu.Item key="4" icon={<MailOutlined />}>
          Pesan
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          Setting
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default HeaderAdmin;
