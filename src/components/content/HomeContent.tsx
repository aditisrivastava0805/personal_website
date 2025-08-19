import PageHeader from '../PageHeader';
import TextBlock from '../blocks/TextBlock';
import CalloutBlock from '../blocks/CalloutBlock';
import ToggleBlock from '../blocks/ToggleBlock';

const HomeContent = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <PageHeader 
        title="Aditi Srivastava"
        subtitle="Building useful systems with clean code and clear thinking."
      />

      <TextBlock>
        UT Austin CS. Shipping pragmatic software across backend, AI tooling, and product engineering. 2025 Ericsson intern (DevOps + GenAI modernization).
      </TextBlock>

      <CalloutBlock icon="ℹ️">
        Open to Summer 2026 roles
      </CalloutBlock>

      <ToggleBlock title="What I'm good at">
        <TextBlock>
          Java, Python, React, Node, Docker, Kubernetes, OpenShift, PostgreSQL, CI/CD.
        </TextBlock>
      </ToggleBlock>

      <ToggleBlock title="What I'm exploring">
        <TextBlock>
          AI-assisted code modernization, platform engineering.
        </TextBlock>
      </ToggleBlock>
    </div>
  );
};

export default HomeContent;