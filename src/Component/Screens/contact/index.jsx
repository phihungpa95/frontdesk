import React from 'react';
import './contact.css';
import "./Grid-Responsive.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

const schema = Yup.object().shape({
  cname: Yup.string().required("Vui lòng không bỏ trống"),
  email: Yup.string().required("Vui lòng không bỏ trống"),
  phonenumber: Yup.number().required("Vui lòng không bỏ trống"),
});


function index() {
    return (
      <section className="contact__section">
        <div className="grid wide">
          <div className="row">
            <div className="col-grid l-12 m-12 c-12">
              <div className="content__header">
                <div className="content__header--text">GET AN</div>
                <div className="content__header--estimate">ESTIMATE</div>
              </div>
            </div>
          </div>
          <div className="row  mt-1">
            <div className="col-grid l-3 m-12 c-12">
              <div className="content__product">
                <h1 className="content__product--questions">
                  What is the device of your project?
                </h1>
                <p className="content__product--number">1</p>
              </div>
            </div>
            <div className="col-grid l-9 m-12 c-12">
              <div className="row">
                <div className="col-grid l-4 m-6 c-12">
                  <div className="product__list">
                    <div className="product__list--input">
                      <i className="fas fa-mobile-alt icon" />
                    </div>
                    <h4 className="product__list--text">MOBILE</h4>
                  </div>
                </div>
                <div className="col-grid l-4 m-6 c-12">
                  <div className="product__list">
                    <div className="product__list--input">
                      <i className="fas fa-desktop icon" />
                    </div>
                    <h4 className="product__list--text">DESKTOP</h4>
                  </div>
                </div>
                <div className="col-grid l-4 m-6 c-12">
                  <div className="product__list">
                    <div className="product__list--input">
                      <i className="fas fa-tablet-alt icon" />
                    </div>
                    <h4 className="product__list--text">OTHER</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row  mt-1">
            <div className="col-grid l-3 m-12 c-12">
              <div className="content__product">
                <h1 className="content__product--questions">
                  What is the type of your project?
                </h1>
                <p className="content__product--number">2</p>
              </div>
            </div>
            <div className="col-grid l-9 m-12 c-12">
              <div className="row">
                <div className="col l-4 m-6 c-12">
                  <div className="product__list">
                    <div className="product__list--input">
                      <i className="fas fa-bezier-curve icon" />
                    </div>
                    <h4 className="product__list--text">UI/UX DESIGN</h4>
                  </div>
                </div>
                <div className="col-grid l-4 m-6 c-12">
                  <div className="product__list">
                    <div className="product__list--input">
                      <i className="fas fa-laptop icon" />
                    </div>
                    <h4 className="product__list--text">PRODUCT DEVELOPMENT</h4>
                  </div>
                </div>
                <div className="col-grid l-4 m-6 c-12">
                  <div className="product__list">
                    <div className="product__list--input">
                      <i className="fas fa-database icon" />
                    </div>
                    <h4 className="product__list--text last-text">
                      RND (AI/BIG DATA/DATA ANALYSIS)
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-grid l-3 m-12 c-12">
              <div className="content__product">
                <h1 className="content__product--questions">
                  Fill the form and get an estimate
                </h1>
                <p className="content__product--number">3</p>
              </div>
            </div>
            <div className="col-grid l-6 m-12 c-12">
              <Formik
                onSubmit={(value) => {
                  console.log(value);
                }}
                initialValues={{
                  cname: "",
                  email: "",
                  phonenumber: "",
                  textarea: ""
                }}
                validationSchema={schema}
                render={() => {
                  return (
                    <Form id="form1">
                      <div className="form-group">
                        <label className="form-label" htmlFor="contact-input">
                          Contact name*
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="contact-input"
                          name="cname"
                        />
                        <ErrorMessage name="cname">
                          {(mes) => (
                            <div className="alert alert-danger">{mes}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="email-input">
                          E-mail*
                        </label>
                        <Field
                          type="email"
                          className="form-control"
                          id="email-input"
                          name="email"
                        />
                        <ErrorMessage name="email">
                          {(mes) => (
                            <div className="alert alert-danger">{mes}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone-input">
                          Phone number*
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="phone-input"
                          name="phonenumber"
                        />
                        <ErrorMessage name="phonenumber">
                          {(mes) => (
                            <div className="alert alert-danger">{mes}</div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="textarea-input">
                          Short description of your idea*
                        </label>
                        <Field
                          component="textarea"
                          className="form-control form-textarea"
                          id="textarea-input"
                          // defaultValue={""}
                          name="textarea"
                        />
                      </div>
                      <small className="form-text">
                        We don’t share your info.
                        <span style={{ fontWeight: 600 }}>
                          Promise.<span></span>
                        </span>
                      </small>
                      <div
                        className="g-recaptcha captcha"
                        data-sitekey="6Ld5O9EZAAAAAJ8CwqJ16arTDG-d4k6M4SJNLFi3
    "
                        style={{ marginTop: 20 }}
                      ></div>
                      <button className="submit-form">ESTIMATE</button>
                    </Form>
                  );
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-grid l-12 m-12 c-12">
              <div className="error-message">
                One or more fields have an error. Please check and try again.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-grid l-12 m-12 c-12">
              <div className="content__footer">
                <div className="content__footer--textW">TOGETHER</div>
                <div className="content__footer--textR">
                  WE
                  <span className="content__footer--textW">GROW</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow-up">
          <i className="fas fa-chevron-up" />
        </div>
        <div className="chat-icon">
          <i className="fas fa-comment" />
        </div>
        <div className="chat-comment">
          <div className="chat-comment__img">
            <div className="chat-comment__img">
              <img className="chat-comment__img--logo" src="enouvo-logo.png" />
              <button className="chat-comment__img--fb">
                <i className="fab fa-facebook-square fb-icon" />
                <p className="fb-text">Like Page</p>
              </button>
            </div>
          </div>
          <input
            className="chat-comment__input"
            placeholder="Type a message to Enouvo IT Solutions..."
          />
          <div className="chat-comment__info">
            <div className="chat-comment__info-icon">
              <i className="fab fa-facebook-messenger icon-message" />
            </div>
            <p className="chat-comment__info-text">
              Messages sent to Enouvo IT Solutions and their replies will be
              available in Messenger
            </p>
          </div>
          <div className="chat-comment__send">
            <div className="chat-comment__send-text">
              Typically replies within a day
            </div>
            <button type="button" className="chat-comment__send-btn">
              send
            </button>
          </div>
        </div>
      </section>
    );
}

export default index;