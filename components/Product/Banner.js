import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './product.module.scss';
import { Row, Col } from 'antd';

// Component
import Button from '../Button';

function Banner({
  responsiveMobile,
  data: { title, imgSrc },
  isLanding = false,
}) {
  const router = useRouter();
  return (
    <div className={responsiveMobile ? styles.bannerSm : styles.banner}>
      <Row
        justify={responsiveMobile ? 'center' : 'space-between'}
        align="middle"
      >
        <Col>
          <h2>{title}</h2>
          {isLanding && (
            <Button
              onClicked={() => router.replace('/all-products')}
              label={'See'}
            />
          )}
        </Col>
        <Col>
          <Image
            src={imgSrc}
            alt="bangku"
            width={responsiveMobile ? 200 : 400}
            height={responsiveMobile ? 100 : 250}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
