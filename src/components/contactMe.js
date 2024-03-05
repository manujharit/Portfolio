import backImg from "../../assets/backImg.svg";
import linkedIn from "../../assets/linkedIn.png";

const ContactMe = () => {
  const divStyle = {
    // background: `linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(${backImg})`,
    height: "100vh",
    width: "100%",
    padding: "7%",
  };
  const handleClick = (icon) => {
    event.preventDefault()
    switch(icon) {
      case 'LinkedIn': window.open(`www.linkedin.com/in/manuj-haritwal`,'_blank')
    }
  }
  return (
    <div id="contact">
      <div
        className="d-flex align-items-center justify-content-center"
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
          <div className="row">
            <div className="col-md-6 text-start align-items-start">
              <div
                className="card"
                style={{
                  background: `url(${linkedIn})`,
                  backgroundSize: 'cover',
                  height:"10vh",
                  width:"10vh",
                  cursor: "pointer" 
                }} onClick={handleClick('LinkedIn')}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
