import LINKS from "../content/links";

const { LINKEDIN, GMAIL, GITHUB } = LINKS;

const ContactMe = () => {
  const divStyle = {
    height: "60vh",
    width: "100%",
    padding: "7%",
  };
  return (
    <div id="contact">
      <div
        className="d-flex justify-content-center"
        style={divStyle}
      >
        <div className="text-center">
          <br />
          <p
            style={{ fontWeight: "700", fontSize: "5vh", position: "relative" }}
          >
            CONTACT ME
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
              margin: "0px 10%",
            }}
          >
            Feel free to Contact me through my socials I will get back to you as
            soon as possible
          </p>
          <br />
          <br />
          <div class="container">
            <div class="row">
              <div className="col-md-2 col-xs-2" style={{ width: '20%' }}></div>
              <div class="col-md-2 col-xs-2" style={{ width: '20%' }}>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                  <i class="fab fa-linkedin me-10"></i>
                </a>
              </div>
              <div class="col-md-2 col-xs-2" style={{ width: '20%' }}>
                <a href={GMAIL} target="_blank" rel="noopener noreferrer" class="btn btn-danger">
                  <i class="fas fa-envelope me-10"></i>
                </a>
              </div>
              <div class="col-md-2 col-xs-2" style={{ width: '20%' }}>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer" class="btn btn-dark">
                  <i class="fab fa-github me-10"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;