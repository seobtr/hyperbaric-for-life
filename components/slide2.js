import React from 'react'

import PropTypes from 'prop-types'

const Slide2 = (props) => {
  return (
    <>
      <div data-type="slide" className="slide2-slide slide">
        <div className="slide2-max-width max-content-container">
          <div className="slide2-left-side">
            <div className="slide2-image-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="slide2-image"
              />
              <div className="slide2-mobile">
                <h3 className="slide2-text">{props.Step2}</h3>
                <span className="slide2-text1">{props.text11}</span>
              </div>
              <div className="slide2-slider-controls">
                <div data-action="previousSlide" className="slide2-go-left">
                  <svg viewBox="0 0 1024 1024" className="slide2-icon">
                    <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                  </svg>
                </div>
                <div data-action="nextSlide" className="slide2-go-right">
                  <svg viewBox="0 0 1024 1024" className="slide2-icon2">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="slide2-decorations-container">
              <div className="slide2-container">
                <h3 className="slide2-text2">{props.heading}</h3>
                <span className="slide2-text3">{props.text1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slide2-slide {
            position: relative;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .slide2-max-width {
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .slide2-left-side {
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .slide2-image-container {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .slide2-image {
            width: 100%;
            height: 485px;
            object-fit: contain;
          }
          .slide2-mobile {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slide2-text {
            color: #ffffff;
            font-size: 26px;
            align-self: center;
          }
          .slide2-text1 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slide2-slider-controls {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .slide2-go-left {
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
          .slide2-go-left:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide2-icon {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide2-go-right {
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
          .slide2-go-right:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide2-icon2 {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide2-decorations-container {
            width: 337px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .slide2-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
          }
          .slide2-text2 {
            color: #ffffff;
            font-size: 26px;
            align-self: flex-start;
          }
          .slide2-text3 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          @media (max-width: 1200px) {
            .slide2-left-side {
              width: 100%;
            }
            .slide2-mobile {
              display: none;
            }
            .slide2-decorations-container {
              width: 298px;
            }
          }
          @media (max-width: 991px) {
            .slide2-left-side {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .slide2-mobile {
              display: none;
            }
            .slide2-decorations-container {
              width: 189px;
            }
          }
          @media (max-width: 767px) {
            .slide2-slide {
              background-color: #000000;
            }
            .slide2-max-width {
              flex-direction: column;
            }
            .slide2-left-side {
              width: 100%;
              padding-right: 0px;
            }
            .slide2-image {
              max-width: 700px;
            }
            .slide2-mobile {
              display: flex;
            }
            .slide2-text {
              align-self: center;
            }
            .slide2-text1 {
              align-self: center;
            }
            .slide2-slider-controls {
              align-self: center;
              justify-content: center;
            }
            .slide2-decorations-container {
              display: none;
            }
            .slide2-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .slide2-slide {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .slide2-max-width {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .slide2-left-side {
              padding-left: 0px;
              justify-content: center;
            }
            .slide2-image {
              width: 250px;
              height: auto;
              max-width: auto;
            }
            .slide2-mobile {
              display: flex;
            }
            .slide2-text {
              align-self: center;
            }
            .slide2-text1 {
              align-self: center;
              text-align: center;
            }
            .slide2-slider-controls {
              justify-content: center;
            }
            .slide2-go-left {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide2-go-right {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide2-decorations-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Slide2.defaultProps = {
  image_src: '/playground_assets/mask%20grouphyperbaric%204%20life-5-700w.png',
  Step2: 'Step 2',
  text11: 'Application Phase',
  image_alt: 'image',
  heading: 'Step 2',
  text1: 'Application Phase',
}

Slide2.propTypes = {
  image_src: PropTypes.string,
  Step2: PropTypes.string,
  text11: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
}

export default Slide2
