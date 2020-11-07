import React from 'react';
import iconstarted1 from "../../../../../asset/images/5e81a851dad44dc31a312d3d_united-plan-Artboard-62-copy.svg";
import iconstarted2 from "../../../../../asset/images/5d91c5fad12b5bfeaba9e821_2019-icon-integrations-38.svg";
import iconstarted3 from "../../../../../asset/images/5e81a885dc5445134cf7d690_united-plan-Artboard-65-copy.svg";
import iconstarted4 from "../../../../../asset/images/5e81a85ed75a9b01eafce6de_united-plan-Artboard-60-copy.svg";

function index() {
    return (
      <section className="started-section">
        <div className="container">
          <div className="row">
            <h1>Get started in no time.</h1>
            <p className="text-future">
              It works on all web browsers &amp; devices. No downloads or
              installation required.
              <br />‍ Sign up for free and start using your new PMS
            </p>
            <div className="col-12 col-md-3 col-lg-3 col-started">
              <div className="card text-left text-card">
                <img className="card-img-top" src={iconstarted1} alt />
                <div className="card-body">
                  <h4 className="card-title">Choose a plan</h4>
                  <p className="card-text">
                    There's a plan for all your needs. Learn more about the
                    plans we offer and get started right away.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 col-started">
              <div className="card text-left text-card">
                <img className="card-img-top" src={iconstarted2} alt />
                <div className="card-body">
                  <h4 className="card-title">Explore the ecosystem</h4>
                  <p className="card-text">
                    Find more information about our partners and integrations.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 col-started">
              <div className="card text-left text-card">
                <img className="card-img-top" src={iconstarted3} alt />
                <div className="card-body">
                  <h4 className="card-title">
                    Check out our <br />
                    HELP CENTER
                  </h4>
                  <p className="card-text">
                    Check out our help center for complete documentation and
                    video tutorials.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 col-started">
              <div className="card text-left text-card">
                <img className="card-img-top" src={iconstarted4} alt />
                <div className="card-body">
                  <h4 className="card-title">explore the BLOG</h4>
                  <p className="card-text">
                    Keep track of what Frontdesk Anywhere is up to and the
                    latest news about the market. <br />
                    <span className="text-span">|Coming Soon</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index;