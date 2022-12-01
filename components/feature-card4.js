import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard4 = (props) => {
  return (
    <>
      <div className={`feature-card4-feature-card ${props.rootClassName} `}>
        <svg
          viewBox="0 0 1316.5714285714284 1024"
          className="feature-card4-icon"
        >
          <path d="M109.714 658.286c48 0 48-73.143 0-73.143s-48 73.143 0 73.143zM951.429 625.143c-45.143-58.857-89.143-118.857-140.571-172.571l-71.429 80c-62.857 71.429-175.429 69.714-236.571-3.429-43.429-52.571-43.429-128 1.143-180l101.143-117.714c-35.429-18.286-78.286-12-116.571-12-33.714 0-66.286 13.714-90.286 37.714l-90.286 90.286h-88.571v310.857c25.143 0 48-3.429 68 16l169.714 166.857c34.857 33.714 80 63.429 129.714 63.429 25.714 0 53.143-8.571 71.429-26.857 42.857 14.857 92.571-9.143 105.714-53.143 27.429 2.286 52.571-6.286 72.571-25.143 13.143-12 30.286-36 28.571-54.857 5.143 5.143 17.714 5.714 24.571 5.714 68 0 103.429-71.429 61.714-125.143zM1042.286 658.286h54.857v-292.571h-53.143l-89.714-102.857c-24-27.429-60-43.429-96.571-43.429h-95.429c-32 0-62.857 14.286-83.429 38.286l-119.429 138.857c-21.143 25.143-21.143 60.571-0.571 85.714 32.571 38.857 92.571 39.429 126.286 1.714l110.286-124.571c26.286-29.143 74.286-1.714 62.286 35.429 21.714 25.143 45.143 49.714 66.286 74.857 28.571 35.429 56 72.571 84 108.571 17.714 22.857 30.857 50.286 34.286 80zM1206.857 658.286c48 0 48-73.143 0-73.143s-48 73.143 0 73.143zM1316.571 329.143v365.714c0 20-16.571 36.571-36.571 36.571h-248c-20.571 49.714-65.714 82.857-118.286 90.286-24.571 36-62.286 63.429-104.571 72.571-31.429 40-82.286 64-133.143 60.571-94.286 53.143-200.571 6.857-270.857-62.286l-164-161.143h-204.571c-20 0-36.571-16.571-36.571-36.571v-384c0-20 16.571-36.571 36.571-36.571h240.571c66.286-66.286 112-128 211.429-128h66.857c37.143 0 73.143 11.429 103.429 32 30.286-20.571 66.286-32 103.429-32h95.429c108.571 0 153.714 70.857 219.429 146.286h202.857c20 0 36.571 16.571 36.571 36.571z"></path>
        </svg>
        <h3 className="feature-card4-text">{props.new_prop}</h3>
        <span className="feature-card4-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .feature-card4-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: 100%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feature-card4-icon {
            fill: #0083ff;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card4-text {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feature-card4-text1 {
            color: #999999;
          }
          .feature-card4-root-class-name {
            width: 100%;
          }

          @media (max-width: 479px) {
            .feature-card4-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard4.defaultProps = {
  new_prop: 'Hyperbarics You Can Trust',
  rootClassName: '',
  description:
    'Hyperbaric For Life is a premier manufacturing company serving worldwide. We specialize in the manufacturing of hyperbaric chambers. Hyperbaric Oxygen Therapy (HBOT) is an all-natural, non-invasive treatment where a patient breathes 100% pure oxygen at increased atmospheric pressure.',
}

FeatureCard4.propTypes = {
  new_prop: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default FeatureCard4
