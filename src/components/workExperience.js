import backImg from "../../assets/backImg.svg";

const WorkEx = () => {
  const divStyle = {
    background: `linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(${backImg})`,
    height: "100%",
    width: "100%",
    padding: '5%'
  };
  return (
    <div id="workex">
      <div
        className="d-flex align-items-center justify-content-center"
        style={divStyle}
      >
        <div className="container">
          <div className="text-center">
            <p
              style={{
                fontWeight: "700",
                fontSize: "5vh",
                position: "relative",
              }}
            >
              WORK EXPERIENCE
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
              style={{ fontWeight: "300", fontSize: "2vh", margin: "0px 2%" }}
            >
              Over the course of my three-year tenure as a Full Stack Developer,
              I've encountered a multitude of challenges in my professional
              expedition. These experiences have compelled me to go above and
              beyond, investing extra efforts. This journey has not only honed
              my skills but also reinforced my commitment to delivering
              excellence in every project.
            </p>
          </div>
          <br />
          <br />
          <div className="row justify-content-center">
            <div className="col-md-3 mb-2">
              <h5
                className="card-title"
                style={{ fontWeight: "800", fontSize: "120%", color: '#7843e9' }}
              >
                Senior Systems Engineer
              </h5>
              <p
                className="card-text"
                style={{ fontWeight: "700", fontSize: "100%" }}
              >
                Infosys Limited
                <br />
                Oct, 2022 - Present
                <br />
              </p>
            </div>
            <div className="col-md-8 mb-5">
              <div
                className="card"
                style={{
                  height: "100%",
                  boxShadow: "0 4px 8px 0 rgba(120, 67, 233, 2)",
                }}
              >
                <div className="card-body">

                  <p
                    className="card-text"
                    style={{ fontWeight: "500", fontSize: "80%" }}
                  >
                    <ul>
                      <li>
                        Developed an Azure function that updates all users' Workplace by Facebook profiles when it receives a Service Bus message.
                      </li>
                      <li>
                        Developed a web application that helps the client's team address application tickets more quickly by saving 75% of the analysis time.
                      </li>
                      <li>
                        Delivered effective solutions and enhancements to decrease multiple issues in client applications, resulting in an 80% reduction in anomalies.
                      </li>
                      <li>
                        Developed various dashboards and alerts to detect anomalies in apps in order to track the health metrics of multiple services and where necessary, implement immediate remedial action.
                      </li>
                      <li>
                        Maintained various microservices and provided post-production support for a variety of client applications.
                      </li>
                    </ul>
                    <p>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Javascript
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Node.js
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        ReactJS
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Redux
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Redis Cache
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Java
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        MySQL
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Azure (beginner)
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        MongoDB
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        SCRUM
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Service Bus
                      </span>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-2">
              <h5
                className="card-title"
                style={{ fontWeight: "800", fontSize: "120%", color: '#7843e9' }}
              >
                Systems Engineer
              </h5>
              <p
                className="card-text"
                style={{ fontWeight: "700", fontSize: "100%" }}
              >
                Infosys Limited
                <br />
                Jul, 2021 - Oct, 2022
                <br />
              </p>
            </div>
            <div className="col-md-8 mb-5">
              <div
                className="card"
                style={{
                  height: "100%",
                  boxShadow: "0 4px 8px 0 rgba(120, 67, 233, 2)",
                }}
              >
                <div className="card-body">

                  <p
                    className="card-text"
                    style={{ fontWeight: "500", fontSize: "80%" }}
                  >
                    <ul>
                      <li>
                        Investigated and developed software enhancements for the applications to accurately track failures with the relevant response codes that reduced the undefined errors by 60%.
                      </li>
                      <li>
                        Maintained multiple microservices and provided post-production support as part of a horizontal team for the client.
                      </li>
                    </ul>
                    <p>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Javascript
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Node.js
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        ReactJS
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Azure (beginner)
                      </span>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-2">
              <h5
                className="card-title"
                style={{ fontWeight: "800", fontSize: "120%", color: '#7843e9' }}
              >
                Systems Engineer Trainee
              </h5>
              <p
                className="card-text"
                style={{ fontWeight: "700", fontSize: "100%" }}
              >
                Infosys Limited
                <br />
                Oct, 2022 - Present
                <br />
              </p>
            </div>
            <div className="col-md-8 mb-5">
              <div
                className="card"
                style={{
                  height: "100%",
                  boxShadow: "0 4px 8px 0 rgba(120, 67, 233, 2)",
                }}
              >
                <div className="card-body">

                  <p
                    className="card-text"
                    style={{ fontWeight: "500", fontSize: "80%" }}
                  >
                    <ul>
                      <li>
                        Trained on Spring Boot using Java, HTML, CSS, Bootstrap, JavaScript, ReactJS with some guided projects.
                      </li>
                      <li>
                        Developed an internship project with a group of six people, and guided the group by distributing tasks and enforcing correct Agile methodology principles.
                      </li>
                    </ul>
                    <p>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Javascript
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Springboot Application
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        ReactJS
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        Java
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        MySQL
                      </span>
                      <span
                        className="badge text-light me-2 mb-2"
                        style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                      >
                        SCRUM
                      </span>
                    </p>

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkEx;
