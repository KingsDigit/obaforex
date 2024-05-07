import { Layout } from "../component/Layout";
import { Partners } from "../component/Partners";
import { Slider } from "../component/Slider";
import { Chill } from "../component/Chill";
import chooseUs from "../data/chooseUs.json";
import ourStrength from "../data/ourStrength.json";
import { TradeViewTop } from "../component/TradeViewTop";
import { Testimonials } from "../component/Testimonials";

const Home = () => {
  return (
    <>
      <Layout title="Home">
        {/* Home Slider */}
        <Slider />

        {/* Trade View */}
        <div id="top-bar">
          <TradeViewTop />
        </div>

        {/* Welcome to Obaforex */}
        <div className="section-block-bg partners">
          <div className="container">
            {/* Title and Desc. */}
            <div className="section-heading text-center">
              <h3 className="semi-bold font-size-35">Welcome to Obaforex</h3>
              <div className="section-heading-line line-thin"></div>
              <p>
                We are Obaforex.
                <br />
                The leading global Trading Company.
              </p>
            </div>

            <div className="row mt-30">
              {ourStrength.map((rec, idx) => (
                <div key={idx} className="col-md-4 col-sm-12 col-12">
                  <div className="service-block">
                    <img src={rec?.img} alt="img" />
                    <div
                      className="service-block-content"
                      style={{ background: rec?.bg }}
                    >
                      <h4>{rec?.title}</h4>
                      <p>{rec?.desc}</p>
                      <a href="#" className="service-block-content-button">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* We are Obaforex. Statement from the CEO, the king himself */}
        <div className="section-block grey-bg background-shape-3">
          <div className="container">
            <div className="row">
              {/* Statement */}
              <div className="col-md-5 col-12">
                <div className="section-heading">
                  <small className="uppercase">Who we are</small>
                  <h4 className="semi-bold">We're Obaforex</h4>
                </div>
                <div className="text-content mt-15 text-justify">
                  <p>
                    We are a global foreign currency and investment company that
                    works with you to address your most critical business
                    priorities. To obtain higher performance, our team first
                    identifies the critical obstacles toward progress and then
                    develop a coherent approach to overcoming them. We help you
                    achieve your financial freedom and goals.
                  </p>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <ul className="primary-list mt-20">
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">
                          We help manage your forex account
                        </div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">
                          We give you accurate signals
                        </div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">We train on Forex</div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <ul className="primary-list mt-20">
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">We provide partnership</div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">
                          We trade, you invest and earn
                        </div>
                      </li>
                      <li>
                        <div className="icon-sm">
                          <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="icon-text">
                          We support you all the way
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <a href="/about" className="button-md button-primary mt-30">
                  Read More
                </a>
              </div>

              {/* CEO image */}
              <div className="col-md-6 col-12 offset-md-1">
                <img
                  src="img/content/home-images/ceo.png"
                  className="position-relative extra-rounded-border shadow-primary z-index-9 mt-30-xs"
                  alt="img"
                />
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      marginTop: "40px",
                      display: "inline-bloack",
                    }}
                  >
                    <img
                      src="img/signature.png"
                      alt=""
                      style={{
                        display: "inline-block",
                        marginTop: "-40px",
                      }}
                    />
                    <div
                      style={{
                        display: "inline-block",
                        marginLeft: "20px",
                      }}
                    >
                      <h3>M.B. Samuel</h3>
                      <p>Co-founder and CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose us */}
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Title and Desc. */}
                <div className="section-heading text-center my-5">
                  <h3 className="semi-bold font-size-35">Why Choose Us?</h3>
                  <div className="section-heading-line line-thin"></div>
                  <p>
                    We are experts in creating a value for you and your business
                  </p>
                </div>

                <div className="row">
                  {chooseUs.map((rec, idx) => (
                    <div key={idx} className="col-xs-12 col-md-6 mt-2">
                      <div
                        className="contact-icon-box callback-block p-5"
                        style={{ background: rec?.bg }}
                      >
                        <div className="testmonial-box-icon numb">
                          {idx + 1}
                        </div>
                        <div className="testmonial-box-content">
                          <h3>{rec?.title}</h3>
                          <p>{rec?.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More about Us : Our Mission, Vision and Strategies */}
        <div
          className="section-block bg-dot-right grey-bg jarallax"
          data-jarallax
          data-speed="0.9"
        >
          <div className="container">
            <div className="row">
              {/* Video Section */}
              <div className="col-md-6 col-sm-12 col-12">
                <div className="video-video-box full-width">
                  <img
                    src="img/video-img.png"
                    alt="img"
                    className="shadow-primary"
                    style={{ borderRadius: "10px" }}
                  />
                  <div className="video-video-box-overlay">
                    <div className="video-video-box-button-sm">
                      <button
                        className="video-video-play-icon pulsebox-1"
                        data-izimodal-open=".izimodal"
                      >
                        <i className="fa fa-play"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="izimodal"
                  data-iziModal-width="800px"
                  data-iziModal-fullscreen="true"
                >
                  <iframe
                    height="415"
                    src="https://www.youtube.com/embed/osnUQfGzqzU"
                    className="full-width shadow-primary"
                  ></iframe>
                </div>
              </div>

              {/* Text Section */}
              <div className="col-md-6 col-sm-12 col-12">
                <div className="pl-45-md">
                  {/* Title and Description */}
                  <div className="section-heading">
                    <h3 className="semi-bold">More About Us</h3>
                    <p>
                      We help our clients achieve their goals to financial
                      freedom.
                    </p>
                  </div>
                  <div>
                    <div className="contact-icon-box mission">
                      <i className="fab fa-telegram-plane"></i>
                      <h4>Our Mission</h4>
                      <h5>
                        To provide education and tools in order to improve
                        people's financial knowledge and thus generate a
                        significant change in their economy.
                      </h5>
                    </div>
                    <div className="contact-icon-box mission">
                      <i className="fas fa-video"></i>
                      <h4>Our Vision</h4>
                      <h5>
                        Simplifying worldwide trading and maximizing Africa's
                        investment opportunity.
                      </h5>
                    </div>
                    <div className="contact-icon-box mission">
                      <i className="fas fa-book"></i>
                      <h4>Our Strategies</h4>
                      <h5>
                        Integrity and transparency are the values that define
                        Obaforex. We are governed by a strong ethical conduct.
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <Testimonials />

        {/* You found Us */}
        <div
          className="section-block-parallax jarallax black-overlay-70"
          data-jarallax
          data-speed="0.6"
        >
          <div className="container">
            <div className="large-heading text-center">
              <h4 className="semi-bold white-color">
                You found Us, <br /> Now let us help you gain financial freedom!
              </h4>
              <div className="section-heading-line"></div>
            </div>
            <div className="mt-25 text-center">
              <a
                href="#"
                className="button-md button-white-bordered btn-found mt-10"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>

        {/* Our Partners */}
        <Partners />

        {/* Invest and Chill */}
        <Chill />
      </Layout>
    </>
  );
};
export default Home;
