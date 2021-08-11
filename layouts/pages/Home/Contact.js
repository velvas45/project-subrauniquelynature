import React, { useRef } from 'react';
import Image from 'next/image';
import styles from './landingPage.module.scss';
// import { useMediaQuery } from 'react-responsive';

import { useWindowSize } from '../../../utils/libs/useWindowSize';
import { Row, Col, notification } from 'antd';
import Slide from 'react-reveal/Slide';

// image
import LampImage from '../../../public/images/lamp.svg';
import MainImage from '../../../public/images/main.svg';

// API
import { myAxios } from '../../../utils/axios';
import { client } from '../../../utils/api';
import useAsync from '../../../utils/libs/useAsync';

function Contact() {
  const [isMobile, setIsMobile] = React.useState(false);

  const size = useWindowSize();

  React.useEffect(() => {
    if (size < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [size]);
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputMsg = useRef(null);
  const inputCountry = useRef(null);
  const inputCompany = useRef(null);

  const [countryList] = useAsync(client.getCountry, 'GET');

  const submitHandler = async (e) => {
    e.preventDefault();
    const value = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      message: inputMsg.current.value,
      country: inputCountry.current.value,
      company: inputCompany.current.value,
    };

    try {
      const result = await myAxios.post(client.createMessage, value);
      if (result.status === 200) {
        notification.success({
          message: 'Berhasil Mengirimkan Pesan.',
          duration: 1.5,
          onClick: () => {},
        });

        inputName.current.value = '';
        inputEmail.current.value = '';
        inputMsg.current.value = '';
        inputCountry.current.value = '';
        inputCompany.current.value = '';
      } else {
        throw new Error('Gagal mengirimkan pesan');
      }
    } catch (err) {
      notification.error({
        message: err,
        duration: 1.5,
        onClick: () => {},
      });
    }
  };

  const refObj = {
    inputName,
    inputEmail,
    inputMsg,
    inputCountry,
    inputCompany,
  };

  return (
    <div id="Contact" className={isMobile ? styles.sectionSm : styles.section}>
      <Slide top>
        <h3 className={styles.contactTitle}>Contact Us</h3>
      </Slide>
      <ContactContent
        isMobile={isMobile}
        submitHandler={submitHandler}
        refAttr={refObj}
        dataCountry={countryList && countryList?.data}
      />
    </div>
  );
}

const ContactContent = ({
  isMobile,
  submitHandler,
  refAttr,
  dataCountry = [],
}) => (
  <div className="mt-5 pb-5">
    <Row justify="center" align="middle">
      <Col xs={24} sm={24} md={12}>
        <div className={styles.contactBoxImg}>
          <Slide top>
            <Image src={LampImage} width={600} height={200} />
          </Slide>
          <Slide left>
            <Image src={MainImage} width={600} height={200} />
          </Slide>
        </div>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Slide right>
          <div className={styles.contactFormContent}>
            <h4>Hi! I think we need to talk. Shall we?</h4>
            <form onSubmit={submitHandler}>
              <div className={styles.formGroup}>
                <input
                  ref={refAttr.inputName}
                  name="nama"
                  type="text"
                  id="nama"
                  placeholder="Name"
                  required
                />
                <input
                  ref={refAttr.inputEmail}
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                />
                <input
                  ref={refAttr.inputCompany}
                  name="company"
                  type="company"
                  id="company"
                  placeholder="Company"
                  required
                />
                <select
                  ref={refAttr.inputCountry}
                  name="country"
                  type="country"
                  id="country"
                  placeholder="Country"
                  required
                >
                  <option value="">Country</option>
                  {dataCountry.map((each) => (
                    <option value={each.country_name} key={each.id}>
                      {each.country_name}
                    </option>
                  ))}
                </select>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  cols="50"
                  placeholder="Message..."
                  ref={refAttr.inputMsg}
                  required
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
