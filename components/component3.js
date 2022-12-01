import React from 'react'

import PropTypes from 'prop-types'

import SecondaryButton1 from './secondary-button1'

const Component3 = (props) => {
  return (
    <>
      <div className="component3-container">
        <h1 className="component3-text">{props.heading}</h1>
        <h1 className="component3-text1 HeadingOne">{props.heading1}</h1>
        <p className="component3-text2 Lead">
          <span className="component3-text3">
            The time is now for it be okay to be great. Subscribe now and get
            notified when it&apos;s launched!
          </span>
        </p>
        <div className="component3-container1">
          <input
            type="text"
            placeholder={props.textinput_placeholder}
            className="component3-textinput Small input"
          />
          <SecondaryButton1 button="Subscribe"></SecondaryButton1>
        </div>
      </div>
      <style jsx>
        {`
          .component3-container {
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
          .component3-text {
            color: var(--dl-color-secondary-700);
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .component3-text1 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-halfunit);
            background-image: linear-gradient(310deg, #7928ca, #ff0080);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .component3-text2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .component3-text3 {
            color: rgb(103, 116, 142);
            display: inline;
            font-weight: 400;
            white-space: normal;
          }
          .component3-container1 {
            flex: 0 0 auto;
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .component3-textinput {
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
          .component3-textinput:focus {
            outline: 0;
            box-shadow: 0 0 0 2px #e9aede;
            border-color: var(--dl-color-pink-200);
          }
          @media (max-width: 479px) {
            .component3-container1 {
              flex-direction: column;
            }
            .component3-textinput {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Component3.defaultProps = {
  heading1: "Merkaba Mushroom's",
  heading: 'About',
  textinput_placeholder: 'Email here',
}

Component3.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
}

export default Component3
