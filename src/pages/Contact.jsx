
function Contact() {

  function handleSubmit(e) {
    e.preventDefault();

    alert("Thank you for contacting me!");

    e.target.reset();
  }

  return (
    <section className="min-h-[80vh] px-6 py-24">

      <div className="max-w-4xl mx-auto">

        <p className="text-yellow-400 tracking-widest mb-4">
          GET IN TOUCH
        </p>

        <h1 className="text-5xl font-bold mb-12">
          Contact <span className="text-yellow-400">Me</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#151e30] border border-gray-800 rounded-2xl p-8 space-y-6"
        >

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-[#0b1120] border border-gray-700 outline-none focus:border-yellow-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-[#0b1120] border border-gray-700 outline-none focus:border-yellow-400"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 rounded-lg bg-[#0b1120] border border-gray-700 outline-none focus:border-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 hover:-translate-y-1 transition"
          >
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;
