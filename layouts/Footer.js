import React from 'react'
import styles from './layout.module.scss'
import {Row,Col, Grid} from 'antd'
import { InstagramOutlined, TwitterOutlined, FacebookFilled,WhatsAppOutlined,MailFilled } from '@ant-design/icons';

const { useBreakpoint } = Grid;

function Footer() {
    const screens = useBreakpoint();
    return (
        <div className={styles.footerSm}>
            {Object.entries(screens)
                .filter((screen) => !!screen[1])
                .map((screen) => {
                if(screen[0] === 'xs'){
                    return (
                        <Row style={{textAlign: 'center'}} gutter={[0,24]} className={styles.partOne}>
                            <Col span={24}>
                                <div className={styles.contactUs}>
                                    <h3>Contact Us</h3>
                                    <span>
                                        <MailFilled style={{marginRight:'0.5rem', marginTop:'0.25rem', marginBottom: '1rem'}}/>
                                        <p>Sun@gmail.co.id</p>
                                    </span>
                                    <span>
                                        <WhatsAppOutlined style={{marginRight:'0.5rem', marginTop:'0.25rem', marginBottom: '1rem'}}/>
                                        <p>081398728930</p>
                                    </span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.sosMed}>
                                    <h3>Social Media</h3>
                                    <span>
                                        <InstagramOutlined />
                                    </span>
                                    <span>
                                        <TwitterOutlined />
                                    </span>
                                    <span>
                                        <FacebookFilled />
                                    </span>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className={styles.companySm}>
                                    <h3>Company</h3>
                                    <p>SUBRA UNIQELY NATURE</p>
                                    <p>
                                        Address : Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus aliquet nibh id iaculis pharetra
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    );
                }else if(screen[0] === 'sm' || screen[0] === "md" || screen[0] === 'lg' || screen[0] === 'xxl'){
                    return (
                        <Row justify="space-around" className={styles.partOne}>
                            <Col span={8}>
                                <div className={styles.contactUs}>
                                    <h3>Contact Us</h3>
                                    <span>
                                        <MailFilled style={{marginRight:'0.5rem', marginTop:'0.25rem', marginBottom: '1rem'}}/>
                                        <p>Sun@gmail.co.id</p>
                                    </span>
                                    <span>
                                        <WhatsAppOutlined style={{marginRight:'0.5rem', marginTop:'0.25rem', marginBottom: '1rem'}}/>
                                        <p>081398728930</p>
                                    </span>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className={styles.sosMed}>
                                    <h3>Social Media</h3>
                                    <span>
                                        <InstagramOutlined />
                                    </span>
                                    <span>
                                        <TwitterOutlined />
                                    </span>
                                    <span>
                                        <FacebookFilled />
                                    </span>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div className={styles.company}>
                                    <h3>Company</h3>
                                    <p>SUBRA UNIQELY NATURE</p>
                                    <p>
                                        Address : Lorem ipsum dolor sit amet,consectetur adipiscing elit. Phasellus aliquet nibh id iaculis pharetra
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    )
                }
            })}
            <Row className={styles.copyright} justify="center">
                <Col>
                    <p>Copyright All right reserved SUN</p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
