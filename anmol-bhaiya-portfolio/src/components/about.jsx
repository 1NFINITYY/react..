const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-10">
        
        {/* About Me */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Aspiring Data Analyst with internship and project experience, seeking to apply analytical and technical 
            expertise in a dynamic IT environment. Proficient in SQL, Python, Power BI, and Excel with a passion for 
            turning raw data into actionable insights. Eager to support business growth through data-driven decision-making.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 mb-4">Experience</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-900">Data Analyst Intern</h3>
            <p className="text-gray-600 font-medium">
              Cognifyz Technologies, India &middot; <span className="italic">Nov 2024 – Jan 2025</span>
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Conducted data analysis on cuisine and city trends to support strategic decision-making.</li>
              <li>Developed pricing models, improving revenue forecast accuracy by 15%.</li>
              <li>Evaluated online delivery performance, leading to a 10% improvement in service strategies.</li>
              <li>Interpreted restaurant rating data to suggest enhancements for customer satisfaction.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 border-b pb-2 mb-4">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">PGDM in Data Analytics</h3>
              <p className="text-gray-700">
                Doon Business School, Dehradun<br />
                <span className="text-sm text-gray-500">July 2023 – Present</span>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">B.Sc. in Biotechnology</h3>
              <p className="text-gray-700">
                Barkatullah Vishwavidyalaya, Bhopal<br />
                <span className="text-sm text-gray-500">May 2019 – May 2022</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
