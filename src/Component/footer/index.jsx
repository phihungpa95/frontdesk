import React from 'react';
import linkedinicon from "../../asset/images/5dadcf72e994746afa39fdac_linkedin-blue.png";
import faceicon from "../../asset/images/5dadcf591ff28c70073bc948_facebook-blue.png";
import twittericon from "../../asset/images/5dadcf69f8739f9f7cd8e794_twitter-blue.png";

function index(props) {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 col-information">
              <h6>frontdesk anywhere</h6>
              <ul>
                <li>
                  <a href="#">Property Management System</a>
                </li>
                <li>
                  <a href="#">Booking Engine</a>
                </li>
                <li>
                  <a href="#">Channel Manager</a>
                </li>
                <li>
                  <a href="#">Revenue Manager</a>
                </li>
                <li>
                  <a href="#">Reputation Manager</a>
                </li>
                <li>
                  <a href="#">Ecosystem</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-information">
              <h6>COMPANY</h6>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Plans</a>
                </li>
                <li>
                  <a href="#">Success Stories</a>
                </li>
                <li>
                  <a href="#">Partnerships</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-information">
              <h6>Resources</h6>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">GDPR</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4 col-information">
              <h6>frontdesk anywhere</h6>
              <ul>
                <li>
                  <strong>Phone:</strong> <a href="#">+1 (415) 403-2957</a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="#">Sales@FrontdeskAnywhere.com</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-information">
              <h6>Contacts | <strong>Asia &amp; EMEA</strong></h6>
              <ul>
                <li>
                  <strong>Phone: </strong>
                  <a href="#">+66-2-566-0290</a>
                </li>
                <li>
                  <strong>Asia: </strong>
                  <a href="#">Sales.Asia@FrontdeskAnywhere.com</a>
                </li>
                <li>
                  <strong>EMEA: </strong>
                  <a href="#">Sales.Emea@FrontdeskAnywhere.com</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 col-lg-4 col-social col-information">
              <h6>Connect with us</h6>
              <ul className="social-wrapper">
                <li>
                  <a href="#">
                    <img src={linkedinicon} alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={faceicon} alt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twittericon} alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default index;