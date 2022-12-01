import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks2 = (props) => {
  return (
    <>
      <nav className={`navigation-links2-nav ${props.rootClassName} `}>
        <span className="navigation-links2-text">{props.text}</span>
        <span className="navigation-links2-text1">{props.text1}</span>
        <span className="navigation-links2-text2">{props.text2}</span>
        <span className="navigation-links2-text3">{props.text3}</span>
        <span className="navigation-links2-text4">{props.text4}</span>
      </nav>
      <style jsx>
        {`
          .navigation-links2-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links2-text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links2-text2 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links2-text3 {
            margin-left: var(--dl-space-space-twounits);
          }
          .navigation-links2-text4 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .navigation-links2-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links2-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links2-text4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks2.defaultProps = {
  text3: 'Team',
  text2: 'Pricing',
  rootClassName: '',
  text4: 'Blog',
  text: 'About',
  text1: 'Features',
}

NavigationLinks2.propTypes = {
  text3: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks2
