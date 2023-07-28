import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faLinkedin,
// } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer">
          <div className="needhelp">
            <h6>Need Help</h6>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </div>
          <div className="company">
            <h6>Company</h6>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">euphoria Blog</a>
            </li>
            <li>
              <a href="#">euphoriastan</a>
            </li>
            <li>
              <a href="#">Collaboration</a>
            </li>
            <li>
              <a href="#">Media</a>
            </li>
          </div>
          <div className="more-info">
            <h6>More info</h6>
            <li>
              <a href="#">Term and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </div>
          <div className="location">
            <h6>Location</h6>
            <li>
              <a href="#">support@euphoria.in</a>
            </li>
            <li>
              <a href="#">Eklingpura Chouraha, Ahmedabad Main Road</a>
            </li>
            <li>
              <a href="#">(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</a>
            </li>
          </div>
        </div>

        <div className="font-awesome">
          {/* <div> */}
          <div className="all-icons">
            <div className="icons facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </div>
            <div className="icons instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </div>
            <div className="icons twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </div>
            <div className="icons linked-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </div>
          </div>
          <div className="icon-flex">
            <h6>Download the App</h6>
            <div className="link-image">
              <div className="link google-play">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="34"
                  viewBox="0 0 31 34"
                  fill="none"
                >
                  <path
                    d="M0.670654 33.3127V0.336426L30.3224 16.3528L0.670654 33.3127Z"
                    fill="#5CA9B3"
                  />
                  <path
                    d="M0.670654 0.336426L21.6515 21.3172L30.3224 16.3528L0.670654 0.336426Z"
                    fill="#C8DB9B"
                  />
                  <path
                    d="M21.4718 11.5679L0.670654 33.3125L30.3224 16.3526L21.4718 11.5679Z"
                    fill="#AC5067"
                  />
                  <path
                    d="M21.6517 21.317L30.3225 16.3526L21.4719 11.5679L16.7996 16.4649L21.6517 21.317Z"
                    fill="#F4A676"
                  />
                </svg>
                <p>
                  <span>Android app on</span>
                  <br></br>Google Play
                </p>
              </div>
              <div className="link  app-store">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="33"
                  viewBox="0 0 22 33"
                  fill="none"
                >
                  <path
                    d="M18.9334 0.931152H3.02932C1.72644 0.931152 0.670654 1.9869 0.670654 3.28978V30.2009C0.670654 31.5038 1.72644 32.5596 3.02932 32.5596H18.9334C20.2363 32.5596 21.2921 31.5038 21.2921 30.2009V3.28978C21.2921 2.00937 20.2138 0.931152 18.9334 0.931152Z"
                    fill="white"
                  />
                  <path
                    d="M20.1466 4.72754H1.79395V26.9214H20.1466V4.72754Z"
                    fill="#404040"
                  />
                  <path
                    d="M14.7328 2.34619H7.20758C6.91556 2.34619 6.646 2.59329 6.646 2.90778C6.646 3.22226 6.89309 3.46936 7.20758 3.46936H14.7328C15.0249 3.46936 15.2944 3.22226 15.2944 2.90778C15.2944 2.61575 15.0473 2.34619 14.7328 2.34619Z"
                    fill="#6639A6"
                  />
                  <path
                    d="M9.18457 29.5944C9.18457 28.606 9.99326 27.7749 10.9816 27.7749C11.97 27.7749 12.8012 28.5836 12.8012 29.5944C12.8012 30.5828 11.9925 31.3915 10.9816 31.3915C9.99326 31.4139 9.18457 30.6053 9.18457 29.5944Z"
                    fill="#6639A6"
                  />
                </svg>
                <p>
                  <span>Available on the</span>
                  <br></br>App Store
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="popular-categories">
          <h6>Popular categories</h6>
        </div>
        <div className="copyright">
          <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
