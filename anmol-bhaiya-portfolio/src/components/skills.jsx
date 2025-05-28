import { motion } from "framer-motion";
import {
  SiPython,
  SiGoogleanalytics,
} from "react-icons/si";
import { BsGraphUp } from "react-icons/bs";
import { FaLanguage, FaUsers } from "react-icons/fa";

// Progress bar component
const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 font-medium">{skill}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-indigo-500 h-3 rounded-full transition-all duration-500"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

// Skill card with icon and animation
const AnimatedCard = ({ icon: Icon, title, children }) => (
  <motion.div
    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
    whileHover={{ scale: 1.05 }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-3xl text-indigo-600" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Skills & Languages
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedCard icon={SiPython} title="Programming & Analysis">
            <SkillBar skill="Python (Pandas, NumPy, Scikit-learn)" level={90} />
            <SkillBar skill="SQL" level={85} />
          </AnimatedCard>

          <AnimatedCard icon={BsGraphUp} title="Data Visualization & BI">
            <SkillBar skill="Power BI (Dashboarding)" level={88} />
            <SkillBar skill="Data Visualization" level={80} />
            <SkillBar skill="Excel" level={75} />
          </AnimatedCard>

          <AnimatedCard icon={SiGoogleanalytics} title="Analytics & Tools">
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Google Analytics</li>
              <li>Data Cleaning</li>
              <li>Problem Solving</li>
            </ul>
          </AnimatedCard>

          <AnimatedCard icon={FaUsers} title="Soft Skills">
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
            </ul>
          </AnimatedCard>

          <AnimatedCard icon={FaLanguage} title="Languages">
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>English</li>
              <li>Hindi</li>
              <li>French</li>
            </ul>
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default Skills;
