import React from 'react'

import PropTypes from 'prop-types'

const Fortius420Spec3 = (props) => {
  return (
    <>
      <div
        className={`fortius-420-spec-3-feature-card ${props.rootClassName} `}
      >
        <svg
          viewBox="0 0 1243.4285714285713 1024"
          className="fortius-420-spec-3-icon"
        >
          <path d="M987.429 256l-219.429 402.286h438.857zM256 256l-219.429 402.286h438.857zM725.143 146.286c-10.857 30.857-36 56-66.857 66.857v737.714h347.429c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-768c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h347.429v-737.714c-30.857-10.857-56-36-66.857-66.857h-280.571c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h280.571c15.429-42.857 55.429-73.143 103.429-73.143s88 30.286 103.429 73.143h280.571c10.286 0 18.286 8 18.286 18.286v36.571c0 10.286-8 18.286-18.286 18.286h-280.571zM621.714 155.429c25.143 0 45.714-20.571 45.714-45.714s-20.571-45.714-45.714-45.714-45.714 20.571-45.714 45.714 20.571 45.714 45.714 45.714zM1243.429 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420v0zM512 658.286c0 117.714-162.857 164.571-256 164.571s-256-46.857-256-164.571v0c0-22.286 199.429-375.429 224-420 6.286-11.429 18.857-18.857 32-18.857s25.714 7.429 32 18.857c24.571 44.571 224 397.714 224 420z"></path>
        </svg>
        <h2 className="fortius-420-spec-3-text">{props.new_prop}</h2>
        <div className="fortius-420-spec-3-container">
          <span>{props.text}</span>
          <span className="fortius-420-spec-3-text2">{props.description}</span>
        </div>
        <div className="fortius-420-spec-3-container1">
          <span className="fortius-420-spec-3-text3">{props.text1}</span>
          <span className="fortius-420-spec-3-text4">{props.description1}</span>
        </div>
      </div>
      <style jsx>
        {`
          .fortius-420-spec-3-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .fortius-420-spec-3-icon {
            fill: #595959;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .fortius-420-spec-3-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .fortius-420-spec-3-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .fortius-420-spec-3-text2 {
            color: #999999;
          }
          .fortius-420-spec-3-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .fortius-420-spec-3-text3 {
            margin-top: var(--dl-space-space-halfunit);
          }
          .fortius-420-spec-3-text4 {
            color: #999999;
          }

          @media (max-width: 991px) {
            .fortius-420-spec-3-root-class-name {
              max-width: auto;
            }
          }
          @media (max-width: 479px) {
            .fortius-420-spec-3-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

Fortius420Spec3.defaultProps = {
  description1: '16.78 Kgs (37 Lbs)',
  text1: 'Compressor',
  rootClassName: '',
  text: 'Hard Shell Chamber:',
  description: '567 Kgs (1,250 Lbs)',
  new_prop: 'Weight',
}

Fortius420Spec3.propTypes = {
  description1: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  description: PropTypes.string,
  new_prop: PropTypes.string,
}

export default Fortius420Spec3
