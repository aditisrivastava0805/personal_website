const ContactTab = () => {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Contact</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <a
            href="mailto:aditi@utexas.edu"
            className="text-base text-gray-600 dark:text-gray-400 leading-relaxed hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            aditi@utexas.edu
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
          <a
            href="https://linkedin.com/in/aditi-srivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-600 dark:text-gray-400 leading-relaxed hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            aditi-srivastava
          </a>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Resume</h3>
          <a
            href="/Aditi_Srivastava_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-gray-600 dark:text-gray-400 leading-relaxed hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactTab;