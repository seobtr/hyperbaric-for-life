import React from 'react'

import PropTypes from 'prop-types'

import Slide2 from './slide2'
import Slide3 from './slide3'
import Slide4 from './slide4'
import Slide5 from './slide5'
import Slide6 from './slide6'

const SliderSection = (props) => {
  return (
    <>
      <div
        className={`slider-section-slider-section section-container ${props.rootClassName} `}
      >
        <div data-type="slider" className="slider-section-slider">
          <div data-type="slide" className="slider-section-slide slide">
            <div className="slider-section-max-width max-content-container">
              <div className="slider-section-left-side">
                <div className="slider-section-image-container">
                  <img
                    alt={props.image_alt}
                    src={props.image_src}
                    className="slider-section-image"
                  />
                  <div className="slider-section-mobile">
                    <h3 className="slider-section-text">{props.heading1}</h3>
                    <span className="slider-section-text1">{props.step1}</span>
                  </div>
                  <div className="slider-section-slider-controls">
                    <div
                      data-action="previousSlide"
                      className="slider-section-go-left"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="slider-section-icon"
                      >
                        <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                      </svg>
                    </div>
                    <div
                      data-action="nextSlide"
                      className="slider-section-go-right"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="slider-section-icon2"
                      >
                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="slider-section-decorations-container">
                  <div className="slider-section-container">
                    <h3 className="slider-section-text2">{props.heading}</h3>
                    <span className="slider-section-text3">{props.text1}</span>
                  </div>
                  <div className="slider-section-squares-container"></div>
                </div>
              </div>
            </div>
          </div>
          <Slide2></Slide2>
          <Slide3></Slide3>
          <Slide4></Slide4>
          <Slide5></Slide5>
          <Slide6></Slide6>
        </div>
      </div>
      <style jsx>
        {`
          .slider-section-slider-section {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .slider-section-slider {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .slider-section-slide {
            align-items: stretch;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .slider-section-max-width {
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .slider-section-left-side {
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .slider-section-image-container {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .slider-section-image {
            width: 100%;
            height: 485px;
            object-fit: contain;
          }
          .slider-section-mobile {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slider-section-text {
            color: #ffffff;
            font-size: 26px;
            align-self: center;
          }
          .slider-section-text1 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slider-section-slider-controls {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .slider-section-go-left {
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
          .slider-section-go-left:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slider-section-icon {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slider-section-go-right {
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
          .slider-section-go-right:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slider-section-icon2 {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slider-section-decorations-container {
            width: 337px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .slider-section-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slider-section-text2 {
            color: #ffffff;
            font-size: 26px;
            align-self: flex-start;
            text-transform: uppercase;
          }
          .slider-section-text3 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slider-section-squares-container {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }

          @media (max-width: 1200px) {
            .slider-section-slider-section {
              padding-top: 0px;
            }
            .slider-section-left-side {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .slider-section-mobile {
              display: none;
            }
            .slider-section-decorations-container {
              width: 298px;
            }
          }
          @media (max-width: 991px) {
            .slider-section-left-side {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .slider-section-mobile {
              display: none;
            }
            .slider-section-decorations-container {
              width: 189px;
            }
            .slider-section-text2 {
              text-transform: uppercase;
            }
          }
          @media (max-width: 767px) {
            .slider-section-slide {
              background-color: #000000;
            }
            .slider-section-max-width {
              padding-top: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .slider-section-left-side {
              width: 100%;
              padding-right: 0px;
              justify-content: center;
            }
            .slider-section-image {
              max-width: 700px;
            }
            .slider-section-mobile {
              display: flex;
            }
            .slider-section-text {
              align-self: center;
            }
            .slider-section-text1 {
              align-self: center;
              text-align: left;
            }
            .slider-section-slider-controls {
              justify-content: center;
            }
            .slider-section-decorations-container {
              display: none;
            }
            .slider-section-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .slider-section-slider {
              align-items: center;
            }
            .slider-section-slide {
              height: 100%;
            }
            .slider-section-max-width {
              height: auto;
              max-width: auto;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .slider-section-left-side {
              padding-left: 0px;
            }
            .slider-section-image-container {
              align-items: center;
            }
            .slider-section-image {
              width: 250px;
              height: auto;
            }
            .slider-section-mobile {
              display: flex;
            }
            .slider-section-text {
              align-self: center;
            }
            .slider-section-text1 {
              text-align: center;
            }
            .slider-section-go-left {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slider-section-go-right {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slider-section-decorations-container {
              display: none;
            }
            .slider-section-root-class-name1 {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

SliderSection.defaultProps = {
  heading1: 'STEP 1',
  image_src: '/playground_assets/group%201hyperbaric%204%20life-700w.png',
  step1: 'Hard-Shell Selection, Color Selection, and Prepertation.',
  heading: 'Step 1',
  text1: 'Hard-Shell Selection, Color Selection, and Preperation.',
  rootClassName1: '',
  rootClassName: '',
  image_alt: 'image',
}

SliderSection.propTypes = {
  heading1: PropTypes.string,
  image_src: PropTypes.string,
  step1: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  rootClassName1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
}

export default SliderSection
