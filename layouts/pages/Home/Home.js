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
              We use rattan as the main material in the manufacture of all the
              furniture that we produce. Rattan can give a natural impression
              and has advantages such as resistance to all weather, easy
              maintenance, environmentally friendly, light weight, and durable.
              We use the best rattan material that we get from all over
              Indonesia. Produced directly by hands who are experts in furniture
              making for many years.
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
              We use rattan as the main material in the manufacture of all the
              furniture that we produce. Rattan can give a natural impression
              and has advantages such as resistance to all weather, easy
              maintenance, environmentally friendly, light weight, and durable.
              We use the best rattan material that we get from all over
              Indonesia. Produced directly by hands who are experts in furniture
              making for many years.
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
