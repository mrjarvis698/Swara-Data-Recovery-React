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
              <span className="thank-you-logo">Swara Recovery</span>
              <div data-thq="thq-close-menu" className="thank-you-menu-close">
                <svg viewBox="0 0 1024 1024" className="thank-you-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="thank-you-nav2"
            >
              <Link to="/" className="thank-you-navlink2">
                Home
              </Link>
              <Link to="/quote" className="thank-you-navlink3">
                Quote
              </Link>
              <Link to="/about-us" className="thank-you-navlink4">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <section className="thank-you-hero">
        <div className="thank-you-content">
          <div className="thank-you-container2">
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
                <Link to="/" className="thank-you-navlink5 button">
                  <span className="thank-you-text3">
                    <span className="thank-you-text4">Explore !</span>
                    <br></br>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="thank-you-description">
        <div className="thank-you-container3">
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
