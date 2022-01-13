import Page from '@components/page';
import SignInForm from '@components/login-form';
import RegisterForm from '@components/register-form';
import Layout from '@components/layout';
import Header from '@components/header';
import styles from '../components/signin.module.css';
import { Tabs, Row, Col, Divider } from 'antd';

const { TabPane } = Tabs;
const meta = {
  title: 'Sign In - Prime Calendar',
  description: 'You can login to your existing account or create a new one from this page.'
};

export default function Signin() {
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Sign In" description={meta.description} />
        <Row className={styles['bg-container']}>
          <div className={styles['tabs-container']}>
            <Tabs defaultActiveKey="1" className={styles.tabs}>
              <TabPane tab="Login" key="1">
                <Col className={styles.form}>
                  <SignInForm />
                </Col>
              </TabPane>
              <TabPane tab="Register" key="2">
                <Col className={styles.form}>
                  <RegisterForm />
                </Col>
              </TabPane>
            </Tabs>
          </div>
          <div className={styles['form-container']}>
            <Row className={styles.form} justify="space-between">
              <Col span={11}>
                <h2>Login</h2>
                <SignInForm />
              </Col>
              <Divider type="vertical" className={styles.divider} />
              <Col span={11}>
                <h2>Register</h2>
                <RegisterForm />
              </Col>
            </Row>
          </div>
        </Row>
      </Layout>
    </Page>
  );
}
