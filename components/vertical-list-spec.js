import React from 'react'

import PropTypes from 'prop-types'

const VerticalListSpec = (props) => {
  return (
    <>
      <div
        className={`vertical-list-spec-vertical-list-spec ${props.rootClassName} `}
      >
        <h4 className="vertical-list-spec-text">{props.text}</h4>
        <div className="vertical-list-spec-vertical-list">
          <ul className="vertical-list-spec-ul list">
            <li className="vertical-list-spec-li list-item">
              <span className="vertical-list-spec-text1">{props.text1}</span>
            </li>
            <li className="vertical-list-spec-li1 list-item">
              <span className="vertical-list-spec-text2">{props.text2}</span>
            </li>
            <li className="vertical-list-spec-li2 list-item">
              <span className="vertical-list-spec-text3">{props.text3}</span>
            </li>
            <li className="vertical-list-spec-li3 list-item">
              <span className="vertical-list-spec-text4">
                <span>Dual Intake Filters</span>
                <br></br>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>
        {`
          .vertical-list-spec-vertical-list-spec {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .vertical-list-spec-text {
            font-size: 20px;
            font-weight: bold;
          }
          .vertical-list-spec-vertical-list {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .vertical-list-spec-ul {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .vertical-list-spec-li {
            color: #5a5252;
          }
          .vertical-list-spec-text1 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .vertical-list-spec-li1 {
            color: #5a5252;
          }
          .vertical-list-spec-text2 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .vertical-list-spec-li2 {
            color: #5a5252;
          }
          .vertical-list-spec-text3 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .vertical-list-spec-li3 {
            color: #5a5252;
          }
          .vertical-list-spec-text4 {
            color: rgb(153, 153, 153);
            font-size: 18px;
            margin-bottom: var(--dl-space-space-unit);
          }
        `}
      </style>
    </>
  )
}

VerticalListSpec.defaultProps = {
  rootClassName: '',
  text1: 'Double Headed',
  text2: 'Oil-less',
  text: 'Clean Air Compressor',
  text3: '1/3 HP Compressor',
}

VerticalListSpec.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
}

export default VerticalListSpec
