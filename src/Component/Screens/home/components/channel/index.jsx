import React from 'react';
import iconchannel from "../../../../../asset/images/5e81a86640d1d1f52a4f8a42_united-plan-Artboard-61-copy.svg";
import imgchannel from "../../../../../asset/images/5e85bcab25acede601231b3c_frontdesk-anywhere-integrations-Artboard-40-copy-8.png";
function index() {
    return (
      <section className="channel-section">
        <div className="container">
          <div className="row rw-channel">
            <div className="col-12 col-md-6 col-lg-6 col-img__second">
              <div className="text-wrap-home">
                <h1>Channel Manager</h1>
                <p className="text-future">
                  Sell more rooms with hundreds of OTA channels at your
                  disposal.
                </p>
                <img src={iconchannel} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    ALL THE CHANNELS YOU NEED
                  </h5>
                  <p>
                    Connect with over 350 major distribution channels, including
                    Expedia, Booking.com, Agoda and many more through our
                    integrated channel manager.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconchannel} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    CENTRALIZED INVENTORY MANAGEMENT
                  </h5>
                  <p>
                    The online hotel channel manager maximises your reach by
                    connecting your property to 130+ OTAs, GDS and vacation
                    rental portals.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconchannel} alt />
                <div className="section-info">
                  <h5 className="section-info__title">INCREASE OCCUPANCY</h5>
                  <p>
                    Achieve last room availability by using centralized
                    inventory and sell your property on the global stage.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconchannel} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    Instant updates on channels
                  </h5>
                  <p>
                    Our channel manager is the industry’s fastest. This helps
                    you push instant inventory and rate updates on connected
                    channels.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
                <img src={iconchannel} alt />
                <div className="section-info">
                  <h5 className="section-info__title">
                    100% inventory utilization
                  </h5>
                  <p>
                    Channel manager's integration with our cloud hotel software
                    increases your occupancy and makes your inventory
                    distribution uniform.
                  </p>
                  <a href="#">Learn more &gt;</a>
                </div>
              </div>
              <a href="#" className="btn btn-success">
                GET STARTED NOW
              </a>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-img__channel">
              <img src={imgchannel} alt />
            </div>
          </div>
        </div>
      </section>
    );
}

export default index;