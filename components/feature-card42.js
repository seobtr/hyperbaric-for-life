import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard42 = (props) => {
  return (
    <>
      <div className={`feature-card42-feature-card ${props.rootClassName} `}>
        <h2 className="feature-card42-text">{props.title}</h2>
      </div>
      <style jsx>
        {`
          .feature-card42-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card42-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card42-root-class-name {
            width: 100%;
          }
          @media (max-width: 479px) {
            .feature-card42-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard42.defaultProps = {
  rootClassName: '',
  title: 'Oxygen Under Pressure Hyperbarics  - DBA RXo2',
}

FeatureCard42.propTypes = {
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard42
