const About = () => {
  const divStyle = {
    height: "100%",
    width: "100%",
    padding: '7%'
  };
  return (
    <div id="about">
      <div
        className="d-flex align-items-center justify-content-center"
        style={divStyle}
      >
        <div className="container justify-content-center">
          <div className="text-center">
            <p
              style={{
                fontWeight: "700",
                fontSize: "5vh",
                position: "relative",
              }}
            >
              ABOUT ME
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  borderBottom: "0.5vh solid #7843e9",
                  width: "7vh",
                  borderRadius: "2vh",
                }}
              ></span>
            </p>

            <p
              style={{
                fontWeight: "300",
                fontSize: "2vh",
                margin: "0px 10vh",
              }}
            >
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <p style={{ fontWeight: "800", fontSize: "150%" }}>
                Get to know me!
              </p>
              <p
                className="text-justify"
                style={{ fontWeight: "350", fontSize: "100%" }}
              >
                I'm a Full Stack Web Developer building the Front-end and
                Back-end of Websites and Web Applications that leads to the
                success of the overall product.
                <br />
                <br />I have a strong industry background of <b>3 years</b>.
                Currently, I hold the position of
                <b> Senior Systems Engineer at Infosys</b>, where I have honed
                my expertise in JavaScript. My professional experience includes
                proficiently working with React, Spring Boot, and NodeJS
                technologies. Moreover, I am well-versed in applying SCRUM and
                Agile methodologies to ensure efficient project management and
                delivery.
                <br />
                <br />
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience then don't hesitate to <b>contact me</b>.
              </p>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4">
              <p style={{ fontWeight: "800", fontSize: "150%" }}>MY SKILLS</p>
              <div
                className="mb-3"
                style={{ fontWeight: "400", fontSize: "150%" }}
              >
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  HTML
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  CSS
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  Bootstrap
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  JavaScript
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  Java
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  ReactJS
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  Node.js
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  SpringBoot
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  MySQL
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  MongoDB
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  MS Azure
                </span>
                <span
                  className="badge text-light me-2"
                  style={{ backgroundColor: "#7843e9", fontSize: "2vh" }}
                >
                  Git
                </span>
              </div>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
