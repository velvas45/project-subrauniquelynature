import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

function LoginAdmin() {
  const onFinish = (values) => {
    console.log('Success:', values);
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
            label="Username"
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
            <Button type="primary" htmlType="submit">
              Masuk
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginAdmin;
