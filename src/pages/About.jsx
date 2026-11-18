
function About() {
  return (
    <section className="min-h-[80vh] px-6 py-24">

      <div className="max-w-5xl mx-auto">

        <p className="text-yellow-400 tracking-widest mb-4">
          ABOUT ME
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-10">
          Know More <span className="text-yellow-400">About Me</span>
        </h1>

        <div className="bg-[#151e30] border border-gray-800 rounded-2xl p-8 md:p-12 hover:border-yellow-400 transition">

          <h2 className="text-2xl font-semibold mb-5">
            Hello! I'm Dinky
          </h2>

          <p className="text-gray-400 leading-8">
            I am an aspiring web developer interested in
            creating attractive and responsive websites.
            I enjoy learning new technologies and improving
            my programming skills.
          </p>

          <p className="text-gray-400 leading-8 mt-5">
            I work with HTML, CSS, JavaScript and React.
            My goal is to become a professional frontend
            developer and build creative web applications.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            <div className="bg-[#0b1120] p-5 rounded-xl">
              <h3 className="text-yellow-400 font-semibold">01</h3>
              <p className="mt-2">Creative Thinking</p>
            </div>

            <div className="bg-[#0b1120] p-5 rounded-xl">
              <h3 className="text-yellow-400 font-semibold">02</h3>
              <p className="mt-2">Learning New Skills</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
