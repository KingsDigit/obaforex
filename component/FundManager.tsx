type prop = {
  bgColor?: string;
};
export const FundManager = ({ bgColor }: prop) => {
  return (
    <div
      className={`action-box action-box-md ${
        bgColor ? bgColor : "grey-bg"
      } center-holder-xs`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-12">
            <h3 className="bold">Let's Help You Manage Your Forex/Synthetic Account</h3>
            <p>
              We are top in the game of Forex. Let's help you manage your forex
              Account{" "}
            </p>
          </div>
          <div className="col-md-2 col-12 text-right center-holder-xs mt-10">
            <a
              href="/services/fund-management"
              className="button-md button-primary"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
