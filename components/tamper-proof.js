import React from 'react'

import PropTypes from 'prop-types'

const TamperProof = (props) => {
  return (
    <>
      <div className={`tamper-proof-feature-card ${props.rootClassName} `}>
        <svg viewBox="0 0 1024 1024" className="tamper-proof-icon">
          <path d="M18 572l60-60 238 238-60 60zM948 238l62 60-512 512-240-238 62-60 178 178zM768 298l-270 272-60-60 270-272z"></path>
        </svg>
        <h2 className="tamper-proof-text">{props.new_prop}</h2>
        <span className="tamper-proof-text1">{props.description}</span>
      </div>
      <style jsx>
        {`
          .tamper-proof-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .tamper-proof-icon {
            fill: #595959;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .tamper-proof-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .tamper-proof-text1 {
            color: #999999;
          }
          .tamper-proof-root-class-name {
            width: 100%;
          }

          @media (max-width: 479px) {
            .tamper-proof-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

TamperProof.defaultProps = {
  description: 'Redundant Pressure Regulators',
  rootClassName: '',
  new_prop: 'Tamper Proof',
}

TamperProof.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  new_prop: PropTypes.string,
}

export default TamperProof
