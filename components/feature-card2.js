import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard2 = (props) => {
  return (
    <>
      <div className={`feature-card2-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="feature-card2-icon">
          <path d="M384 554q44 0 102 12-102 56-102 148v96h-298v-106q0-46 55-82t121-52 122-16zM704 598q74 0 154 32t80 84v96h-468v-96q0-52 80-84t154-32zM384 470q-52 0-90-38t-38-90 38-90 90-38 90 38 38 90-38 90-90 38zM704 512q-44 0-75-31t-31-75 31-76 75-32 75 32 31 76-31 75-75 31z"></path>
        </svg>
        <h3 className="feature-card2-text">{props.new_prop}</h3>
        <span className="feature-card2-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .feature-card2-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card2-icon {
            fill: #0083ff;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card2-text {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card2-text1 {
            color: #999999;
          }

          @media (max-width: 479px) {
            .feature-card2-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard2.defaultProps = {
  new_prop: 'Experienced and Supportive',
  rootClassName: '',
  description:
    'We understand that not one idea fits all. We will take the time to discuss your needs and develop and ideal chamber that fits your expectations.',
}

FeatureCard2.propTypes = {
  new_prop: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard2
