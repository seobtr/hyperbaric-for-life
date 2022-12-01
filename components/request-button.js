import React from 'react'

import PropTypes from 'prop-types'

const RequestButton = (props) => {
  return (
    <>
      <div className={`request-button-container ${props.rootClassName} `}>
        <a
          href="tel:+1 (602) 615-4636"
          className="request-button-button button"
        >
          <span className="request-button-text">{props.text}</span>
        </a>
      </div>
      <style jsx>
        {`
          .request-button-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-start;
          }

          .request-button-button {
            color: white;
            align-self: flex-start;
            background: linear-gradient(310deg, #2152ff, #21d4fd);
            text-align: center;
            transition: 0.3s;
            padding-top: 15px;
            border-color: #ffffff;
            padding-left: 25px;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 25px;
            padding-bottom: 15px;
            text-decoration: none;
          }
          .request-button-button:hover {
            cursor: pointer;
            transform: scale(1.02);
            background: linear-gradient(155deg, #2152ff, #21d4fd);
          }
          .request-button-text {
            color: rgb(255, 255, 255);
          }

          @media (max-width: 991px) {
            .request-button-button {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .request-button-container {
              justify-content: flex-start;
            }
            .request-button-root-class-name {
              margin-left: var(--dl-space-space-unit);
            }
            .request-button-root-class-name1 {
              margin-left: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .request-button-container {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .request-button-button {
              align-self: flex-start;
            }
            .request-button-text {
              text-align: center;
            }
            .request-button-root-class-name {
              margin-left: 0px;
            }
            .request-button-root-class-name1 {
              margin-left: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

RequestButton.defaultProps = {
  rootClassName: '',
  text: 'Request a Consultation',
}

RequestButton.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default RequestButton
