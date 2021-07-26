import React from 'react';
import { Row, Col, Modal, Image } from 'antd';
import styles from './modal.module.scss';
import { useMediaQuery } from 'react-responsive';

function CustomModal({ visible, setVisible, data: { title, description } }) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <div
                className={isMobile ? styles.boxImgChildSm : styles.boxImgChild}
              >
                <span>
                  <img
                    width={isMobile ? 50 : 100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </span>
                <span>
                  <img
                    width={isMobile ? 50 : 100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </span>
                <span>
                  <img
                    width={isMobile ? 50 : 100}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </span>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <div className={styles.content}>
              <h3>{title}</h3>
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
