import { GetStaticProps } from 'next';

import Page from '@components/page';
import Schedule from '@components/schedule';
import Layout from '@components/layout';
import Header from '@components/header';
import TaskService from '../pages/api/task';
import ITask from '../models/task';

type Props = {
  dailyTasks: ITask[];
};

export default function SchedulePage({ dailyTasks }: Props) {
  const meta = {
    title: 'Schedule',
    description: 'You can take a look at your schedule from this page and update it.'
  };
  console.log(dailyTasks);

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Schedule" description={meta.description} />
        <Schedule allStages={[]} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const dailyTasks = await TaskService.getTasks('11-01-2022', 'Thu');

  return {
    props: {
      dailyTasks
    }
  };
};
