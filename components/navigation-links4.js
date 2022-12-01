import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks4 = (props) => {
  return (
    <>
      <nav className={`navigation-links4-nav ${props.rootClassName} `}>
        <span className="navigation-links4-text">{props.text}</span>
        <span className="navigation-links4-text1">{props.text1}</span>
        <span className="navigation-links4-text2">{props.text2}</span>
        <span className="navigation-links4-text3">{props.text3}</span>
        <span className="navigation-links4-text4">{props.text4}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links4-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links4-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links4-text2 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links4-text3 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links4-text4 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links4-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links4-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links4-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links4-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links4-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links4-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks4.defaultProps = {
  text: 'About',
  text3: 'Team',
  text1: 'Features',
  text4: 'Blog',
  text2: 'Pricing',
  rootClassName: '',
}

NavigationLinks4.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text4: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks4
