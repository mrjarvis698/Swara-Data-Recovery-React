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
        <title>Swara Data Recovery: Rescuing Your Precious Data</title>
        <meta
          name="description"
          content='"Swara Data Recovery specializes in retrieving lost, damaged, or inaccessible data from various storage devices."'
        />
        <meta
          property="og:title"
          content="Swara Data Recovery: Rescuing Your Precious Data"
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
            <a href="#Services" className="home-link button-clean button">
              Services
            </a>
            <Link to="/about-us" className="home-navlink1 button-clean button">
              About
            </Link>
            <a href="#Contact" className="home-link1 button-clean button">
              Contact
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <Link to="/quote" className="home-view button">
            <span>
              <span>Quote</span>
              <br></br>
            </span>
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <button className="button home-button">
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
              <span className="home-logo">Swara Recovery</span>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <Link to="/" className="home-navlink2">
                Home
              </Link>
              <Link to="/quote" className="home-navlink3">
                Quote
              </Link>
              <Link to="/about-us" className="home-navlink4">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <section id="home" className="home-hero">
        <Player
          src="https://lottie.host/51f90eac-ce40-4331-ad98-a05b444d6d76/OigKdPGJG1.json"
          loop
          speed="1"
          autoplay
          background="transparent"
          className="home-lottie-node"
        ></Player>
        <div className="home-container2">
          <div className="home-heading">
            <h1 className="home-header">
              <span className="home-text06">Recover</span>
              <span className="home-text07">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text08">your critical</span>
              <span className="home-text09"> </span>
              <span className="home-text10">DATA</span>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text12">from your</span>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text14">Defective</span>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text16">Hard Drive.</span>
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
        <div className="home-container3">
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
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-arrow"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3 button-link button"
              >
                <span>Join us on Discord</span>
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                  className="home-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="files" className="home-cards">
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
              <div className="home-content1">
                <h2 className="home-header1"> Images Recovery</h2>
                <p className="home-description2">
                  <span>
                    Losing precious photos can be heart-wrenching, but Swara
                    Data Recovery is here to help. Our experts specialize in
                    recovering images from various storage devices, whether
                    it&apos;s due to accidental deletion, formatting, or
                    hardware issues. With advanced tools and techniques, we work
                    tirelessly to bring back your cherished memories.
                  </span>
                  <br></br>
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
              <div className="home-content2">
                <h2 className="home-header2">Documents Retrieval</h2>
                <p className="home-description3">
                  <span className="home-text24">
                    Important documents lost? Don&apos;t worry – Swara Data
                    Recovery has you covered. Our skilled professionals excel at
                    retrieving a wide range of documents, from critical work
                    files to personal records. Whether it&apos;s a corrupted
                    hard drive or a deleted folder, we&apos;re dedicated to
                    restoring your essential data promptly and securely.
                  </span>
                  <br></br>
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
              <div className="home-content3">
                <h2 className="home-header3">
                  <span className="home-text26">File Recovery</span>
                  <br></br>
                </h2>
                <p className="home-description4">
                  Lost a crucial file? Trust Swara Data Recovery to retrieve it.
                  Our experienced team is equipped to recover files of various
                  types, sizes, and formats. Whether it&apos;s a presentation
                  for work, an academic project, or a vital spreadsheet, our
                  cutting-edge technology and expertise ensure that your files
                  are back in your hands.
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
              <div className="home-content4">
                <h2 className="home-header4">
                  <span className="home-text28">Videos Restoration</span>
                  <br></br>
                </h2>
                <p className="home-description5">
                  <span className="home-text30">
                    Did a special video disappear unexpectedly? Swara Data
                    Recovery can help you relive those moments. Our experts
                    specialize in video recovery, whether it&apos;s home videos,
                    professional footage, or any other type of video content.
                    With our meticulous approach, we strive to bring back your
                    videos intact and ready for you to enjoy.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-card4">
          <div className="home-row2">
            <img alt="image" src="/bhg.svg" className="home-image" />
            <div className="home-main4">
              <div className="home-content5">
                <h2 className="home-header5">
                  <span className="home-text32">
                    Get your
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text33">Home/Office</span>
                  <br className="home-text34"></br>
                  <span className="home-text35">
                    Critical Data Recovered Safely.
                  </span>
                  <br className="home-text36"></br>
                </h2>
                <p className="home-description6">
                  {' '}
                  Our expert team utilizes advanced techniques to recover files,
                  images, documents, and videos, ensuring the safe return of
                  your valuable data. With a commitment to excellence, Swara
                  Data Recovery is your trusted partner in bringing back what
                  matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-project">
        <div className="home-mining">
          <div className="home-content6">
            <div className="home-heading1">
              <h2 className="home-header6">All Types of Devices</h2>
              <p className="home-header7">
                No matter the storage device, Swara Data Recovery is dedicated
                to providing professional and effective data recovery solutions
                that prioritize the security and retrieval of your valuable
                data.
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="/supported_devices.svg"
            className="home-image1"
          />
        </div>
      </section>
      <section id="Services" className="home-join-us">
        <div className="home-content7">
          <Player
            src="https://lottie.host/bf80225b-a06d-468f-b866-f5c35fb2b04e/o88WVSgpWq.json"
            loop
            speed="1"
            autoplay
            background="transparent"
            className="home-lottie-node1"
          ></Player>
          <div className="home-main5">
            <div className="home-heading2">
              <h2 className="home-header8">Get your DATA now</h2>
              <p className="home-caption">
                <span className="home-text37">
                  The duration of Swara&apos;s data recovery process can vary
                  based on several factors, including the complexity of the data
                  loss, the type of storage device, the extent of damage, and
                  the specific techniques required for recovery. In general,
                  simpler cases such as accidental deletion or minor file
                  corruption might be resolved within a few hours to a day.
                </span>
                <br className="home-text38"></br>
                <br className="home-text39"></br>
                <span className="home-text40">
                  However, more complex cases involving severe hardware damage,
                  extensive data fragmentation, or intricate data structures
                  could take several days or even weeks to complete.
                  Swara&apos;s priority is to ensure a thorough and accurate
                  recovery process rather than rushing through it.
                </span>
                <br className="home-text41"></br>
                <br className="home-text42"></br>
                <span className="home-text43">
                  When you contact Swara Data Recovery, our experts will provide
                  you with an estimated timeframe based on the initial
                  assessment of your situation. Keep in mind that while they
                  strive to complete the process as quickly as possible, our
                  primary focus is on delivering high-quality results and
                  ensuring that your data is fully recovered and restored to its
                  original state.
                </span>
              </p>
            </div>
            <Link to="/quote" className="home-view2 button">
              <span>
                <span>Make an Enquiry</span>
                <br></br>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <div id="Contact" className="home-container4">
        <Footer></Footer>
      </div>
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
