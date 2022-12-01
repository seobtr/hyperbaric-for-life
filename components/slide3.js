import React from 'react'

import PropTypes from 'prop-types'

const Slide3 = (props) => {
  return (
    <>
      <div data-type="slide" className="slide3-slide3 slide">
        <div className="slide3-max-width max-content-container">
          <div className="slide3-left-side">
            <div className="slide3-image-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="slide3-image"
              />
              <div className="slide3-mobile">
                <h3 className="slide3-text">{props.heading1}</h3>
                <span className="slide3-text1">{props.text11}</span>
              </div>
              <div className="slide3-slider-controls">
                <div data-action="previousSlide" className="slide3-go-left">
                  <svg viewBox="0 0 1024 1024" className="slide3-icon">
                    <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                  </svg>
                </div>
                <div data-action="nextSlide" className="slide3-go-right">
                  <svg viewBox="0 0 1024 1024" className="slide3-icon2">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="slide3-decorations-container">
              <div className="slide3-container">
                <h3 className="slide3-text2">{props.heading}</h3>
                <span className="slide3-text3">{props.text1}</span>
              </div>
              <div className="slide3-squares-container"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slide3-slide3 {
            position: relative;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .slide3-max-width {
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .slide3-left-side {
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .slide3-image-container {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .slide3-image {
            width: 100%;
            height: 485px;
            object-fit: contain;
          }
          .slide3-mobile {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slide3-text {
            color: #ffffff;
            font-size: 26px;
            align-self: center;
          }
          .slide3-text1 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slide3-slider-controls {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .slide3-go-left {
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
          .slide3-go-left:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide3-icon {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide3-go-right {
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
          .slide3-go-right:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide3-icon2 {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide3-decorations-container {
            width: 337px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .slide3-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slide3-text2 {
            color: #ffffff;
            font-size: 26px;
            align-self: flex-start;
          }
          .slide3-text3 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slide3-squares-container {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          @media (max-width: 1200px) {
            .slide3-left-side {
              width: 100%;
            }
            .slide3-mobile {
              display: none;
            }
            .slide3-decorations-container {
              width: 298px;
            }
          }
          @media (max-width: 991px) {
            .slide3-left-side {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .slide3-mobile {
              display: none;
            }
            .slide3-decorations-container {
              width: 189px;
            }
          }
          @media (max-width: 767px) {
            .slide3-slide3 {
              background-color: #000000;
            }
            .slide3-max-width {
              flex-direction: column;
            }
            .slide3-left-side {
              width: 100%;
              padding-right: 0px;
              justify-content: center;
            }
            .slide3-image {
              max-width: 700px;
            }
            .slide3-mobile {
              display: flex;
              align-items: center;
            }
            .slide3-text {
              align-self: center;
            }
            .slide3-text1 {
              align-self: center;
              text-align: center;
            }
            .slide3-slider-controls {
              justify-content: center;
            }
            .slide3-decorations-container {
              display: none;
            }
            .slide3-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .slide3-slide3 {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .slide3-max-width {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .slide3-left-side {
              padding-left: 0px;
            }
            .slide3-image {
              width: 250px;
              height: auto;
              max-width: auto;
            }
            .slide3-mobile {
              display: flex;
            }
            .slide3-text {
              align-self: center;
            }
            .slide3-text1 {
              align-self: center;
              text-align: center;
            }
            .slide3-slider-controls {
              justify-content: center;
            }
            .slide3-go-left {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide3-go-right {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide3-decorations-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Slide3.defaultProps = {
  heading1: 'Step 3',
  heading: 'STEP 3',
  text11: 'Electrostatic Application',
  text1: 'Electrostatic Application',
  image_alt: 'image',
  image_src: '/playground_assets/mask%20grouphyperbaric%204%20life-3-700w.png',
}

Slide3.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  text11: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default Slide3
