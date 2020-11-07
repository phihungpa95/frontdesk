import React from 'react';
import ctaimg1 from "../../../../../asset/images/5e86d67597d63e5cb9263c73_Screen-Shot-2020-04-01-at-11-50-23.png";
import ctaimg2 from "../../../../../asset/images/5e61a1c92800074cdac7a12e_SA_FrontRunners_Full-Color.png";
import ctaimg3 from "../../../../../asset/images/5e86d69bd1e5233668ef4f2f_GetApp_Category_leader_2020.png";
import ctatext1 from "../../../../../asset/images/5d9d5f21ad1216222057113b_fda-software-advice2.png";
import ctatext2 from "../../../../../asset/images/5d9d5f21ad1216222057113b_fda-software-advice2.png";
import ctatext3 from "../../../../../asset/images/5e86dc5ffe41fb37973fc6fe_getapp-yellow.png";


function index() {
    return (
      <section className="cta__section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div className="item">
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4">
                    <img src={ctaimg1} alt="" />
                    <img src={ctatext1} alt="" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <img src={ctaimg2} alt="" />
                    <img src={ctatext2} alt="" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <img src={ctaimg3} alt="" />
                    <img src={ctatext3} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6"></div>
          </div>
        </div>
      </section>
    );
}

export default index;