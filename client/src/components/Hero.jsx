import heroImg from "../assets/heroImg.png";
function Hero() {
  return (
    <div className="mt-10 flex justify-evenly h-fit gap-y-50 rounded-3xl">
      <div className="max-w-xl p-2 rounded-4xl h-fit mt-10 ml-5 text-left">
        <h1 className="text-6xl font-bold text-white">
          Hi I'm <span className="text-fuchsia-600">John Doe</span>
        </h1>

        <h2 className="text-4xl font-semibold text-cyan-400 mt-3 text-left">
          MERN STACK DEVELOPER
        </h2>

        <p className="text-gray-400 mt-4 text-left text-2xl">
          Building responsive,full-stack web application with a focus on user
          experience.
        </p>

        <div className="flex gap-4 mt-8 justify-start ">
          <button className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-cyan-600">
            View Projects
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-400">
            Download Resume
          </button>
        </div>
      </div>

      <div className="hidden md:block h-2">
        <img src={heroImg} alt="Developer Img" className="w-fit h-96"/>
      </div>
    </div>
  );
}

export default Hero;
