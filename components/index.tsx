import { useEffect } from 'react';
import Layout from './layout';
import ConfContainer from './conf-container';
import Hero from './hero';
import Form from './form';
import LearnMore from './learn-more';
import useAuth from '@lib/hooks/use-auth';
import { useRouter } from 'next/router';

export default function Conf() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('schedule');
    }
  }, [isAuthenticated, router]);

  return (
    <Layout>
      <ConfContainer>
        <Hero />
        <Form />
        <LearnMore />
      </ConfContainer>
    </Layout>
  );
}
