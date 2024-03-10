import backImg from "../../assets/backImg.svg";
import workExData from "../content/workExData.js"

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
          {workExData.map((data) => {
            return (
              <div className="row justify-content-center">
                <div className="col-md-3 mb-2">
                  <h5
                    className="card-title"
                    style={{ fontWeight: "800", fontSize: "120%", color: '#7843e9' }}
                  >
                    {data.position}
                  </h5>
                  <p
                    className="card-text"
                    style={{ fontWeight: "700", fontSize: "100%" }}
                  >
                    {data.company}
                    <br />
                    {data.duration}
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
                          {
                            data.description.map((desc) => {
                              return <li>
                                {desc}
                              </li>
                            })
                          }
                        </ul>
                        <p>
                          {
                            data.skills.map((skill) => {
                              return <span
                                className="badge text-light me-2 mb-2"
                                style={{ backgroundColor: "#7843e9", fontSize: "100%" }}
                              >
                                {skill}
                              </span>
                            })
                          }
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkEx;
