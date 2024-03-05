const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p style={{ fontWeight: "700", fontSize: "150%" }}>
                CONTACT INFORMATION :
              </p>
              <p>Email: manuj.haritwal01@gmail.com</p>
              <p>Phone: +91 941 424 5053</p>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-2">
              <p style={{ fontWeight: "700", fontSize: "150%" }}>SOCIALS :</p>
              <table>
                <tbody>
                  <tr style={{ fontSize: "3vh" }}>
                    <td className="col-3">
                      <a href="#!">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </td>
                    <td className="col-1"></td>
                    <td className="col-3">
                      <a href="#!">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </td>
                    <td className="col-1"></td>
                    <td className="col-3">
                      <a href="#!">
                        <i className="fab fa-github"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <p className="text-center">
                © Copyright 2024. Made by <u>Manuj Haritwal</u>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;