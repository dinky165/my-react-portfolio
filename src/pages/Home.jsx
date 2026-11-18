
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function Home() {
  return (
    <section className="min-h-[85vh] flex items-center px-6 py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="animate-fade">

          <p className="text-gray-500 tracking-widest mb-5 font-italic">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl md:text-4xl font-italic leading-tight">
            Hi, I'm <span className="text-gray-400">Dinky</span>
          </h1>

          <h2 className="text-2xl mt-5 text-gray-300">
            Frontend Web Developer
          </h2>

          <p className="text-gray-400 leading-8 mt-6">
            I am passionate about web development.
            I love creating modern, responsive and
            user-friendly websites using React JS.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">

            <Link
              to="/projects"
              className="bg-gray-400 text-black px-7 py-3 rounded-lg font-semibold hover:bg-blue-00 hover:-translate-y-1 transition"
            >
              My Projects
            </Link>

            <Link
              to="/contact"
              className="border border-gray-400 text-gray-400 px-7 py-3 rounded-lg hover:bg-blue-400 hover:text-black transition"
            >
              Contact Me
            </Link>

          </div>

          <div className="flex gap-5 mt-10 text-sm text-gray-400">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>

        </div>

        <div className="flex justify-center">

          <div className="rounded-full border-4 border-black-50 p-2 shadow-xl shadow-yellow-400/20 hover:scale-105 transition duration-500">

            <img src="./dinky.jpeg"alt="Dinky portfolio"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;
