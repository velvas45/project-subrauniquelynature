import React from 'react';
import Image from 'next/image';
import styles from './landingPage.module.scss';
// import { useMediaQuery } from 'react-responsive';

import { useWindowSize } from '../../../utils/libs/useWindowSize';
import { Row, Col, Divider } from 'antd';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import { useRouter } from 'next/router';

// image
import LampImage from '../../../public/images/lamp.svg';
import MainImage from '../../../public/images/main.svg';

// component
import CustomButton from '../../../components/Button';

function HomeSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  const size = useWindowSize();

  React.useEffect(() => {
    if (size < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);

  return (
    <div id="Home" className={isMobile ? styles.containerSm : styles.container}>
      {isMobile ? <MobileHome /> : <DekstopHome />}
    </div>
  );
}

const MobileHome = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/all-products');
    // alert('clicked');
  };
  return (
    <Row justify="center">
      <Col span={24}>
        <div className={styles.mainContentMobile}>
          <Zoom>
            <h1>RATTAN FURNITURE</h1>
            <p>
              SUBRA UNIQUELY NATURE (SUN) is a company engaged in furniture made
              from natural materials, especially rattan. We accept orders from
              local to international scale. We work closely with local craftsmen
              who have years of experience in furniture production. We guarantee
              the best quality for all the products we offer and also supported
              by safe and reliable shipping and payment services. This is all we
              do to provide the best service to maintain your trust as a
              customer.
            </p>
            <Divider />
            <CustomButton label={'Our Product'} onClicked={onClickHandler} />
          </Zoom>
        </div>
      </Col>
    </Row>
  );
};

const DekstopHome = () => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/all-products');
    // alert('clicked');
  };
  return (
    <Row align="middle">
      <Col span={12}>
        <Slide left>
          <div className={styles.mainContent}>
            <h1>
              RATTAN <br /> FURNITURE
            </h1>
            <p>
              SUBRA UNIQUELY NATURE (SUN) is a company engaged in furniture made
              from natural materials, especially rattan. We accept orders from
              local to international scale. We work closely with local craftsmen
              who have years of experience in furniture production. We guarantee
              the best quality for all the products we offer and also supported
              by safe and reliable shipping and payment services. This is all we
              do to provide the best service to maintain your trust as a
              customer.
            </p>
            <Divider />
            <CustomButton label={'Our Product'} onClicked={onClickHandler} />
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
  );
};

export default HomeSection;
