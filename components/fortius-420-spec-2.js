import React from 'react'

import PropTypes from 'prop-types'

const Fortius420Spec2 = (props) => {
  return (
    <>
      <div
        className={`fortius-420-spec-2-feature-card ${props.rootClassName} `}
      >
        <svg viewBox="0 0 1024 1024" className="fortius-420-spec-2-icon">
          <path d="M448 128v-16c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v16h-192v128h192v16c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-16h576v-128h-576zM256 256v-128h128v128h-128zM832 432c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v16h-576v128h576v16c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-16h192v-128h-192v-16zM640 576v-128h128v128h-128zM448 752c0-26.4-21.6-48-48-48h-160c-26.4 0-48 21.6-48 48v16h-192v128h192v16c0 26.4 21.6 48 48 48h160c26.4 0 48-21.6 48-48v-16h576v-128h-576v-16zM256 896v-128h128v128h-128z"></path>
        </svg>
        <h2 className="fortius-420-spec-2-text">{props.new_prop}</h2>
        <span className="fortius-420-spec-2-text1">{props.description}</span>
        <div className="fortius-420-spec-2-container">
          <span className="fortius-420-spec-2-text2">{props.text1}</span>
          <span className="fortius-420-spec-2-text3">{props.description1}</span>
        </div>
        <div className="fortius-420-spec-2-container1">
          <span className="fortius-420-spec-2-text4">{props.text}</span>
          <span className="fortius-420-spec-2-text5">{props.description2}</span>
        </div>
      </div>
      <style jsx>
        {`
          .fortius-420-spec-2-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .fortius-420-spec-2-icon {
            fill: #595959;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .fortius-420-spec-2-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .fortius-420-spec-2-text1 {
            color: #999999;
          }
          .fortius-420-spec-2-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .fortius-420-spec-2-text2 {
            margin-top: var(--dl-space-space-halfunit);
          }
          .fortius-420-spec-2-text3 {
            color: #999999;
          }
          .fortius-420-spec-2-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .fortius-420-spec-2-text4 {
            margin-top: var(--dl-space-space-halfunit);
          }
          .fortius-420-spec-2-text5 {
            color: #999999;
          }

          @media (max-width: 479px) {
            .fortius-420-spec-2-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

Fortius420Spec2.defaultProps = {
  description:
    'Mirrored Interior/external Controls For Operator And User Self-operation',
  rootClassName: '',
  text1: 'External Controls',
  new_prop: 'Controls',
  description1: 'For Operator',
  description2: 'User Self-Operation',
  text: 'Internal Controls',
}

Fortius420Spec2.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  new_prop: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  text: PropTypes.string,
}

export default Fortius420Spec2
