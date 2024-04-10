import React,{useState,useEffect} from "react";

const chatAppImagesArray = ["1.png", "2.png", "3.png", "4.png"];
const lalPariBusImagesArray = [
  "1.jpg",
  "2.jpg",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
  "11.png",
  "12.png",
  "13.png",
];

const Projects = () => {
  const [currentImageIndexCA, setCurrentImageIndexCA] = useState(0);
  const [currentImageIndexLPB, setCurrentImageIndexLPB] = useState(0);

  useEffect(() => {
    const intervalIdCA = setInterval(() => {
      setCurrentImageIndexCA(
        (prevIndex) => (prevIndex + 1) % chatAppImagesArray.length
      );
    }, 3000);

    const intervalIdLPB = setInterval(() => {
      setCurrentImageIndexLPB(
        (prevIndex) => (prevIndex + 1) % lalPariBusImagesArray.length
      );
    }, 3000);

    return () => clearInterval(intervalIdCA, intervalIdLPB);
  }, []);

  return (
    <>
      <div id="projects">
      <hr className="border-t-2 border-gray-300 my-8 mx-auto w-[90%]" />
      <div className="py-10 px-4 md:px-0 lg:w-[100%] lg:h-[250vh] text-white">
        <h1 className="text-4xl text-center mb-8 text-white font-semibold">
          Projects
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 overflow-hidden lg:p-6">
            {" "}
            <video
              controls
              className="w-full transition-transform duration-300 transform hover:scale-105"
            >
              <source
                src={
                  "../../videos/bloggingapplication/freecompress-2024-02-19 09-36-56 (1) (1).mp4"
                }
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="lg:w-1/2 px-4 py-8">
            {/* Right side with project descriptions */}
            <h1 className="text-3xl font-semibold mb-4">
              Blogging Application
            </h1>
            <p className="text-lg mb-4">
              Features: a. Create the secured account(registration) and login
              it,user will create a post where it should
              include(post-name,category,post-description with image). b. User
              will manage own account with its post and also be able perform
              CRUD on post. c. Viewer or unauthenticated user will able to see
              all posts and only authenticated user will comment on posts. d. In
              case exception or any issue will arise on backend then getting
              proper msg and redirect to correct page.
            </p>
            <p className="text-sm mb-4">
              Backend(Spring boot): Java–17 , Spring Boot , JPA , Jackson
              Library, MySQL-8, JwtWebToken , Email.
            </p>
            <p className="text-sm mb-4">
              Frontend(ReactJS): React-js , React-Strap , React-Router-Dom ,
              React-toastify, etc.
            </p>
            <p className="text-sm mb-4">
              GitHub:{" "}
              <a
                href="https://github.com/Pranil9699/BlogApiApplication"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Pranil9699/BlogApiApplication
              </a>
            </p>
            <p className="text-sm mb-4">
              Live:{" "}
              <a
                href="https://github.com/Pranil9699/BlogApiApplication"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Pranil9699/BlogApiApplication
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 overflow-hidden lg:p-6">
            <img
              src={`../../images/chatapp/${chatAppImagesArray[currentImageIndexCA]}`}
              alt="Project Image"
              className="w-full transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 px-4 py-8">
            {/* Right side with project descriptions */}
            <h1 className="text-3xl font-semibold mb-4">Chat App</h1>
            <p className="text-lg mb-4">
              Features: a. User need to create an account and log in. b. Current
              online users are visible as online, while others are offline. c.
              Users can send messages securely as P2P (E2E). d. Account creation
              does not require a phone number registration or valid ID proof,
              but it requires a unique username.
            </p>
            <p className="text-sm mb-4">
              Backend(Express JS): Express-js, socket.io, mongo-DB, jwtwebtoken,
              cookies-parser.
            </p>
            <p className="text-sm mb-4">
              Frontend(ReactJS): React-js, React-Strap, React-Router-Dom,
              Socket.io-client, tailwind CSS, etc.
            </p>
            <p className="text-sm mb-4">
              GitHub:{" "}
              <a
                href="https://github.com/Pranil9699/Chat-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Pranil9699/Chat-App
              </a>
            </p>
            <p className="text-sm mb-4">
              liveLink:{" "}
              <a
                href={"https://chat-app-p-t.onrender.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://chat-app-p-t.onrender.com/
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 overflow-hidden lg:p-6">
            <img
              src={`../../images/lalparibus/${lalPariBusImagesArray[currentImageIndexLPB]}`}
              alt="Project Image"
              className="w-full transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="lg:w-1/2 px-4 py-8">
            {/* Right side with project descriptions */}
            <h1 className="text-3xl font-semibold mb-4">Lal-Pari-Bus</h1>
            <p className="text-lg mb-4">
              Features: a. User need to create an account and log in, incase
              password is forgotten then able to recover it using email Id. b.
              User will able to book the bus ticket easily from source to
              destination and able to do payment(razor-pay) and In case any
              wrong it will be able to update and In future to pay that booking.
              c. Admin dashboard that will able to checkout that previous
              payment and manage the ticket. d. User And Admin both will able to
              download ticket pdf in devices. e. User could not able to access
              admin login and incase it try the it populate on error page.
            </p>
            <p className="text-sm mb-4">
              Backend(Spring boot): Java–17, Spring Boot, JPA, Postgresql-15,
              JwtWebToken, Email, Spring security.
            </p>
            <p className="text-sm mb-4">
              Frontend: HTML5, CSS3, JS, Bootstrap.
            </p>
            <p className="text-sm mb-4">
              GitHub:{" "}
              <a
                href="https://github.com/Pranil9699/Project-Bus-System-Live"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Pranil9699/Project-Bus-System-Live
              </a>
            </p>
            <p className="text-sm mb-4">
              liveLink:{" "}
              <a
                href={"https://lalparibus-pranil9699.onrender.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://lalparibus-pranil9699.onrender.com/
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Projects;
