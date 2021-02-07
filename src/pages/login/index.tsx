import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import request from '@/utils/request';
import { useModel } from 'umi';
import styles from './style.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 7, span: 16 },
};

const tailLayoutCaptcha = {
  wrapperCol: { offset: 5, span: 16 },
};

const Login: React.FC = () => {
  const [captcha, setCaptcha] = useState<string>('');

  const CaptchaRequest = () => {
    request('/user/captcha').then(res => {
      if (res) {
        setCaptcha(() => res.data.picPath);
      }
    });
  };

  useEffect(() => {
    CaptchaRequest();
  }, []);

  const onFinish = (value: {
    username: string;
    password: string;
    captcha: string;
  }) => {
    request('/user/login', {
      method: 'POST',
      data: {
        ...value,
      },
    }).then(res => {});
  };

  return (
    <div style={{ margin: '0 40%' }}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="captcha"
          rules={[{ required: true, message: 'Please input your captcha!' }]}
        >
          <Input prefix={<SafetyCertificateOutlined />} placeholder="Captcha" />
        </Form.Item>
        <div style={{ textAlign: 'left' }} onClick={CaptchaRequest}>
          <img src={captcha} width="150px" alt="Captcha" />
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
