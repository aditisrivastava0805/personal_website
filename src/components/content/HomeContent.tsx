import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import TextBlock from '../blocks/TextBlock';
import CalloutBlock from '../blocks/CalloutBlock';
import ToggleBlock from '../blocks/ToggleBlock';

const HomeContent = () => {
  const skillsRef = useScrollAnimation();
  const exploringRef = useScrollAnimation();

  return (
    <div className="space-y-6 md:space-y-8">
      <TextBlock>
        UT Austin CS. Shipping pragmatic software across backend, AI tooling, and product engineering. 2025 Ericsson intern (DevOps + GenAI modernization).
      </TextBlock>

      <CalloutBlock icon="ℹ️">
        Open to Summer 2026 roles
      </CalloutBlock>

      <div ref={skillsRef} className="animate-on-scroll">
        <ToggleBlock title="What I'm good at">
          <TextBlock>
            Java, Python, React, Node, Docker, Kubernetes, OpenShift, PostgreSQL, CI/CD.
          </TextBlock>
        </ToggleBlock>
      </div>

      <div ref={exploringRef} className="animate-on-scroll">
        <ToggleBlock title="What I'm exploring">
          <TextBlock>
            AI-assisted code modernization, platform engineering.
          </TextBlock>
        </ToggleBlock>
      </div>
    </div>
  );
};

export default HomeContent;