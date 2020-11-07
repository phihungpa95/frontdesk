import React, { Component } from "react";
import "../../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import imgslide1 from "../../../../../asset/images/5e97d862ee719681f3b70674_download.png";
import imgslide2 from "../../../../../asset/images/5e97d877eb4d9d6e39982797_download.jpg";
import imgslide3 from "../../../../../asset/images/5e97d8f67367945906e136cb_Surfrider-Malibu-Logo.png";
import imgslide4 from "../../../../../asset/images/5e97d8bc3fc8a79f5628a42a_unnamed.jpg";
import imgslide5 from "../../../../../asset/images/5e97f6bb65f7a9250d5004b7_PTrh1DFlR7qlqfqsTYAO_zamas-tulum-logo1.png";
import imgslide6 from "../../../../../asset/images/5e97f6de83176877bc1c3ff4_bhh-logo-horizontal.png";
import imgslide7 from "../../../../../asset/images/5e97f6f0eb4d9da25b98a56a_Lazy-Parrot-logo-01-8.png";
import imgslide8 from "../../../../../asset/images/5e9d2d3c05bf3a65c51e09cd_liberty-lodging.jpg";
import imgslide9 from "../../../../../asset/images/5eb0d96abcf84491f7e7785e_LogoHeader.png";
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
        <div className="slide-logo container">
          <h2>trusted by hotels in over 45 countries</h2>
          <Slider {...settings}>
            <div>
              <div className="item">
                <img src={imgslide1} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={imgslide2} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={imgslide3} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={imgslide4} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={imgslide5} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={imgslide6} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={imgslide7} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={imgslide8} alt />
              </div>
            </div>
            <div>
              <div className="item">
                <img src={imgslide9} alt />
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

export default index;
