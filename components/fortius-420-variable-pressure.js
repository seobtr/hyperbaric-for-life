import React from 'react'

import PropTypes from 'prop-types'

const Fortius420VariablePressure = (props) => {
  return (
    <>
      <div
        className={`fortius-420-variable-pressure-feature-card ${props.rootClassName} `}
      >
        <svg
          viewBox="0 0 1024 1024"
          className="fortius-420-variable-pressure-icon"
        >
          <path d="M512 64c282.77 0 512 229.23 512 512 0 192.792-106.576 360.666-264.008 448h-495.984c-157.432-87.334-264.008-255.208-264.008-448 0-282.77 229.23-512 512-512zM801.914 865.914c77.438-77.44 120.086-180.398 120.086-289.914h-90v-64h85.038c-7.014-44.998-21.39-88.146-42.564-128h-106.474v-64h64.284c-9.438-11.762-19.552-23.096-30.37-33.914-46.222-46.22-101.54-80.038-161.914-99.798v69.712h-64v-85.040c-20.982-3.268-42.36-4.96-64-4.96s-43.018 1.69-64 4.96v85.040h-64v-69.712c-60.372 19.76-115.692 53.576-161.914 99.798-10.818 10.818-20.932 22.152-30.37 33.914h64.284v64h-106.476c-21.174 39.854-35.552 83.002-42.564 128h85.040v64h-90c0 109.516 42.648 212.474 120.086 289.914 10.71 10.71 21.924 20.728 33.56 30.086h192.354l36.572-512h54.856l36.572 512h192.354c11.636-9.358 22.852-19.378 33.56-30.086z"></path>
        </svg>
        <h2 className="fortius-420-variable-pressure-text">{props.new_prop}</h2>
        <span className="fortius-420-variable-pressure-text1">
          {props.description}
        </span>
      </div>
      <style jsx>
        {`
          .fortius-420-variable-pressure-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .fortius-420-variable-pressure-icon {
            fill: #595959;
            width: 2rem;
            height: 2rem;
            margin-bottom: var(--dl-space-space-unit);
          }
          .fortius-420-variable-pressure-text {
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
          }
          .fortius-420-variable-pressure-text1 {
            color: #999999;
          }
          .fortius-420-variable-pressure-root-class-name {
            width: 100%;
          }

          @media (max-width: 991px) {
            .fortius-420-variable-pressure-root-class-name1 {
              max-width: auto;
            }
          }
          @media (max-width: 479px) {
            .fortius-420-variable-pressure-text {
              font-style: normal;
              font-weight: 600;
            }
          }
        `}
      </style>
    </>
  )
}

Fortius420VariablePressure.defaultProps = {
  rootClassName: '',
  new_prop: 'Variable Pressure',
  description: 'Up to 3.0 ATA',
}

Fortius420VariablePressure.propTypes = {
  rootClassName: PropTypes.string,
  new_prop: PropTypes.string,
  description: PropTypes.string,
}

export default Fortius420VariablePressure
