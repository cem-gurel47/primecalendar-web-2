import { useState } from 'react';
import styles from './signin.module.css';
import { Button, Input, Form, message } from 'antd';
import auth from 'pages/api/auth';
import { useRouter } from 'next/router';

export default function SignInForms() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: { email: string; password: string }) => {
    setLoading(true);
    try {
      await auth.login(values.email, values.password);
      router.push('schedule');
    } catch (error) {
      //@ts-ignore
      message.error(error || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input type="email" placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      {/* 
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox className={styles.checkbox}>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.button} loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
