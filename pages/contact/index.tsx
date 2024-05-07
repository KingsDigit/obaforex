import { Banner } from "../../component/Banner";
import { Layout } from "../../component/Layout";
import { TradeViewTop } from "../../component/TradeViewTop";

const Contact = () => {
  return (
    <Layout title="Contact Us">
      {/* Banner */}
      <Banner page="Contact us" />

      {/* Trade View */}
      <div id="top-bar">
        <TradeViewTop />
      </div>

      <div className="section-block grey-bg">
        <div className="background-shape bs-right"></div>
        <div className="container">
          <div className="row">
            {/* Contact us */}
            <div className="col-md-4 col-12">
              <div className="section-heading">
                <h6>Contact Us</h6>
                <p className="semi-bold">
                  We’re Happy to Discuss Your Financial Freedom and Answer any
                  Question.
                </p>
                <p>...and hey, we are online 24/7</p>

                {/* Location */}
                <ul className="grey-list mt-15">
                  <li>
                    <i className="fa fa-map-marker-alt"></i>No.233 Building
                    Material Along Bukuru Express Way, Jos, Nigeria.
                  </li>
                </ul>
              </div>
            </div>

            {/* Message Form */}
            <div className="col-md-8 col-12">
              <div className="section-heading">
                <h6 className="semi-bold">Write us a message</h6>
              </div>
              <form className="primary-form-2 mt-15" method="post">
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <input type="text" name="name" placeholder="First Name*" />
                  </div>
                  <div className="col-sm-6 col-12">
                    <input type="text" name="name" placeholder="Last Name*" />
                  </div>
                  <div className="col-12">
                    <textarea placeholder="Your Message*"></textarea>
                  </div>
                  <div className="col-12 text-right">
                    <button className="button-md button-primary">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Boxes */}
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">
                    <h6>Help Desk</h6>
                    <p>
                      Reach Us on any of our contact information below. <br />{" "}
                      We are constantly at your service
                    </p>
                  </div>
                </div>

                {/* Call / Text */}
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div
                    className="testmonial-item-5 test-card2"
                    style={{ minHeight: "260px", background: "aliceblue" }}
                  >
                    <h5>
                      <i className="fa fa-phone contact-icon"></i>Call / Text
                    </h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        Customer Service :{" "}
                        <strong className="prop">+234 904 343 0808 </strong>
                      </p>
                      <p>
                        Account Department :{" "}
                        <strong className="prop">+234 904 343 9595</strong>
                      </p>
                      <p>
                        Training Department :{" "}
                        <strong className="prop">+234 904 343 0909</strong>
                      </p>
                      <p>
                        Signal Department :{" "}
                        <strong className="prop">+234 904 343 0808</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div
                    className="testmonial-item-5 test-card2"
                    style={{ minHeight: "260px", background: "aliceblue" }}
                  >
                    <h5>
                      <i className="fa fa-envelope-open contact-icon"></i>Email
                    </h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        Support Desk :{" "}
                        <strong className="prop">support@obaforex.com</strong>
                      </p>
                      <p>
                        Account Desk :{" "}
                        <strong className="prop">deposit@obaforex.com</strong>
                      </p>
                      <p>
                        Training Desk :{" "}
                        <strong className="prop">
                          fxtraining@obaforex.com
                        </strong>
                      </p>
                      <p>
                        Signal Desk :{" "}
                        <strong className="prop">signal@obaforex.com</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat */}
                <div className="col-xs-12 col-md-6 col-lg-4">
                  <div
                    className="testmonial-item-5 test-card2"
                    style={{ minHeight: "260px", background: "aliceblue" }}
                  >
                    <h5>
                      <i className="fab fa-whatsapp contact-icon"></i>Chat
                    </h5>
                    <div className="testmonial-item-5-text mb-3">
                      <p>
                        Messenger : <strong className="prop">Live chat</strong>
                      </p>
                      <p>
                        Telegram : <strong className="prop">Live chat</strong>
                      </p>
                      <p>
                        Whatsapp : <strong className="prop">Live chat</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.237450532857!2d8.863871717443848!3d9.830413700000026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105375a46a35b1a7%3A0xe6245d4ae13fdfc6!2sObaforex%20Global%20Trading!5e0!3m2!1sen!2sng!4v1618650461578!5m2!1sen!2sng"
          className="full-width"
          height="400"
          style={{ border: "0" }}
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
