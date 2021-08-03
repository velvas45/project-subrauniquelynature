import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Button, Checkbox } from 'antd';
import { admin } from '../../utils/api';

function LoginAdmin() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const data = {
        email: values.username,
        password: values.password,
      };
      const result = await admin.login(data);
      const {
        data: { token },
      } = result;
      const { email } = result.data.data;
      if (token) {
        setIsLoading(false);
        window.sessionStorage.clear();
        window.sessionStorage.setItem('user', btoa(email));
        window.sessionStorage.setItem('token', token);
        router.push('/admin/dashboard');
      } else {
        alert(result?.message);
      }
    } catch (err) {
      setIsLoading(false);
      alert('Password atau username salah!');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="form-login-container">
      <div className="form-login">
        <h3>Selamat Datang Admin Urban</h3>
        <Form
          name="basic"
          //   layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Masuk
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginAdmin;
