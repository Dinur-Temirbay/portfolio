import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function About() {
  return (
    <>
      <div className="flex justify-center w-full bg-red-200" id="about">
        <div className="w-1/2 py-20">
          <h1 className="text-4xl text-center">Hello World, I`m Dinur!</h1>
          <div className="border-2 mt-1 border-red-500 w-[12%] mx-auto rounded-sm "></div>
          <img
            src="me.jpg"
            alt="me"
            className="w-60 h-60 rounded-full shadow-2xl block mx-auto my-6 object-cover"
          />
          <p className="text-center">
            Hey! I`m Dinur, and I'm passionate about web development.. I know
            languages such as: HTML, CSS and JavaScript, as well as Also worked
            on small personal projects to strengthen my skills. addition, I have
            learned the basics of working with the popular framework, React.
          </p>
          <div className="flex justify-center mt-6">
            <a href="#">
              <FaInstagram size={30} className="mx-4 text-red-500" />
            </a>
            <a href="https://www.linkedin.com/in/dinur-temirbay-295662274/">
              <FaLinkedin size={30} className="mx-4 text-red-500" />
            </a>
            <a href="https://github.com/Dinur-Temirbay">
              <FaGithub size={30} className="mx-4 text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
