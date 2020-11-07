import React from 'react';
import imgbook from "../../../../../asset/images/5e8587fbc718425ca0dddafe_hom-PMS-images-Artboard-40-copy-6.svg";
import iconbook from "../../../../../asset/images/5e81a85ed75a9b01eafce6de_united-plan-Artboard-60-copy.svg";

function index(props) {
    return (
      <section className="book-section">
        <div className="container">
          <div className="row rw-book-section">
            <div className="col-12 col-md-6 col-lg-6 col-img__second">
              <img src={imgbook} alt />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <div className="text-wrap-home">
                <h1>Booking Engine</h1>
                <p className="text-future">
                  Drive your direct revenue. Transform your website and Facebook
                  page with an attractive, responsive and easy to use booking
                  engine.
                </p>
                <img src={iconbook} alt />
                <div className="section-info">
                  <h5 className="section-info__title">BOOST DIRECT BOOKINGS</h5>
                  <p>
                    Guests appreciate being offered the opportunity to book a
                    room directly with a fast, easy and mobile friendly booking
                    engine.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconbook} alt />
                <div className="section-info">
                  <h5 className="section-info__title">MOBILE FRIENDLY</h5>
                  <p>
                    Frontdesk Anywhere’s mobile friendly booking engine is
                    available for your website and Facebook business page.
                    Bookings are automatically inserted into the PMS and
                    availability is updated accordingly across all your
                    distribution channels.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconbook} alt />
                <div className="section-info">
                  <h5 className="section-info__title">Real Time Inventory</h5>
                  <p>
                    The cloud based hotel PMS system gets you bookings via a
                    booking engine integrated with your hotel website.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconbook} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    Easy-to-use website widgets
                  </h5>
                  <p>
                    The accommodation booking software’s plug and play widgets
                    convert more of your website visitors into bookers.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconbook} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    Multi-lingual and multi-currency
                  </h5>
                  <p>
                    Your guests can access your booking engine in their language
                    and pay in their preferred currency using the cloud hotel
                    PMS software.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconbook} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    Multi Property Booking Portal
                  </h5>
                  <p>
                    Your guests will be able to book for any of the locations
                    across your hotel chain directly from our online hotel
                    booking system.
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