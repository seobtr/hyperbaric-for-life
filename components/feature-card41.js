import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard41 = (props) => {
  return (
    <>
      <div className={`feature-card41-feature-card ${props.rootClassName} `}>
        <svg
          viewBox="0 0 1022.8297142857142 1024"
          className="feature-card41-icon"
        >
          <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
        </svg>
        <h3 className="feature-card41-text">{props.title}</h3>
        <span className="feature-card41-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .feature-card41-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card41-icon {
            fill: #595959;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card41-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card41-text1 {
            color: #999999;
          }
          .feature-card41-root-class-name {
            width: 100%;
          }

          @media (max-width: 991px) {
            .feature-card41-root-class-name1 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .feature-card41-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard41.defaultProps = {
  description:
    'Powder Coating the chambers creates a layer of protection that helps in the prevention of corrosion and rust.',
  rootClassName: '',
  title: 'Our Powder Coating Process',
}

FeatureCard41.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard41
