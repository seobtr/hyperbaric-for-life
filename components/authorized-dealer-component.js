import React from 'react'

import PropTypes from 'prop-types'

const AuthorizedDealerComponent = (props) => {
  return (
    <>
      <div className="authorized-dealer-component-authorized-dealer">
        <div className="authorized-dealer-component-container">
          <h2 className="authorized-dealer-component-text">
            <span>
              Hyperbaric for Life
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Authorized Dealers</span>
          </h2>
        </div>
        <div className="authorized-dealer-component-separator"></div>
        <div className="authorized-dealer-component-container1">
          <div className="authorized-dealer-component-feature-card">
            <li className="list-item">
              <span className="authorized-dealer-component-text04">
                {props.text1}
              </span>
            </li>
          </div>
          <div className="authorized-dealer-component-feature-card1">
            <li className="list-item">
              <span className="authorized-dealer-component-text05">
                <span>OxyHealth</span>
                <br></br>
              </span>
            </li>
          </div>
          <div className="authorized-dealer-component-feature-card2">
            <li className="list-item">
              <span className="authorized-dealer-component-text08">
                <span>Telomere</span>
                <br></br>
              </span>
            </li>
          </div>
        </div>
        <h2 className="authorized-dealer-component-text11">
          <span>Get Started on Your Very Own Hyperbaric Today!</span>
          <br></br>
        </h2>
        <a
          href="mailto:hbot4life@gmail.com?subject=Dealer Request"
          className="authorized-dealer-component-button button"
        >
          <span className="authorized-dealer-component-text14">
            {props.text}
          </span>
        </a>
      </div>
      <style jsx>
        {`
          .authorized-dealer-component-authorized-dealer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            z-index: 1;
            position: relative;
            align-self: center;
            box-shadow: 0 8px 26px -4px hsla(0, 0%, 8%, 0.15),
              0 8px 9px -5px hsla(0, 0%, 8%, 0.06) !important;
            margin-top: 0px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius1);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            backdrop-filter: saturate(200%) blur(30px);
            background-color: hsla(0, 0%, 100%, 0.8);
          }
          .authorized-dealer-component-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .authorized-dealer-component-text {
            font-size: 3rem;
            align-self: center;
            background-image: linear-gradient(
              310deg,
              rgb(119, 188, 255),
              rgb(33, 105, 254)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .authorized-dealer-component-separator {
            width: 100px;
            height: 2px;
            background-color: #595959;
          }
          .authorized-dealer-component-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .authorized-dealer-component-feature-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .authorized-dealer-component-text04 {
            font-size: 24px;
          }
          .authorized-dealer-component-feature-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .authorized-dealer-component-text05 {
            font-size: 24px;
          }
          .authorized-dealer-component-feature-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .authorized-dealer-component-text08 {
            font-size: 24px;
          }
          .authorized-dealer-component-text11 {
            color: var(--dl-color-secondary-700);
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
          }
          .authorized-dealer-component-button {
            color: #000000;
            width: auto;
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            text-align: center;
            transition: 0.3s;
            padding-top: 15px;
            border-color: #060000;
            padding-left: 25px;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-unit);
            padding-right: 25px;
            padding-bottom: 15px;
            text-decoration: none;
          }
          .authorized-dealer-component-button:hover {
            cursor: pointer;
            transform: scale(1.02);
            background: linear-gradient(155deg, #2152ff, #21d4fd);
          }
          .authorized-dealer-component-text14 {
            color: rgb(0, 0, 0);
          }
          @media (max-width: 1200px) {
            .authorized-dealer-component-authorized-dealer {
              width: auto;
              height: auto;
              align-self: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .authorized-dealer-component-text11 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 991px) {
            .authorized-dealer-component-text {
              align-self: center;
            }
            .authorized-dealer-component-container1 {
              flex-direction: column;
            }
            .authorized-dealer-component-text11 {
              color: var(--dl-color-secondary-700);
              text-align: center;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .authorized-dealer-component-button {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .authorized-dealer-component-container1 {
              flex-direction: column;
            }
            .authorized-dealer-component-feature-card {
              justify-content: center;
            }
            .authorized-dealer-component-feature-card1 {
              justify-content: center;
            }
            .authorized-dealer-component-feature-card2 {
              justify-content: center;
            }
            .authorized-dealer-component-button {
              margin-bottom: var(--dl-space-space-halfunit);
            }
          }
          @media (max-width: 479px) {
            .authorized-dealer-component-authorized-dealer {
              width: 95%;
              padding: var(--dl-space-space-twounits);
              align-items: center;
              background-color: hsla(0, 0%, 100%, 0.8);
            }
            .authorized-dealer-component-text {
              width: auto;
              font-size: 2rem;
              align-self: center;
              text-align: left;
              margin-left: 0px;
            }
            .authorized-dealer-component-separator {
              align-self: flex-start;
            }
            .authorized-dealer-component-text04 {
              font-size: 20px;
            }
            .authorized-dealer-component-text05 {
              font-size: 20px;
            }
            .authorized-dealer-component-text08 {
              font-size: 20px;
            }
            .authorized-dealer-component-text11 {
              color: var(--dl-color-secondary-700);
              align-self: flex-start;
              text-align: left;
            }
            .authorized-dealer-component-button {
              align-self: flex-start;
            }
            .authorized-dealer-component-text14 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

AuthorizedDealerComponent.defaultProps = {
  text1: 'Oxygen Under Pressure Hyperbarics  - DBA RXo2',
  text: 'Request a Dealer',
}

AuthorizedDealerComponent.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default AuthorizedDealerComponent
