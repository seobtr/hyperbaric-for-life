import React from 'react'

import PropTypes from 'prop-types'

const PreviousEvents = (props) => {
  return (
    <>
      <div
        className={`previous-events-previous-events section-container ${props.rootClassName} `}
      >
        <div className="previous-events-max-width max-content-container">
          <div className="previous-events-heading-container">
            <h1 className="previous-events-text Heading2">
              <span>previous events</span>
            </h1>
            <span className="previous-events-text2">{props.text}</span>
          </div>
        </div>
        <div data-type="slider" className="previous-events-slider"></div>
        <div className="previous-events-slider-controls">
          <div data-action="previousSlide" className="previous-events-go-left">
            <svg viewBox="0 0 1024 1024" className="previous-events-icon">
              <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
            </svg>
          </div>
          <div data-action="nextSlide" className="previous-events-go-right">
            <svg viewBox="0 0 1024 1024" className="previous-events-icon2">
              <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .previous-events-previous-events {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .previous-events-max-width {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .previous-events-heading-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .previous-events-text {
            text-align: center;
          }
          .previous-events-text2 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .previous-events-slider {
            flex: 0 0 auto;
            width: 100%;
            height: 420px;
            display: flex;
            position: relative;
            transition: 0.5s;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .previous-events-slider-controls {
            top: calc(50% + 24px);
            width: calc(60% + 48px);
            height: 48px;
            display: flex;
            position: absolute;
            align-self: center;
            justify-content: space-between;
          }
          .previous-events-go-left {
            flex: 0 0 auto;
            width: 48px;
            cursor: pointer;
            height: 48px;
            display: flex;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(144, 149, 167, 0.24);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .previous-events-go-left:hover {
            border-color: var(--dl-color-scheme-lightblue);
          }
          .previous-events-icon {
            width: 24px;
            height: 24px;
            transform: rotate(180deg);
          }
          .previous-events-go-right {
            flex: 0 0 auto;
            width: 48px;
            cursor: pointer;
            height: 48px;
            display: flex;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(144, 149, 167, 0.24);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .previous-events-go-right:hover {
            border-color: var(--dl-color-scheme-lightblue);
          }
          .previous-events-icon2 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .previous-events-slider-controls {
              width: calc(75% + 48px);
            }
          }
          @media (max-width: 767px) {
            .previous-events-slider-controls {
              width: calc(80% + 48px);
            }
          }
        `}
      </style>
    </>
  )
}

PreviousEvents.defaultProps = {
  rootClassName: '',
  text: 'Take a tour of our previous conferences',
}

PreviousEvents.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default PreviousEvents
