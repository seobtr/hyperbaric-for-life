import React from 'react'

import PropTypes from 'prop-types'

const Accordian = (props) => {
  return (
    <>
      <div className={`accordian-section ${props.rootClassName} `}>
        <div className="max-width">
          <div className="accordian-f-a-q">
            <div className="accordian-questions">
              <span className="accordian-text beforeHeading">
                {props.text1}
              </span>
              <h1 className="accordian-text01">
                <br></br>
                <span className="accordian-text03">Questions</span>
                <span>
                  Frequently Asked
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="accordian-text05"></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <div
                data-role="Accordion"
                className="accordian-question question"
              >
                <div data-type="accordion-header" className="accordian-trigger">
                  <span className="accordian-text07">{props.text2}</span>
                  <svg viewBox="0 0 1024 1024" className="accordian-icon">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content">
                  <span className="accordian-text08">{props.text3}</span>
                </div>
              </div>
              <div data-role="Accordion">
                <div
                  data-type="accordion-header"
                  className="accordian-trigger1"
                >
                  <span className="accordian-text09">{props.text4}</span>
                  <svg viewBox="0 0 1024 1024" className="accordian-icon2">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content">
                  <span className="accordian-text10">{props.text5}</span>
                </div>
              </div>
              <div data-role="Accordion">
                <div
                  data-type="accordion-header"
                  className="accordian-trigger2"
                >
                  <span className="accordian-text11">{props.text6}</span>
                  <svg viewBox="0 0 1024 1024" className="accordian-icon4">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content">
                  <span className="accordian-text12">{props.text7}</span>
                </div>
              </div>
              <div data-role="Accordion">
                <div
                  data-type="accordion-header"
                  className="accordian-trigger3"
                >
                  <span className="accordian-text13">{props.text8}</span>
                  <svg viewBox="0 0 1024 1024" className="accordian-icon6">
                    <path d="M810 554h-256v256h-84v-256h-256v-84h256v-256h84v256h256v84z"></path>
                  </svg>
                </div>
                <div data-type="accordion-content">
                  <span className="accordian-text14">{props.text9}</span>
                </div>
              </div>
            </div>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="accordian-image"
            />
          </div>
          <div className="accordian-banner">
            <span className="accordian-text15 beforeHeading">{props.text}</span>
            <h1 className="accordian-text16">
              <span>Push your finances to</span>
              <br></br>
              <span></span>
              <span></span>
              <span> the next level.</span>
            </h1>
            <span className="accordian-text22">
              <span>
                <span>
                  Amet minim mollit non deserunt ullamco est sit
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span>
                <span>
                  aliqua dolor do amet sint.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <div className="accordian-btns">
              <button className="accordian-button button">
                {props.button}
              </button>
              <button className="accordian-button1 button">
                {props.button1}
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .accordian-section {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            padding-top: 0px;
            flex-direction: column;
          }
          .accordian-f-a-q {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-eightunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .accordian-questions {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .accordian-text {
            color: var(--dl-color-scheme-green80);
            margin-bottom: var(--dl-space-space-unit);
          }
          .accordian-text01 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .accordian-text03 {
            color: var(--dl-color-scheme-orange100);
            font-family: Urbanist;
          }
          .accordian-text05 {
            font-size: 42px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
          }
          .accordian-question {
            flex-direction: column;
          }
          .accordian-trigger {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .accordian-text07 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .accordian-icon {
            width: 12px;
            height: 12px;
          }
          .accordian-text08 {
            margin-top: 8px;
          }
          .accordian-trigger1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .accordian-text09 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .accordian-icon2 {
            width: 12px;
            height: 12px;
          }
          .accordian-text10 {
            margin-top: 8px;
          }
          .accordian-trigger2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .accordian-text11 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .accordian-icon4 {
            width: 12px;
            height: 12px;
          }
          .accordian-text12 {
            margin-top: 8px;
          }
          .accordian-trigger3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .accordian-text13 {
            font-size: 20px;
            font-style: normal;
            font-family: Urbanist;
            font-weight: 600;
            line-height: 1.5;
          }
          .accordian-icon6 {
            width: 12px;
            height: 12px;
          }
          .accordian-text14 {
            margin-top: 8px;
          }
          .accordian-image {
            width: 50%;
            object-fit: cover;
            margin-right: -200px;
          }
          .accordian-banner {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: 48px;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .accordian-text15 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .accordian-text16 {
            font-size: 42px;
            font-style: normal;
            text-align: center;
            font-family: Urbanist;
            font-weight: 700;
            line-height: 1.25;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .accordian-text22 {
            color: rgba(255, 255, 255, 0.6);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .accordian-btns {
            flex: 0 0 auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .accordian-button {
            font-size: 16px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            line-height: 0.9;
            padding-top: 12px;
            margin-right: var(--dl-space-space-unit);
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
            background-color: transparent;
          }
          .accordian-button1 {
            display: flex;
            font-size: 18px;
            background: linear-gradient(90deg, #c7ff9b 0%, #fff6a7 100%);
            font-style: normal;
            transition: 0.3s;
            align-items: center;
            font-weight: 700;
            line-height: 0.9;
            padding-top: 12px;
            border-color: transparent;
            margin-right: 0px;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 12px;
          }
          @media (max-width: 991px) {
            .accordian-questions {
              width: 60%;
            }
            .accordian-image {
              margin-right: -100px;
            }
          }
          @media (max-width: 767px) {
            .accordian-f-a-q {
              margin-bottom: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .accordian-questions {
              width: 100%;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .accordian-image {
              width: 100%;
              margin-right: 0px;
            }
            .accordian-banner {
              padding: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .accordian-banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Accordian.defaultProps = {
  button: 'See all plans',
  text7:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text6: 'Is this a globally available bank?',
  text8: 'Do you have an iOS or Android app?',
  text9:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text5:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text1: 'faq',
  image_src: '/playground_assets/split%20chamber%20turn%20key%20ii-1200w.png',
  text3:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  text2: 'Is this a Free or Paid service?',
  image_alt: 'image',
  button1: 'Get started',
  text: 'get started',
  rootClassName: '',
  text4: 'Do you operate in United Stated?',
}

Accordian.propTypes = {
  button: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  image_src: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  image_alt: PropTypes.string,
  button1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default Accordian
