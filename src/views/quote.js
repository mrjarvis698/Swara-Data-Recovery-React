import React from 'react'
import { Link } from 'react-router-dom'
import Script from 'dangerous-html/react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './quote.css'

const Quote = (props) => {
  return (
    <div className="quote-container">
      <Helmet>
        <title>Quote - Swara Data Recovery: Rescuing Your Precious Data</title>
        <meta
          name="description"
          content='"Swara Data Recovery specializes in retrieving lost, damaged, or inaccessible data from various storage devices."'
        />
        <meta
          property="og:title"
          content="Quote - Swara Data Recovery: Rescuing Your Precious Data"
        />
        <meta
          property="og:description"
          content='"Swara Data Recovery specializes in retrieving lost, damaged, or inaccessible data from various storage devices."'
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a43c71a7-ee75-4ba3-943d-8cdb70722e16/57c2ba33-3829-4a8d-9797-ea70ba12fe0a?org_if_sml=1"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="quote-navbar">
        <Link to="/" className="quote-navlink">
          <label className="quote-text">
            <span>Swara Recovery</span>
            <br></br>
          </label>
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="quote-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="quote-nav"
          >
            <a
              href="https://swaradatarecovery.teleporthq.app/#Services"
              className="quote-link button-clean button"
            >
              Services
            </a>
            <Link to="/about-us" className="quote-navlink1 button-clean button">
              About
            </Link>
            <a href="#Contact" className="quote-link1 button-clean button">
              Contact
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="quote-btn-group">
          <Link to="/quote" className="quote-view button">
            Quote
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="quote-burger-menu">
          <button className="button quote-button">
            <svg viewBox="0 0 1024 1024" className="quote-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="quote-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="quote-nav1"
          >
            <div className="quote-container01">
              <span className="quote-logo">Swara Recovery</span>
              <div data-thq="thq-close-menu" className="quote-menu-close">
                <svg viewBox="0 0 1024 1024" className="quote-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="quote-nav2"
            >
              <Link to="/" className="quote-navlink2">
                Home
              </Link>
              <Link to="/quote" className="quote-navlink3">
                Quote
              </Link>
              <Link to="/about-us" className="quote-navlink4">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <section className="quote-hero">
        <div className="quote-content">
          <div className="quote-container02">
            <div className="quote-card">
              <Player
                src="https://lottie.host/33df12c4-6024-4489-9cd4-0bb9384aa40f/yUv5DVltHw.json"
                loop
                speed="1"
                autoplay
                background="transparent"
                className="quote-lottie-node"
              ></Player>
              <div className="quote-content1">
                <form
                  action="https://formsubmit.co/8e406752e4a414b001ef3b9bafe3e27c "
                  method="POST"
                  enctype="application/x-www-form-urlencoded"
                  className="quote-form"
                >
                  <h2 className="quote-header">Start Your Evaluation</h2>
                  <label className="quote-header1">
                    Recovery Services are served only for Indian States.
                  </label>
                  <div className="quote-container03">
                    <input
                      type="text"
                      id="First-Name"
                      name="First-Name"
                      required
                      placeholder="First Name"
                      className="quote-textinput input"
                    />
                    <input
                      type="text"
                      id="Last-Name"
                      name="Last-Name"
                      required
                      placeholder="Last Name"
                      className="quote-textinput1 input"
                    />
                  </div>
                  <div className="quote-container04">
                    <input
                      type="email"
                      id="Email"
                      name="Email"
                      required
                      placeholder="Email"
                      className="quote-textinput2 input"
                    />
                    <input
                      type="tel"
                      id="Phone"
                      name="Phone"
                      pattern="((\\+*)((0[ -]*)*|((91 )*))((\\d&#123;12&#125;)+|(\\d&#123;10&#125;)+))|\\d&#123;5&#125;([- ]*)\\d&#123;6&#125;"
                      required
                      maxlength="10"
                      minlength="10"
                      placeholder="Phone"
                      className="quote-textinput3 input"
                    />
                  </div>
                  <div className="quote-container05">
                    <select
                      id="Media-Type"
                      name="Media-Type"
                      required
                      className="quote-select"
                    >
                      <option value="Media Type" selected>
                        Media Type
                      </option>
                      <option value="Internal HDD / SSD">
                        Internal HDD / SSD
                      </option>
                      <option value="External HDD / SSD">
                        External HDD / SSD
                      </option>
                      <option value="USB Pendrive">USB Pendrive</option>
                      <option value="SD Card">SD Card</option>
                      <option value="RAID">RAID</option>
                    </select>
                    <select
                      id="Reason for Data loss"
                      name="Reason for Data loss"
                      required
                      className="quote-select1"
                    >
                      <option selected>Reason for Data loss</option>
                      <option value="Deleted Data">Deleted Data</option>
                      <option value="Accidental Files / Folder Missing">
                        Accidental Files / Folder Missing
                      </option>
                      <option value="Partition Missing">
                        Partition Missing
                      </option>
                      <option value="data_override">
                        Reinstalled / Overwritten / Formatted
                      </option>
                    </select>
                  </div>
                  <div className="quote-container06">
                    <select
                      id="State"
                      name="State"
                      required
                      className="quote-select2"
                    >
                      <option selected>Select state</option>
                      <option value="AN">Andaman and Nicobar Islands</option>
                      <option value="AR">Arunachal Pradesh</option>
                      <option value="AP">Andhra Pradesh</option>
                      <option value="AS">Assam</option>
                      <option value="BR">Bihar</option>
                      <option value="CH">Chandigarh</option>
                      <option value="CT">Chhattisgarh</option>
                      <option value="DN">Dadra and Nagar Haveli</option>
                      <option value="DD">Daman and Diu</option>
                      <option value="DL">Delhi</option>
                      <option value="GA">Goa</option>
                      <option value="GJ">Gujarat</option>
                      <option value="HR">Haryana</option>
                      <option value="HP">Himachal Pradesh</option>
                      <option value="JK">Jammu and Kashmir</option>
                      <option value="JH">Jharkhand</option>
                      <option value="KA">Karnataka</option>
                      <option value="KL">Kerala</option>
                      <option value="LA">Ladakh</option>
                      <option value="LD">Lakshadweep</option>
                      <option value="MP">Madhya Pradesh</option>
                      <option value="MH">Maharashtra</option>
                      <option value="MN">Manipur</option>
                      <option value="ML">Meghalaya</option>
                      <option value="MZ">Mizoram</option>
                      <option value="NL">Nagaland</option>
                      <option value="OR">Odisha</option>
                      <option value="PY">Puducherry</option>
                      <option value="PB">Punjab</option>
                      <option value="RJ">Rajasthan</option>
                      <option value="SK">Sikkim</option>
                      <option value="TN">Tamil Nadu</option>
                      <option value="TG">Telangana</option>
                      <option value="TR">Tripura</option>
                      <option value="UP">Uttar Pradesh</option>
                      <option value="UT">Uttarakhand</option>
                      <option value="WB">West Bengal</option>
                    </select>
                    <select
                      id="Country"
                      name="Country"
                      disabled
                      required
                      className="quote-select3"
                    >
                      <option value="IN" selected>
                        India
                      </option>
                    </select>
                  </div>
                  <div className="quote-container07">
                    <textarea
                      id="Message"
                      name="Message"
                      rows="5"
                      placeholder="Message"
                      className="quote-textarea textarea"
                    ></textarea>
                  </div>
                  <button type="submit" className="quote-button1 button">
                    <span className="quote-text3">
                      <span className="quote-text4">Submit</span>
                      <br></br>
                    </span>
                  </button>
                  <div className="quote-container08">
                    <React.Fragment>
                      <div>
                        <input
                          type="hidden"
                          name="_next"
                          defaultValue="https://swaradatarecovery.teleporthq.app/thank-you"
                        />
                        <input
                          type="hidden"
                          name="_template"
                          defaultValue="table"
                        />
                        <input
                          type="hidden"
                          name="_subject"
                          defaultValue="Swara Data Recovery | New Enquiry"
                        />
                        <input
                          type="hidden"
                          name="_cc"
                          defaultValue="dudamajaykumar59@gmail.com"
                        />
                        <input
                          type="hidden"
                          name="_autoresponse"
                          defaultValue="We have got your Submission for Enquiry, We will Shortly connect with you."
                        />
                      </div>
                    </React.Fragment>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="quote-description">
        <div className="quote-container09">
          <div className="quote-description1">
            <div className="quote-content2">
              <p className="quote-paragraph">
                We are a team of digital aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat.
              </p>
              <p className="quote-paragraph1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="quote-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="button-link button"
              >
                <span>Follow us on Twitter</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="quote-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="quote-link3 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="quote-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer id="Contact" className="quote-footer">
        <Footer rootClassName="footer-root-class-name"></Footer>
      </footer>
      <div className="quote-accordion">
        <React.Fragment>
          <Script>{`
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
`}</Script>
        </React.Fragment>
      </div>
    </div>
  )
}

export default Quote
