import { motion } from "framer-motion";
const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ amount: 0.5 }}
        className="font-outfit text-center mt-6 md:mt-10 xl:mr-20"
      >
        <div className="border border-blue-300 p-8 md:p-16 rounded-full max-w-4xl mx-auto">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            About Me
          </h3>

          <p className="mt-10 text-sm sm:text-base md:text-lg text-gray-200">
            " I am a computer and automation engineer, and the constant
            question I ask myself is: how can I turn code into a human
            experience? This is where my journey into the world of Front-End
            began. It's not enough for a website to just work; the user must
            feel that it was designed for them. I offer web design services
            focused on providing a professional user experience. I don’t just
            design an interface; I work on building a complete experience that
            reflects your project’s identity and supports its goals. "
            <br /> <br />
            Download my CV :
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-8">
            
            <a href="/ATS-CV-English.pdf" download>
              <button className="bg-blue-500 text-white rounded-2xl px-6 py-3 hover:scale-90 hover:bg-blue-400 hover:cursor-pointer transition">
                 CV →
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
