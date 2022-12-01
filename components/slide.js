import React from 'react'

import PropTypes from 'prop-types'

const Slide = (props) => {
  return (
    <>
      <div
        data-type="slide"
        className={`slide-slide slide ${props.rootClassName} `}
      >
        <div className="slide-max-width max-content-container">
          <div className="slide-left-side">
            <div className="slide-image-container">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="slide-image"
              />
              <div className="slide-mobile">
                <h3 className="slide-text">{props.heading1}</h3>
                <span className="slide-text1">{props.text11}</span>
              </div>
              <div className="slide-slider-controls">
                <div data-action="previousSlide" className="slide-go-left">
                  <svg viewBox="0 0 1024 1024" className="slide-icon">
                    <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                  </svg>
                </div>
                <div data-action="nextSlide" className="slide-go-right">
                  <svg viewBox="0 0 1024 1024" className="slide-icon2">
                    <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="slide-decorations-container">
              <img
                alt="image"
                src="/playground_assets/image-onxc-200h.png"
                className="slide-dots"
              />
              <div className="slide-container">
                <h3 className="slide-text2">{props.heading2}</h3>
                <span className="slide-text3">{props.text1}</span>
              </div>
              <div className="slide-squares-container">
                <div className="slide-light-green"></div>
                <div className="slide-orange"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .slide-slide {
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
            background-color: #000000;
          }
          .slide-max-width {
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .slide-left-side {
            width: 100%;
            display: flex;
            align-items: stretch;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .slide-image-container {
            display: flex;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .slide-image {
            width: 100%;
            height: 485px;
            object-fit: contain;
          }
          .slide-mobile {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: none;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slide-text {
            color: #ffffff;
            font-size: 26px;
            align-self: center;
          }
          .slide-text1 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slide-slider-controls {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: flex-end;
          }
          .slide-go-left {
            flex: 0 0 auto;
            width: 100%;
            height: 108px;
            display: flex;
            max-width: 108px;
            max-height: 108px;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .slide-go-left:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide-icon {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide-go-right {
            flex: 0 0 auto;
            width: 100%;
            height: 108px;
            display: flex;
            max-width: 108px;
            max-height: 108px;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .slide-go-right:hover {
            cursor: pointer;
            background-color: rgba(229, 229, 229, 0.2);
          }
          .slide-icon2 {
            fill: var(--dl-color-grays-white100);
            width: 42px;
            height: 42px;
          }
          .slide-decorations-container {
            width: 337px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: space-between;
          }
          .slide-dots {
            width: 126px;
            height: 126px;
            margin-top: 21px;
            object-fit: cover;
            margin-right: 21px;
          }
          .slide-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .slide-text2 {
            color: #ffffff;
            font-size: 26px;
            align-self: center;
          }
          .slide-text3 {
            color: #ffffff;
            align-self: flex-start;
            text-align: left;
          }
          .slide-squares-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
          }
          .slide-light-green {
            flex: 0 0 auto;
            width: 54px;
            height: 54px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-backgrounds-lightgreen);
          }
          .slide-orange {
            flex: 0 0 auto;
            width: 108px;
            height: 108px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #3060fa;
          }

          @media (max-width: 1200px) {
            .slide-left-side {
              width: 100%;
            }
            .slide-mobile {
              display: none;
            }
            .slide-decorations-container {
              width: 298px;
            }
            .slide-root-class-name2 {
              flex: initial;
            }
          }
          @media (max-width: 991px) {
            .slide-left-side {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .slide-mobile {
              display: none;
            }
            .slide-decorations-container {
              width: 189px;
            }
          }
          @media (max-width: 767px) {
            .slide-slide {
              background-color: #000000;
            }
            .slide-max-width {
              flex-direction: column;
            }
            .slide-left-side {
              width: 100%;
              padding-right: 0px;
            }
            .slide-image {
              max-width: 700px;
            }
            .slide-mobile {
              display: flex;
            }
            .slide-text {
              align-self: flex-start;
            }
            .slide-container {
              display: none;
            }
            .slide-orange {
              background-color: #3060fa;
            }
          }
          @media (max-width: 479px) {
            .slide-mobile {
              display: flex;
            }
            .slide-text {
              align-self: flex-start;
            }
            .slide-go-left {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide-go-right {
              height: 75px;
              max-width: 75px;
              max-height: 75px;
            }
            .slide-dots {
              width: 60px;
              height: 60px;
            }
            .slide-light-green {
              width: 36px;
              height: 36px;
            }
            .slide-orange {
              width: 75px;
              height: 75px;
            }
          }
        `}
      </style>
    </>
  )
}

Slide.defaultProps = {
  image_alt: 'image',
  heading1: 'Hyperbaric Selection',
  text1:
    'The hyperbaric chamber powder coating process takes 20-30 business days.',
  image_src: '/playground_assets/group%201hyperbaric%204%20life-700w.png',
  text11:
    'The hyperbaric chamber powder coating process takes 20-30 business days.',
  rootClassName: '',
  heading2: 'Powder Coating Process',
}

Slide.propTypes = {
  image_alt: PropTypes.string,
  heading1: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text11: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
}

export default Slide
