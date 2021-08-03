import React, { useState } from 'react';
import { Row, Col, Modal, Image } from 'antd';
import styles from './modal.module.scss';
import { useMediaQuery } from 'react-responsive';

function CustomModal({ visible, setVisible, data }) {
  const { name, photoOne, photoTwo, photoThree, description, Category } = data;
  const [mainImg, setMainImg] = useState(photoOne);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const handleMainImg = (src) => {
    setMainImg(src);
  };

  return (
    <Modal
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      width={800}
      style={{ background: ' #f5f5f3' }}
      footer={null}
    >
      <div className={styles.container}>
        <Row align="top">
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className={styles.boxImg}>
              <Image
                width={isMobile ? 200 : 300}
                src={`${process.env.baseImageUrl}/${mainImg}`}
              />
              <div
                className={isMobile ? styles.boxImgChildSm : styles.boxImgChild}
              >
                <span onClick={() => handleMainImg(photoOne)}>
                  <img
                    width={isMobile ? 50 : 100}
                    src={`${process.env.baseImageUrl}/${photoOne}`}
                  />
                </span>
                <span onClick={() => handleMainImg(photoTwo)}>
                  <img
                    width={isMobile ? 50 : 100}
                    src={`${process.env.baseImageUrl}/${photoTwo}`}
                  />
                </span>
                <span onClick={() => handleMainImg(photoThree)}>
                  <img
                    width={isMobile ? 50 : 100}
                    src={`${process.env.baseImageUrl}/${photoThree}`}
                  />
                </span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className={styles.content}>
              <h3>{name}</h3>
              <h6>Deskripsi</h6>
              <p>{description}</p>
            </div>
          </Col>
        </Row>
      </div>
    </Modal>
  );
}

export default CustomModal;
