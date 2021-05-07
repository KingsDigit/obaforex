import { Banner } from "../../../component/Banner";
import { Copy } from "../../../component/Copy";
import { Layout } from "../../../component/Layout";

const CopyTrade = () => {
  return (
    <Layout title="Copy Trade">
      {/* Banner */}
      <Banner page="Copy Trade" />

      {/* Choose, Follow, Monitor.Earn By Copying From Obaforex. */}
      <div className="section-block grey-bg">
        <div className="container">
          {/* Title and Desc. */}
          <div className="section-heading text-center">
            <h3 className="semi-bold font-size-35">
              Choose, Follow, Monitor. <br /> Earn By Copying From Obaforex.
            </h3>
            <div className="section-heading-line line-thin"></div>
            <p>
              Copy Trading enables individuals in the financial markets to
              automatically <br /> copy positions opened and managed by Obaforex
              directly. Unlike mirror trading, a method that allows traders to
              copy spe <br /> cific strategies, copy trading links a portion of
              the copying trader's funds to the account of the copied investor.
            </p>

            <a
              href="/documents/copy-trade-policy.pdf"
              target="_blank"
              className="button-primary button-md"
              style={{ marginTop: "40px" }}
            >
              Read Our Policy
            </a>
          </div>
        </div>
      </div>

      {/* Because We Have All It Takes */}
      <div
        className="section-block grey-bg background-shape-3 border-bottom"
        style={{ marginTop: "-60px" }}
      >
        <div className="container">
          <div className="row">
            {/* Image Section */}
            <div className="col-md-6 col-12">
              <img
                src="/img/copy-trade.png"
                className="rounded-border"
                alt="footer_logo"
              />
            </div>

            {/* Text Section */}
            <div className="col-md-6 col-12">
              <div className="pl-30-md">
                <div className="section-heading text-left mt-5">
                  <small className="text-scondary mt-sm">
                    TRADE ON THE MOVE
                  </small>
                  <h3 className="semi-bold font-size-32">
                    Because We Have All It Takes
                  </h3>
                  <div className="section-heading-line line-thin"></div>
                  <div className="text-content">
                    <p>
                      You can now sign up for our copy trade and follow the King
                      himself. You can access your own account to monitor the
                      trading, close positions, withdraw profits, set Rescue
                      Level and the Volume Allocation percentage, and more.
                      <br />
                      There are no delays, it all happen at a click on a mouse,
                      from any of our partner brokers For prompt delivery, we
                      have over 24 Servers located all around the world.
                      <br />
                    </p>
                    <p>
                      <strong>Obaforex Copy Trade Features </strong>
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
                            Enjoy fast order execution.
                          </div>
                        </li>
                        <li>
                          <div className="icon-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="icon-text">
                            Invest and withdraw funds quickly and securely
                          </div>
                        </li>
                        <li>
                          <div className="icon-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="icon-text">
                            You don’t have to be an expert in Forex.
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <ul className="primary-list mt-20">
                        <li>
                          <div className="icon-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="icon-text">
                            Keep everything under your control.
                          </div>
                        </li>
                        <li>
                          <div className="icon-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="icon-text">
                            Set it running in a few quick steps.
                          </div>
                        </li>
                        <li>
                          <div className="icon-sm">
                            <i className="fas fa-check-circle"></i>
                          </div>
                          <div className="icon-text">
                            Stable income from a diversified portfolio.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Copy bgColor="bg-white" />
    </Layout>
  );
};

export default CopyTrade;
