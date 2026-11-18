
function Project() {

  const projects = [
    {
      name: "Fashion Website",
      detail: "A modern and responsive fashion website.",
      tech: "React JS, CSS"
    },
    {
      name: "Healthcare Analysis",
      detail: "Data analysis project with graphs and charts.",
      tech: "Python, Pandas"
    },
    {
      name: "Laptop Price Prediction",
      detail: "Machine learning project to predict laptop prices.",
      tech: "Python, Machine Learning"
    },
    {
      name: "Furniture Website",
      detail: "A website displaying different furniture products.",
      tech: "React JS, Tailwind CSS"
    }
  ];

  return (
    <section className="min-h-[80vh] px-6 py-24">

      <div className="max-w-4xl mx-auto">

        <p className="text-gray-400 tracking-widest mb-4">
          MY WORK
        </p>

        <h1 className="text-4xl font-italic mb-12">
          My <span className="text-gray-400">Projects</span>
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={project.name}
              className="bg-[#151e30] rounded-xl border border-gray-800 p-8 hover:border-yellow-400 hover:-translate-y-2 transition duration-300"
            >

              <h2 className="text-gray-400 text-sm">
                PROJECT 0{index + 1}
              </h2>

              <h3 className="text-2xl font-italic mt-5">
                {project.name}
              </h3>

              <p className="text-gray-400 leading-7 mt-4">
                {project.detail}
              </p>

              <p className="mt-6 text-sm text-gray-400">
                {project.tech}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Project;
