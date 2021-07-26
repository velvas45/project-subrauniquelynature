import React from 'react';
import Image from 'next/image';
import styles from './landingPage.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Row, Col, Divider } from 'antd';
import Slide from 'react-reveal/Slide';

// image
import ImageOne from '../../../public/images/about/image-1.svg';
import ImageTwo from '../../../public/images/about/image-2.svg';
import ImageThree from '../../../public/images/about/image-3.svg';
import ImageFour from '../../../public/images/about/image-4.svg';

function About() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div id="About" className={isMobile ? styles.sectionSm : styles.section}>
      <h3 className={styles.aboutTitle}>About Us</h3>
      <Contents isMobile={isMobile} />
    </div>
  );
}

const MobileAbout = () => <div></div>;

const Contents = ({ isMobile }) => (
  <Row gutter={[32, 0]} align="middle">
    <Col span={isMobile ? 24 : 12}>
      <Slide left>
        <div className={styles.aboutContent}>
          <h2>SUBRA UNIQELY NATURE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            aliquet nibh id iaculis pharetra. Maecenas at leo non ligula congue
            cursus. Integer rhoncus urna tellus, fermentum ultrices risus
            finibus quis. In non pretium metus, quis ornare nunc. Phasellus
            sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Phasellus aliquet nibh id iaculis pharetra. Maecenas at leo
            non ligula congue cursus. Integer rhoncus urna tellus, fermentum
            ultrices risus finibus quis. In non pretium metus, quis ornare nunc.
            Phasellus sollicitudin
          </p>

          <Divider className="mt-5" />
        </div>
      </Slide>
    </Col>
    <Col span={isMobile ? 24 : 12}>
      <Slide right>
        <div className={styles.boxImg}>
          <div className={styles.imgOne}>
            <Image src={ImageOne} />
          </div>
          <div className={styles.imgTwo}>
            <Image src={ImageTwo} />
          </div>
          <div className={styles.imgThree}>
            <Image src={ImageThree} />
          </div>
          <div className={styles.imgFour}>
            <Image src={ImageFour} />
          </div>
        </div>
      </Slide>
    </Col>
  </Row>
);

export default About;
