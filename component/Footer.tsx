export const Footer = () => {
  return (
    <footer>
      <div className="footer-1 section-backdrop pt-0">
        <div className="overlay-clr pt-5">
          <div className="container pt-5">
            <div className="row">
              {/* Contact Information */}
              <div className="col-md-3 col-sm-6 col-12">
                {/* Logo */}
                <a href="/">
                  <img
                    src="/img/logos/logoWhite.png"
                    id="footer_logo"
                    alt="logo"
                    style={{ marginTop: "-20px", width: "70%" }}
                  />
                </a>
                <p className="my-4 text-off-white">
                  Welcome to Obaforex Global Trading ltd, your ticket to
                  financial freedom.
                </p>

                {/* Number and Email */}
                <ul className="footer-nav">
                  <li>
                    <i className="fas fa-phone mr-2"></i>
                    <a href="tel:+2349043430808">+2349043430808</a>
                  </li>
                  <li>
                    <i className="fas fa-phone mr-2"></i>
                    <a href="tel:+2349043430909">+2349043430909</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope mr-2"></i>
                    <a href="mailto:info@obaforex.com">info@obaforex.com</a>
                  </li>
                </ul>
              </div>

              {/* Extra Links */}
              <div className="col-md-3 col-sm-6 col-12">
                <h2>Extra Links</h2>
                <div className="row mt-25">
                  <div className="col-12">
                    <ul className="footer-nav">
                      <li>
                        <a
                          href="documents/Obaforex-PRIVACY-POLICY.pdf"
                          target="_blank"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="documents/Obaforex-Disclaimer.pdf"
                          target="_blank"
                        >
                          Disclaimer
                        </a>
                      </li>
                      <li>
                        <a
                          href="documents/Anti-Money-Laundering-Policy-OBAFOREX.pdf"
                          target="_blank"
                        >
                          Anti-Money Laundering
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="col-md-3 col-sm-6 col-12">
                <h2>Office Hours</h2>
                <ul className="footer-news mt-25">
                  <li>
                    <span>Calls and Email : ( MON - FRI )</span>
                    <strong>
                      <i className="fa fa-clock"></i> 8AM - 4PM
                    </strong>
                  </li>
                  <li>
                    <span>Trading Hours : ( MON - FRI )</span>
                    <strong>
                      <i className="fa fa-clock"></i> 8AM - 10PM
                    </strong>
                  </li>
                  <li>
                    <span>Online Chat : ( MON - SAT )</span>
                    <strong>
                      <i className="fa fa-clock"></i> 8AM - 6AM
                    </strong>
                  </li>
                  <li>
                    <span>Office Hours : ( MON - FRI )</span>
                    <strong>
                      <i className="fa fa-clock"></i> 8PM - 4PM
                    </strong>
                  </li>
                </ul>
              </div>

              {/* News Letter */}
              <div className="col-md-3 col-sm-6 col-12">
                <h2>Subscribe</h2>
                <form className="footer-subscribe-form mt-25">
                  <div className="d-table full-width">
                    <div className="d-table-cell">
                      <input type="text" placeholder="Your Email adress" />
                    </div>
                    <div className="d-table-cell">
                      <button type="submit">
                        <i className="fas fa-envelope"></i>
                      </button>
                    </div>
                  </div>
                </form>
                <p className="mt-10">Get latest updates and offers.</p>
              </div>
            </div>

            {/* Full Risk Disclosure */}
            <div className="footer-1-bar">
              <p className="text-off-white">
                FULL RISK DISCLOSURE: Trading contains substantial risk and is
                not for every investor. An investor could potentially lose all
                or more than the initial investment. Risk capital is money that
                can be lost without jeopardizing ones financial security or life
                style. Only risk capital should be used for trading and only
                those with sufficient risk capital should consider trading. Past
                performance is not necessarily indicative of future results.
              </p>
            </div>

            {/* Copyright and Social Icons */}
            <div className="footer-1-bar">
              <div className="row">
                {/* Copyright */}
                <div className="col-xs-12 col-lg-6 my-3">
                  <p>
                    © Copyright 2021{" "}
                    <span className="text-off-white">OBAFOREX</span> All
                    rights reserved.{" "}
                    <span style={{ color: "#999" }}>developed by</span>{" "}
                    <a href="http://looptrace.com" style={{ color: "#1652f0" }}>
                      looptrace.com
                    </a>
                  </p>
                </div>

                {/* Social Icons */}
                <div className="col-xs-12 col-lg-6 socials my-3">
                  {/* Facebook */}
                  <a
                    href="https://web.facebook.com/Obaforexglobal"
                    target="_blank"
                    className="clr-fb"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>

                  {/* Twitter */}
                  <a
                    href="https://twitter.com/Obaforex_global"
                    target="_blank"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://web.instagram.com/Obaforex_global"
                    target="_blank"
                    className="clr-ins"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/obaforex_global"
                    target="_blank"
                    title="Telegram"
                  >
                    <i className="fab fa-telegram"></i>
                  </a>

                  {/* Mail */}
                  <a href="mailto:support@obaforex.com" title="Send Mail">
                    <i className="fas fa-envelope"></i>
                  </a>

                  {/* Whatsapp */}
                  <a
                    href="https://wa.me/+2348098989862"
                    target="_blank"
                    title="Whatsapp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/obaforexglobal"
                    target="_blank"
                    title="Linkedin"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>

                  {/* Phone */}
                  <a href="tel:+2348098989862" target="_blank" title="Phone">
                    <i className="fas fa-phone"></i>
                  </a>

                  {/* Youtube */}
                  <a
                    href="https://www.youtube.com/user/Obaforex"
                    target="_blank"
                    title="Youtube"
                  >
                    <i className="fas fa-video"></i>
                  </a>

                  {/* Obaforex FM */}
                  <a
                    href="https://obaforex.airtime.pro"
                    target="_blank"
                    title="Obaforex 92.1 FM"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
