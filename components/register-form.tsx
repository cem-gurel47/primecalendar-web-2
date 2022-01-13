import { useState } from 'react';
import styles from './signin.module.css';
import { Form, Button, Input, message } from 'antd';
import auth from 'pages/api/auth';

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    try {
      await auth.register(values.first_name, values.last_name, values.email, values.password);
    } catch (error) {
      //@ts-ignore
      message.error(error || 'Something went wrong');
    }
    setLoading(false);
  };

  const onFinishFailed = () => {};
  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="first_name"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder="First Name" />
      </Form.Item>

      <Form.Item
        name="last_name"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input type="email" placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      {/* <Form.Item name="remember" valuePropName="checked">
        <Checkbox className={styles.checkbox}>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.button} loading={loading}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
