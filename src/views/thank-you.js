import React from 'react'
import { Link } from 'react-router-dom'
import Script from 'dangerous-html/react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './thank-you.css'

const ThankYou = (props) => {
  return (
    <div className="thank-you-container">
      <Helmet>
        <title>
          Thank-You - Swara Data Recovery: Rescuing Your Precious Data
        </title>
        <meta
          name="description"
          content='"Swara Data Recovery specializes in retrieving lost, damaged, or inaccessible data from various storage devices."'
        />
        <meta
          property="og:title"
          content="Thank-You - Swara Data Recovery: Rescuing Your Precious Data"
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
      <header data-thq="thq-navbar" className="thank-you-navbar">
        <Link to="/" className="thank-you-navlink">
          <label className="thank-you-text">
            <span>Swara Recovery</span>
            <br></br>
          </label>
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="thank-you-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="thank-you-nav"
          >
            <a
              href="https://swaradatarecovery.teleporthq.app/#Services"
              className="thank-you-link button-clean button"
            >
              Services
            </a>
            <Link
              to="/about-us"
              className="thank-you-navlink1 button-clean button"
            >
              About
            </Link>
            <a href="#Contact" className="thank-you-link1 button-clean button">
              Contact
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="thank-you-btn-group">
          <Link to="/quote" className="thank-you-view button">
            Quote
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="thank-you-burger-menu">
          <button className="button thank-you-button">
            <svg viewBox="0 0 1024 1024" className="thank-you-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="thank-you-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="thank-you-nav1"
          >
            <div className="thank-you-container1">
              <span className="thank-you-logo">Character</span>
              <div data-thq="thq-close-menu" className="thank-you-menu-close">
                <svg viewBox="0 0 1024 1024" className="thank-you-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="thank-you-nav2"
            >
              <span className="thank-you-text03">About</span>
              <span className="thank-you-text04">Features</span>
              <span className="thank-you-text05">Pricing</span>
              <span className="thank-you-text06">Team</span>
              <span className="thank-you-text07">Blog</span>
            </nav>
            <div className="thank-you-container2">
              <button className="thank-you-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="thank-you-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="thank-you-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="thank-you-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="thank-you-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="thank-you-hero">
        <div className="thank-you-content">
          <div className="thank-you-container3">
            <div className="thank-you-card">
              <div className="thank-you-content1">
                <Player
                  src="https://lottie.host/42a55798-fcea-4f9b-aa49-65dbabc174bc/riPxZadkl9.json"
                  speed="0.2"
                  autoplay
                  background="transparent"
                  className="thank-you-lottie-node"
                ></Player>
                <h2 className="thank-you-header">Thank You!</h2>
                <label className="thank-you-header1">
                  We Have got your Response. Our Technicals will connect very
                  soon.
                </label>
                <label className="thank-you-header2">
                  Feel Free to Explore our services.
                </label>
                <Link to="/" className="thank-you-navlink2 button">
                  <span className="thank-you-text08">
                    <span className="thank-you-text09">Explore !</span>
                    <br></br>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="thank-you-description">
        <div className="thank-you-container4">
          <div className="thank-you-description1">
            <div className="thank-you-content2">
              <p className="thank-you-paragraph">
                We are a team of digital aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat.
              </p>
              <p className="thank-you-paragraph1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="thank-you-links">
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
                  className="thank-you-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thank-you-link3 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="thank-you-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer id="Contact" className="thank-you-footer">
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </footer>
      <div className="thank-you-accordion">
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

export default ThankYou
