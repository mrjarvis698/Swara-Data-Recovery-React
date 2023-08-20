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
              <span className="about-us-logo">Character</span>
              <div data-thq="thq-close-menu" className="about-us-menu-close">
                <svg viewBox="0 0 1024 1024" className="about-us-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="about-us-nav2"
            >
              <span className="about-us-text06">About</span>
              <span className="about-us-text07">Features</span>
              <span className="about-us-text08">Pricing</span>
              <span className="about-us-text09">Team</span>
              <span className="about-us-text10">Blog</span>
            </nav>
            <div className="about-us-container2">
              <button className="about-us-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="about-us-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="about-us-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="about-us-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="about-us-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
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
        <div className="about-us-container3">
          <div className="about-us-heading">
            <h1 className="about-us-header">
              <span className="about-us-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="about-us-text12">
                About
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="about-us-text13"></br>
              <span className="about-us-text14">Swara Data Recovery</span>
              <span className="about-us-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </h1>
            <span className="about-us-text17">
              <span className="about-us-text18">
                At Swara Data Recovery, we understand that data loss can be a
                distressing experience. Our mission is to provide expert data
                recovery solutions that give you a second chance to retrieve
                your valuable files, memories, and information. With years of
                experience in the field, we have honed our skills to bring you
                unparalleled expertise in data recovery.
              </span>
              <br className="about-us-text19"></br>
              <br className="about-us-text20"></br>
              <span className="about-us-text21">
                Our Team: Our team of dedicated professionals is passionate
                about helping you regain access to your lost data. We combine
                technical prowess with a customer-centric approach to ensure
                that your needs are met with the highest level of care and
                precision.
              </span>
              <br className="about-us-text22"></br>
              <br className="about-us-text23"></br>
              <span className="about-us-text24">
                Cutting-Edge Technology: We stay at the forefront of data
                recovery technology, utilizing advanced tools and techniques to
                recover data from a wide range of storage devices. Whether
                it&apos;s photos, videos, documents, or files, we&apos;re
                equipped to tackle even the most complex cases of data loss.
              </span>
              <br className="about-us-text25"></br>
              <br className="about-us-text26"></br>
              <span className="about-us-text27">
                Customer Satisfaction: We take pride in our track record of
                customer satisfaction. Our commitment to quality,
                confidentiality, and successful outcomes has earned us the trust
                of individuals and businesses alike. Your data&apos;s security
                and recovery are our top priorities.
              </span>
              <br className="about-us-text28"></br>
              <br className="about-us-text29"></br>
              <span className="about-us-text30">
                Tailored Solutions: No two data loss scenarios are the same.
                That&apos;s why we offer personalized solutions that cater to
                your specific situation. We assess the root causes of your data
                loss and tailor our approach to ensure the best chance of
                successful recovery.
              </span>
              <br className="about-us-text31"></br>
              <br className="about-us-text32"></br>
              <span className="about-us-text33">
                Transparency: We believe in transparency throughout the recovery
                process. From the initial assessment to the final delivery of
                recovered data, you can expect clear communication and updates
                on the progress of your recovery.
              </span>
              <br className="about-us-text34"></br>
              <br className="about-us-text35"></br>
              <span className="about-us-text36">
                At Swara Data Recovery, we&apos;re not just experts in
                retrieving lost data; we&apos;re your partners in restoring what
                matters most to you. We understand the value of your
                information, memories, and work, and we&apos;re dedicated to
                helping you regain access to them. Contact us today to
                experience the Swara difference.&quot;
              </span>
              <br className="about-us-text37"></br>
              <br></br>
            </span>
          </div>
        </div>
      </section>
      <div id="Contact" className="about-us-container4">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default AboutUs
