import React from 'react';
import icon1 from "../../../../../asset/images/5e81a7f2dad44d6f1a312c5d_united-plan-Artboard-58-copy.svg";
import imgquot1 from "../../../../../asset/images/5d9d6f9158a89212d137b268_logo-jayahouse.png";
import imgprops1 from "../../../../../asset/images/5e85bc91fa63bcafc3836266_frontdesk-anywhere-pms-Artboard-40-copy-5.svg";

function index() {
    return (
      <section className="props-section">
        <div className="container">
          <h1>Property Management System</h1>
          <p className="text-props">
            Unlock the power to effortlessly manage your property and it's
            operations.
          </p>
          <div className="row rw-text__icon">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="text-home-wrap">
                <img src={icon1} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    USER FRIENDLINESS MEETS CUSTOMIZATION
                  </h5>
                  <p>
                    Our hotel management software adapts to the way you run your
                    property. You can customize Profiles, availability calendar,
                    checklists, internet booking engine, guest messages, rates
                    and much more.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={icon1} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    POWERFUL RATE MANAGEMENT
                  </h5>
                  <p>
                    Set up separate room rates for different types. Sell more
                    rooms at the optimal rate, every day. Take control over your
                    pricing strategy by combining recommendations from the
                    software with your experience.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={icon1} alt />
                <div className="section-info">
                  <h5 className="section-info__title">POINT OF SALE</h5>
                  <p>
                    Charge your guests for incidentals or POS items and easily
                    transfer charges to their reservation. Charges are posted to
                    a specific account for financial reporting.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={icon1} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    KEEP IN TOUCH WITH YOUR GUESTS
                  </h5>
                  <p>
                    Display customized messages and send automated emails to
                    your guests before, during and after their stay.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={icon1} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    MANAGE GUEST PROFILES &amp; MORE
                  </h5>
                  <p>
                    Collect relevant information with personalized guest,
                    company and travel agent profiles. Export the data to run
                    marketing campaigns.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={icon1} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    HOUSEKEEPING MANAGEMENT
                  </h5>
                  <p>
                    Get a complete overview of your property's housekeeping
                    status with our advanced dashboard. Check out how many and
                    which reservations are set to arrive, depart or stay over,
                    as well as the status of each room.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={icon1} alt />
                <div className="section-info">
                  <h5 className="section-info__title">ADVANCED REPORTING</h5>
                  <p>
                    Filter data for management, operations and financial
                    reports. Run and schedule reports at your convenience and
                    export them in the format you want.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <div className="quote-title__img">
                  <img src={imgquot1} alt className="img-quote" />
                  <div className="section-info__quote">
                    <p className="quote-text">
                      “Working with Frontdesk Anywhere has made it possible for
                      us to operate with a complete guest centered approach.”
                    </p>
                    <p className="quote-title">
                      CHRISTIAN DE BOER, MANAGING DIRECTOR AT JAYA HOUSE RIVER
                      PARK
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-success">
                GET STARTED NOW
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-img__second">
              <img src={imgprops1} alt />
            </div>
          </div>
        </div>
      </section>
    );
}

export default index;