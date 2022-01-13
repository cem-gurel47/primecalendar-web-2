import { SkipNavContent } from '@reach/skip-nav';
import Page from '@components/page';
import LandingSection from '@components/index';

export default function Landing() {
  const meta = {
    title: 'Prime Calendar',
    description: 'Task Management made easy with Prime Calendar'
  };

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />
      <LandingSection />
    </Page>
  );
}
