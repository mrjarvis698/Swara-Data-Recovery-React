import React from 'react'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-main">
        <div className="footer-branding">
          <div className="footer-heading">
            <h2 className="footer-logo">{props.Logo}</h2>
            <p className="footer-caption">{props.Caption}</p>
          </div>
          <div className="footer-socials">
            <a
              href={props.link_Twitter1}
              target="_blank"
              rel="noreferrer noopener"
              className="footer-twitter social button"
            >
              <img
                alt={props.image_alt2}
                src={props.image_src2}
                className="footer-image"
              />
            </a>
            <a
              href={props.link_Discord1}
              target="_blank"
              rel="noreferrer noopener"
              className="footer-discord social button"
            >
              <img
                alt={props.image_alt3}
                src={props.image_src3}
                className="footer-image1"
              />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-list">
            <h3 className="footer-heading1">{props.Heading}</h3>
            <div className="footer-items">
              <button className="footer-link button-clean button">
                {props.Link}
              </button>
              <button className="footer-link1 button-clean button">
                {props.Link1}
              </button>
              <button className="footer-link2 button-clean button">
                {props.Link2}
              </button>
              <button className="footer-link3 button-clean button">
                {props.Link3}
              </button>
            </div>
          </div>
          <div className="footer-list1">
            <h3 className="footer-heading2">{props.Heading1}</h3>
            <div className="footer-items1">
              <button className="footer-link4 button-clean button">
                {props.Link4}
              </button>
              <button className="footer-link5 button-clean button">
                {props.Link5}
              </button>
              <button className="footer-link6 button-clean button">
                {props.Link6}
              </button>
              <button className="footer-link7 button-clean button">
                {props.Link7}
              </button>
              <button className="footer-link8 button-clean button">
                {props.Link8}
              </button>
            </div>
          </div>
        </div>
        <div className="footer-socials1">
          <a
            href={props.link_Twitter}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-twitter1 social button"
          >
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="footer-image2"
            />
          </a>
          <a
            href={props.link_Discord}
            target="_blank"
            rel="noreferrer noopener"
            className="footer-discord1 social button"
          >
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="footer-image3"
            />
          </a>
        </div>
      </div>
      <span className="footer-copyright">{props.Copyright}</span>
    </footer>
  )
}

Footer.defaultProps = {
  Link4: 'Team',
  link_Twitter1: 'https://twitter.com',
  image_alt2: 'image',
  Heading: 'Site',
  Link8: 'Licenses',
  Link6: 'Terms',
  Link3: 'Features',
  Caption:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
  link_Twitter: 'https://twitter.com',
  image_alt1: 'image',
  link_Discord: 'https://discord.com',
  image_src3: '/Icons/discord.svg',
  image_src2: '/Icons/twitter.svg',
  image_alt3: 'image',
  Link7: 'Limitations',
  link_Discord1: 'https://discord.com',
  Link1: 'Collection',
  Logo: 'Swara Recovery',
  Link: 'About',
  Copyright: '© 2023 Swara LLC. All Rights Reserved.',
  image_src: '/Icons/twitter.svg',
  rootClassName: '',
  Link5: 'Press',
  image_src1: '/Icons/discord.svg',
  Heading1: 'Swara LLC',
  Link2: 'Roadmap',
  image_alt: 'image',
}

Footer.propTypes = {
  Link4: PropTypes.string,
  link_Twitter1: PropTypes.string,
  image_alt2: PropTypes.string,
  Heading: PropTypes.string,
  Link8: PropTypes.string,
  Link6: PropTypes.string,
  Link3: PropTypes.string,
  Caption: PropTypes.string,
  link_Twitter: PropTypes.string,
  image_alt1: PropTypes.string,
  link_Discord: PropTypes.string,
  image_src3: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt3: PropTypes.string,
  Link7: PropTypes.string,
  link_Discord1: PropTypes.string,
  Link1: PropTypes.string,
  Logo: PropTypes.string,
  Link: PropTypes.string,
  Copyright: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  Link5: PropTypes.string,
  image_src1: PropTypes.string,
  Heading1: PropTypes.string,
  Link2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Footer
