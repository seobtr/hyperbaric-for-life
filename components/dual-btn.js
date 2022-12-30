import React from 'react'

import PropTypes from 'prop-types'

const DualBtn = (props) => {
  return (
    <>
      <div className={`dual-btn-container ${props.rootClassName} `}>
        <a
          href="mailto:hbot4yourlife@gmail.com?subject=Price Request"
          className="dual-btn-button button"
        >
          <span className="dual-btn-text">{props.text}</span>
        </a>
        <a
          href="mailto:hbot4life@gmail.com?subject=Dealer Request"
          className="dual-btn-button1 button"
        >
          <span className="dual-btn-text1">{props.text1}</span>
        </a>
      </div>
      <style jsx>
        {`
          .dual-btn-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }

          .dual-btn-button {
            color: white;
            width: 100%;
            align-self: flex-start;
            background: linear-gradient(310deg, #2152ff, #21d4fd);
            text-align: center;
            transition: 0.3s;
            padding-top: 15px;
            border-color: #ffffff;
            padding-left: 25px;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 25px;
            padding-bottom: 15px;
            text-decoration: none;
          }
          .dual-btn-button:hover {
            cursor: pointer;
            transform: scale(1.02);
            background: linear-gradient(155deg, #2152ff, #21d4fd);
          }
          .dual-btn-text {
            color: rgb(255, 255, 255);
          }
          .dual-btn-button1 {
            color: #000000;
            width: 100%;
            align-self: flex-start;
            text-align: center;
            transition: 0.3s;
            padding-top: 15px;
            border-color: #060000;
            padding-left: 25px;
            border-radius: 10px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-right: 25px;
            padding-bottom: 15px;
            text-decoration: none;
          }
          .dual-btn-button1:hover {
            cursor: pointer;
            transform: scale(1.02);
            background: linear-gradient(155deg, #2152ff, #21d4fd);
          }
          .dual-btn-text1 {
            color: rgb(0, 0, 0);
          }
          .dual-btn-root-class-name {
            width: auto;
            align-self: center;
          }

          .dual-btn-root-class-name2 {
            width: 50%;
            align-self: center;
          }
          .dual-btn-root-class-name3 {
            display: none;
          }

          @media (max-width: 1200px) {
            .dual-btn-root-class-name3 {
              display: none;
            }
          }
          @media (max-width: 991px) {
            .dual-btn-container {
              justify-content: center;
            }
            .dual-btn-button {
              align-self: center;
            }
            .dual-btn-button1 {
              align-self: center;
            }
            .dual-btn-root-class-name3 {
              width: auto;
              display: flex;
            }
            .dual-btn-root-class-name4 {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .dual-btn-container {
              height: auto;
              align-self: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .dual-btn-button1 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .dual-btn-root-class-name3 {
              width: auto;
              display: flex;
            }
            .dual-btn-root-class-name4 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .dual-btn-container {
              justify-content: center;
            }
            .dual-btn-button {
              align-self: flex-start;
            }
            .dual-btn-text {
              text-align: center;
            }
            .dual-btn-button1 {
              align-self: flex-start;
            }
            .dual-btn-text1 {
              text-align: center;
            }
            .dual-btn-root-class-name2 {
              width: auto;
              align-self: center;
            }
            .dual-btn-root-class-name3 {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

DualBtn.defaultProps = {
  rootClassName: '',
  text1: 'Find Distributor',
  text: 'Request a Price',
}

DualBtn.propTypes = {
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default DualBtn
