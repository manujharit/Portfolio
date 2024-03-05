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
            <div className="col-md-4 mb-4">
              <div
                className="card"
                style={{
                  height: "100%",
                  boxShadow: "0 4px 8px 0 rgba(120, 67, 233, 2)",
                }}
              >
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontWeight: "800", fontSize: "125%" , color: '#7843e9'}}
                  >
                    Senior Systems Engineer
                  </h5>
                  <p
                    className="card-text"
                    style={{ fontWeight: "700", fontSize: "100%" }}
                  >
                    Infosys Limited
                  </p>
                  <p
                    className="card-text"
                    style={{ fontWeight: "500", fontSize: "80%" }}
                  >
                    Oct, 2022 - Present
                  </p>
                  <p
                    className="card-text"
                    style={{ fontWeight: "500", fontSize: "80%" }}
                  >
                    In my role, I orchestrated the development of an Azure
                    function, seamlessly updating Workplace by Facebook profiles
                    upon receiving Service Bus messages. Simultaneously, I
                    crafted a highly efficient web application, streamlining
                    ticket analysis for the client's team, resulting in a 75%
                    time savings. Through the delivery of effective solutions
                    and enhancements, I achieved an impressive 80% reduction in
                    anomalies across client applications. To ensure continuous
                    monitoring and rapid response, I implemented various
                    dashboards and alerts, contributing to the tracking of
                    health metrics and immediate remedial actions as needed.
                    Additionally, I provided indispensable post-production
                    support by maintaining diverse microservices vital for the
                    optimal functioning of client applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="card"
                style={{
                  height: "100%",
                  boxShadow: "0 4px 8px 0 rgba(120, 67, 233, 2)",
                }}
              >
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontWeight: "800", fontSize: "125%", color: '#7843e9' }}
                  >
                    Systems Engineer
                  </h5>
                  <p
                    className="card-text"
                    style={{ fontWeight: "700", fontSize: "100%" }}
                  >
                    Infosys Limited
                  </p>
                  <p
                    className="card-text"
                    style={{ fontWeight: "500", fontSize: "80%" }}
                  >
                    July, 2021 - Sep, 2022
                  </p>
                  <p
                    className="card-text"
                    style={{ fontWeight: "500", fontSize: "80%" }}
                  >
                    As a key contributor within a collaborative horizontal team,
                    I took charge of maintaining and supporting multiple
                    microservices post-production for our client. My
                    responsibilities extended to developing software
                    enhancements geared towards precision in failure tracking,
                    where the incorporation of relevant response codes led to a
                    significant 80% reduction in undefined errors.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div
                className="card"
                style={{
                  height: "100%",
                  boxShadow: "0 4px 8px 0 rgba(120, 67, 233, 2)",
                }}
              >
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{ fontWeight: "800", fontSize: "125%", color: '#7843e9' }}
                  >
                    Systems Engineer Trainee
                  </h5>
                  <p
                    className="card-text"
                    style={{ fontWeight: "700", fontSize: "100%" }}
                  >
                    Infosys Limited
                  </p>
                  <p
                    className="card-text"
                    style={{ fontWeight: "500", fontSize: "80%" }}
                  >
                    Feb, 2021 - May, 2021
                  </p>
                  <p
                    className="card-text"
                    style={{ fontWeight: "500", fontSize: "80%" }}
                  >
                    Attained advanced proficiency in Spring Boot, Java, HTML,
                    CSS, Bootstrap, JavaScript, and ReactJS through structured
                    training and hands-on projects. Led a dynamic six-member
                    team in the development of a successful internship project,
                    skillfully distributing tasks and enforcing Agile
                    methodology principles for efficient collaboration.
                    Demonstrated expertise spans Java, MySQL, Spring Boot
                    Application, JavaScript, and ReactJS, reflecting a versatile
                    skill set and leadership acumen in web development and
                    project management.
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
