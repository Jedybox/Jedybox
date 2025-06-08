import { useState } from "react";
// Buttons
import HighlightButton from "./buttons/highlightbutton";
import SocialButton from "./buttons/socialbutton";
import OutlinedButton from "./buttons/outlinedbutton";

// Assets
import me from "./assets/me.jpg";
import insta from "./assets/icons/instagram.png";
import linkedin from "./assets/icons/linkedin.png";
import jetbucks from "./assets/projects/jetbucks.png";
import csmath101 from "./assets/projects/csmath101.png";
import kabaybay from "./assets/projects/kabaybay.png";

// Effects
import BgEffect from "./effects/bg";
import Weblogo from "./effects/weblogo";
import Andriodlogo from "./effects/andriodlogo";
import Mail from "./effects/mail";
import Phone from "./effects/phone";

// Widgets
import SkillWidget from "./widget/skill";
import Project from "./widget/project";
import Service from "./widget/service";

function App() {
  const projects = [
    <Project
      key={1}
      image={jetbucks}
      projectname="Jetbucks"
      category="Mobile app"
      linktoGitHub="https://github.com/Jedybox/jetbucks"
      discription={`
                Jetbucks is a flutter application designed as an e-wallet where users can
                send money with ease by simply entering the recipient's username. Users can also track their transactions history with a graph and view overall withdrawal and deposit amounts. Anoter project I made is linked to this app, which is the backend that handles the authentication and database management. The backend is built using Spring Boot and MySQL, ensuring secure and efficient data handling. This project showcases my ability to create full-stack applications with a focus on user experience and functionality.
              `}
    />,
    <Project
      key={2}
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1024px-Spring_Boot.svg.png"
      projectname="jcash"
      category="Backend"
      discription={`
                Jcash is a backend application built using Spring Boot and MySQL, designed to handle user authentication and database management for the Jetbucks mobile app. It provides a secure and efficient way to manage user data, transactions, and overall application functionality. This project demonstrates my expertise in backend development and my ability to create robust systems that support frontend applications.
              `}
      linktoGitHub="https://github.com/Jedybox/jetbucks"
    />,
    <Project
      key={3}
      image={kabaybay}
      projectname="Kabaybay"
      category="Mobile app"
      discription={`
                Kabaybay is a native Andriod application that teaches users how to write and read the baybayin script, an ancient Filipino writing system. The app provides interactive lessons to help users learn the script effectively. It is designed to promote cultural heritage and language preservation by making learning accessible and engaging for everyone.`}
      linktoGitHub="https://github.com/Jedybox/Kabaybay"
    />,
    <Project
      key={4}
      image={csmath101}
      projectname="EUCSMath101"
      category="Website"
      discription={`
                EUCSMath101 is a web application designed to assist students in learning and practicing college algebra. It features a user-friendly interface that allows students to access various math resources, including practice problems, and quizzes. This application aims to enhance a proffessor's students' understanding of algebraic concepts and improve their problem-solving skills. It is built using modern web technologies to ensure a smooth and interactive learning experience.`}
      linktoGitHub="https://github.com/Jedybox/csmath101"
    />,
    <Project
      key={5}
      image="https://upload.wikimedia.org/wikipedia/commons/e/e6/Python_and_Qt.svg"
      projectname="Ademy"
      category="Desktop app"
      discription={`
              Ademy is a desktop application designed as an MySQL wrapper that allows users to easily view the database in a graphical interface which shows the tables as nodes
              in a graph or tree structure. It is built using Python and PyQt, providing a user-friendly interface for managing and interacting with MySQL databases. The application simplifies database operations, making it accessible for users who may not be familiar with SQL commands. Ademy aims to enhance productivity by providing a visual representation of database structures and data.`}
      linktoGitHub="https://github.com/Jedybox/Ademy"
    />,
    <Project
      key={6}
      image="https://preview.redd.it/rs4nhctoyb861.jpg?width=1080&crop=smart&auto=webp&s=6abfaba2cc2c53520d685d67531e8afed507e66d"
      projectname="ENcounter"
      category="Discord bot"
      discription={`
              ENcounter is a Discord bot designed to monitize the chats in a private server by scanning through the messages and generating a report of offenses and people who commited them. It is built using Java and the JDA library, providing a robust solution for server management and moderation. The bot automates the process of monitoring conversations, ensuring that community guidelines are upheld while also providing valuable insights into user interactions. ENcounter aims to enhance the overall experience of Discord communities by promoting positive engagement and accountability.`}
    />,
  ];

  const [currentCategory, setCurrentCategory] = useState("All");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // ...other code

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_API_KEY);
    formData.append("name", name);
    formData.append("phone_number", phoneNumber);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setFormStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setPhoneNumber("");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "./assets/Ytac-Jhon Ericsson-Dalag.pdf"; // Replace with your CV URL
    link.download = "Jhon_Ericsson_Ytac_CV.pdf"; // Replace with your desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="w-full fixed top-0 bg-background z-20  p-2 flex flex-row items-center md:justify-around sm:justify-center lg:text-lg md:text-md font-lato font-bold">
        <h1 className="text-2xl md:text-3xl font-k2d bg-gradient-to-r from-primary to-[#E60026] bg-clip-text text-transparent">
          JEDY
        </h1>
        <ul className="hidden md:flex flex-row items-center list-none xl:gap-16 md:gap-8 font-bold  text-text">
          <li className="hover:cursor-pointer">Home</li>
          <li className="hover:cursor-pointer">Services</li>
          <li className="hover:cursor-pointer">About me</li>
          <li className="hover:cursor-pointer">Portfolio</li>
          <li className="hover:cursor-pointer">Contact me</li>
        </ul>
        <div className="hidden">
          <HighlightButton onClick={() => alert("Button clicked!")}>
            Hire me
          </HighlightButton>
        </div>
      </nav>
      <header className="flex flex-col md:flex-row justify-around p-6 w-full overflow-x-hidden mt-16 md:mt-0 md:my-20">
        <div className=" flex flex-col justify-center ">
          <div className="absolute z-[-1] md:top-0 md:left-0 lg:top-0 lg:left-0">
            <BgEffect />
          </div>
          <p className="font-semibold md:text-md lg:text-lg text-[#707070]">Hi, I am</p>
          <h2 className="xl:text-4xl md:text-xl font-lato text-[#959595]">
            Jhon Ericsson D. Ytac
          </h2>
          <h1 className="xl:text-8xl md:text-5xl text-5xl mt-4 mb-5 font-k2d font-black bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text text-transparent">
            SOFTWARE DEV
          </h1>
          <div className="flex flex-row gap-4 xl:my-5">
            <SocialButton
              icon={insta}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/jhon-ericsson-ytac-0b1a4b1b2/",
                  "_blank"
                )
              }
            />
            <SocialButton
              icon={linkedin}
              onClick={() =>
                window.open("https://www.instagram.com/jedyytac/", "_blank")
              }
            />
          </div>
          <div className="flex flex-row gap-4 lg:my-6 my-4">
            <div className="hidden">
              <HighlightButton onClick={() => alert("Button clicked!")}>
                Hire me
              </HighlightButton>
            </div>
            <OutlinedButton onClick={downloadCV}>
              Download CV
            </OutlinedButton>
          </div>
          <div className="flex flex-row bg-[#1c1b1b] mb-4 p-4 rounded-xl w-fit font-bold font-lato  text-xl">
            <div className="flex flex-col gap-2">
              <h3 className="text-primary lg:text-xl text-md">5+</h3>
              <p className="text-highlighttext lg:text-xl text-sm">Years of Experience</p>
            </div>
            <div className="border border-text lg:mx-6 mx-4" />
            <div className="flex flex-col gap-2 ">
              <h3 className="text-primary lg:text-xl md:text-sm">20+</h3>
              <p className="text-highlighttext lg:text-xl text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={me}
            alt="me"
            className="max-w-lg lg:w-lg md:w-70 w-64 rounded-xl shadow-lg md:my-20 my-5"
          />
        </div>
      </header>

      <section className="flex flex-col items-center justify-center p-6 md:my-10">
        <h2 className="text-highlighttext lg:text-4xl text-2xl">Services</h2>
        <p className="font-medium text-subtext my-6 lg:text-md text-sm">
          This are the services I offer. If you have a web app idea for your
          personal goals feel free to reach out{" "}
        </p>
        <div className="flex flex-row gap-10 flex-wrap justify-center text-center">
          <Service>
            <div>
              <Weblogo />
            </div>
            <h4 className="xl:text-2xl md:text-lg font-semibold text-primary">
              Web Development
            </h4>
            <p className="lg:text-md md:text-sm mt-4 font-medium text-secondarytext">
              I build robust and user-friendly Android applications tailored to your requirements. My focus is on delivering high-performance apps with intuitive interfaces and seamless functionality.
            </p>
          </Service>
          <Service >
            <div className="lg:w-fit lg:h-fit md:w-16 md:h-16 w-12 h-12">
              <Andriodlogo />
            </div>
            <h4 className="xl:text-2xl md:text-lg font-semibold text-primary">
              Andriod App Development
            </h4>
            <p className="lg:text-md md:text-sm mt-4 font-medium text-secondarytext">
              I build robust and user-friendly Android applications tailored to
              your requirements. My focus is on delivering high-performance apps
              with intuitive interfaces and seamless functionality.
            </p>
          </Service>
          <Service>
            <h3 className="lg:text-8xl text-6xl font-k2d text-primary">{"<>"}</h3>
            <h4 className="xl:text-2xl md:text-xl font-semibold text-primary">
              Front-end Development
            </h4>
            <p className="lg:text-md md:text-sm  mt-4 font-medium text-secondarytext">
              I create visually appealing and highly interactive user interfaces
              using the latest front-end technologies. My goal is to enhance
              user engagement and satisfaction through intuitive design and
              smooth navigation.
            </p>
          </Service>
          <Service>
            <h3 className="lg:text-8xl text-6xl font-k2d text-primary">{"<>"}</h3>
            <h4 className="xl:text-2xl md:text-xl font-semibold text-primary">
              Back-end Development
            </h4>
            <p className="lg:text-md md:text-sm  mt-4 font-medium text-secondarytext">
              I create visually appealing and highly interactive user interfaces
              using the latest front-end technologies. My goal is to enhance
              user engagement and satisfaction through intuitive design and
              smooth navigation.
            </p>
          </Service>
          <Service>
            <h3 className="lg:text-8xl text-6xl font-k2d text-primary">{"<>"}</h3>
            <h4 className="xl:text-2xl md:text-xl font-semibold text-primary">
              Crossplatform Development
            </h4>
            <p className="lg:text-md md:text-sm  mt-4 font-medium text-secondarytext">
              I create visually appealing and highly interactive user interfaces
              using the latest front-end technologies. My goal is to enhance
              user engagement and satisfaction through intuitive design and
              smooth navigation.
            </p>
          </Service>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center p-6 my-10">
        <h2 className="text-highlighttext lg:text-4xl text-2xl">About me</h2>
        <p className="font-medium text-subtext my-6 lg:text-md text-sm">
          A Computer Science Second year Student specialize in software
          engineering with 4 years of experience
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex items-center justify-center">
            <img
              src={me}
              alt="me"
              className="max-w-lg lg:w-lg md:w-xs h-auto w-70 rounded-xl shadow-md lg:my-20 md:my-10"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center">
            <p className="lg:text-lg md:text-md font-medium text-subtext max-w-2xl">
              I am a passionate software developer with a strong foundation in
              computer science and a keen interest in software engineering. My
              journey in the tech world has been driven by a desire to create
              innovative solutions that make a difference. With 4 years of
              experience, I have honed my skills in various programming
              languages and frameworks, enabling me to tackle complex challenges
              and deliver high-quality software products.
            </p>
            <div>
              <HighlightButton onClick={downloadCV}>
                Download CV
              </HighlightButton>
            </div>
          </div>
        </div>
        <h2 className="text-highlighttext lg:text-4xl text-2xl">Skill set</h2>
        <div className="max-w-8xl w-full grid xl:grid-cols-10 md:grid-cols-7 grid-cols-3 md:px-10 px-5 md:gap-10 gap-0 my-10">
          <SkillWidget
            label="JavaScript"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <SkillWidget
            label="TypeScript"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <SkillWidget
            label="React"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <SkillWidget
            label="Node.js"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <SkillWidget
            label="Spring Boot"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
          />
          <SkillWidget
            label="Android"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
          />
          <SkillWidget
            label="Python"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          <SkillWidget
            label="Git"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <SkillWidget
            label="Docker"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          />
          <SkillWidget
            label="Java"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />
          <SkillWidget
            label="C++"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
          />
          <SkillWidget
            label="HTML"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <SkillWidget
            label="CSS"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <SkillWidget
            label="Tailwind CSS"
            image="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
          />
          <SkillWidget
            label="Dart"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
          />
          <SkillWidget
            label="Flutter"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
          />
          <SkillWidget
            label="MySQL"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          />
          <SkillWidget
            label="MongoDB"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
          <SkillWidget
            label="SQLite"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
          />
          <SkillWidget
            label="Supabase"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
          />
          <SkillWidget
            label="Pandas"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
          />
          <SkillWidget
            label="Figma"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
          />
          <SkillWidget
            label="Postman"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
          />
          <SkillWidget
            label="VS Code"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
          />
          <SkillWidget
            label="Jswing"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center p-6 my-10">
        <h2 className="text-highlighttext lg:text-4xl text-2xl">Projects</h2>
        <div className="my-10 flex flex-row items-center justify-center gap-4">
          <button
            className={`${
              currentCategory === "All"
                ? "bg-primary text-white"
                : "bg-secondary text-text"
            } px-4 py-2 rounded-lg font-semibold`}
            onClick={() => setCurrentCategory("All")}
          >
            All
          </button>
          <button
            className={`${
              currentCategory === "Web"
                ? "bg-primary text-white"
                : "bg-secondary text-text"
            } px-4 py-2 rounded-lg font-semibold`}
            onClick={() => setCurrentCategory("Web")}
          >
            Web
          </button>
          <button
            className={`${
              currentCategory === "Mobile"
                ? "bg-primary text-white"
                : "bg-secondary text-text"
            } px-4 py-2 rounded-lg font-semibold`}
            onClick={() => setCurrentCategory("Mobile")}
          >
            Mobile
          </button>
          <button
            className={`${
              currentCategory === "Others"
                ? "bg-primary text-white"
                : "bg-secondary text-text"
            } px-4 py-2 rounded-lg font-semibold`}
            onClick={() => setCurrentCategory("Others")}
          >
            Others
          </button>
        </div>
        <div className="w-full flex flex-wrap  items-center justify-center gap-10 lg:gap-6 transition-all duration-300 ease-in-out p-6">
          {projects.map((project) => {
            if (
              currentCategory === "All" ||
              (currentCategory === "Web" &&
                project.props.category === "Website") ||
              (currentCategory === "Mobile" &&
                project.props.category === "Mobile app") ||
              (currentCategory === "Others" &&
                project.props.category !== "Website" &&
                project.props.category !== "Mobile app")
            ) {
              return project;
            }
            return null;
          })}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center p-6 my-10">
        <h2 className="text-highlighttext lg:text-4xl text-2xl">Contact me</h2>
        <p className="font-medium text-subtext my-6 lg:text-md text-sm">
          Cultivating Connections: Reach Out and Connect with Me
        </p>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="contact-form"
          className="flex flex-col items-center justify-center gap-4 w-full max-w-2xl p-6"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="max-w-xl w-full h-10 bg-secondary rounded-lg border border-text p-2 mb-4 text-text font-semibold"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            required
            className="max-w-xl w-full h-10 bg-secondary rounded-lg border border-text p-2 mb-4 text-text font-semibold"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="max-w-xl w-full h-10 bg-secondary rounded-lg border border-text p-2 mb-4 text-text font-semibold"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="max-w-xl w-full h-30 max-h-30 bg-secondary rounded-lg border border-text p-2 mb-4 text-text font-semibold"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            cols={33}
          ></textarea>
          {formStatus === "submitting" ? (
            OutlinedButton({ onClick: () => {}, children: "Submitting..." })
          ) : formStatus === "success" ? (
            <OutlinedButton onClick={() => setFormStatus("idle")}>
              Message sent successfully!
            </OutlinedButton>
          ) : formStatus === "error" ? (
            <OutlinedButton onClick={() => setFormStatus("idle")}>
              Error sending message. Please try again.
            </OutlinedButton>
          ) : (
            <OutlinedButton type="submit" onClick={() => {}}>
              Send Message
            </OutlinedButton>
          )}
        </form>
      </section>

      <footer className="w-full bg-secondary p-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-k2d bg-gradient-to-r from-primary to-[#E60026] bg-clip-text text-transparent font-bold">
          JEDY
        </h1>
        <div className="flex flex-row gap-4 my-5">
          <SocialButton
            icon={insta}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jhon-ericsson-ytac-0b1a4b1b2/",
                "_blank"
              )
            }
          />
          <SocialButton
            icon={linkedin}
            onClick={() =>
              window.open("https://www.instagram.com/jedyytac/", "_blank")
            }
          />
        </div>
        <div className="flex md:flex-row flex-col md:gap-10 gap-5 md:my-5">
          <div className="flex flex-row items-center gap-2">
            <Mail />
            <p className="text-text text-md font-semibold">
              jhonericssonytac365@gmail.com
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Phone />
            <p className="text-text text-md font-semibold">63+ 948 327 4626</p>
          </div>
          <div></div>
        </div>
        {/* <div className="flex flex-col items-center justify-center text-text font-semibold mt-4">
          <p></p>
        </div> */}
      </footer>
    </>
  );
}

export default App;
