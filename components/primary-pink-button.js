import React from 'react'

import PropTypes from 'prop-types'

const PrimaryPinkButton = (props) => {
  return (
    <>
      <div className="primary-pink-button-container">
        <button className="primary-pink-button-button button ButtonSmall">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .primary-pink-button-container {
            display: flex;
            position: relative;
          }
          .primary-pink-button-button {
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
          .primary-pink-button-button:hover {
            cursor: pointer;
            transform: scale(1.02);
          }
        `}
      </style>
    </>
  )
}

PrimaryPinkButton.defaultProps = {
  button: 'Button',
}

PrimaryPinkButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton
