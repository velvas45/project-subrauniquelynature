import React from 'react';
import Image from 'next/image';
import styles from './landingPage.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Row, Col, Divider } from 'antd';
import Slide from 'react-reveal/Slide';

// image
import LampImage from '../../../public/images/lamp.svg';
import MainImage from '../../../public/images/main.svg';

function Contact() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div id="Contact" className={isMobile ? styles.sectionSm : styles.section}>
      <Slide top>
        <h3 className={styles.contactTitle}>Contact Us</h3>
      </Slide>
      <ContactContent isMobile={isMobile} />
    </div>
  );
}

const ContactContent = ({ isMobile }) => (
  <div className="mt-5 pb-5">
    <Row justify="center" align="middle">
      <Col xs={24} sm={24} md={12}>
        <div className={styles.contactBoxImg}>
          <Slide top>
            <Image src={LampImage} width={300} height={200} />
          </Slide>
          <Slide left>
            <Image src={MainImage} width={300} height={200} />
          </Slide>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Slide right>
          <div className={styles.contactFormContent}>
            <h4>Hi! I think we need to talk. Shall we?</h4>
            <form>
              <div className={styles.formGroup}>
                <input name="nama" type="text" id="nama" placeholder="Name" />
                <input
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                />
                <input
                  name="message"
                  type="text"
                  id="message"
                  placeholder="Message"
                />

                <button className={styles.submitBtn}>Submit</button>
              </div>
            </form>
          </div>
        </Slide>
      </Col>
    </Row>
  </div>
);

export default Contact;
