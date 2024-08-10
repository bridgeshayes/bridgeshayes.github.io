import Welcome from "./components/Welcome";
import Navigation from "./components/Navigation";
import carbon from "./assets/carbon.png";
import Experience from "./components/Experience";
import "./App.css";

function App() {
  const scrollToAbout = () => {
    const aboutDiv = document.getElementById("about");
    aboutDiv?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    {/* WELCOME */}
      <div>
        <Navigation />
        <div className="flex w-screen justify-items-center">
          <div
            className="flex flex-col w-2/5 justify-center items-center"
            style={{ backgroundColor: "#e5e7eb" }}
          >
            <img src={carbon}></img>
            <button onClick={scrollToAbout}>
              <a href="#">
                <span>Learn More</span>
              </a>
            </button>
          </div>
          <div className="w-3/5">
            <Welcome />
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div
        id="about"
        className="bg-black h-screen flex flex-col  items-center p-6"
      >
        <h1 className="text-white text-7xl font-bold mb-8 mt-20">About Me</h1>
        <div className="text-white w-2/3 space-y-6">
          <p className="text-lg">
            My name is Garrett Hayes. I am currently a Senior Computer Science
            Major at Tennessee Technological University. I have a passion for
            Software Development and a strong desire to learn everything there
            is to know about the field. Over the past few years, I have
            developed a solid foundation in various programming languages and
            technologies, and I am always eager to expand my knowledge and
            skills.
          </p>
          <p className="text-lg">
            In addition to my academic pursuits, I have gained practical
            experience through internships and personal projects. These
            opportunities have allowed me to apply what I've learned in
            real-world scenarios, further fueling my enthusiasm for software
            development.
          </p>
          <p className="text-lg">
            Outside of my studies, I enjoy participating in coding competitions
            and hackathons, which challenge me to think creatively and work
            collaboratively with others. I am also an active member and former
            Vice President of the university's Association of Computing
            Machinery, where I engage with fellow students and industry
            professionals to stay updated on the latest trends and advancements
            in technology.
          </p>
          <p className="text-lg">
            As I near the completion of my degree, I am excited to take the next
            step in my career and contribute to innovative projects that make a
            meaningful impact. I am confident that my passion for learning,
            combined with my technical expertise and hands-on experience, will
            enable me to excel in the ever-evolving field of software
            development.
          </p>
        </div>
      </div>

      {/* EXPERIENCE */}
      <div
        id="experience"
        className="h-screen flex flex-col p-6"
        style={{ backgroundColor: "#e5e7eb" }}
      >
        <h1 className="text-7xl font-bold text-center mt-20">Experience</h1>
        <div className="flex flex-wrap justify-center">
          <Experience />
        </div>
      </div>

      <div id="projects" className="bg-white h-screen flex flex-col p-6">
        <h1 className="text-7xl font-bold text-center mt-20">Projects</h1>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-200 m-6 p-6 rounded-xl w-1/4">
            <h2 className="text-4xl font-bold">Project 1</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, ligula sit amet tincidunt aliquam, nunc odio.
            </p>
          </div>
          <div className="bg-gray-200 m-6 p-6 rounded-xl w-1/4">
            <h2 className="text-4xl font-bold">Project 2</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, ligula sit amet tincidunt aliquam, nunc odio.
            </p>
          </div>
          <div className="bg-gray-200 m-6 p-6 rounded-xl w-1/4">
            <h2 className="text-4xl font-bold">Project 3</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              pulvinar, ligula sit amet tincidunt aliquam, nunc odio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
