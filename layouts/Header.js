import React, { useState } from 'react';
import styles from './layout.module.scss';
import { Row, Col } from 'antd';
import { Logo } from '../components/icons';
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookFilled,
  WhatsAppOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';

function Header() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={isMobile ? styles.headerMb : styles.header}>
      <Row
        justify={isMobile ? 'space-around' : 'center'}
        align="middle"
        className={styles.navbarContent}
      >
        <Col span={isMobile ? 12 : 2}>
          <Logo />
        </Col>
        {!isMobile && (
          <>
            <Col span={12} offset={2} className={styles.navbarMiddle}>
              <div className={styles.navbar}>
                <span>Home</span>
                <span>Product</span>
                <span>About Us</span>
                <span>Contact</span>
              </div>
            </Col>
            <Col span={6} offset={2}>
              <div className={styles.btnBox}>
                <button className={styles.btnSignIn}>Sign In</button>
                <button className={styles.btnSignUp}>Sign Up</button>
              </div>
            </Col>
          </>
        )}
        {isMobile && (
          <Col>
            <span onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? <CloseOutlined /> : <MenuOutlined />}
            </span>
          </Col>
        )}
      </Row>
      {isMobile && (
        <div
          className={
            isOpen
              ? styles.mobileNavbar
              : `${styles.mobileNavbar} ${styles.active}`
          }
        >
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>

          <button block className={styles.btnSignUp}>
            Sign Up
          </button>
          <button block className={styles.btnSignIn}>
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
