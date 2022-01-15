import { GetServerSideProps } from 'next';
import Page from '@components/page';
import Schedule from '@components/schedule';
import Layout from '@components/layout';
import Header from '@components/header';
import TaskService from '../pages/api/task';
import ITask from '../models/task';

type Props = {
  dailyTasks: ITask[];
  test: string;
};

export default function SchedulePage({ dailyTasks, test }: Props) {
  const meta = {
    title: 'Schedule',
    description: 'You can take a look at your schedule from this page and update it.'
  };
  console.log(dailyTasks, test);

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Schedule" description={meta.description} />
        <Schedule allStages={[]} />
      </Layout>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const cookie = ctx.req.headers.cookie || '';
  const parsedCookie = cookie.split('jwt=')[1];
  const dailyTasks = await TaskService.getTasks('11-01-2022', 'Thu', parsedCookie);

  return {
    props: {
      dailyTasks,
      test: parsedCookie
    }
  };
};
