import React from 'react';
import Image from 'next/image';
import styles from './home.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Row, Col, Divider } from 'antd';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

// components
import LampImage from '../../../public/images/lamp.svg';
import MainImage from '../../../public/images/main.svg';

function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={isMobile ? styles.containerSm : styles.container}>
      {isMobile ? (
        <Row justify="center">
          <Col span={24}>
            <div className={styles.mainContentMobile}>
              <Zoom>
                <h1>RATTAN FURNITURE</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus aliquet nibh id iaculis pharetra. Maecenas at leo
                  non ligula congue cursus. Integer rhoncus urna tellus,
                  fermentum ultrices risus finibus quis. In non pretium metus,
                  quis ornare nunc. Phasellus sollicitudin
                </p>
                <Divider />
                <button className={styles.btnProduct}>Our Product</button>
              </Zoom>
            </div>
          </Col>
        </Row>
      ) : (
        <Row align="middle">
          <Col span={12}>
            <Slide left>
              <div className={styles.mainContent}>
                <h1>
                  RATTAN <br /> FURNITURE
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus aliquet nibh id iaculis pharetra. Maecenas at leo
                  non ligula congue cursus. Integer rhoncus urna tellus,
                  fermentum ultrices risus finibus quis. In non pretium metus,
                  quis ornare nunc. Phasellus sollicitudin
                </p>
                <Divider />
                <button className={styles.btnProduct}>Our Product</button>
              </div>
            </Slide>
          </Col>
          <Col span={12}>
            <div className={styles.imageBox}>
              <Row>
                <Col>
                  <Slide top>
                    <div>
                      <Image
                        src={LampImage}
                        alt="Picture of the Lamp"
                        width={320}
                        height={300}
                      />
                    </div>
                  </Slide>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Slide right>
                    <div>
                      <Image
                        src={MainImage}
                        alt="Picture of the Lamp"
                        width={600}
                        height={300}
                      />
                    </div>
                  </Slide>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default Home;
