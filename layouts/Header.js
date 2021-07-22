import React from 'react'
import styles from './layout.module.scss'
import {Row, Col} from 'antd'
import {Logo} from '../components/icons'
import { InstagramOutlined, TwitterOutlined, FacebookFilled, WhatsAppOutlined } from '@ant-design/icons';

function Header() {
    return (
        <div className={styles.header}>
            <Row justify="center" align="middle">
            <Col span={2}>
                <Logo/>
            </Col>
            <Col span={8} offset={6} className={styles.navbarMiddle}>
                <div className={styles.navbar}>
                    <span>Home</span>
                    <span>Product</span>
                    <span>About Us</span>
                    <span>Contact</span>
                </div>
            </Col>
            <Col span={4} offset={4}>
                <div className={styles.navMedsos}>
                    <span>
                        <InstagramOutlined />
                    </span>
                    <span>
                        <TwitterOutlined />
                    </span>
                    <span>
                        <FacebookFilled />
                    </span>
                    <span>
                        <WhatsAppOutlined />
                    </span>
                </div>
            </Col>
        </Row>
        </div>
    )
}

export default Header
