import React from 'react';
import img1 from "../../../../../asset/images/5e858d1bf0055b3fb4ab4618_home-header-image-Artboard-40-copy-8.png";

function index() {
    return (
      <section className="information-section">
        <div className="container">
          <div className="row rw-info">
            <div className="col-text__infomation">
              <h1>The Award Winning Hotel Management Software for 2020</h1>
              <p>
                Now is the time to Reduce Costs, Streamline
                <br />
                Operations, and Increase Revenue
              </p>
              <a href="#" className="btn btn-success">
                GET STARTED NOW
              </a>
            </div>
            <div className="col-image">
              <img src={img1} alt />
            </div>
          </div>
        </div>
      </section>
    );
}

export default index;