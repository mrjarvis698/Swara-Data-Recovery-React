import React from 'react'
import { Link } from 'react-router-dom'

import { Player } from '@lottiefiles/react-lottie-player'
import { Helmet } from 'react-helmet'

import Footer from '../components/footer'
import './about-us.css'

const AboutUs = (props) => {
  return (
    <div className="about-us-container">
      <Helmet>
        <title>
          About-Us - Swara Data Recovery: Rescuing Your Precious Data
        </title>
        <meta
          name="description"
          content='"Swara Data Recovery specializes in retrieving lost, damaged, or inaccessible data from various storage devices."'
        />
        <meta
          property="og:title"
          content="About-Us - Swara Data Recovery: Rescuing Your Precious Data"
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
      <header data-thq="thq-navbar" className="about-us-navbar">
        <Link to="/" className="about-us-navlink">
          <label className="about-us-text">
            <span>Swara Recovery</span>
            <br></br>
          </label>
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="about-us-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="about-us-nav"
          >
            <a
              href="https://swaradatarecovery.teleporthq.app/#Services"
              className="about-us-link button-clean button"
            >
              Services
            </a>
            <Link
              to="/about-us"
              className="about-us-navlink1 button-clean button"
            >
              About
            </Link>
            <a href="#Contact" className="about-us-link1 button-clean button">
              Contact
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="about-us-btn-group">
          <Link to="/quote" className="about-us-view button">
            <span>
              <span>Quote</span>
              <br></br>
            </span>
          </Link>
        </div>
        <div data-thq="thq-burger-menu" className="about-us-burger-menu">
          <button className="button about-us-button">
            <svg viewBox="0 0 1024 1024" className="about-us-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="about-us-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="about-us-nav1"
          >
            <div className="about-us-container1">
              <span className="about-us-logo">Swara Recovery</span>
              <div data-thq="thq-close-menu" className="about-us-menu-close">
                <svg viewBox="0 0 1024 1024" className="about-us-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="about-us-nav2"
            >
              <Link to="/" className="about-us-navlink2">
                Home
              </Link>
              <Link to="/quote" className="about-us-navlink3">
                Quote
              </Link>
              <Link to="/about-us" className="about-us-navlink4">
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <section id="home" className="about-us-hero">
        <Player
          src="https://lottie.host/6b0dea4c-344d-415e-8421-458793882399/51PBduVRa3.json"
          loop
          speed="1"
          autoplay
          background="transparent"
          className="about-us-lottie-node"
        ></Player>
        <div className="about-us-container2">
          <div className="about-us-heading">
            <h1 className="about-us-header">
              <span className="about-us-text06">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-us-text07">
                About
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="about-us-text08"></br>
              <span className="about-us-text09">Swara Data Recovery</span>
              <span className="about-us-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </h1>
            <span className="about-us-text12">
              <span className="about-us-text13">
                At Swara Data Recovery, we understand that data loss can be a
                distressing experience. Our mission is to provide expert data
                recovery solutions that give you a second chance to retrieve
                your valuable files, memories, and information. With years of
                experience in the field, we have honed our skills to bring you
                unparalleled expertise in data recovery.
              </span>
              <br className="about-us-text14"></br>
              <br className="about-us-text15"></br>
              <span className="about-us-text16">
                Our Team: Our team of dedicated professionals is passionate
                about helping you regain access to your lost data. We combine
                technical prowess with a customer-centric approach to ensure
                that your needs are met with the highest level of care and
                precision.
              </span>
              <br className="about-us-text17"></br>
              <br className="about-us-text18"></br>
              <span className="about-us-text19">
                Cutting-Edge Technology: We stay at the forefront of data
                recovery technology, utilizing advanced tools and techniques to
                recover data from a wide range of storage devices. Whether
                it&apos;s photos, videos, documents, or files, we&apos;re
                equipped to tackle even the most complex cases of data loss.
              </span>
              <br className="about-us-text20"></br>
              <br className="about-us-text21"></br>
              <span className="about-us-text22">
                Customer Satisfaction: We take pride in our track record of
                customer satisfaction. Our commitment to quality,
                confidentiality, and successful outcomes has earned us the trust
                of individuals and businesses alike. Your data&apos;s security
                and recovery are our top priorities.
              </span>
              <br className="about-us-text23"></br>
              <br className="about-us-text24"></br>
              <span className="about-us-text25">
                Tailored Solutions: No two data loss scenarios are the same.
                That&apos;s why we offer personalized solutions that cater to
                your specific situation. We assess the root causes of your data
                loss and tailor our approach to ensure the best chance of
                successful recovery.
              </span>
              <br className="about-us-text26"></br>
              <br className="about-us-text27"></br>
              <span className="about-us-text28">
                Transparency: We believe in transparency throughout the recovery
                process. From the initial assessment to the final delivery of
                recovered data, you can expect clear communication and updates
                on the progress of your recovery.
              </span>
              <br className="about-us-text29"></br>
              <br className="about-us-text30"></br>
              <span className="about-us-text31">
                At Swara Data Recovery, we&apos;re not just experts in
                retrieving lost data; we&apos;re your partners in restoring what
                matters most to you. We understand the value of your
                information, memories, and work, and we&apos;re dedicated to
                helping you regain access to them. Contact us today to
                experience the Swara difference.&quot;
              </span>
              <br className="about-us-text32"></br>
              <br></br>
            </span>
          </div>
        </div>
      </section>
      <div id="Contact" className="about-us-container3">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default AboutUs
