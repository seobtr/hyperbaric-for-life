import React from 'react'

import PropTypes from 'prop-types'

const VerticalList = (props) => {
  return (
    <>
      <div className={`vertical-list-vertical-list ${props.rootClassName} `}>
        <ul className="vertical-list-ul list">
          <li className="list-item">
            <span className="vertical-list-text">{props.text}</span>
          </li>
        </ul>
        <ul className="vertical-list-ul1 list">
          <li className="list-item">
            <span className="vertical-list-text1">{props.text1}</span>
          </li>
        </ul>
        <ul className="vertical-list-ul2 list">
          <li className="list-item">
            <span className="vertical-list-text2">{props.text2}</span>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .vertical-list-vertical-list {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .vertical-list-ul {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .vertical-list-text {
            font-size: 20px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .vertical-list-ul1 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .vertical-list-text1 {
            font-size: 20px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .vertical-list-ul2 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .vertical-list-text2 {
            font-size: 20px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

VerticalList.defaultProps = {
  text2: 'Text',
  text1: 'Text',
  rootClassName: '',
  text: 'Text',
}

VerticalList.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default VerticalList
