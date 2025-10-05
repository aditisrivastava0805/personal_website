import PageHeader from '../PageHeader';
import HeadingBlock from '../blocks/HeadingBlock';
import TextBlock from '../blocks/TextBlock';
import CalloutBlock from '../blocks/CalloutBlock';

const ContactContent = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <PageHeader 
        title="Contact"
        subtitle="Let's connect and discuss opportunities."
      />

      <TextBlock>
        I'm always interested in discussing new opportunities, collaborating on interesting projects, or just connecting with fellow developers and engineers.
      </TextBlock>

      <CalloutBlock icon="📧">
        Open to Summer 2026 internship and full-time opportunities
      </CalloutBlock>

      <HeadingBlock level="h2">Get In Touch</HeadingBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-umber dark:text-gray-100">
            <span className="text-chamoisee">📧</span>
            Email
          </h3>
          <a 
            href="mailto:aditi@utexas.edu" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 hover:underline text-[15px]"
          >
            aditis584@utexas.edu
          </a>
          <p className="text-sm text-chamoisee dark:text-gray-400 mt-2">
            Best way to reach me for professional inquiries
          </p>
        </div>

        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-umber dark:text-gray-100">
            <span className="text-chamoisee">💼</span>
            LinkedIn
          </h3>
          <a 
            href="https://linkedin.com/in/aditi-srivastava" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 hover:underline text-[15px]"
          >
            linkedin.com/in/aditi-srivastava
          </a>
          <p className="text-sm text-chamoisee dark:text-gray-400 mt-2">
            Professional network and career updates
          </p>
        </div>

        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-umber dark:text-gray-100">
            <span className="text-chamoisee">📄</span>
            Resume
          </h3>
          <a 
            href="/Aditi_Srivastava_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 hover:underline text-[15px]"
          >
            Download Resume (PDF)
          </a>
          <p className="text-sm text-chamoisee dark:text-gray-400 mt-2">
            Detailed experience and qualifications
          </p>
        </div>

        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-6 bg-accent dark:bg-gray-900">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-umber dark:text-gray-100">
            <span className="text-chamoisee">🎓</span>
            University
          </h3>
          <p className="text-[15px] text-gray-700 dark:text-gray-300">
            University of Texas at Austin
          </p>
          <p className="text-sm text-chamoisee dark:text-gray-400 mt-2">
            Computer Science Student
          </p>
        </div>
      </div>

      <HeadingBlock level="h2">What I'm Looking For</HeadingBlock>

      <div className="space-y-4">
        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-4 bg-accent dark:bg-gray-900">
          <h4 className="font-semibold mb-2 text-umber dark:text-gray-100">Summer 2026 Internships</h4>
          <TextBlock>
            Software engineering internships focused on backend development, DevOps, or platform engineering. Particularly interested in roles involving AI/ML integration and modern cloud infrastructure.
          </TextBlock>
        </div>

        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-4 bg-accent dark:bg-gray-900">
          <h4 className="font-semibold mb-2 text-umber dark:text-gray-100">Collaboration Opportunities</h4>
          <TextBlock>
            Open source projects, hackathons, or research collaborations in areas like accessibility technology, developer tools, or systems programming.
          </TextBlock>
        </div>

        <div className="rounded-xl border border-chamoisee/30 dark:border-gray-800 p-4 bg-accent dark:bg-gray-900">
          <h4 className="font-semibold mb-2 text-umber dark:text-gray-100">Networking</h4>
          <TextBlock>
            Always happy to connect with fellow developers, especially those working in platform engineering, DevOps, or AI-assisted development tools.
          </TextBlock>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;