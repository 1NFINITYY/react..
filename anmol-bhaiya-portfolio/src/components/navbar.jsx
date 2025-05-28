import { Link } from "react-router-dom";

const Navbar = () => (
        <nav className="bg-white shadow-md p-4 flex justify-between">
          <h1 className="text-xl font-bold">ANMOL JAIN</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/about" className="hover:text-blue-500">About</Link>
            <Link to="/skills" className="hover:text-blue-500">Skills</Link>
            <Link to="/projects" className="hover:text-blue-500">Projects</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact</Link>
          </div>
        </nav>
);

export default Navbar;