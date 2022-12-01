import React from 'react'

import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <>
      <div className={`card-card ${props.rootClassName} `}>
        <div className="card-container">
          <h1 className="card-text">{props.heading2}</h1>
          <h2 className="card-text1">
            <span>Get Started on Your Custom Hyperbaric Today!</span>
            <br></br>
          </h2>
        </div>
        <div className="card-container1">
          <div className="card-container2">
            <a
              href="mailto:hbot4life@gmail.com?subject=Contact Us Page Inquiry"
              className="card-link"
            >
              <div className="card-container3">
                <button className="card-button ButtonSmall button">
                  {props.button}
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .card-card {
            flex: 0 0 auto;
            width: 60%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            z-index: 1;
            position: relative;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: var(--dl-space-space-tripleunit);
            align-items: flex-start;
            padding-top: 3rem;
            border-radius: var(--dl-radius-radius-radius1);
            flex-direction: column;
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .card-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .card-text {
            font-size: 3rem;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .card-text1 {
            color: var(--dl-color-secondary-700);
            text-align: left;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .card-container1 {
            display: flex;
            margin-top: var(--dl-space-space-unitandahalfunit);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .card-container2 {
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .card-link {
            display: contents;
          }
          .card-container3 {
            display: flex;
            position: relative;
            text-decoration: none;
          }
          .card-button {
            color: #ffffff;
            outline: none;
            background: linear-gradient(310deg, #7928ca, #ff0080);
            box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%),
              0 2px 4px -1px rgb(0 0 0 / 7%);
            transition: all 0.15s ease-in;
            padding-top: var(--dl-space-space-triplequarterunit);
            border-width: 0px;
            padding-left: var(--dl-space-space-unitandahalfunit);
            border-radius: 1.875rem;
            padding-right: var(--dl-space-space-unitandahalfunit);
            padding-bottom: var(--dl-space-space-triplequarterunit);
          }
          .card-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
          @media (max-width: 1200px) {
            .card-text1 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .card-button {
              margin-bottom: var(--dl-space-space-unitandahalfunit);
            }
          }
          @media (max-width: 991px) {
            .card-container {
              width: 70%;
              height: auto;
            }
            .card-text {
              align-self: flex-start;
              text-align: center;
            }
            .card-text1 {
              color: var(--dl-color-secondary-700);
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .card-text {
              text-align: left;
              margin-left: var(--dl-space-space-unit);
            }
            .card-text1 {
              color: var(--dl-color-secondary-700);
              align-self: center;
              text-align: center;
            }
            .card-container1 {
              align-items: center;
              flex-direction: column;
            }
            .card-container2 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Card.defaultProps = {
  heading2: 'Contact Us',
  button: 'Contact Us',
  rootClassName: '',
}

Card.propTypes = {
  heading2: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Card
