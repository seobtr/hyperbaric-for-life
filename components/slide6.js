import React from 'react'

import PropTypes from 'prop-types'

const Slide6 = (props) => {
  return (
    <>
      <div data-type="slide" className="slide6-slide6 slide">
        <div className="slide6-max-width max-content-container">
          <div className="slide6-left-side">
            <div className="slide6-image-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="slide6-image"
              />
              <div className="slide6-mobile">
                <h3 className="slide6-text">{props.heading1}</h3>
                <span className="slide6-text1">{props.text11}</span>
              </div>
              <div className="slide6-slider-controls">
                <div data-action="previousSlide" className="slide6-go-left">
                  <svg viewBox="0 0 1024 1024" className="slide6-icon">
                    <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                  </svg>
                </div>
                <div data-action="nextSlide" className="slide6-go-right">
                  <svg viewBox="0 0 1024 1024" className="slide6-icon2">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="slide6-decorations-container">
              <div className="slide6-container">
                <h3 className="slide6-text2">{props.heading}</h3>
                <span className="slide6-text3">{props.text1}</span>
              </div>
              <div className="slide6-squares-container"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slide6-slide6 {
            position: relative;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .slide6-max-width {
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .slide6-left-side {
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .slide6-image-container {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .slide6-image {
            width: 100%;
            height: 485px;
            object-fit: contain;
          }
          .slide6-mobile {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slide6-text {
            color: #ffffff;
            font-size: 26px;
            align-self: center;
          }
          .slide6-text1 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slide6-slider-controls {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .slide6-go-left {
            flex: 0 0 auto;
            width: 100%;
            height: 108px;
            display: flex;
            max-width: 108px;
            max-height: 108px;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-default-white);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .slide6-go-left:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide6-icon {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide6-go-right {
            flex: 0 0 auto;
            width: 100%;
            height: 108px;
            display: flex;
            max-width: 108px;
            max-height: 108px;
            transition: 0.3s;
            align-items: center;
            border-color: var(--dl-color-default-white);
            border-width: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .slide6-go-right:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide6-icon2 {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide6-decorations-container {
            width: 337px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .slide6-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slide6-text2 {
            color: #ffffff;
            font-size: 26px;
            align-self: flex-start;
          }
          .slide6-text3 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slide6-squares-container {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          @media (max-width: 1200px) {
            .slide6-left-side {
              width: 100%;
            }
            .slide6-image {
              width: auto;
              height: 485px;
            }
            .slide6-mobile {
              display: none;
            }
            .slide6-decorations-container {
              width: 298px;
            }
          }
          @media (max-width: 991px) {
            .slide6-left-side {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .slide6-mobile {
              display: none;
            }
            .slide6-decorations-container {
              width: 189px;
            }
          }
          @media (max-width: 767px) {
            .slide6-slide6 {
              background-color: #000000;
            }
            .slide6-max-width {
              flex-direction: column;
            }
            .slide6-left-side {
              width: 100%;
              padding-right: 0px;
              justify-content: center;
            }
            .slide6-mobile {
              display: flex;
            }
            .slide6-text {
              align-self: center;
            }
            .slide6-text1 {
              text-align: center;
            }
            .slide6-slider-controls {
              justify-content: center;
            }
            .slide6-decorations-container {
              display: none;
            }
            .slide6-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .slide6-slide6 {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .slide6-max-width {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .slide6-left-side {
              padding-left: 0px;
            }
            .slide6-image-container {
              align-items: center;
            }
            .slide6-image {
              width: 250px;
              height: auto;
              max-width: auto;
            }
            .slide6-mobile {
              display: flex;
            }
            .slide6-text {
              align-self: center;
            }
            .slide6-text1 {
              align-self: center;
              text-align: center;
            }
            .slide6-slider-controls {
              justify-content: center;
            }
            .slide6-go-left {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide6-go-right {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide6-decorations-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Slide6.defaultProps = {
  image_src: '/playground_assets/mask%20grouphyperbaric%204%20life-22-500h.png',
  text11:
    'Our professional installers will provide white glove service where areas are accepted.*',
  text1:
    'Our professional installers will provide white glove service where areas are accepted.*',
  heading: 'Coordinate for Delivery',
  image_alt: 'image',
  heading1: 'Coordinate for Delivery',
}

Slide6.propTypes = {
  image_src: PropTypes.string,
  text11: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  heading1: PropTypes.string,
}

export default Slide6
