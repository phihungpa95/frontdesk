import React, { Component } from "react";
import "../../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import partner1 from "../../../../../asset/images/5e97d9da430c97bddaa4512f_microsoft-azure.png";
import partner2 from "../../../../../asset/images/5e97d9ffee71969d9bb70ac5_PCI-DSS.png";
import partner3 from "../../../../../asset/images/5e97da1f7367940571e13bbc_download-1.png";
import partner4 from "../../../../../asset/images/5e99450864d6947211e668da_userway-logo.svg";
import partner5 from "../../../../../asset/images/5e97d96c430c974670a44ff9_5dd61919cd567c84f3609ee1_revinate-logo-Artboard-1-copy-5.png";
import partner6 from "../../../../../asset/images/5e97d98abb7f960de712083f_expedia.svg";
import partner7 from "../../../../../asset/images/5de0bd4483c9d73774d7149a_airbnb-2.svg";
import partner8 from "../../../../../asset/images/5e97f6a765f7a98268500482_exp_logo_17161_en_2018_08_21_15_00_54.png";
import partner9 from "../../../../../asset/images/5de0bbc1d414348e6bd11061_Agoda_logo.svg";
import partner10 from "../../../../../asset/images/5e97d95d23446904b9e0b2e7_stripe.svg";
import partner11 from "../../../../../asset/images/5e9942a961eb0492ed9af0c9_authorize.svg";
import partner12 from "../../../../../asset/images/5e97e4e057a3713893ce3584_paypal.svg";
import partner13 from "../../../../../asset/images/5e9942efd0f2eb963209f8fd_usaepay.png";
import Slider from "react-slick";

class index extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <>
        <div className="partner-logo container">
          <h2>Partnered with the best</h2>
          <Slider {...settings}>
            <div>
              <div className="item">
                <img src={partner1} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner2} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner3} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner4} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner5} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner6} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner7} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner8} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner9} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner10} alt />
              </div>
            </div>

            <div>
              <div className="item">
                <img src={partner11} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner12} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={partner13} alt />
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

export default index;