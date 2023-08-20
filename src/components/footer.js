import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-main">
        <div className="footer-branding">
          <div className="footer-heading">
            <Link to="/" className="footer-navlink">
              <h2 className="footer-logo">{props.Logo}</h2>
            </Link>
            <p className="footer-caption">{props.Caption}</p>
          </div>
          <div className="footer-socials"></div>
        </div>
        <div className="footer-links">
          <div className="footer-list">
            <h3 className="footer-heading1">{props.Heading}</h3>
            <div className="footer-items">
              <Link to="/about-us" className="footer-link button-clean button">
                {props.Link}
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-socials1"></div>
      </div>
      <span className="footer-copyright">{props.Copyright}</span>
    </footer>
  )
}

Footer.defaultProps = {
  image_alt2: 'image',
  Heading: 'Site',
  Caption:
    'Your trusted partner in expert data retrieval solutions. Restore lost files with our advanced techniques and customer-focused approach.',
  link_Twitter: 'https://twitter.com',
  image_alt1: 'image',
  link_Discord: 'https://discord.com',
  image_src3: 'c0e4ac5c-39a4-4c07-9115-3b6ad693a75a',
  image_src2: '3ba1b72a-2201-4ceb-a4d4-4d13e0a4b292',
  image_alt3: 'image',
  link_Discord1: 'https://discord.com',
  Logo: 'Swara Recovery',
  Link: 'About',
  Copyright: '© 2023 Swara LLC. All Rights Reserved.',
  image_src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  rootClassName: '',
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  image_alt: 'image',
}

Footer.propTypes = {
  image_alt2: PropTypes.string,
  Heading: PropTypes.string,
  Caption: PropTypes.string,
  link_Twitter: PropTypes.string,
  image_alt1: PropTypes.string,
  link_Discord: PropTypes.string,
  image_src3: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt3: PropTypes.string,
  link_Discord1: PropTypes.string,
  Logo: PropTypes.string,
  Link: PropTypes.string,
  Copyright: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Footer
