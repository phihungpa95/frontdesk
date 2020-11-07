import React from 'react';
import iconmanagement from "../../../../../asset/images/5e81a8729d755190b4cfa6c8_united-plan-Artboard-66-copy.svg";
import imgmanagement from "../../../../../asset/images/5e99894a531fea1495035406_fda-newscreensArtboard-40-copy-14-8.png";

function index() {
    return (
      <section className="management-section">
        <div className="container">
          <div className="row rw-management">
            <div className="col-12 col-md-6 col-lg-6 col-img__second">
              <img src={imgmanagement} alt />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="text-wrap-home">
                <h1>Revenue Management</h1>
                <p className="text-future">
                  Drive your direct revenue. Transform your website and Facebook
                  page with an attractive, responsive and easy to use booking
                  engine.
                </p>
                <img src={iconmanagement} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    Sell at the right price
                  </h5>
                  <p>
                    Frontdesk Anywhere's Revenue Management tool automatically
                    adjusts the prices of your rooms depending on your
                    occupancy. Smart rules increase or decrease your rates
                    ensuring you’re always selling at the right price.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconmanagement} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    CENTRALIZED RATE MANAGEMENT
                  </h5>
                  <p>
                    Based on your set formula, this online hotel PMS system
                    automatically changes your room rates as per your occupancy
                    slab.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconmanagement} alt />
                <div className="section-info">
                  <h5 className="section-info__title">BOOST YOUR REVENUES</h5>
                  <p>
                    Embrace the power of selling through online distribution
                    channels (OTAs and GDS) in addition to direct bookings on
                    your website.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconmanagement} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    Detailed performance reports
                  </h5>
                  <p>
                    Our software for hotels provides you in-depth performance
                    reports of your hotel business, so that you plan your
                    business growth wisely.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
              </div>
              <a href="#" className="btn btn-success">
                GET STARTED NOW
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default index;