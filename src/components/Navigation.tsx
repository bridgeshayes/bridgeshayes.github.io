function Navigation() {
  return (
    <>
      <div className="top-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center z-10">
        <div className="text-xl font-bold">Garrett Hayes</div>
        <div className="space-x-4 px-4">
          <button
            className="btn"
            onClick={() => {
              const aboutDiv = document.getElementById("about");
              aboutDiv?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </button>
          <button className="btn"
          onClick={() => {
            const expDiv = document.getElementById("experience");
            expDiv?.scrollIntoView({ behavior: "smooth" });
          }}
          >
            Experience
            </button>
          <button className="btn"
          onClick={() => {
            const projectsDiv = document.getElementById("projects");
            projectsDiv?.scrollIntoView({ behavior: "smooth" });
          }}
          >Projects</button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
