type prop = {
  bgColor?: string;
};
export const Copy = ({ bgColor }: prop) => {
  return (
    <div
      className={`action-box action-box-md ${
        bgColor ? bgColor : "grey-bg"
      } center-holder-xs`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-12">
            <h3 className="bold">
              We Are One Of The World’s Most Trusted Forex Copier.
            </h3>
            <p>Join Us and Copy the Trades of the King of trading himself</p>
          </div>
          <div className="col-md-2 col-12 text-right center-holder-xs mt-10">
            <a href="#" className="button-md button-primary">
              Copy Our Trade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
