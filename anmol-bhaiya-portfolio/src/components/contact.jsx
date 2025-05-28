import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-lg">
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Contact</h2>

          <div className="flex items-center space-x-4 text-gray-700">
            <FaPhoneAlt className="text-indigo-600 text-xl" />
            <span className="text-lg">+91-7566442492</span>
          </div>

          <div className="flex items-center space-x-4 text-gray-700">
            <FaEnvelope className="text-indigo-600 text-xl" />
            <span className="text-lg">ajanmol22@gmail.com</span>
          </div>

          <div className="flex items-start space-x-4 text-gray-700">
            <FaMapMarkerAlt className="text-indigo-600 text-xl mt-1" />
            <span className="text-lg">
              S.R. Computer Line, Englishpura, <br /> Sehore (M.P.)
            </span>
          </div>

          <div className="flex items-center space-x-4 text-gray-700">
            <FaLinkedin className="text-indigo-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/anmoljain-dataanalytics22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-indigo-700 underline"
            >
              linkedin.com/in/anmoljain-dataanalytics22
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
