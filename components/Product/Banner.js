import React from 'react';
import Image from 'next/image';
import styles from './product.module.scss';
import { Row, Col } from 'antd';

// Component
import Button from '../Button';

function Banner({ responsiveMobile, data: { title, imgSrc } }) {
  return (
    <div className={responsiveMobile ? styles.bannerSm : styles.banner}>
      <Row
        justify={responsiveMobile ? 'center' : 'space-between'}
        align="middle"
      >
        <Col>
          <h2>{title}</h2>
          <Button label={'See'} />
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
