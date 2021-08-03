import React, { useState, useEffect } from 'react';
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
import { scroller } from 'react-scroll';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { useRouter } from 'next/router';

import { client } from '../utils/api';
import useAsync from '../utils/libs/useAsync';

function Header() {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  let listener = null;
  const [isOpen, setIsOpen] = useState(false);
  const [sosmed, setSosmed] = useState(null);
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [elementId, setElementId] = useState(null);
  const [listMediaSosial, loadingMedsos, error] = useAsync(
    client.getMediaSosial,
    'GET'
  );

  useEffect(() => {
    if (listMediaSosial) {
      setSosmed(listMediaSosial.data);
    }
  }, [listMediaSosial]);

  useEffect(() => {
    listener = document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [navbarScroll]);

  useEffect(() => {
    if (elementId) {
      if (elementId === 'Home') {
        scroller.scrollTo(elementId, {
          duration: 200,
          delay: 0,
          offset: 0,
          smooth: true,
        });
      } else {
        scroller.scrollTo(elementId, {
          duration: 200,
          delay: 0,
          offset: -100,
          smooth: true,
        });
      }
    }
  }, [elementId]);

  function clickHandlerOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function scrollTo(element) {
    setElementId(element);
  }

  function scrollToMb(element) {
    setElementId(element);
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div
      className={
        isMobile
          ? !isOpen
            ? `${styles.headerMb} ${styles.bgFill}`
            : styles.headerMb
          : styles.header
      }
    >
      <Row
        justify={isMobile ? 'space-around' : 'center'}
        align="middle"
        className={
          !navbarScroll
            ? styles.navbarContent
            : `${styles.navbarContent} ${styles.colorChange}`
        }
      >
        <Col span={isMobile ? 12 : 2} className={styles.logo}>
          <Logo />
        </Col>
        {!isMobile && (
          <>
            <Col span={12} offset={2} className={styles.navbarMiddle}>
              <div className={styles.navbar}>
                <span onClick={() => scrollTo('Home')}>
                  <Link href="/">Home</Link>
                </span>
                <span onClick={() => scrollTo('Product')}>
                  <Link scroll={false} href="/">
                    Product
                  </Link>
                </span>
                <span onClick={() => scrollTo('About')}>
                  <Link scroll={false} href="/">
                    About Us
                  </Link>
                </span>
                <span onClick={() => scrollTo('Contact')}>
                  <Link scroll={false} href="/">
                    Contact
                  </Link>
                </span>
              </div>
            </Col>
            <Col span={6} offset={2}>
              <div className={styles.navMedsos}>
                <span>
                  <a target="_blank" href={sosmed && sosmed[0]?.instagram}>
                    <InstagramOutlined />
                  </a>
                </span>
                <span>
                  <a target="_blank" href={sosmed && sosmed[0]?.twitter}>
                    <TwitterOutlined />
                  </a>
                </span>
                <span>
                  <a target="_blank" href={sosmed && sosmed[0]?.facebook}>
                    <FacebookFilled />
                  </a>
                </span>
                <span>
                  {/* " */}
                  <a
                    target="_blank"
                    href={`https://api.whatsapp.com/send?phone=${
                      sosmed && sosmed[0]?.whatssup
                    }`}
                  >
                    <WhatsAppOutlined />
                  </a>
                </span>
              </div>
            </Col>
          </>
        )}
        {isMobile && (
          <Col>
            <span onClick={clickHandlerOpen}>
              {isOpen ? <CloseOutlined /> : <MenuOutlined />}
            </span>
          </Col>
        )}
      </Row>
      {isMobile && (
        <div
          className={
            !isOpen
              ? styles.mobileNavbar
              : `${styles.mobileNavbar} ${styles.active}`
          }
        >
          <ul>
            <li onClick={() => scrollToMb('Home')}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => scrollToMb('Product')}>
              <Link scroll={false} href="/">
                Product
              </Link>
            </li>
            <li onClick={() => scrollToMb('About')}>
              <Link scroll={false} href="/">
                About Us
              </Link>
            </li>
            <li onClick={() => scrollToMb('Contact')}>
              <Link scroll={false} href="/">
                Contact
              </Link>
            </li>
          </ul>

          <div className={styles.navMedsos}>
            <span>
              <InstagramOutlined />
            </span>
            <span>
              <TwitterOutlined />
            </span>
            <span>
              <FacebookFilled />
            </span>
            <span>
              <WhatsAppOutlined />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
