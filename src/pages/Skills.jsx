
function Skills() {

  const skills = [
    ["HTML", "90%"],
    ["CSS", "85%"],
    ["JavaScript", "75%"],
    ["React JS", "70%"],
    ["Tailwind CSS", "75%"],
    ["Git & GitHub", "65%"]
  ];

  return (
    <section className="min-h-[80vh] px-6 py-24">

      <div className="max-w-6xl mx-auto">

        <p className="text-yellow-400 tracking-widest mb-4">
          MY EXPERTISE
        </p>

        <h1 className="text-5xl font-bold mb-12">
          My <span className="text-yellow-400">Skills</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-7">

          {skills.map((skill) => (
            <div
              key={skill[0]}
              className="bg-[#151e30] border border-gray-800 p-7 rounded-xl hover:border-yellow-400 hover:-translate-y-1 transition"
            >

              <div className="flex justify-between mb-4">
                <h2 className="font-semibold">{skill[0]}</h2>
                <span className="text-yellow-400">{skill[1]}</span>
              </div>

              <div className="bg-gray-700 h-2 rounded-full">
                <div
                  className="bg-yellow-400 h-2 rounded-full"
                  style={{ width: skill[1] }}
                ></div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
