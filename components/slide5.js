import React from 'react'

import PropTypes from 'prop-types'

const Slide5 = (props) => {
  return (
    <>
      <div data-type="slide" className="slide5-slide5 slide">
        <div className="slide5-max-width max-content-container">
          <div className="slide5-left-side">
            <div className="slide5-image-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="slide5-image"
              />
              <div className="slide5-mobile">
                <h3 className="slide5-text">{props.heading1}</h3>
                <span className="slide5-text1">{props.text11}</span>
              </div>
              <div className="slide5-slider-controls">
                <div data-action="previousSlide" className="slide5-go-left">
                  <svg viewBox="0 0 1024 1024" className="slide5-icon">
                    <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                  </svg>
                </div>
                <div data-action="nextSlide" className="slide5-go-right">
                  <svg viewBox="0 0 1024 1024" className="slide5-icon2">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="slide5-decorations-container">
              <div className="slide5-container">
                <h3 className="slide5-text2">{props.heading}</h3>
                <span className="slide5-text3">{props.text1}</span>
              </div>
              <div className="slide5-squares-container"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slide5-slide5 {
            position: relative;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .slide5-max-width {
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .slide5-left-side {
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: space-between;
          }
          .slide5-image-container {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .slide5-image {
            width: 100%;
            height: 485px;
            object-fit: contain;
          }
          .slide5-mobile {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slide5-text {
            color: #ffffff;
            font-size: 26px;
            align-self: center;
          }
          .slide5-text1 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slide5-slider-controls {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .slide5-go-left {
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
          .slide5-go-left:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide5-icon {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide5-go-right {
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
          .slide5-go-right:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide5-icon2 {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide5-decorations-container {
            width: 337px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .slide5-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slide5-text2 {
            color: #ffffff;
            font-size: 26px;
            align-self: flex-start;
          }
          .slide5-text3 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slide5-squares-container {
            flex: 0 0 auto;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          @media (max-width: 1200px) {
            .slide5-left-side {
              width: 100%;
            }
            .slide5-image {
              height: 485px;
            }
            .slide5-mobile {
              display: none;
            }
            .slide5-decorations-container {
              width: 298px;
            }
          }
          @media (max-width: 991px) {
            .slide5-left-side {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .slide5-mobile {
              display: none;
            }
            .slide5-decorations-container {
              width: 189px;
            }
          }
          @media (max-width: 767px) {
            .slide5-slide5 {
              background-color: #000000;
            }
            .slide5-max-width {
              align-items: center;
              flex-direction: column;
            }
            .slide5-left-side {
              width: 100%;
              padding-right: 0px;
              justify-content: center;
            }
            .slide5-image {
              max-width: 700px;
            }
            .slide5-mobile {
              display: flex;
            }
            .slide5-text {
              align-self: center;
            }
            .slide5-text1 {
              align-self: center;
              text-align: center;
            }
            .slide5-slider-controls {
              align-self: center;
              justify-content: center;
            }
            .slide5-decorations-container {
              display: none;
            }
            .slide5-container {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .slide5-slide5 {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .slide5-max-width {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .slide5-left-side {
              padding-left: 0px;
            }
            .slide5-image {
              width: 250px;
              height: auto;
              max-width: auto;
            }
            .slide5-mobile {
              display: flex;
            }
            .slide5-text {
              align-self: center;
            }
            .slide5-text1 {
              align-self: center;
              text-align: center;
            }
            .slide5-slider-controls {
              justify-content: center;
            }
            .slide5-go-left {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide5-go-right {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide5-decorations-container {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

Slide5.defaultProps = {
  text11: 'Quality Control',
  heading1: 'Step 5',
  image_alt: 'image',
  text1: 'Quality Control',
  heading: 'Step 5',
  image_src: '/playground_assets/mask%20grouphyperbaric%204%20life-4-700w.png',
}

Slide5.propTypes = {
  text11: PropTypes.string,
  heading1: PropTypes.string,
  image_alt: PropTypes.string,
  text1: PropTypes.string,
  heading: PropTypes.string,
  image_src: PropTypes.string,
}

export default Slide5
