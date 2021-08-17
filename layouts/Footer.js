import React, { useState, useEffect } from 'react';
import styles from './layout.module.scss';
import { Row, Col } from 'antd';
// import { useMediaQuery } from 'react-responsive';
import { useWindowSize } from '../utils/libs/useWindowSize';
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookFilled,
  WhatsAppOutlined,
  MailFilled,
} from '@ant-design/icons';

import { client } from '../utils/api';
import useAsync from '../utils/libs/useAsync';

function Footer() {
  const [isMobile, setIsMobile] = React.useState(false);

  const size = useWindowSize();

  React.useEffect(() => {
    if (size < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);
  const [sosmed, setSosmed] = useState([]);
  const [listMediaSosial, loadingMedsos, error] = useAsync(
    client.getMediaSosial,
    'GET'
  );

  useEffect(() => {
    if (listMediaSosial) {
      setSosmed(listMediaSosial.data);
    }
  }, [listMediaSosial]);

  return (
    <div className={isMobile ? styles.footerSm : styles.footer}>
      {isMobile ? (
        <Row
          style={{ textAlign: 'center' }}
          gutter={[0, 24]}
          className={styles.partOne}
        >
          <Col span={24}>
            <div className={styles.contactUs}>
              <h3>Contact Us</h3>
              <span>
                <MailFilled
                  style={{
                    marginRight: '0.5rem',
                    marginTop: '0.25rem',
                    marginBottom: '1rem',
                  }}
                />
                <p>{sosmed && sosmed[0]?.email}</p>
              </span>
              <span>
                <WhatsAppOutlined
                  style={{
                    marginRight: '0.5rem',
                    marginTop: '0.25rem',
                    marginBottom: '1rem',
                  }}
                />
                <p>{sosmed && sosmed[0]?.whatssup}</p>
              </span>
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.sosMed}>
              <h3>Social Media</h3>
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
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.companySm}>
              <h3>Company</h3>
              <p>SUBRA UNIQELY NATURE</p>
              <p>
                Address : Jl. Raya Tengah Tani No. 94 A Rt/Rw. 001/003 Kelurahan
                Dawuan Kecamatan Tengah Tani Kab. Cirebon (45153)
              </p>
            </div>
          </Col>
        </Row>
      ) : (
        <Row justify="space-around" className={styles.partOne}>
          <Col span={8}>
            <div className={styles.contactUs}>
              <h3>Contact Us</h3>
              <span>
                <MailFilled
                  style={{
                    marginRight: '0.5rem',
                    marginTop: '0.25rem',
                    marginBottom: '1rem',
                  }}
                />
                <p>{sosmed && sosmed[0]?.email}</p>
              </span>
              <span>
                <WhatsAppOutlined
                  style={{
                    marginRight: '0.5rem',
                    marginTop: '0.25rem',
                    marginBottom: '1rem',
                  }}
                />
                <p>{sosmed && sosmed[0]?.whatssup}</p>
              </span>
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.sosMed}>
              <h3>Social Media</h3>
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
            </div>
          </Col>
          <Col span={8}>
            <div className={styles.company}>
              <h3>Company</h3>
              <p>SUBRA UNIQELY NATURE</p>
              <p>
                Address : Jl. Raya Tengah Tani No. 94 A Rt/Rw. 001/003 Kelurahan
                Dawuan Kecamatan Tengah Tani Kab. Cirebon (45153)
              </p>
            </div>
          </Col>
        </Row>
      )}

      <Row className={styles.copyright} justify="center">
        <Col>
          <p>Copyright All right reserved SUN</p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
