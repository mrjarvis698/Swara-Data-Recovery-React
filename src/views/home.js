import React from 'react'
import { Link } from 'react-router-dom'
import Script from 'dangerous-html/react'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Swara Data Recovery</title>
        <meta property="og:title" content="Swara Data Recovery" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar">
        <Link to="/" className="home-navlink">
          <label className="home-text">
            <span>Swara Recovery</span>
            <br></br>
          </label>
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <button className="home-button button-clean button">
              Services
            </button>
            <button className="home-button1 button-clean button">Shop</button>
            <button className="home-button2 button-clean button">About</button>
            <button className="home-button3 button-clean button">
              Contact
            </button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <div className="home-socials">
            <button className="social button">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="home-image"
              />
            </button>
            <button className="social button">
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="home-image01"
              />
            </button>
          </div>
          <Link to="/quote" className="home-view button">
            <span>
              <span>Quote</span>
              <br></br>
            </span>
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <button className="button home-button4">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <span className="home-logo">Character</span>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text06">About</span>
              <span className="home-text07">Features</span>
              <span className="home-text08">Pricing</span>
              <span className="home-text09">Team</span>
              <span className="home-text10">Blog</span>
            </nav>
            <div className="home-container2">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-hero">
        <Player
          src="https://lottie.host/51f90eac-ce40-4331-ad98-a05b444d6d76/OigKdPGJG1.json"
          loop
          speed="1"
          autoplay
          background="transparent"
          className="home-lottie-node"
        ></Player>
        <div className="home-container3">
          <div className="home-heading">
            <h1 className="home-header">
              <span className="home-text11">Recover</span>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text13">your critical</span>
              <span className="home-text14"> </span>
              <span className="home-text15">DATA</span>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text17">from your</span>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text19">Defective</span>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text21">Hard Drive.</span>
            </h1>
            <Link to="/quote" className="home-view1 button">
              <span>
                <span>Request an estimate!</span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="home-description">
        <div className="home-container4">
          <div className="home-description1">
            <div className="home-content">
              <p className="home-paragraph">
                We are a team of digital aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat.
              </p>
              <p className="home-paragraph1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="home-links">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="button-link button"
              >
                <span>Follow us on Twitter</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-cards">
        <div className="home-row">
          <div className="home-card">
            <div className="home-avatar">
              <img
                alt="img_icon"
                src="https://img.icons8.com/3d-plastilina/100/image--v2.png"
                className="home-avatar1"
              />
            </div>
            <div className="home-main">
              <div className="home-content01">
                <h2 className="home-header01">Images</h2>
                <p className="home-description2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-avatar2">
              <img
                alt="image"
                src="https://img.icons8.com/arcade/64/documents.png"
                className="home-avatar3"
              />
            </div>
            <div className="home-main1">
              <div className="home-content02">
                <h2 className="home-header02">Documents</h2>
                <p className="home-description3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-row1">
          <div className="home-card2">
            <div className="home-avatar4">
              <img
                alt="image"
                src="https://img.icons8.com/external-filled-outline-design-circle/64/external-Software-technical-support-filled-outline-design-circle.png"
                className="home-avatar5"
              />
            </div>
            <div className="home-main2">
              <div className="home-content03">
                <h2 className="home-header03">Files</h2>
                <p className="home-description4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
            </div>
          </div>
          <div className="home-card3">
            <div className="home-avatar6">
              <img
                alt="img_icon"
                src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-video-100-most-used-icons-flaticons-flat-flat-icons-2.png"
                className="home-avatar7"
              />
            </div>
            <div className="home-main3">
              <div className="home-content04">
                <h2 className="home-header04">
                  <span className="home-text27">Videos</span>
                  <br></br>
                </h2>
                <p className="home-description5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-card4">
          <div className="home-row2">
            <div className="home-main4">
              <div className="home-content05">
                <h2 className="home-header05">
                  <span className="home-text29">
                    Get your
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text30">Home/Office</span>
                  <br className="home-text31"></br>
                  <span className="home-text32">
                    Critical Data Recovered Safely.
                  </span>
                  <br className="home-text33"></br>
                </h2>
                <p className="home-description6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi
                </p>
              </div>
              <button className="home-learn button">
                <span className="home-text34">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image02"
                />
              </button>
            </div>
            <img alt="image" src="/bhg.svg" className="home-image03" />
          </div>
        </div>
      </section>
      <section className="home-project">
        <div className="home-understand">
          <div className="home-content06">
            <span className="home-caption">Project</span>
            <div className="home-heading1">
              <h2 className="home-header06">Understand the project</h2>
              <p className="home-header07">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="home-view2 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image04"
              />
            </button>
          </div>
          <img alt="image" src="/group%202415.svg" className="home-image05" />
        </div>
        <div className="home-mining">
          <img
            alt="image"
            src="/supported_devices.svg"
            className="home-image06"
          />
          <div className="home-content07">
            <div className="home-heading2">
              <h2 className="home-header08">All Types of Devices</h2>
              <p className="home-header09">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
                <br></br>
                <br></br>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-view3 button-link button">
              <span>Learn More</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image07"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content08">
          <Player
            src="https://lottie.host/bf80225b-a06d-468f-b866-f5c35fb2b04e/o88WVSgpWq.json"
            loop
            speed="1"
            autoplay
            background="transparent"
            className="home-lottie-node1"
          ></Player>
          <div className="home-main5">
            <div className="home-heading3">
              <h2 className="home-header10">Get your DATA now</h2>
              <p className="home-caption1">
                A character custom collection is joining the NFT space on
                Opensea.
              </p>
            </div>
            <button className="home-view4 button">View on Opensea</button>
          </div>
        </div>
      </section>
      <section className="home-get-yours">
        <div className="home-row3">
          <div className="home-column">
            <div className="home-card5">
              <img
                alt="image"
                src="/Characters/character-9.svg"
                className="home-image08"
              />
            </div>
          </div>
          <div className="home-column1">
            <div className="home-card6">
              <img
                alt="image"
                src="/Characters/character-10.svg"
                className="home-image09"
              />
            </div>
          </div>
        </div>
        <div className="home-column2">
          <div className="home-card7">
            <div className="home-content09">
              <h2 className="home-header11">Get yours now</h2>
              <p className="home-description7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquat enim
                ad minim veniam.
              </p>
            </div>
            <button className="home-button5 button">View on Opensea</button>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <div className="home-accordion">
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

export default Home
