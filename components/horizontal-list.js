import React from 'react'

import PropTypes from 'prop-types'

const HorizontalList = (props) => {
  return (
    <>
      <div
        className={`horizontal-list-horizontal-list ${props.rootClassName} `}
      >
        <ul className="horizontal-list-ul list">
          <li className="horizontal-list-li list-item">
            <span className="horizontal-list-text">{props.text2}</span>
          </li>
        </ul>
        <ul className="horizontal-list-ul1 list">
          <li className="horizontal-list-li1 list-item">
            <span className="horizontal-list-text1">{props.text22}</span>
          </li>
        </ul>
        <ul className="horizontal-list-ul2 list">
          <li className="horizontal-list-li2 list-item">
            <span className="horizontal-list-text2">{props.text21}</span>
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .horizontal-list-horizontal-list {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: 0px;
            position: relative;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
          }
          .horizontal-list-ul {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .horizontal-list-li {
            font-size: 12px;
          }
          .horizontal-list-text {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .horizontal-list-ul1 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .horizontal-list-li1 {
            font-size: 12px;
          }
          .horizontal-list-text1 {
            font-size: 16px;
            font-family: Lexend;
            font-weight: 400;
            line-height: 1.1;
            text-transform: none;
            text-decoration: none;
          }
          .horizontal-list-ul2 {
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            list-style-type: disc;
            list-style-position: inside;
          }
          .horizontal-list-li2 {
            font-size: 12px;
          }
          .horizontal-list-text2 {
            font-size: 16px;
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

HorizontalList.defaultProps = {
  text21: 'Text',
  text22: 'Text',
  text2: 'Text',
  rootClassName: '',
}

HorizontalList.propTypes = {
  text21: PropTypes.string,
  text22: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HorizontalList
