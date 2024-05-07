export const Top = () => {
  return (
    <>
      {/* <div id="preloader">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      <div
        className="hidden-md-down bg-secondary top-bar"
        style={{ border: "none", padding: "none" }}
      >
        <div className="bg-secondary">
          <div className="row">
            <div className="col-md-9 col-12 bg-primary">
              <ul className="top-bar-info">
                <li>
                  <i className="fas fa-clock"></i>Open Hours: Mon - Fri, 8:00AM
                  - 4:00PM
                </li>
                <li>
                  <i className="fas fa-phone"></i> Phone: +2349043430808,
                  +2349043430909
                </li>
                <li>
                  <i className="fa fa-envelope"></i>Email: info@obaforex.com
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12 bg-primary text-center">
              <ul className="social-icons hidden-sm">
                <li>
                  <a href="https://web.facebook.com/Obaforexglobal">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/Obaforex_global">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/obaforexglobal">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
