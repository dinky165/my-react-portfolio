
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#020b1c] border-t border-gray-800">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h1 className="text-3xl font-italic">
              DINKY<span className="text-gray-400">.</span>
            </h1>

            <p className="text-gray-400 mt-4 leading-7">
              Creating modern websites with creativity
              and passion for web development.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              Quick Links
            </h2>

            <div className="flex flex-col gap-3 text-gray-400">
              <Link to="/home" className="hover:text-blue-500">Home</Link>
              <Link to="/about" className="hover:text-blue-500">About</Link>
              <Link to="/skills" className="hover:text-blue-500">Skills</Link>
              <Link to="/projects" className="hover:text-blue-500">Projects</Link>
              <Link to="/contact" className="hover:text-blue-500">Contact</Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">
              Contact
            </h2>

            <p className="text-gray-400">
              Let's connect and work together.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-5 text-gray-400 hover:underline"
            >
              Get In Touch →
            </Link>
          </div>

        </div>

       

      </div>

    </footer>
  );
}

export default Footer;
