import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButton from './secondary-button'

const ContactUs = (props) => {
  return (
    <>
      <div className={`contact-us-container ${props.rootClassName} `}>
        <h1 className="contact-us-text">{props.heading2}</h1>
        <p className="contact-us-text1 Lead">
          <span className="contact-us-text2">
            The time is now for it be okay to be great. Subscribe now and get
            notified when it&apos;s launched!
          </span>
        </p>
        <div className="contact-us-container1">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="contact-us-textinput Small input"
          />
          <SecondaryButton button="Subscribe"></SecondaryButton>
        </div>
      </div>
      <style jsx>
        {`
          .contact-us-container {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            z-index: 2;
            position: relative;
            align-self: flex-end;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            margin-left: var(--dl-space-space-tripleunit);
            padding-top: var(--dl-space-space-tripleunit);
            margin-right: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
          }
          .contact-us-text {
            font-size: 3rem;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .contact-us-text1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .contact-us-text2 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .contact-us-container1 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact-us-textinput {
            width: 100%;
            transition: 0.3s;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-secondary-100);
            margin-right: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-triplequarterunit);
            border-radius: var(--dl-radius-radius-radius5);
            padding-right: var(--dl-space-space-triplequarterunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .contact-us-textinput:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          @media (max-width: 991px) {
            .contact-us-text {
              align-self: flex-start;
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .contact-us-text {
              text-align: left;
              margin-left: var(--dl-space-space-unit);
            }
            .contact-us-container1 {
              flex-direction: column;
            }
            .contact-us-textinput {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

ContactUs.defaultProps = {
  textinput_placeholder: 'Email here',
  rootClassName: '',
  heading2: 'Contact Us',
}

ContactUs.propTypes = {
  textinput_placeholder: PropTypes.string,
  rootClassName: PropTypes.string,
  heading2: PropTypes.string,
}

export default ContactUs
